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

import { myTheme } from "../_components/Themes/myTheme";
const page = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    user_id: "",
    password: "",
    tte: "",
  });
  const [isLoading, setLoading] = useState(false);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(formData);
    if (formData.user_id.length === 0) {
      // && formData.password.length
      alert("enter all  felids");
      setLoading(false);
    }
    if (formData.password.length === 0) {
      alert("enter all  felids");
      setLoading(false);
    }
    if (formData.user_id && formData.password) {
      router.push("/");
    }
  };
  return (
    <>
      <Container
        className={`d-flex  justify-content-center align-items-center`}
        style={{ height: "90vh" }}
      >
        <Card className="my-3 border border-secondary text-bg-secondary bg-opacity-25">
          <CardBody>
            <Stack gap={2} direction="vertical">
              <Image
                src="https://github.com/ceo-unknown/unknown-society/blob/main/public/token-icon-1.png?raw=true"
                style={{
                  objectFit: "cover",
                  width: "50%",
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
                    className="text-bg-dark"
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
                  disabled={isLoading}
                  // onClick={createToken}
                  style={{ background: myTheme.rgbaPrimary }}
                  className="border-0"
                >
                  {isLoading && <>Generating Token</>}
                  {!isLoading && <>Get Token</>}
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
