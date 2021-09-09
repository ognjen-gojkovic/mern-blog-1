import React from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

import "./SinglePost.scss";

const SinglePost = () => {
  const location = useLocation();
  console.log(location);
  const path = location.pathname.split("/")[2];
  const [state, setState] = React.useState({
    post: null,
  });

  React.useEffect(() => {
    fetch(`http://127.0.0.1:5000/api/posts/${path}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("singlePost:", data);
        if (data.success) setState({ ...state, post: data.post });
        else alert(data.msg);
      });
  }, [path]);

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {state.post && (
          <img
            src={state.post.photo}
            alt={state.post.title}
            className="singlePostImg"
          />
        )}

        <h1 className="singlePostTitle">
          {state.post && state.post.title}
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author:
            {state.post && (
              <Link to={`/?user=${state.post.username}`} className="link">
                <b>{state.post && state.post.username}</b>
              </Link>
            )}
          </span>
          <span className="singlePostDate">
            {state.post &&
              `${new Date(
                state.post.createdAt
              ).toLocaleDateString()} | ${new Date(
                state.post.createdAt
              ).toLocaleTimeString()}`}
          </span>
        </div>
        <p className="singlePostDesc">{state.post && state.post.desc}</p>
      </div>
    </div>
  );
};

export default SinglePost;
