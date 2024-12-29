import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "../components/NavBar";
import ChatBot from "@/components/ChatBot";
import ScrollProvider from "@/components/ScrollProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fatima Nazeer",
  description: "Portfolio of Fatima Nazeer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-x-hidden`}>
        <ScrollProvider>
          <NavBar />
          {children}
        </ScrollProvider>
        <ChatBot />
      </body>
    </html>
  );
}
