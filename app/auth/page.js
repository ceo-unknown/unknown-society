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
  Alert,
} from "react-bootstrap";

import styles from "./authStyle.module.css";
import { useRouter } from "next/navigation";

const AuthPage = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [formData, setFormData] = useState({
    user_id: "",
    password: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // for show & hide the message
  const [show, setShow] = useState(true);

  // route
  const router = useRouter();

  // change login form

  const handleFormSwitch = () => {
    setIsLoginForm(!isLoginForm);
  };

  // form submission

  const handleSubmit = async (e) => {
    e.preventDefault();

    // end points
    const loginEndPoint = "http://localhost:3000/api/login";
    const signUpEndPoint = "http://localhost:3000/api/sign-up";

    // data from useState
    const { user_id, password } = formData;

    try {
      const endPoint = isLoginForm ? loginEndPoint : signUpEndPoint;
      if (user_id.length === 0 && password.length === 0) {
        setErrorMessage("pleas enter the required fields");
      } else {
        const response = await fetch(endPoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ user_id, password }),
        });
        // if (!response.ok) {
        //   throw new Error(`Something went wrong `);
        // }
        const data = await response.json();
        setSuccessMessage(data.message || "Success!");
        router.push("/");
      }
    } catch (error) {
      setErrorMessage(error.message);
    }

    // if (isLoginForm) {
    //   // to login form
    //   try {
    //     const res = await fetch("http://localhost:3000/api/login", {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify({ user_id, password }),
    //     });
    //     const data = await res.json();
    //     console.log(`user logged. user :${data}`);
    //   } catch (error) {
    //     console.log(`Error while logging in ${error.message}`);
    //   }
    // } else {
    //   // sign up logic
    //   try {
    //     const res = await fetch("http://localhost:3000/api/sign-up", {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify({ user_id, password }),
    //     });
    //     const data = await response.json();
    //   } catch (error) {
    //     console.error(`Error while Sign up ${error.message}`);
    //   }
    // }
  };

  // getting values from input

  const handleFormInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Container
        className="my-2 px-0 d-flex flex-column justify-content-center align-content-stretch "
        style={{ height: "80vh" }}
      >
        <Row>
          <Col xs={12} md={6} lg={6} className="mx-auto ">
            <Card className={`${styles.loginContainer} text-light `}>
              <CardHeader>{isLoginForm ? "Login" : "Sign Up"}</CardHeader>
              <CardBody>
                {errorMessage && (
                  <Alert variant="danger" dismissible>
                    {errorMessage}
                  </Alert>
                )}
                {successMessage && (
                  <Alert variant="success">{successMessage}</Alert>
                )}
                <Form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <FormLabel>@user id</FormLabel>
                    <FormControl
                      type="text"
                      name="user_id"
                      placeholder="enter your user id"
                      value={formData.user_id}
                      onChange={handleFormInput}
                    />
                  </div>
                  <div className="mb-3">
                    <FormLabel>password</FormLabel>
                    <FormControl
                      type="password"
                      placeholder="enter your password"
                      name="password"
                      value={formData.password}
                      onChange={handleFormInput}
                    />
                  </div>
                  {/* Form fields for either login or sign in */}
                  <Stack direction="horizontal" gap={2}>
                    <Button variant="primary" type="submit">
                      {isLoginForm ? "Login" : "Sign Up"}
                    </Button>
                    <div className="small text-secondary bg-secondary bg-opacity-25 rounded-circle px-2 py-1">
                      or
                    </div>
                    {isLoginForm ? (
                      <>
                        <Button onClick={handleFormSwitch}>Sign In</Button>
                      </>
                    ) : (
                      <>
                        <Button onClick={handleFormSwitch}>Login</Button>
                      </>
                    )}
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
