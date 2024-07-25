import ChatContainer from "@/app/_components/Cards/ChatContainer/ChatContainer";
import ChatData from "@/app/_components/Cards/ChatList/chatData";
import MobileNav from "@/app/_components/Navbars/MobileNav/MobileNav";

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
      <MobileNav />
      <ChatContainer
        user_dp={chat.userDp}
        user_name={chat.userName}
        msg={chat.messages}
      />
    </>
  );
}
