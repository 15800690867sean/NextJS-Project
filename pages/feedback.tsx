import fs from "fs";
import path from "path";
import React from "react";
import styles from './feedback.module.css';

interface IProps {
  feedbackList: string[];
}

export default function Feedback(props: IProps) {
  return (
    <div>
      <ul>
        {props.feedbackList.map((item, index) => (
          <li className={styles.feedbackItem} key={item}>Feedback {index+1}: {item}</li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  const filePath = path.join(process.cwd(), "data", "feedback.json");
  const fileData = fs.readFileSync(filePath);
  const data = JSON.parse(fileData as unknown as string);
  return {
    props: {
      feedbackList: data,
    },
  };
}
