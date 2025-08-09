import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ARC Group",
  description: "Especialistas em desenvolvimento de softwares personalizados.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="overflow-x-hidden">
      <body className="overflow-x-hidden bg-[#0C0F1A]">
        {children}
      </body>
    </html>
  );
}
