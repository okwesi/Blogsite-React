import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom'


function NewsDetail(props) {
    const location = useLocation()
    const navigate = useNavigate()
    const news  = location.state
    console.log(news)
    return ( 
        <>
        <button onClick={() => navigate(-1)} className="btn btn-lg btn-dark">
            back
        </button>
        <p>DEtails</p>
        <img src={news.media} style={{height:"100%", width:"100vw"}} alt={news.title}/>
        <p>{news.title}</p> 
        {/* {news.title}*/}
        </>
    );
}

export default NewsDetail;

// https://meet.google.com/ogh-rccy-fsx