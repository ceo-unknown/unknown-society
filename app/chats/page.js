import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardImg,
  CardSubtitle,
  Stack,
} from "react-bootstrap";
import ChatList from "../_components/Cards/ChatList/ChatList";
import MobileNav from "../_components/Navbars/MobileNav/MobileNav";

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

      <Card
        className="text-bg-dark "
        style={{
          width: 300,
          height: "auto",
        }}
      >
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
    </>
  );
};

export default Chats;
