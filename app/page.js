import styles from "./page.module.css";
import { Container } from "react-bootstrap";
import Chats from "./chats/page";
export default function Home() {
  return (
    <Container className={`px-0 my-2`}>
      <Chats />
    </Container>
  );
}
