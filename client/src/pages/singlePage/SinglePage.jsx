import React from "react";

// components
import Sidebar from "../../components/sidebar/Sidebar";
import SinglePost from "../../components/singlePost/SinglePost";
import "./SinglePage.scss";

const SinglePage = () => {
  return (
    <div className="single">
      <SinglePost />
      <Sidebar />
    </div>
  );
};

export default SinglePage;
