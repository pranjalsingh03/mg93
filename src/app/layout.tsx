import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pranjal Singh — Full Stack Developer & Forward Deployed Engineer",
  description: "Pranjal Singh — Full Stack Developer & Forward Deployed Engineer building web, mobile, AI systems, and bank-grade e-banking platforms from scratch.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
