import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardImg,
  CardSubtitle,
  Row,
  Col,
  Stack,
  Container,
} from "react-bootstrap";
import ChatList from "../_components/Cards/ChatList/ChatList";
import MobileNav from "../_components/Navbars/MobileNav/MobileNav";
import ChatBoxRoom from "./[chatId]/page";

const ChatProfile = () => {
  return (
    <>
      <Stack direction="horizontal" className="justify-content-between">
        <Stack direction="horizontal">
          <CardImg
            src="https://images.unsplash.com/photo-1721152839657-7536e39f5c60?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            style={{
              width: 60,
              height: 60,
              borderRadius: 50,
              objectFit: "cover",
            }}
          />
          <CardSubtitle className="mx-2">userName</CardSubtitle>
        </Stack>
        <Button
          variant="primary"
          size="sm"
          className="bg-primary bg-opacity-50 rounded-circle px-2 py-0 text-center"
        >
          1
        </Button>
      </Stack>
    </>
  );
};

const Chats = () => {
  return (
    <>
      {/* <MobileNav />
      <ChatList /> */}

      {/* new code */}
      <Container className="h-100 my-2">
        <Row>
          <Col xs={12} md={4} lg={4}>
            <Card className="text-bg-dark h-100">
              <CardHeader>Chats</CardHeader>
              <CardBody>
                <Stack gap={2}>
                  <ChatProfile />
                  <ChatProfile />
                  <ChatProfile />
                  <ChatProfile />
                  <ChatProfile />
                  <ChatProfile />
                  <ChatProfile />
                </Stack>
              </CardBody>
            </Card>
          </Col>
          <Col xs={12} md={8} lg={8}>
            <ChatBoxRoom />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Chats;
