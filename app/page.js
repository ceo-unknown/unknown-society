import styles from "./page.module.css";
import { Container, Row, Col } from "react-bootstrap";
import ChatList from "./_components/Cards/ChatList/ChatList";
import ChatContainer from "./_components/Cards/ChatContainer/ChatContainer";
import Chats from "./chats/page";

export default function Home() {
  return (
    <Container className={`${styles.mainContainer} `}>
      <Row className="">
        <Col className=" px-0" xs={12} lg={4}>
          <Chats />
        </Col>
      </Row>
    </Container>
  );
}
