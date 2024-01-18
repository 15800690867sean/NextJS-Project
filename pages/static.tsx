import React from "react";

export default function Static(props: { msg: string }) {
  return (
    <div>
      <h1>The Static Page</h1>
      <h2>{props.msg}</h2>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      msg: "static content",
    },
  };
}
