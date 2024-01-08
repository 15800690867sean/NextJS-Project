"use client";

import EventList from "@/components/events/event-list";
import { getAllEvents } from "@/mockData";
import React from "react";
import styles from "./page.module.css";

export default function EventsPage() {
  const events = getAllEvents();

  return (
    <div className={styles.allEventsPage}>
      <EventList items={events} />
    </div>
  );
}
