import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SYED | AutoCAD Designer",
  description:
    "Portfolio of SYED - Professional AutoCAD Designer specializing in PEB Structures, Equipment Parts, and 2D/3D Machinery Design",
  keywords: [
    "AutoCAD",
    "PEB Structures",
    "Equipment Parts",
    "3D Modeling",
    "Machinery Design",
    "Technical Drafting",
    "CAD Designer",
  ],
  authors: [{ name: "SYED" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground overflow-x-hidden`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
