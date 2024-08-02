import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  CardText,
  CardSubtitle,
} from "react-bootstrap";

const page = async () => {
  const getUsers = async () => {
    const data = await fetch("http://localhost:3000/api/profile");
    const users = await data.json();
    return users;
  };
  const users = await getUsers();
  return (
    <>
      {/* <Container>
        <h4 className="p-3 text-bg-primary bg-opacity-50 my-2 rounded">
          Total Users : {users.length}
        </h4>
        <Row className="g-2">
          {users.map((user, index) => (
            <Col xs={6} md={4} lg={3} key={index}>
              <Card className="text-bg-dark my-2 h-100 ">
                <CardHeader>@{user.user_id}</CardHeader>
                <CardBody>
                  <CardText>password : {user.password}</CardText>
                  <CardSubtitle>id: {user._id}</CardSubtitle>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container> */}
    </>
  );
};

export default page;
