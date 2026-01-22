import type { Metadata } from "next";
import "./globals.css";
import { JetBrains_Mono } from "next/font/google";
import Header from "../components/Main/Header";

const jetBrains = JetBrains_Mono({
  variable: "--JetBrains-Mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ecs1ple(Vavilov Artyom)",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <section className="w-screen sm:w-[1200px] flex flex-col mx-auto">
        <Header />
        <body className={`${jetBrains.className} antialiased`}>{children}</body>
      </section>
    </html>
  );
}
