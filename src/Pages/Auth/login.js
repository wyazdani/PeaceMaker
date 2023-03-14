import React, { useEffect, useState } from "react";
import { Form, InputGroup, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import loginApi from "../../api/Auth/loginApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate();
  /*const [validated, setValidated] = useState(false);
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    };*/

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role_id, setRoleId] = useState("");

  useEffect(() => {
    setRoleId(2);
    if (localStorage.getItem("token") != null) {
      navigate("/home");
    }
  });

  const handelSubmit = async (event) => {
    event.preventDefault();
    const data = { email, password, role_id };
    const response = await loginApi(data);
    if (response.status == 200) {
      console.log(response.data.data.user);
      localStorage.setItem("token", response.data.data.user.token);
      localStorage.setItem("user", JSON.stringify(response.data.data.user));
      navigate("/home");
    } else {
      const error = response.response.data.message;
      if (error) {
        toast.error(error);
        if (error.email != null) {
          toast.error(error.email[0]);
        }
        if (error.password != null) {
          toast.error(error.password[0]);
        }
      }
    }
  };

  return (
    <>
      <>
        <h1 className={"mb-3"}>Sign In</h1>
        <Form onSubmit={handelSubmit}>
          <Form.Group className={"form-group"} controlId="loginEmail">
            <Form.Control
              type={"text"}
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              //required
            />
          </Form.Group>
          <Form.Group className={"form-group"} controlId="loginpassword">
            <Form.Control
              type={"password"}
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              //required
            />
          </Form.Group>
          <Form.Group className={"form-group mb-5"}>
            <Link to={"/otp-phone"}>Forgot Password?</Link>
          </Form.Group>
          <Form.Group className={"form-group mb-5"}>
            <Button type={"submit"} variant={"gradient d-block w-100"}>
              Login
            </Button>
          </Form.Group>
          {/* <Form.Group className={"form-group text-center"}>
            <Link to={"/SignUp"} className={"text-decoration-underline"}>
              Create Account
            </Link>
          </Form.Group> */}
        </Form>
        <ToastContainer />
      </>
    </>
  );
};

export default Login;
