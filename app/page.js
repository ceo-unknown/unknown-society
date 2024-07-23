import styles from "./page.module.css";
import { Container, Row, Col } from "react-bootstrap";
import SideNav from "./_components/Navbars/SideNav/SideNav";
import ChatList from "./_components/Cards/ChatList/ChatList";
import ChatContainer from "./_components/Cards/ChatContainer/ChatContainer";

export default function Home() {
  return (
    <Container className={`${styles.mainContainer} `}>
      <Row className="justify-content-around">
        <Col className={`d-none d-lg-block`} xs={0} lg={1}>
          <SideNav />
        </Col>
        <Col className=" px-0" xs={12} lg={5}>
          <ChatList />
        </Col>
        <Col className={`d-none d-lg-block h-100`} xs={0} lg={6}>
          <ChatContainer />
        </Col>
      </Row>
    </Container>
  );
}
