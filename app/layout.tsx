import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/layout/Header";



export const metadata: Metadata = {
  title: "Quick Photo Studio",
  description: "Professional photo services for all your identification needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
