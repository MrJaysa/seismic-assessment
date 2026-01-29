import { Geist } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const satoshi = localFont({
  src: [
    {
      path: "../public/fonts/Satoshi-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Satoshi-Medium.otf",
      weight: "500",
      style: "medium",
    },
    {
      path: "../public/fonts/Satoshi-Bold.otf",
      weight: "700",
      style: "bold",
    },
    {
      path: "../public/fonts/Satoshi-Black.otf",
      weight: "900",
      style: "black",
    },
  ],
  variable: "--font-satoshi",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={"font-satoshi antialiased"}>{children}</body>
    </html>
  );
}
