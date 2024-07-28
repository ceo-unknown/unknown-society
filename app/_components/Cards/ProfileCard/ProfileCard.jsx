import React from "react";
import { Card, CardBody, CardFooter } from "react-bootstrap";
import ProfileHeader from "./ProfileHeader";
import ProfileFooter from "./ProfileFooter";
import { myTheme } from "../../Themes/myTheme";

const ProfileCard = () => {
  return (
    <>
      <Card
        className={`text-light border border-secondary sticky-top my-2`}
        style={{ backgroundColor: myTheme.primaryBgColor }}
      >
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
