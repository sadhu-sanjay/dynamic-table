import ReactQueryProvider from "~/providers/tanstack-provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dynamic Table ",
  description: "A full on product table with search and pagination",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <ReactQueryProvider>{children}</ReactQueryProvider> */}
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
