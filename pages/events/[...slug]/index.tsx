"use client";

import EventList from "@/components/events/event-list";
import { EventType } from "@/mockData";
import styles from "./page.module.css";
import React from "react";
import Button from "@/components/ui/button";
import { getRealFilteredEvents } from "@/utils/api";

export default function FilteredEventsPage(props: {
  filteredEvents: EventType[];
  hasError?: boolean;
}) {
  if (props.hasError) {
    return (
      <div className={styles.filteredPageContainer}>
        <h2>Invalid filter. Please adjust your values!</h2>
        <Button link="/events">Show All Events</Button>
      </div>
    );
  }

  const { filteredEvents } = props;

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

export async function getServerSideProps(context: Record<string, any>) {
  const { params } = context;
  const filteredData = params.slug;

  const year = filteredData[0];
  const month = filteredData[1];
  const numYear = +year;
  const numMonth = +month;

  if (isNaN(numYear) || isNaN(numMonth)) {
    return {
      props: {
        hasError: true,
      },
    };
  }

  const filteredEvents = await getRealFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  return {
    props: {
      filteredEvents,
    },
  };
}
