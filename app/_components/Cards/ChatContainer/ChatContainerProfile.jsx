import { Button, CardImg, CardSubtitle, Stack } from "react-bootstrap";

import styles from "./ChatContainer.module.css";

const ChatContainerProfile = () => {
  return (
    <>
      <Stack direction="horizontal" className={`justify-content-between`}>
        <CardImg
          src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSDTtNlSc5JEC598oH5C2liyeIWUcBHlUbI3ndGvgt9kI957YWo"
          className={`${styles.chatContainerImg} rounded-circle`}
          alt="user_dp"
        />
        <CardSubtitle>sunny</CardSubtitle>
        <Button size="sm" className=" " variant="secondary">
          ...
        </Button>
      </Stack>
    </>
  );
};

export default ChatContainerProfile;
