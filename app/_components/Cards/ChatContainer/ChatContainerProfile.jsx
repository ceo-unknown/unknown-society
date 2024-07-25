import { Button, CardImg, CardSubtitle, Stack } from "react-bootstrap";

import styles from "./ChatContainer.module.css";
import { BsArrowBarLeft, BsArrowLeft } from "react-icons/bs";
import Link from "next/link";

const ChatContainerProfile = ({ user_dp, user_name }) => {
  return (
    <>
      <Stack direction="horizontal" className={`justify-content-between`}>
        <Stack direction="horizontal">
          <Link href={"/"} className="nav-link">
            <BsArrowLeft className="mx-2" size={23} />
          </Link>
          <CardImg
            src={
              user_dp
                ? user_dp
                : "https://www.shutterstock.com/image-vector/default-avatar-profile-icon-social-600nw-1677509740.jpg"
            }
            className={`${styles.chatContainerImg} rounded-circle `}
            alt="user_dp"
          />
        </Stack>

        <CardSubtitle>{user_name}</CardSubtitle>
        <Button size="sm" className=" " variant="secondary">
          ...
        </Button>
      </Stack>
    </>
  );
};

export default ChatContainerProfile;
