import { Button, Form, Input, Upload } from "antd";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Alert, Space } from "antd";

const { TextArea } = Input;

function AddPost() {
  const navigate = useNavigate();
  const [token, settoken] = useState("");
  const [error, seterror] = useState("");
  const [loader, setloader] = useState(false);
  const [description, setdescription] = useState("");
  const [alert, setalert] = useState(false);
  const [image, setImage] = useState([]);
  const [Url, setUrl] = useState("");

  const getToken = () => {
    const token = localStorage.getItem("token");
    settoken(token);
    if (!token) navigate("/signin");
  };

  const uploadImage = async () => {
    const imageUrl = "https://api.cloudinary.com/v1_1/djangotest/image/upload";
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "ml_default");
    data.append("cloud_name", "djangotest");

    await axios
      .post(imageUrl, data, setloader(true))
      .then(({ data }) => {
        addPost(data.url);
      })
      .then()
      .catch((err) => console.log(err));
  };

  const addPost = async (image) => {
    const url = "http://127.0.0.1:5000/post/";
    const data = { description: description, image: image };
    // console.log(data)
    await axios
      .post(
        url,
        data,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json;charset=UTF-8",
            Authorization: token,
          },
        },
        setloader(true)
      )
      .then(({ data }) => {
        setloader(false);
        setalert(true);
        setTimeout(function () {
          if (data) navigate("/posts");
        }, 2000);
      })
      .catch(function (error) {
        if (error.response) {
          seterror(error.response.data);
          setloader(false);
        }
      });
  };
  useEffect(() => {
    getToken();
  }, []);

  return (
    <>
      {alert ? (
        <>
          <Alert message="Post Saved" type="success" showIcon closable />
        </>
      ) : (
        <></>
      )}
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        //   onFinish={onFinish}
        //   onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item label="TextArea">
          <TextArea
            rows={6}
            value={description}
            onChange={(e) => setdescription(e.target.value)}
          />
        </Form.Item>

        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
        ></input>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit" onClick={uploadImage}>
            Submit
          </Button>
        </Form.Item>
      </Form>

      {loader ? (
        <>
          <div class="overlay">
            <div class="overlay__inner">
              <div class="overlay__content">
              <div class="loader"><div></div></div>
                {/* <span class="spinner"></span> */}
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default AddPost;
