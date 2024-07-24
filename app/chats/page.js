import { Container, Row, Col } from "react-bootstrap";
import ChatList from "../_components/Cards/ChatList/ChatList";
import ChatContainer from "../_components/Cards/ChatContainer/ChatContainer";

const Chats = () => {
  return (
    <>
      <Container>
        <Row className={``}>
          <Col xs={12} lg={5} className={`px-0 `}>
            <ChatList />
          </Col>
          <Col xs={0} lg={7} className={`d-none d-lg-block`}>
            <ChatContainer />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Chats;
