import { NavLink } from "react-router-dom";

function Ministries() {
  return (
    <>
      <div className="container mt-4 ministries-section ">
        <h1>Ministries</h1>
        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col">
            <div className="">
              <img
                src="https://res.cloudinary.com/djangotest/image/upload/v1670721003/ACCI/uploaded/DPtQjCHW0AAHMWb_ogzj5d.jpg"
                className="card-img-top"
                alt="Hollywood Sign on The Hill"
              />
              <NavLink to="/">Home</NavLink>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="https://res.cloudinary.com/djangotest/image/upload/v1670721382/ACCI/uploaded/church_Ghana_News_ulu91p.jpg"
                className="card-img-top"
                alt="Palm Springs Road"
              />
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/standard/city/043.webp"
                className="card-img-top"
                alt="Los Angeles Skyscrapers"
              />
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="https://res.cloudinary.com/djangotest/image/upload/v1670721613/ACCI/uploaded/photo_2020-03-11_13-02-46_eqlgkd.jpg"
                className="card-img-top"
                alt="Skyscrapers"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Ministries;
