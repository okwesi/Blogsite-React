import { useState, useEffect, useMemo, Fragment, useRef } from "react";
import NewsCard from "./NewsCard";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Navigate, useNavigate, useLocation } from "react-router-dom";
import { useQuery, useInfiniteQuery, useM } from "react-query";
import "../post components/post.css";
import InfiniteScroll from "react-infinite-scroll-component";

function News() {
  const options = {
    method: "GET",
  };
  //rickandmortyapi.com/api/character/?page=
  const fetcher = (pageParam) =>
    fetch(
      `https://asoriba-project-backend-production.up.railway.app/timeline/posts/?page=${pageParam}`,
      options
    ).then((res) => res.json());

  const {
    data: newsData,
    error,
    fetchNextPage,
    status,
    hasNextPage,
    isLoading,
    isError,
  } = useInfiniteQuery(["news"], ({ pageParam = 1 }) => fetcher(pageParam), {
    getNextPageParam: (data, pages) => {
      console.log("Data", data);
      console.log("Pages", pages);
      if (data.next) {
        return pages.length + 1;
      } else {
        return undefined;
      }
    },
  });
  const news = useMemo(
    () =>
      newsData?.pages.reduce((prev, page) => {
        // const results = [...prev.results, ...page.results]
        // return results.length
        return {
          info: page.info,
          results: [...prev.results, ...page.results],
        };
      }),
    [newsData]
  );
  if (isLoading) {
    return (
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
    );
  }

  return (
    <>
      {isError ? (
        <>
          <div class="alert alert-warning" role="alert">
            {isError}
          </div>
        </>
      ) : (
        <></>
      )}
      <InfiniteScroll
        dataLength={news ? news.results.length : 0}
        next={() => fetchNextPage()}
        hasMore={!!hasNextPage}
        loader={
          <div
            style={{ marginRight: "auto", marginLeft: "auto" }}
            className="mx-auto"
          >
            <div className="loader">
              <div></div>
            </div>
          </div>
        }
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <div className="main">
          <Row xs={1} md={1} lg={1} className="g-4">
            {news?.results.map((story, index) => (
              <NewsCard news={story} index={story.id} key={index} />
            ))}

            {/* {newsData?.pages.map((group, i) => {
          return (
            <Fragment key={i}>
              {group.results.map((story) => {
                return (
                  <Col key={story.id}>
                    <NewsCard news={story} index={story.id} key={story.id} />
                  </Col>
                );
              })}
            </Fragment>
          );
        })} */}
          </Row>
        </div>
      </InfiniteScroll>
    </>
  );
}

export default News;
