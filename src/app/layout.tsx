import type { Metadata } from "next";
import { AOSInit } from "../components/AOSInit";
import "./globals.css";

export const metadata: Metadata = {
  title: "NS Events | Premium Event Planning & Management in Patna",
  description: "NS Event Patna specializes in crafting unforgettable luxury weddings, corporate events, and private parties with elegance and perfection.",
  icons: {
    icon: "/logo.jpg",
    apple: "/logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AOSInit />
        {children}
      </body>
    </html>
  );
}
