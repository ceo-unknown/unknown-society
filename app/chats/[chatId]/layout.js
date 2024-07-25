import Chats from "../page";
import { Col, Row } from "react-bootstrap";

const ChatRoomLayout = ({ children }) => {
  return (
    <>
      <Row>
        <Col xs={12} lg={4} className={`h-100 d-flex flex-column`}>
          <div className="flex-grow-1"></div>
        </Col>
        <Col lg={8}>{children}</Col>
      </Row>
    </>
  );
};

export default ChatRoomLayout;
