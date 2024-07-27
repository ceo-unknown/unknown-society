import React from "react";
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
        className={`text-bg-secondary bg-opacity-50 ${styles.PostCardContainer}`}
      >
        <PostCardHeader />
        <CardBody>
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
