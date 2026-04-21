import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { playfair } from "./font";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Kscarx - Video Editor Portfolio",
  description: "Showcasing the creative work of Kscarx, a talented video editor specializing in cinematic storytelling, dynamic edits, and engaging content creation. Explore a diverse portfolio of film, comedy, gaming, vlogs, and behind-the-scenes projects that highlight Kscarx's passion for visual storytelling and editing expertise.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} h-full bg-black text-white antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
