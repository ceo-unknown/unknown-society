import styles from "./profileCard.module.css";
import { CardImg, CardText, Stack } from "react-bootstrap";

const ProfileHeader = () => {
  return (
    <>
      <Stack direction="horizontal" gap={2} className="align-items-start">
        <CardImg
          className={`${styles.profileCardImage} card-img shadow`}
          src="https://images.unsplash.com/photo-1529155573343-a9ff22adf89f?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D "
        />
        <CardText>user name</CardText>
      </Stack>
    </>
  );
};

export default ProfileHeader;
