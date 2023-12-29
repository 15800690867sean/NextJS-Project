'use client'
import { useParams } from "next/navigation";
import React from "react";

export default function ClientPage() {
  const paramsHandler = useParams();

  return <div>Client page, ClientId: {paramsHandler.id}</div>;
}