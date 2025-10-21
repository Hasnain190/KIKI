// @ts-ignore: missing type declarations for CSS side-effect import
import "../src/styles/globals.css";
import React from "react";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";

export const metadata = {
  title: "Doctor Kiki",
  description: "An ordinary Doctor❤️ with exquisite dreams  a digital creator.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 container mx-auto px-6 py-12">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
