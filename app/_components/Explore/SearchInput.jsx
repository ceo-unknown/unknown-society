import { Form, FormControl, FormLabel } from "react-bootstrap";

const SearchInput = () => {
  return (
    <>
      <Form className="my-2">
        <FormControl
          type="text"
          className=" text-bg-secondary bg-opacity-75 border border-secondary"
          placeholder="#tags @persons"
        />
      </Form>
    </>
  );
};

export default SearchInput;
