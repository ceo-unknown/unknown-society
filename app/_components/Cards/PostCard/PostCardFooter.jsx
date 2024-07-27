import React from "react";
import { Stack } from "react-bootstrap";
import { BsChatLeft, BsHeart, BsShare, BsThreeDots } from "react-icons/bs";

const PostCardFooter = () => {
  return (
    <>
      <Stack direction="horizontal" gap={2} className="justify-content-between">
        <div>
          <BsHeart />
        </div>
        <div>
          <BsChatLeft />
        </div>
        <div>
          <BsShare />
        </div>
        <div>
          <BsThreeDots />
        </div>
      </Stack>
    </>
  );
};

export default PostCardFooter;
