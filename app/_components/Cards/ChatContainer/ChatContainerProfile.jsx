import { Button, CardImg, CardSubtitle, Stack } from "react-bootstrap";

import styles from "./ChatContainer.module.css";

const ChatContainerProfile = ({ user_dp, user_name }) => {
  return (
    <>
      <Stack direction="horizontal" className={`justify-content-between`}>
        <CardImg
          src={
            user_dp
              ? user_dp
              : "https://www.shutterstock.com/image-vector/default-avatar-profile-icon-social-600nw-1677509740.jpg"
          }
          className={`${styles.chatContainerImg} rounded-circle`}
          alt="user_dp"
        />
        <CardSubtitle>{user_name}</CardSubtitle>
        <Button size="sm" className=" " variant="secondary">
          ...
        </Button>
      </Stack>
    </>
  );
};

export default ChatContainerProfile;
