import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Wy Sommer - Frontend Developer",
  description: "i'm Wy Sommer, a software engineer from New York, and this is my portfolio website.",
  keywords: ["Wy Sommer", "Frontend Developer", "Software Engineer", "New York", "Portfolio"],
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
    other: {
      rel: "icon",
      url: "/icon.png",
    },
    shortcut: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
