import React from "react";
import Header from "./components/home components/Header";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./components/home components/Home";
import News from "./components/news components/News";
import NewsDetail from "./components/news components/NewsDetail"
import SignIn from "./components/auth components/SignIn";
import SignUp from "./components/auth components/SignUp";
import Welcome from "./components/Welcome";
import Posts from "./components/post components/Posts";
import {useEffect, useState} from "react";
import AddPost from "./components/post components/AddPost";
import { QueryClient, QueryClientProvider} from "react-query";


function App() {
  const client = new QueryClient();
  return (
    <div className="App">
      <QueryClientProvider client={client}> 
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/news" element={<News />} />
          <Route exact path="/news/:id" element={<NewsDetail/>} />
          <Route exact path="/signin" element={<SignIn/>} />
          <Route exact path="/signup" element={<SignUp/>} />
          <Route exact path="/welcome" element={<Welcome/>}  />
          <Route exact path="/posts" element={<Posts/>} />
          <Route exact path="/add-post" element={<AddPost/>} />
        </Routes>
      </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}
export default App;
