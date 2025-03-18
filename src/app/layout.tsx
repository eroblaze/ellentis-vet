import type { Metadata } from "next";
import { Inter, Work_Sans } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ellentis Vet",
  description: "Ellentis"
};

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"]
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap"
});

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${workSans.variable} font-inter text-my-white-950 min-h-screen antialiased`}>
        {children}
      </body>
    </html>
  );
}
