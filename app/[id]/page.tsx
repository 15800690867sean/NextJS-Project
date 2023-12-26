'use client'
import { useParams } from "next/navigation";
import React from "react";

export default function Page() {
  const paramsHandler = useParams();

  return <div>id page, id: {paramsHandler.id}</div>;
}
