import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { site } from "@/lib/data";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: site.title,
  description: site.description,
  keywords: site.keywords,
};

const themeScript = `
  (() => {
    try {
      const theme = localStorage.getItem("theme");
      const root = document.documentElement;

      if (theme === "light") {
        root.classList.remove("dark");
      } else {
        root.classList.add("dark");
      }
    } catch {
      document.documentElement.classList.add("dark");
    }
  })();
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />

        <main className="min-h-screen pt-16">{children}</main>

        <Footer />
      </body>
    </html>
  );
}