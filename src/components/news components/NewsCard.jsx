import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Row from "react-bootstrap/Row";

function NewsCard(props) {
  const news = props.news;
  const navigate = useNavigate();
  function handleClick(id, news) {
    // navigate.
    navigate(`/news/${id}`, { state: news }, { replace: true });
  }

  return (
    <>
      <Card>
        {/* <Card.Img
          variant="top"
          src={
            news.media !== null
              ? news.media
              : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQukFD_fmDSAbtTAP-cWpYr-3YXsodyfOGvvOeq8rs0&s"
          }
        /> */}

        {news.images.length === 1 ? (
          <>
            <img src={news.images[0].image} alt="" width={100}/>
          </>
        ) : (
          <Row
            xs={2}
            md={2}
            lg={2}
            className="m-0"
          >
            {news.images?.map((story, index) => {
              return (
                <>
                  <img src={story.image} alt="" key={index} width={200}/>
                </>
              );
            })}
          </Row>
        )}
        <Card.Body>
          <h4>
            <b>{news.id}</b>
          </h4>
          <Card.Title className="text-dark">{news.content}</Card.Title>
          {/* <img src={news.image} alt={news.name} width={50} loading='lazy' />
            <p>{news.name}</p> */}
          <button
            type="button"
            onClick={() => handleClick(props.index + 1, news)}
          >
            Details{" "}
          </button>
        </Card.Body>
      </Card>
    </>
  );
}

export default NewsCard;
