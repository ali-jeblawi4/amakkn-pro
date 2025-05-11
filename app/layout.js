import { Tajawal } from "next/font/google";
import "./globals.css";

const tajawalSans = Tajawal({
  variable: "--font-tajawal-sans",
  // subsets: ["latin"],
  subsets: ["arabic", "latin"],
  weight: ["200", "300", "400", "500", "700", "800", "900"],
});

export const metadata = {
  title: "Amakkn Pro | أماكن برو",
  description:
    "Amakkn Pro is a service provided by the Amakkn platform  that allows you to create and manage your real estate website to market your business and showcase your licensed property listings. This service is authorized and regulated by the General Real Estate Authority.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`scroll-smooth ${tajawalSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
