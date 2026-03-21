import { Alegreya, DM_Sans } from "next/font/google";
import "./globals.css";

const display = Alegreya({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  title: "Zatn — Web, Apps, Content & Video",
  description:
    "Zatn offers web development, web apps, content creation, and video editing—clear delivery and communication for your business.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0a0a0a",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body className="min-h-dvh overflow-x-hidden bg-mono-950 font-sans text-mono-50 antialiased">
        {children}
      </body>
    </html>
  );
}
