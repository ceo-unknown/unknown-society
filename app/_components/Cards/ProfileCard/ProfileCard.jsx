import React from "react";
import { Card, CardBody, CardFooter } from "react-bootstrap";
import ProfileHeader from "./ProfileHeader";
import ProfileFooter from "./ProfileFooter";

const ProfileCard = () => {
  return (
    <>
      <Card className="text-bg-primary bg-opacity-50 border border-secondary sticky-top my-2">
        <CardBody>
          <ProfileHeader />
        </CardBody>
        <CardFooter>
          <ProfileFooter />
        </CardFooter>
      </Card>
    </>
  );
};

export default ProfileCard;
