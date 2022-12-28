import { NavLink } from "react-router-dom";

const leadership = [
  {
    name: "AP. Clement Brakatu",
    image:
      "https://res.cloudinary.com/djangotest/image/upload/v1670715103/ACCI/uploaded/download_tcwivd.jpg",
    title: "Chairman",
  },
  {
    name: "AP. Jones Takyi",
    image:
      "https://res.cloudinary.com/djangotest/image/upload/v1670719891/ACCI/uploaded/IMG-20210605-WA0020_cwh4ph.jpg",
    title: "IMD",
  },
  {
    name: "AP. Clement Brakatu",
    image:
      "https://res.cloudinary.com/djangotest/image/upload/v1670715103/ACCI/uploaded/download_tcwivd.jpg",
    title: "this is the title",
  },
  {
    name: "AP. Clement Brakatu",
    image:
      "https://res.cloudinary.com/djangotest/image/upload/v1670715103/ACCI/uploaded/download_tcwivd.jpg",
    title: "this is the title",
  },

];
const leader_links = [
  {
    title: "Leadership",
    link: "posts",
  },
  {
    title: "History",
    link: "home",
  },
  {
    title: "History",
    link: "posts",
  },
  {
    title: "History",
    link: "posts",
  },
  {
    title: "History",
    link: "posts",
  },
  {
    title: "History",
    link: "posts",
  },
];
function About_Section() {
  return (
    <>
      <div className="container mt-4 about-section ">
        <h1>About Us</h1>
        <div className="leadership-text">
          <hr className="hr-text" data-content="Leadership" />
        </div>
        <div className="row row-cols-3 row-cols-md-6 row-cols-lg-4 g-4 leadership-section">
          {leadership ? (
            <>
              {leadership.map((leader, index) => {
                return (
                  <>
                    <div className="col">
                      <div className="card ">
                        <img
                          src={leader.image}
                          className="card-img-top"
                          alt="leader"
                        />
                        <div className="card-body">
                          <h5 className="card-title text-capitalize text-center font-weight-bold">
                            <b>{leader.name}</b>
                          </h5>
                          <p className="card-text text-center">
                            {leader.title}
                          </p>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </>
          ) : (
            <></>
          )}
        </div>
        {/* leadership text */}

        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-4">
          {leader_links ? (
            <>
              {leader_links.map((link, index) => {
                return (
                  <>
                    <div class="col">
                      <div class="card leadership-links shadow border-0 text-center">
                        <div class="card-body">
                          <NavLink to={link.link} className="text-dark">
                            <h5 class="card-title">{link.title} <i class="bi bi-chevron-right"></i></h5>
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </>
          ) : (
            <></>
          )}
        </div>
        {/* other components */}
      </div>
    </>
  );
}

export default About_Section;
