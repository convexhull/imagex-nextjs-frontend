import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// Components
import Alert from "@/components/UI/Alert/Alert";
// Providers
import AuthProvider from "@/context/AuthContext";
import QueryProvider from "./providers/QueryProvider";
import AlertProvider from "./providers/AlertProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ImageX",
  description: "Image Aggregator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <QueryProvider>
          <AuthProvider>
            <AlertProvider>
              <Alert />
              {children}
            </AlertProvider>
          </AuthProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
