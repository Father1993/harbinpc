import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "HarbinPC - Компьютерные комплектующие из Китая",
  description:
    "Интернет-магазин компьютерных комплектующих и сопутствующих товаров из Китая. Офисы в Харбине и Суньфэньхэ. Доставка по всей России.",
  keywords:
    "компьютерные комплектующие, компьютеры, Китай, Харбин, Суньфэньхэ, доставка, сборка ПК",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
