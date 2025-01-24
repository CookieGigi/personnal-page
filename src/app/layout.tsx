import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Guillaume Creusot",
  description: "Personnal page of Guillaume Creusot",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
