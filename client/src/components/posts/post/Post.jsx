import React from "react";
import "./Post.scss";

const Post = () => {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt="tech"
      />
      <div className="postInfo">
        <div className="poostCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet.</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, libero?
        Officia sint illo, ipsum nemo praesentium cupiditate soluta dolor
        doloribus! Sed reiciendis commodi amet perferendis numquam fugiat at
        quasi in aliquid tempore harum rerum explicabo, ullam optio officia
        fugit minima vel deserunt. Iusto modi maxime corporis quisquam ad
        placeat saepe?
      </p>
    </div>
  );
};

export default Post;
