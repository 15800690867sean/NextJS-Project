"use client";

import { EventType } from "@/mockData";
import Link from "next/link";
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
      <div>
        <h2>{title}</h2>
        <div>
          <time>{humanReadableDate}</time>
        </div>
        <div>
          <address>{location}</address>
        </div>
      </div>
      <div>
        <Link href={exploreLink}>Explore Event</Link>
      </div>
    </div>
  </li>;
}
