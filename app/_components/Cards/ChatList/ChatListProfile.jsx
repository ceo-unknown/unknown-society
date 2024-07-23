import {
  CardImg,
  CardSubtitle,
  CardText,
  DropdownDivider,
  Stack,
} from "react-bootstrap";
import styles from "./chatList.module.css";
const ChatListProfile = ({ name, dp, msg, msgsLength }) => {
  return (
    <>
      <Stack direction="horizontal" className={`justify-content-between my-2`}>
        <CardImg
          src={
            dp
              ? dp
              : "https://www.shutterstock.com/image-vector/default-avatar-profile-icon-social-600nw-1677509740.jpg"
          }
          alt="chat_dp"
          className={` ${styles.chatListUserDp} me-2`}
        />
        <Stack className="justify-content-center">
          <CardSubtitle className={`${styles.chatListUserName} `}>
            {name}
          </CardSubtitle>
          <span className="small text-secondary">{msg}</span>
        </Stack>
        <div
          className={`${styles.chatListMsgNumber} d-flex align-items-center justify-content-center`}
        >
          <p className={`text-center mb-0 small`}>{msgsLength}</p>
        </div>
      </Stack>
      <hr className={`my-1 m`} />
    </>
  );
};

export default ChatListProfile;
