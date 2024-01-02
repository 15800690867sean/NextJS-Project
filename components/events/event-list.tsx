"use client";

import { EventType } from "@/mockData";
import React from "react";
import EventItem from "./event-item";
import styles from './event-list.module.css';

interface IProps {
  items: EventType[];
}

export default function EventList(props: IProps) {
  const { items } = props;

  return (
    <ul className={styles.list}>
      {items.map((event) => (
        <EventItem
          key={event.id}
          id={event.id}
          location={event.location}
          title={event.title}
          description={event.description}
          date={event.date}
          image={event.image}
          isFeatured={event.isFeatured}
        />
      ))}
    </ul>
  );
}
