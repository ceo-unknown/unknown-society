import {
  Button,
  CardHeader,
  CardImg,
  CardSubtitle,
  Stack,
} from "react-bootstrap";
import styles from "./postCard.module.css";
const PostCardHeader = () => {
  return (
    <>
      <CardHeader>
        <Stack direction="horizontal" className="justify-content-between">
          <CardImg
            src="https://images.unsplash.com/photo-1514161955277-4ea47eef2ff9?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            fill="true"
            className={`object-fit-cover  rounded-circle ${styles.cardHeaderImg}`}
          />
          <CardSubtitle>userName</CardSubtitle>
          <Button variant="primary" size="sm">
            more
          </Button>
        </Stack>
      </CardHeader>
    </>
  );
};

export default PostCardHeader;
