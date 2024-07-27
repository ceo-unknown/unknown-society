import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProfileCard from "../Cards/ProfileCard/ProfileCard";
import ProfilePostGrid from "../Cards/ProfilePostCard/ProfilePostGrid";

const ProfileGrid = () => {
  return (
    <>
      <Container className={`px-0`}>
        <Row>
          <Col xs={12} md={5} lg={5}>
            <ProfileCard />
          </Col>
          <Col xs={12} md={7} lg={7} className="px-0">
            {/* all posts */}
            <ProfilePostGrid />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProfileGrid;
