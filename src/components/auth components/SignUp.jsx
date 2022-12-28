import { Button, Checkbox, Form, Input } from "antd";
import axios from "axios";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Alert, Space } from "antd";
import Spinner from "react-bootstrap/Spinner";

function SignUp() {
  const [email, setemail] = useState("");
  const [name, setname] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
  const [error, seterror] = useState("");
  const [loader, setloader] = useState(false);

  const setToken = (token) => {
    localStorage.setItem("token", token);
  };

  const url = "http://127.0.0.1:5000/users/signup/";
  const data = { name: name, email: email, password: password };

  const signUp = async () => {
    await axios
      .post(
        url,
        data,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json;charset=UTF-8",
          },
        },
        setloader(true)
      )
      .then(({ data }) => {
        console.log(data);

      })
      .catch(function (error) {
        if (error.response) {
          seterror(error.response.data);
          setloader(false);
        }
      });
  };

  const nav = (page) => {
    navigate(`/${page}`);
  };

  return (
    <div>
      {error ? (
        <>
          <Alert message={error} type="error" showIcon closable />
        </>
      ) : (
        <></>
      )}
      <section className="vh-80">
      <section className="wrapper">
          <div className="top">Sign Up</div>
          <div className="bottom" aria-hidden="true">
            Sign Up
          </div>
        </section>
        <div className="container  h-100">
          <div className="row d-flex align-items-center justify-content-center h-100">
            <div className="col-md-8 col-lg-7 col-xl-6 loginimage">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                className="img-fluid"
                alt="Phone image"
              />
            </div>
            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <img
                src="https://cdn.logo.com/hotlink-ok/logo-social.png"
                alt=""
                width={"200px"}
                className="m-3 mx-auto d-block"
              />

              <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                autoComplete="off"
              >
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    id="form1Example13"
                    className="form-control form-control-lg"
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                    required
                  />
                  <label className="form-label" htmlFor="form1Example13">
                    Name
                  </label>
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="form1Example13"
                    className="form-control form-control-lg"
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                    required
                  />
                  <label className="form-label" htmlFor="form1Example13">
                    Email address
                  </label>
                </div>

                <div className="form-outline mb-4">
                  <input
                    type="password"
                    id="form1Example23"
                    className="form-control form-control-lg"
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}
                    required
                  />
                  <label className="form-label" htmlFor="form1Example23">
                    Password
                  </label>
                </div>

                <button
                  type="submit"
                  style={{ width: "100%" }}
                  className="btn btn-primary btn-lg btn-block"
                  onClick={signUp}
                >
                  Sign Up
                </button>
                <p class="small fw-bold mt-2 pt-1 mb-0">
                  Do you have an account?{" "}
                  <a onClick={() => nav("signin")} class="link-danger">
                    Sign In
                  </a>
                </p>
              </Form>
            </div>
          </div>
        </div>
      </section>

      {loader ? (
        <>
          <Spinner animation="border" className="" variant="primary" />
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default SignUp;
{
  /* <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        autoComplete="off"
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please input your Name!" }]}
        >
          <Input value={name} onChange={(e) => setname(e.target.value)} />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input value={email} onChange={(e) => setemail(e.target.value)} />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit" onClick={signUp}>
            Submit
          </Button>
        </Form.Item>
      </Form> */
}
