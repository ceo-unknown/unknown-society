import styles from "./page.module.css";
import { Container, Row, Col } from "react-bootstrap";
import SideNav from "./_components/Navbars/SideNav/SideNav";
import ChatList from "./_components/Cards/ChatList/ChatList";

export default function Home() {
  return (
    <Container className={`${styles.mainContainer}`}>
      <Row>
        <Col className={``} xs={0} lg={3}>
          <SideNav />
        </Col>
        <Col className="h-100" xs={12} lg={4}>
          <ChatList />
        </Col>
        <Col lg={5}></Col>
      </Row>
    </Container>
  );
}
