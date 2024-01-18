"use client";

import { getEventById } from "@/mockData";
import { useParams } from "next/navigation";
import React from "react";
import styles from "./detailPage.module.css";
import DateIcon from "@/components/icons/date-icon";
import AddressIcon from "@/components/icons/address-icon";

export default function EventDetailPage() {
  const params = useParams();

  const { eventId } = params as Record<string, string | string[]>;
  const event = getEventById(eventId as string);

  if (!event) {
    return <p>No Event Found!</p>;
  }

  const { location, title, description, date, image } = event;

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className={styles.container}>
      <h1>{title}</h1>
      <div className={styles.details}>
        <img className={styles.img} src={`/${image}`} alt={title} />
        <div className={styles.info}>
          <div className={styles.singleRoll}>
            <DateIcon />
            <time>{humanReadableDate}</time>
          </div>
          <div className={styles.singleRoll}>
            <AddressIcon />
            <address>{location}</address>
          </div>
        </div>
      </div>
      <p>{description}</p>
    </div>
  );
}
