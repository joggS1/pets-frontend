import "./style.css";


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
