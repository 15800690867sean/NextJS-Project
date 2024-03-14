"use client";

import EventList from "@/components/events/event-list";
import { EventType } from "@/mockData";
import styles from "./page.module.css";
import React, { useState } from "react";
import Button from "@/components/ui/button";
import { getRealFilteredEvents } from "@/utils/api";
import Head from "next/head";
import { useParams } from "next/navigation";

export default function FilteredEventsPage(props: {
  filteredEvents: EventType[];
  hasError?: boolean;
}) {
  const params = useParams();
  const [filteredEvents, setFilteredEvents] = useState([] as EventType[]);

  if (!params) {
    return;
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

  getRealFilteredEvents({
    year: numYear,
    month: numMonth,
  }).then(data => {
    setFilteredEvents(data);
  });

  let pageHeadData = <Head>
    <title>
      Filtered Events
    </title>
    <meta
      name="description"
      content="No events found"
    />
  </Head>

  if (!filteredEvents || !filteredEvents.length) {
    return (
      <div className={styles.filteredPageContainer}>
        {pageHeadData}
        <h2>No events found for the chosen filter!</h2>
        <Button link="/events">Show All Events</Button>
      </div>
    );
  }

  pageHeadData = <Head>
    <title>
      Filtered Events
    </title>
    <meta
      name="description"
      content="Events for the chosen filter"
    />
  </Head>

  return (
    <div className={styles.filteredPageContainer}>
      {pageHeadData}
      <h2>Here are the filtered events</h2>
      <Button link="/events">Show All Events</Button>
      <EventList items={filteredEvents} />
    </div>
  );
}
