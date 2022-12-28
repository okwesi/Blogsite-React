import axios from "axios";
import "./post.css";
import { useState, useEffect } from "react";
import { Avatar, Card, FloatButton } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { Navigate, useNavigate } from "react-router-dom";
import { Alert, Space } from "antd";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import moment from "moment";
import SideBar from "../home components/sidebar";

const { Meta } = Card;

function Posts() {
  const [error, seterror] = useState("");
  const [posts, setposts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const url = "http://127.0.0.1:5000/post/";

  const getPosts = async () => {
    await axios
      .get(url, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
        },
      })
      .then(({ data }) => {
        setposts(data);
        console.log(data);
        setTimeout(function () {
          setLoading(false);
        }, 3000);
      })
      .catch(function (error) {
        if (error.response) {
          seterror(error.response.data);
        }
      });
  };

  const getToken = () => {
    const token = localStorage.getItem("token");
    return token;
  };
  const [authenticated, setauthenticated] = useState(getToken);

  useEffect(() => {
    // getPosts();
    getToken();
  }, []);

  const postAdd = () => {
    navigate("/add-post");
  };

  return (
    <>
      <div className="main">
      <img
            src="http://res.cloudinary.com/djangotest/image/upload/v1669407960/test1/images/8-bit-pixel-tiger-animals-game-assets-cross-stitch-patterns-vector-illustrations_614713-900_sdcx2m.webp"
            alt=""
            width={"100%"}
            className="mx-auto d-block"
          />
        {/* {posts ? (
          <>
            {posts.map((post) => {
              return (
                <Card
                  loading={loading}
                  key={post._id}
                  className="mx-auto my-4 shadow-lg text-justify text-dark"
                >
                  <Meta
                    avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                    title={`@${post.user.name}`}
                    description={post.description}
                  />
                  {post.image ? (
                    <>
                      <img
                        className="rounded d-block mt-3 ms-5"
                        width="90%"
                        alt="example"
                        src={post.image}
                      />
                    </>
                  ) : (
                    <></>
                  )}

                  <p>{moment(post.dateTime).fromNow()}</p>
                </Card>
              );
            })}
          </>
        ) : (
          <></>
        )} */}
      </div>

      {error ? (
        <>
          <Alert message={error} type="error" showIcon closable />
        </>
      ) : (
        <></>
      )}
      {loading ? (
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

      {authenticated ? (
        <>
          {" "}
          <FloatButton
            icon={<PlusOutlined />}
            tooltip={<div>Post +</div>}
            onClick={postAdd}
          />
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default Posts;
