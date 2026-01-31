import { NextResponse } from "next/server";

const TELEGRAM_API = "https://api.telegram.org/bot";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, fullname, email, phone, telegram } = body;

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      return NextResponse.json(
        {
          error:
            "Сервер не настроен: добавьте TELEGRAM_BOT_TOKEN и TELEGRAM_CHAT_ID в .env.local",
        },
        { status: 500 }
      );
    }

    const text = [
      "📋 *Новая заявка с сайта*",
      "",
      `*Имя:* ${name ?? "—"}`,
      `*Фамилия:* ${fullname ?? "—"}`,
      `*Email:* ${email ?? "—"}`,
      `*Телефон:* ${phone ?? "—"}`,
      `*Telegram:* ${telegram ?? "—"}`,
    ].join("\n");

    const url = `${TELEGRAM_API}${botToken}/sendMessage`;
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: "Markdown",
      }),
    });

    const data = await response.json();

    if (!data.ok) {
      console.error("Telegram API error:", data);
      return NextResponse.json(
        { error: "Не удалось отправить сообщение в Telegram" },
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
