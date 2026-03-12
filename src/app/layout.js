import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Manali Dixit English Classes | Online English Classes for Kids",
  description:
    "Online English speaking classes for kids with Manali Dixit. Improve spoken English, confidence and communication skills with personalized learning.",
  keywords: [
    "English classes for kids",
    "online English tutor for kids",
    "spoken English classes Lucknow",
    "English tutor Manali Dixit",
    "English speaking course for children",
  ],
  authors: [{ name: "Manali Dixit" }],
  openGraph: {
    title: "Manali Dixit English Classes",
    description:
      "Online English classes for kids to build confidence and communication skills.",
    type: "website",
    locale: "en_IN",
    url: "https://www.manalidixit.com",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
