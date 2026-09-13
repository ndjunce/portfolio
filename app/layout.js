import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata = {
  title: "Nicklaus Juncewski — Predictive Analytics Analyst",
  description:
    "Predictive Analytics Analyst. 4 years turning messy data into models, reports, and decisions. SQL, Python, Alteryx, predictive modeling.",
  metadataBase: new URL("https://ndjunce-portfolio.vercel.app"),
  openGraph: {
    title: "Nicklaus Juncewski — Predictive Analytics Analyst",
    description:
      "4 years turning messy data into models, reports, and decisions.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
