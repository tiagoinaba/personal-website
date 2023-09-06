import "./globals.scss";
import { Inter, Montserrat } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tiago Inaba",
  description: "This is Tiago Inaba's professional developer website.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
