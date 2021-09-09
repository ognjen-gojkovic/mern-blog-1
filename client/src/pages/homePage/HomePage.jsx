import React from "react";
import { useLocation } from "react-router";

// components
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";

import "./HomePage.scss";

const HomePage = () => {
  const { search } = useLocation();
  const [state, setState] = React.useState({
    posts: [],
  });

  React.useEffect(() => {
    fetch(`http://127.0.0.1:5000/api/posts${search}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("data posts:", data);
        if (data.success) setState({ ...state, posts: data.posts });
        else alert(data.msg);
      });
  }, [search]);

  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={state.posts} />
        <Sidebar />
      </div>
    </>
  );
};

export default HomePage;
