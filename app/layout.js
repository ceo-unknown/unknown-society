import { Poppins } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import { Container } from "react-bootstrap";
import TopNav from "./_components/Navbars/TopNav/TopNav";
import BottomNav from "./_components/Navbars/BottomNav/BottomNav";
import MobileNav from "./_components/Navbars/MobileNav/MobileNav";

const font = Poppins({ subsets: ["latin"], weight: "300" });
export const metadata = {
  title: "UNKNOWN SOCIETY",
  description: "Social Media webapp",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${font.className} bg-black text-light px-0`}>
        <Container className={`px-0 main_container`}>
          <TopNav />
          <MobileNav />
          {children}
          <BottomNav />
        </Container>
      </body>
    </html>
  );
}
