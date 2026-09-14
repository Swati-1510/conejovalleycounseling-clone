import { Plus_Jakarta_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Counseling in Newbury Park, CA | Conejo Valley Family Counseling",
  description: "Counseling for adults, couples, and children in Newbury & across CA.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${cormorant.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans text-gray-800 bg-[#F7F6F2]" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
