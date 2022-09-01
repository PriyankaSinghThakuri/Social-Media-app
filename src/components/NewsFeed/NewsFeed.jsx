import {
  faCircleUser,
  faEllipsis,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-brands-svg-icons";
import React from "react";
import NavBar from "../NavBar/Navbar";
import "./NewsFeed.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import sideComponents from "../sideComponents/sideComponents";

const NewsFeed = () => {
  const [comment, setComment] = useState("");
  // theme conditon
  // const ReactPost = () => {
  //   setLike((curr) => (curr === "Like" ? "Liked" : "Like"));
  // };
  const onClickLike = () => {};

  return (
    <div className="NewsFeedPage">
      <NavBar />
      <div className="post-container">
        <div className="post-head">
          <FontAwesomeIcon icon={faCircleUser} className="usericon" />
          <FontAwesomeIcon icon={faEllipsis} className="doticon" />
        </div>
        <div className="post-body"></div>
        <div className="post-foot">
          <FontAwesomeIcon icon={faThumbsUp} className="Like" />
          <img
            src={process.env.PUBLIC_URL + "/assets/comment.png"}
            // class="img-fluid"
            alt="Responsive image"
            className="comment"
            id="Like"
          />
          <img
            src={process.env.PUBLIC_URL + "/assets/share.png"}
            // class="img-fluid"
            alt="Responsive image"
            className="share"
            id="Like"
          />

          {/* <img
            src={process.env.PUBLIC_URL + "/assets/Liked.png"}
            // class="img-fluid"
            alt="Responsive image"
            className="Liked"
            id="Liked"
          /> */}
        </div>
        <div className="comment-section">
          <input
            type="text"
            className="comment-textbox"
            placeholder="comment..."
            onChange={(e) => setComment(e.target.value)}
          />
        </div>
      </div>
      <div className="post-container">
        <div className="post-head">
          <FontAwesomeIcon icon={faCircleUser} className="usericon" />
          <FontAwesomeIcon icon={faEllipsis} className="doticon" />
        </div>
        <div className="post-body"></div>
        <div className="post-foot">
          <FontAwesomeIcon icon={faThumbsUp} className="Like" />
          <img
            src={process.env.PUBLIC_URL + "/assets/comment.png"}
            // class="img-fluid"
            alt="Responsive image"
            className="comment"
            id="Like"
          />
          <img
            src={process.env.PUBLIC_URL + "/assets/share.png"}
            // class="img-fluid"
            alt="Responsive image"
            className="share"
            id="Like"
          />

          {/* <img
            src={process.env.PUBLIC_URL + "/assets/Liked.png"}
            // class="img-fluid"
            alt="Responsive image"
            className="Liked"
            id="Liked"
          /> */}
        </div>
        <div className="comment-section">
          <input
            type="text"
            className="comment-textbox"
            placeholder="comment..."
            onChange={(e) => setComment(e.target.value)}
          />
        </div>
      </div>
      <div className="post-container">
        <div className="post-head">
          <FontAwesomeIcon icon={faCircleUser} className="usericon" />
          <FontAwesomeIcon icon={faEllipsis} className="doticon" />
        </div>
        <div className="post-body"></div>
        <div className="post-foot">
          <FontAwesomeIcon icon={faThumbsUp} className="Like" />
          <img
            src={process.env.PUBLIC_URL + "/assets/comment.png"}
            // class="img-fluid"
            alt="Responsive image"
            className="comment"
            id="Like"
          />
          <img
            src={process.env.PUBLIC_URL + "/assets/share.png"}
            // class="img-fluid"
            alt="Responsive image"
            className="share"
            id="Like"
          />

          {/* <img
            src={process.env.PUBLIC_URL + "/assets/Liked.png"}
            // class="img-fluid"
            alt="Responsive image"
            className="Liked"
            id="Liked"
          /> */}
        </div>
        <div className="comment-section">
          <input
            type="text"
            className="comment-textbox"
            placeholder="comment..."
            onChange={(e) => setComment(e.target.value)}
          />
        </div>
      </div>
      <div className="post-container">
        <div className="post-head">
          <FontAwesomeIcon icon={faCircleUser} className="usericon" />
          <FontAwesomeIcon icon={faEllipsis} className="doticon" />
        </div>
        <div className="post-body"></div>
        <div className="post-foot">
          <FontAwesomeIcon icon={faThumbsUp} className="Like" />
          <img
            src={process.env.PUBLIC_URL + "/assets/comment.png"}
            // class="img-fluid"
            alt="Responsive image"
            className="comment"
            id="Like"
          />
          <img
            src={process.env.PUBLIC_URL + "/assets/share.png"}
            // class="img-fluid"
            alt="Responsive image"
            className="share"
            id="Like"
          />

          {/* <img
            src={process.env.PUBLIC_URL + "/assets/Liked.png"}
            // class="img-fluid"
            alt="Responsive image"
            className="Liked"
            id="Liked"
          /> */}
        </div>
        <div className="comment-section">
          <input
            type="text"
            className="comment-textbox"
            placeholder="comment..."
            onChange={(e) => setComment(e.target.value)}
          />
        </div>
      </div>
      <div className="post-container">
        <div className="post-head">
          <FontAwesomeIcon icon={faCircleUser} className="usericon" />
          <FontAwesomeIcon icon={faEllipsis} className="doticon" />
        </div>
        <div className="post-body"></div>
        <div className="post-foot">
          <FontAwesomeIcon icon={faThumbsUp} className="Like" />
          <img
            src={process.env.PUBLIC_URL + "/assets/comment.png"}
            // class="img-fluid"
            alt="Responsive image"
            className="comment"
            id="Like"
          />
          <img
            src={process.env.PUBLIC_URL + "/assets/share.png"}
            // class="img-fluid"
            alt="Responsive image"
            className="share"
            id="Like"
          />

          {/* <img
            src={process.env.PUBLIC_URL + "/assets/Liked.png"}
            // class="img-fluid"
            alt="Responsive image"
            className="Liked"
            id="Liked"
          /> */}
        </div>
        <div className="comment-section">
          <input
            type="text"
            className="comment-textbox"
            placeholder="comment..."
            onChange={(e) => setComment(e.target.value)}
          />
        </div>
      </div>
      <div className="seemore-post">
        <button className="seemore-btn">see more</button>
      </div>
    </div>
  );
};

export default NewsFeed;
