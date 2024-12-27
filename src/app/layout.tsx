import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "../components/NavBar";

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
        <NavBar />
        {children}
        {/* <script src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1" async></script>
    <df-messenger
      chat-icon="https:&#x2F;&#x2F;upload.wikimedia.org&#x2F;wikipedia&#x2F;commons&#x2F;0&#x2F;04&#x2F;ChatGPT_logo.svg"
      intent="WELCOME"
      chat-title="portfolio-chatbot"
      agent-id="06911b46-c7dc-49fc-8747-349a9c1bd289"
      language-code="en"
    ></df-messenger> */}
      </body>
    </html>
  );
}
