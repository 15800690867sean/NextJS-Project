'use client';

import styles from "@/app/styles/page.module.css";
import EventList from "@/components/events/event-list";
import { EventType } from "@/mockData";
import { getRealFeaturedEvents } from "@/utils/api";
import { useEffect, useState } from "react";

// this page is using client-side data fetching, which is not good for SEO
export default function HomePage() {
  const [events, setEvents] = useState<EventType[]>();

  useEffect(() => {
    getRealFeaturedEvents().then((res) => {
      setEvents(res);
    });
  }, []);

  if (!events) {
    return <p>Loading...</p>
  }

  return (
    <div className={styles.homepage}>
      <EventList items={events}/>
    </div>
  );
}
