import type { Metadata } from "next";
import "./globals.scss";

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
      <body className="bg-background">
        {children}
      </body>
    </html>
  );
}
