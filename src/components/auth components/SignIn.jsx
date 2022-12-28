import { Button, Checkbox, Form, Input } from "antd";
import axios from "axios";
import "./index.css";
import "../post components/post.css";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Alert, Space } from "antd";


function SignIn() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
  const [error, seterror] = useState("");
  const [loader, setloader] = useState(false);

  const setToken = (token) => {
    localStorage.setItem("token", token);
  };
  const url = "http://127.0.0.1:5000/users/signin/";
  const data = { email: email, password: password };

  const signIn = async () => {
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
        setToken(data);
        setTimeout(function () {
          setloader(false);
        }, 3000);
        if (data) navigate("/");
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
    <div className="container">
      {error ? (
        <>
          <Alert message={error} type="error" showIcon closable />
        </>
      ) : (
        <></>
      )}

      <section className="vh-90">
        <section className="wrapper">
          <div className="top">Sign In</div>
          <div className="bottom" aria-hidden="true">
            Sign In
          </div>
        </section>
        <div className="container py- h-100">
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
                <div className="d-flex justify-content-around align-items-center mb-4">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="form1Example3"
                    />
                    <label className="form-check-label" htmlFor="form1Example3">
                      {" "}
                      Remember me{" "}
                    </label>
                  </div>
                  <a href="#!">Forgot password?</a>
                </div>
                <button
                  type="submit"
                  style={{ width: "100%" }}
                  className="btn btn-primary btn-lg btn-block"
                  onClick={signIn}
                >
                  Sign in
                </button>
                <p class="small fw-bold mt-2 pt-1 mb-0">
                  Don't have an account?{" "}
                  <a onClick={() => nav("signup")} class="link-danger">
                    Sign Up
                  </a>
                </p>
              </Form>
            </div>
          </div>
        </div>
      </section>

      {loader ? (
        <>
          <div className="overlay">
            <div className="overlay__inner">
              <div className="overlay__content">
                <div className="loader">
                  <div></div>
                </div>
                {/* <span className="spinner"></span> */}
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default SignIn;
{
  /* <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    { required: true, message: "Please input your email!" },
                  ]}
                  className="form-outline mb-4"
                >
                  <Input
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                    className="form-control form-control-lg"

                  />
                </Form.Item>

                <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    { required: true, message: "Please input your password!" },
                  ]}
                >
                  <Input.Password
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}
                  />
                </Form.Item> {/* <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                  <Button
                    type="primary"
                    htmlType="submit"
                    onClick={signIn}
                    style={{ width: "100%" }}
                    className="btn btn-primary btn-lg btn-block"
                  >
                    Submit
                  </Button>
                </Form.Item> */
}
{
  /* <form>
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

                <div className="d-flex justify-content-around align-items-center mb-4">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="form1Example3"
                    />
                    <label className="form-check-label" htmlFor="form1Example3">
                      {" "}
                      Remember me{" "}
                    </label>
                  </div>
                  <a href="#!">Forgot password?</a>
                </div>

                {/* <!-- Submit button --> */
}
{
  /* <button
                  type="submit"
                  style={{ width: "100%" }}
                  className="btn btn-primary btn-lg btn-block"
                  onClick={signIn}
                >
                  Sign in
                </button> */
}

{
  /* <div className="divider d-flex align-items-center my-4">
                  <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
                </div>

                <a
                  className="btn btn-primary btn-lg btn-block"
                  style="background-color: #3b5998"
                  href="#!"
                  role="button"
                >
                  <i className="fab fa-facebook-f me-2"></i>Continue with Facebook
                </a>
                <a
                  className="btn btn-primary btn-lg btn-block"
                  style="background-color: #55acee"
                  href="#!"
                  role="button"
                >
                  <i className="fab fa-twitter me-2"></i>Continue with Twitter
                </a> 
              </form> */
}
