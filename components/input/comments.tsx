import React, { useEffect, useState } from "react";
import NewComment from "./new-comment";
import CommentList from "./comment-list";
import styles from "./comments.module.css";

interface IProps {
  eventId: string;
}

export default function Comments(props: IProps) {
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (showComments) {
      fetch(`/api/comments/${props.eventId}`)
        .then((res) => res.json())
        .then((data) => {
          setComments(data.comments);
        });
    }
  }, [showComments]);

  const toggleCommentsHandler = () => {
    setShowComments((showComments) => !showComments);
  };

  const addCommentHandler = (comment: {
    email: string;
    name: string;
    text: string;
  }) => {
    fetch(`/api/comments/${props.eventId}`, {
      method: "POST",
      body: JSON.stringify(comment),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => alert(data.message));
  };

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={toggleCommentsHandler}>
        {showComments ? "Hide" : "Show"} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && <CommentList comments = {comments}/>}
    </div>
  );
}
