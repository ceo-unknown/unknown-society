import React from "react";
import PostCardHeader from "./PostCardHeader";
import { Card, CardBody } from "react-bootstrap";

const PostCard = () => {
  return (
    <>
      <Card className={`text-bg-secondary bg-opacity-50`}>
        <PostCardHeader />
        <CardBody></CardBody>
      </Card>
    </>
  );
};

export default PostCard;
