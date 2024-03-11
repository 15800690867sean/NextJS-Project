import React from "react";
import styles from "./comment-list.module.css";

interface IProps {
  comments: {
    text: string;
    name: string;
    _id: string;
  }[];
}

export default function CommentList(props: IProps) {
  return (
    <div className={styles.container}>
      {props.comments.map((comment) => (
        <div className={styles.comment} key={comment._id}>
          <div>{comment.text}</div>
          <p>By {comment.name}</p>
        </div>
      ))}
    </div>
  );
}
