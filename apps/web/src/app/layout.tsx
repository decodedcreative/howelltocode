import type { Metadata } from "next";
import "@repo/tokens/tokens.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "James Howell | Portfolio",
  description: "James Howell Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-sans text-text-primary bg-background-base">
        {children}
      </body>
    </html>
  );
}
