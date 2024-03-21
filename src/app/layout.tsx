import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MainNavbar from "@/components/navbar/navbar";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ariel Eitner Next Portfolio",
  description: "Ariel Eitner Next Portfolio",
  applicationName: "Ariel Eitner Next Portfolio",
  creator: "Ariel Eitner",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Next.js",
    "React",
    "TypeScript",
    "Full-Stack",
    "Back-End",
    "Front-End",
  ],
  openGraph: {
    images: "/public/images/7.png",
    title: "Ariel Eitner Next Portfolio",
    description: "Ariel Eitner Next Portfolio",
    url: "https://portfolio-next-xi-nine.vercel.app/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={""}>
        <MainNavbar />
        {children}
      </body>
      <GoogleAnalytics gaId="G-7D5PXZ28B6" />
    </html>
  );
}
