import styles from "./page.module.css";
import { Container } from "react-bootstrap";
import SideNav from "./_components/SideNav/SideNav";

export default function Home() {
  return (
    <Container className={`${styles.mainContainer}`}>
      <SideNav />
    </Container>
  );
}
