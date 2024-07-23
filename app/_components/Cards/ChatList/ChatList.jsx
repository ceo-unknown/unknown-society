import { Card, CardBody, CardHeader } from "react-bootstrap";
import ChatListProfile from "./ChatListProfile";
import styles from "./chatList.module.css";
import ChatData from "./chatData";

const ChatList = () => {
  return (
    <>
      <Card className={`text-bg-dark`}>
        <CardHeader>Chats </CardHeader>
        <CardBody className={` ${styles.chatCardContainer} mb-3`}>
          {ChatData.map((chat) => (
            <div key={chat._id}>
              <ChatListProfile
                name={chat.userName}
                dp={chat.userDp}
                msg={chat.messages[0]}
                msgsLength={chat.messages.length}
              />
            </div>
          ))}
        </CardBody>
      </Card>
    </>
  );
};

export default ChatList;
