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
import Login from "../login/page";
import { myTheme } from "@/app/_components/Themes/myTheme";
import styles from "../authStyle.module.css";

const SignIn = () => {
  return (
    <>
      <Stack
        direction="horizontal"
        gap={2}
        className="justify-content-center align-items-center my-2"
      >
        <Card
          className=" text-light w-100"
          style={{ background: myTheme.rgbaPrimary }}
        >
          <CardHeader>sign-in</CardHeader>
          <CardBody>
            <div className="mb-3">
              <Form>
                {/* user id input */}
                <div className="mb-3">
                  <FormLabel className="mb-3">@user id</FormLabel>
                  <FormControl type="text" placeholder="enter your user_id" />
                </div>
                {/* password input */}
                <div className="mb-3">
                  <FormLabel className="mb-3">password</FormLabel>
                  <FormControl
                    type="password"
                    placeholder="enter your password"
                  />
                </div>
                <Button variant="primary" className="bg-primary bg-opacity-50">
                  sign in
                </Button>
              </Form>
            </div>
          </CardBody>
        </Card>
        {/* login */}
        <div className={`w-100`}>
          <Login />
          {/* <div>Login</div> */}
        </div>
      </Stack>
    </>
  );
};

export default SignIn;
