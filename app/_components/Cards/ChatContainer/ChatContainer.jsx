import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardText,
  Container,
  Stack,
} from "react-bootstrap";
import ChatContainerProfile from "./ChatContainerProfile";
import styles from "./ChatContainer.module.css";
const ChatContainer = ({ user_dp, user_name, msg }) => {
  return (
    <>
      <Container className={`${styles.chatContainer} overflow-hidden px-0`}>
        <Card className={`text-bg-dark h-100`}>
          <CardHeader>
            <ChatContainerProfile user_dp={user_dp} user_name={user_name} />
          </CardHeader>
          <CardBody className={`${styles.chatCardContainer}`}>
            <Container className="h-100 px-0">
              {msg &&
                msg.map((msgs) => (
                  <>
                    {/* incoming messages */}
                    <Stack
                      direction="horizontal"
                      className="justify-content-start"
                    >
                      <div
                        className={`bg-primary px-2 rounded mb-3 ${styles.senderText}`}
                      >
                        <CardText className={`text-wrap `}>{msgs}</CardText>
                      </div>
                    </Stack>
                  </>
                ))}
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
