"use client";

import EventList from "@/components/events/event-list";
import { getFilteredEvents } from "@/mockData";
import { useParams } from "next/navigation";
import styles from "./page.module.css";
import React from "react";
import Button from "@/components/ui/button";

export default function FilteredEventsPage() {
  const params = useParams();
  if (!params) {
    return <p>Invalid Url.</p>;
  }
  const filteredData = params.slug;
  const year = filteredData[0];
  const month = filteredData[1];
  const numYear = +year;
  const numMonth = +month;

  if (isNaN(numYear) || isNaN(numMonth)) {
    return (
      <div className={styles.filteredPageContainer}>
        <h2>Invalid filter. Please adjust your values!</h2>
        <Button link="/events">Show All Events</Button>
      </div>
    );
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if (!filteredEvents || !filteredEvents.length) {
    return (
      <div className={styles.filteredPageContainer}>
        <h2>No events found for the chosen filter!</h2>
        <Button link="/events">Show All Events</Button>
      </div>
    );
  }

  return (
    <div className={styles.filteredPageContainer}>
      <h2>Here are the filtered events</h2>
      <Button link="/events">Show All Events</Button>
      <EventList items={filteredEvents} />
    </div>
  );
}
