import React from "react";
import "./SinglePost.scss";

const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="tech"
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet.
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>John Doe</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, ex
          veniam, numquam similique et facilis animi distinctio commodi, culpa
          quia dolore unde explicabo nihil? Doloribus incidunt sapiente nostrum
          earum veritatis sunt mollitia, ad placeat deleniti unde quia atque ea
          laborum maxime facilis quidem porro beatae quas iure? Ab, autem quod!
          Laudantium id, alias a reprehenderit atque fugit nulla quisquam
          doloribus velit blanditiis voluptatibus sequi non rerum minima in
          cupiditate rem.
        </p>
      </div>
    </div>
  );
};

export default SinglePost;
