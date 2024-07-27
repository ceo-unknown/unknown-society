import React from "react";
import { Stack } from "react-bootstrap";
import {
  BsGraphUp,
  BsGrid1X2,
  BsPlusCircle,
  BsPostageFill,
} from "react-icons/bs";

const ProfileFooter = () => {
  return (
    <>
      <Stack direction="horizontal" gap={2} className="justify-content-between">
        <div>
          <BsGrid1X2 />
        </div>
        <div>
          <BsPlusCircle />
        </div>
        <div>
          <BsGraphUp />
        </div>
      </Stack>
    </>
  );
};

export default ProfileFooter;
