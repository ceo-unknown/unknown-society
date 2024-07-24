import ChatContainer from "@/app/_components/Cards/ChatContainer/ChatContainer";
import ChatData from "@/app/_components/Cards/ChatList/chatData";
import { CardText } from "react-bootstrap";

export async function generateStaticParams() {
  const chatRoomId = ChatData.map((chat) => ({
    chatId: chat._id,
  }));
  return chatRoomId;
}

export default function ChatBoxRoom({ params }) {
  const id = params.chatId;
  const chat = ChatData.find((chatObj) => chatObj._id === id);
  return (
    <>
      <ChatContainer
        user_dp={chat.userDp}
        user_name={chat.userName}
        msg={chat.messages}
      />
    </>
  );
}
