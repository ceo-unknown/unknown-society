"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { BsKey, BsPerson } from "react-icons/bs";

const SignUp = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  // form submit
  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await fetch("http://localhost:3000/api/sign-up", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user_id: userId,
          password,
        }),
      });

      const data = await response.json();
      if (data.error) {
        toast.error(data.error);
        setIsLoading(false);
      } else {
        toast.success(data.success);
        setIsLoading(false);
        router.push("/login");
      }
    } catch (error) {
      console.log(error.message);
      setIsLoading(false);
      toast.error("user not found");
    }
    console.log(userId, password);
  };

  return (
    <>
      <div className="container vh-90 d-flex justify-content-center align-items-center ">
        <Toaster />
        <div className="bg-primary bg-opacity-25 p-5 rounded">
          <p className="mb-3 fw-bold lead">Sign up</p>
          <div className="border-bottom w-100 border-secondary rounded" />
          <form onSubmit={handelSubmit}>
            <div className="my-3">
              <label className="form-label ">
                <BsPerson color="violet" size={23} />
                user_id
              </label>
              <input
                type="text"
                className="form-check p-2 rounded mb-3 "
                placeholder="Your user id"
                required
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
              />
            </div>
            <div className="my-3">
              <label className="form-label ">
                <BsKey color="violet" size={23} className="me-2" />
                user_id
              </label>
              <input
                type="password"
                className="form-check p-2 rounded"
                placeholder="Your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              className="btn btn-primary mb-3 d-block w-100"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <span className="spinner-border"></span>
                </>
              ) : (
                <>submit</>
              )}
            </button>
          </form>
          <div className="border-bottom w-100 my-2 border-secondary rounded" />
          <p className="small text-secondary text-center">
            Do you have a account ?{" "}
            <Link className="nav-link text-info text-center" href="/login">
              login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignUp;
