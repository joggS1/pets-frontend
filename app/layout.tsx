import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Дай Лапу — Усынови питомца или помоги волонтерам",
  description:
    "Найди своего верного друга или поддержи животных финансово! На сайте «Дай Лапу» волонтеры публикуют карточки питомцев, ищущих дом, и приютов, нуждающихся в помощи. Выбирайте животных по фото, истории и характеру, чтобы подарить им заботу, или сделайте пожертвование для лечения и содержания. Присоединяйтесь — ваша помощь меняет жизни!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased h-dvh w-dvw`}>{children}</body>
    </html>
  );
}
