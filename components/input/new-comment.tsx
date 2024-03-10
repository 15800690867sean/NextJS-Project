import React, { FormEvent, MutableRefObject, useRef } from "react";
import styles from './new-comment.module.css';

interface IProps {
    onAddComment: (comment: {
        email: string;
        name: string;
        comment: string;
    }) => void;
}

export default function NewComment(props: IProps) {
  const emailRef = useRef();
  const nameRef = useRef();
  const commentRef = useRef();

  const submitCommentHandler = (event: FormEvent) => {
    event.preventDefault();
    const enteredEmail = (emailRef.current as unknown as HTMLInputElement)
      .value;
    const enteredName = (nameRef.current as unknown as HTMLInputElement).value;
    const enteredComment = (
      commentRef.current as unknown as HTMLTextAreaElement
    ).value;
    props.onAddComment({
        email: enteredEmail,
        name: enteredName,
        comment: enteredComment,
    })
  };

  return (
    <div className={styles.container}>
      <form onSubmit={submitCommentHandler} className={styles.form}>
        <div className={styles.firstRow}>
          <div className={styles.inputWrapper}>
            <label htmlFor="email">Your Email</label>
            <input
              ref={emailRef as unknown as MutableRefObject<HTMLInputElement>}
              id="email"
              type="email"
            />
          </div>
          <div className={styles.inputWrapper}>
            <label htmlFor="name">Your Name</label>
            <input
              ref={nameRef as unknown as MutableRefObject<HTMLInputElement>}
              id="name"
              type="text"
            />
          </div>
        </div>
        <div className={styles.secondRow}>
          <label htmlFor="comment">Your Comment</label>
          <textarea
            ref={commentRef as unknown as MutableRefObject<HTMLTextAreaElement>}
            id="comment"
            rows={10}
          ></textarea>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}
