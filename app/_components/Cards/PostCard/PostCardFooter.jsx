import React from "react";
import { Stack } from "react-bootstrap";
import { BsChatLeft, BsHeart, BsShare, BsThreeDots } from "react-icons/bs";

const PostCardFooter = () => {
  return (
    <>
      <Stack
        direction="horizontal"
        gap={2}
        className="justify-content-between px-2"
      >
        <div>
          <BsHeart size={24} />
        </div>
        <div>
          <BsChatLeft size={24} />
        </div>
        <div>
          <BsShare size={24} />
        </div>
        <div>
          <BsThreeDots size={24} />
        </div>
      </Stack>
    </>
  );
};

export default PostCardFooter;
