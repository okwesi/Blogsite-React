import "../post components/post.css";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Posts from "../post components/Posts";

function SideBar() {
  return (
    <>
      <div className="sidenav">
        <div className="border-bottom m-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "btn btn-light rounded-pill m-auto text-secondary" : "btn text-secondary rounded-pill"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/posts"
            className={({ isActive }) =>
              isActive ? "btn btn-light rounded-pill text-secondary" : "btn text-secondary rounded-pill"
            }
          >
            Post
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default SideBar;
