import MobileNav from "@/app/_components/Navbars/MobileNav/MobileNav";
import Chats from "../page";
import { Col, Row } from "react-bootstrap";

const ChatRoomLayout = ({ children }) => {
  return (
    <>
      <Row className="px-0">
        <Col lg={8} className="px-0">
          {children}
        </Col>
      </Row>
    </>
  );
};

export default ChatRoomLayout;
