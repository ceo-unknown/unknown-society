"use client";

import { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Container,
  Form,
  FormControl,
  FormLabel,
  Row,
  Col,
  Stack,
} from "react-bootstrap";

import styles from "./authStyle.module.css";

const AuthPage = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);

  const handleFormSwitch = () => {
    setIsLoginForm(!isLoginForm);
  };

  return (
    <>
      <Container
        className="my-2 d-flex flex-column justify-content-center align-content-stretch "
        style={{ height: "80vh" }}
      >
        <Row>
          <Col xs={12} md={6} lg={6} className="mx-auto ">
            <Card className={`${styles.loginContainer} text-light `}>
              <CardHeader>{isLoginForm ? "Login" : "Sign In"}</CardHeader>
              <CardBody>
                <Form>
                  <div className="mb-3">
                    <FormLabel>@user id</FormLabel>
                    <FormControl type="text" placeholder="enter your user id" />
                  </div>
                  <div className="mb-3">
                    <FormLabel>password</FormLabel>
                    <FormControl
                      type="password"
                      placeholder="enter your password"
                    />
                  </div>
                  {/* Form fields for either login or sign in */}
                  <Stack direction="horizontal" gap={2}>
                    <Button variant="primary">
                      {isLoginForm ? "Login" : "Sign In"}
                    </Button>
                    <Button onClick={handleFormSwitch}>
                      Switch to {isLoginForm ? "Sign In" : "Login"}
                    </Button>
                  </Stack>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>

        {/* Other content */}
      </Container>
    </>
  );
};

export default AuthPage;
