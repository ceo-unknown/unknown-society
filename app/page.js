import styles from "./page.module.css";
import { Container, Row, Col } from "react-bootstrap";
import Chats from "./chats/page";
import ChatBox from "./_components/Cards/ChatBox/ChatBox";

export default function Home() {
  return (
    <Container className={`px-0 my-2`}>
      <Chats />
    </Container>
  );
}
