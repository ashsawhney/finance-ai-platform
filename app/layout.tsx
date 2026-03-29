import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Finance AI Personal",
  description: "Simple personal finance dashboard starter for Vercel deployment"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
