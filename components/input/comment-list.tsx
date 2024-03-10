import React from "react";
import styles from "./comment-list.module.css";

interface IProps {
  comments: {
    comment: string;
    name: string;
    id: string;
  }[];
}

export default function CommentList(props: IProps) {
  console.log("111111", props);
  return (
    <div className={styles.container}>
      {props.comments.map((comment) => (
        <div className={styles.comment} key={comment.id}>
          <div>{comment.comment}</div>
          <p>By {comment.name}</p>
        </div>
      ))}
    </div>
  );
}
