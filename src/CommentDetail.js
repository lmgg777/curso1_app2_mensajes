import React from "react";

const CommentDetail = props => {
  return (
    <div className="comment">
      <a href="/">
        <img
          src={props.image}
          alt="avatar"
          className="right floated mini ui image"
        />
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.autor}
        </a>
      </div>
      <div className="metadata" style={{ margin: "7px 0" }}>
        <span className="date">{props.fecha}</span>
      </div>
      <div className="description">{props.mensaje}</div>
    </div>
  );
};

export default CommentDetail;
