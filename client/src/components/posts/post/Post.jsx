import React from "react";
import { Link } from "react-router-dom";
import "./Post.scss";

const Post = ({ post }) => {
  return (
    <div className="post">
      {post.photo && <img className="postImg" src={post.photo} alt="tech" />}

      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((cat) => (
            <span key={cat.name} className="postCat">
              {cat.name}
            </span>
          ))}
        </div>
        <Link to={`/post/${post._id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>
        <hr />
        <span className="postDate">
          {`${new Date(post.createdAt).toLocaleDateString()} | ${new Date(
            post.createdAt
          ).toLocaleTimeString()}`}
        </span>
      </div>
      <p className="postDesc">{post.desc}</p>
    </div>
  );
};

export default Post;
