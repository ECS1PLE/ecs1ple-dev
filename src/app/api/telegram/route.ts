import { NextResponse } from "next/server";

const TELEGRAM_API = "https://api.telegram.org/bot/";

function escapeMarkdown(s: string | undefined): string {
  if (s == null || s === "") return "—";
  return String(s).replace(/([_*\[\]`])/g, "\\$1");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, fullname, email, phone, telegram } = body;

    const botToken = process.env.TELEGRAM_BOT_TOKEN?.trim();
    const chatId = process.env.TELEGRAM_CHAT_ID?.trim();

    if (!botToken || !chatId) {
      return NextResponse.json(
        {
          error:
            "Сервер не настроен: добавьте TELEGRAM_BOT_TOKEN и TELEGRAM_CHAT_ID в настройках Vercel (Environment Variables).",
        },
        { status: 500 }
      );
    }

    const baseUrl = `${TELEGRAM_API}${botToken}`;

    const meRes = await fetch(`${baseUrl}/getMe`);
    const meData = (await meRes.json()) as { ok: boolean; description?: string };
    if (!meData.ok) {
      return NextResponse.json(
        {
          error:
            "Неверный TELEGRAM_BOT_TOKEN. Зайдите в @BotFather → выберите бота → API Token, скопируйте токен заново и вставьте в переменные Vercel без пробелов. Затем сделайте Redeploy.",
          reason: meData.description ?? "Not Found",
        },
        { status: 502 }
      );
    }

    const text = [
      "📋 *Новая заявка с сайта*",
      "",
      `*Имя:* ${escapeMarkdown(name)}`,
      `*Фамилия:* ${escapeMarkdown(fullname)}`,
      `*Email:* ${escapeMarkdown(email)}`,
      `*Телефон:* ${escapeMarkdown(phone)}`,
      `*Telegram:* ${escapeMarkdown(telegram)}`,
    ].join("\n");

    const response = await fetch(`${baseUrl}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: "Markdown",
      }),
    });

    const data = (await response.json()) as {
      ok: boolean;
      description?: string;
      error_code?: number;
    };

    if (!data.ok) {
      const reason = data.description ?? "Неизвестная ошибка Telegram";
      console.error("Telegram API error:", data);
      const hint =
        reason === "Not Found"
          ? " Проверьте TELEGRAM_BOT_TOKEN: токен неверный или бот удалён. Получите новый токен у @BotFather."
          : "";
      return NextResponse.json(
        {
          error: "Не удалось отправить сообщение в Telegram" + hint,
          reason,
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (e) {
    console.error("Telegram send error:", e);
    return NextResponse.json(
      { error: "Ошибка при отправке заявки" },
      { status: 500 }
    );
  }
}
