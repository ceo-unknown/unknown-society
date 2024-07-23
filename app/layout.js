import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import { Container } from "react-bootstrap";
import TopNav from "./_components/Navbars/TopNav/TopNav";
import BottomNav from "./_components/Navbars/BottomNav/BottomNav";

export const metadata = {
  title: "UNKNOWN SOCIETY",
  description: "Social Media webapp",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-black text-light`}>
        <Container>
          <TopNav />
          {children}
          <BottomNav />
        </Container>
      </body>
    </html>
  );
}
