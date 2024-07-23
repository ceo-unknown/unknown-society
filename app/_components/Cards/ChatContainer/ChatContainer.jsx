import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardText,
  Container,
  Form,
  Stack,
} from "react-bootstrap";
import ChatContainerProfile from "./ChatContainerProfile";
import styles from "./ChatContainer.module.css";

import conversation from "./chattingData";
const ChatContainer = () => {
  return (
    <>
      <Container className={`${styles.chatContainer} overflow-hidden px-0`}>
        <Card className={`text-bg-dark h-100`}>
          <CardHeader>
            <ChatContainerProfile />
          </CardHeader>
          <CardBody className={`${styles.chatCardContainer}`}>
            <Container className="h-100 px-0">
              {conversation.map((chat) =>
                chat.sender == "Friend" ? (
                  <>
                    {/* incoming messages */}
                    <Stack
                      direction="horizontal"
                      className="justify-content-start"
                    >
                      <div
                        className={`bg-primary px-2 rounded mb-3 ${styles.senderText}`}
                      >
                        <CardText className={`text-wrap `}>
                          {chat.text}
                        </CardText>
                      </div>
                    </Stack>
                  </>
                ) : (
                  <>
                    {/* outing messages */}
                    <Stack
                      direction="horizontal"
                      className="justify-content-end"
                    >
                      <div
                        className={`bg-secondary px-2 rounded mb-3 ${styles.receiverText}`}
                      >
                        <CardText className="text-wrap ">{chat.text}</CardText>
                      </div>
                    </Stack>
                  </>
                )
              )}
            </Container>
            <div className="sticky-bottom ">
              <Stack direction="horizontal" gap={2}>
                <input
                  type="text"
                  className="form-control bg-black text-light"
                  placeholder="enter text"
                />
                <Button variant="primary">send</Button>
              </Stack>
            </div>
          </CardBody>
        </Card>
      </Container>
    </>
  );
};

export default ChatContainer;
