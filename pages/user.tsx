import React from "react";

export default function User(props: { username: string }) {
  return (
    <div>
      user page
      <h1>{props.username}</h1>
    </div>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      username: "Max",
    },
  };
}