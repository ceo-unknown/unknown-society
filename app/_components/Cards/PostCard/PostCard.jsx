import PostCardHeader from "./PostCardHeader";
import { Card, CardBody, CardFooter } from "react-bootstrap";
import PostCardFooter from "./PostCardFooter";
import PostCardImage from "./PostCardImage";

// styles
import styles from "./postCard.module.css";

const PostCard = () => {
  return (
    <>
      <Card
        className={`text-bg-secondary bg-opacity-50 ${styles.postCardContainer} mx-auto d-block my-2`}
      >
        <PostCardHeader />
        <CardBody className="px-0">
          <PostCardImage />
        </CardBody>
        <CardFooter>
          <PostCardFooter />
        </CardFooter>
      </Card>
    </>
  );
};

export default PostCard;
