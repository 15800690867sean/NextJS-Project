"use client";

import { EventType } from "@/mockData";
import Button from "../ui/button";
import React from "react";
import styles from './event-item.module.css';

export default function EventItem(props: EventType) {
  const {
    title,
    image,
    date,
    location,
    id,
  } = props;

  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const exploreLink = `/events/${id}`;

  return <li className={styles.item}>
    <img src={`/${image}`} alt={title} />
    <div>
      <div className={styles.content}>
        <h2>{title}</h2>
        <div>
          <time>{humanReadableDate}</time>
        </div>
        <div>
          <address>{location}</address>
        </div>
      </div>
      <div>
        <Button link={exploreLink}>Explore event</Button>
      </div>
    </div>
  </li>;
}
