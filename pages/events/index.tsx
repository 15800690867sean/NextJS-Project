"use client";

import EventList from "@/components/events/event-list";
import { EventType, getAllEvents } from "@/mockData";
import React from "react";
import styles from "./page.module.css";
import EventSearch from "@/components/events/event-search";
import { useRouter } from "next/navigation";
import { getRealAllEvents } from "@/utils/api";

export default function EventsPage(props: {
  events: EventType[];
}) {
  const { events } = props;
  const router = useRouter();

  function findEventsHandler(year: string, month: string) {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  }

  return (
    <div className={styles.allEventsPage}>
      <EventSearch onSearch={findEventsHandler}/>
      <EventList items={events} />
    </div>
  );
}

export async function getStaticProps() {
  const events = await getRealAllEvents();
  return {
    props: {
      events
    }
  };
}
