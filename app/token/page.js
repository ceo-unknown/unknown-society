"use client";
import {
  Button,
  Card,
  CardBody,
  Container,
  Form,
  FormControl,
  FormLabel,
  FormSelect,
  Image,
  Stack,
} from "react-bootstrap";
import { BsClock, BsEye, BsPerson } from "react-icons/bs";

import tokenIcon from "../../public/token-icon-1.png";

import { myTheme } from "../_components/Themes/myTheme";
import { useState } from "react";

const page = () => {
  const [formData, setFormData] = useState({
    user_id: "",
    password: "",
    tte: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  // const createToken = () => {};

  return (
    <>
      <Container
        className={`d-flex  justify-content-center align-items-center`}
        style={{ height: "90vh" }}
      >
        <Card className="my-3 text-bg-dark">
          <CardBody>
            <Stack gap={2} direction="vertical">
              <Image
                src={tokenIcon}
                style={{
                  objectFit: "cover",
                }}
                className="rounded mx-auto my-3 border-0"
              />
              <Form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <FormLabel>
                    <BsPerson size={21} />
                    user_id
                  </FormLabel>
                  <FormControl
                    placeholder="user_id"
                    name="user_id"
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <FormLabel>
                    <BsEye size={21} /> password
                  </FormLabel>
                  <FormControl
                    placeholder="enter password"
                    name="password"
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <FormLabel>
                    <BsClock size={21} /> token expire
                  </FormLabel>
                  <FormSelect
                    aria-label="Default select example"
                    onChange={handleChange}
                    name="tte"
                  >
                    <option>time to token expire</option>
                    <option value="1">6hrs</option>
                    <option value="2">12hrs</option>
                    <option value="3">24hrs</option>
                  </FormSelect>
                </div>
                <Button
                  type="submit"
                  size="lg"
                  // onClick={createToken}
                  style={{ background: myTheme.rgbaPrimary }}
                  className="border-0"
                >
                  Take a Token
                </Button>
              </Form>
            </Stack>
          </CardBody>
        </Card>
      </Container>
    </>
  );
};

export default page;
