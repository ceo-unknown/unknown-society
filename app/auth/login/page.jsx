"use client";

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Form,
  FormControl,
  FormLabel,
  Stack,
} from "react-bootstrap";

import styles from "../authStyle.module.css";
import SignIn from "../sign-up/page";
const Login = () => {
  return (
    <>
      <Stack direction="horizontal" gap={2}>
        <Card className={`${styles.loginContainer} text-light w-100`}>
          <CardHeader>Login</CardHeader>
          <CardBody>
            <div className="mb-3">
              <Form>
                <div className="mb-3">
                  <FormLabel className="mb-3">@user id</FormLabel>
                  <FormControl type="text" placeholder="enter your user id" />
                </div>
                <div className="mb-3">
                  <FormLabel className="mb-3">password</FormLabel>
                  <FormControl
                    type="password"
                    placeholder="enter your password"
                  />
                </div>
                <Button variant="primary">Login</Button>
              </Form>
            </div>
          </CardBody>
        </Card>
        <SignIn />
      </Stack>
    </>
  );
};

export default Login;
