"use client";

import { EventType, getEventById } from "@/mockData";
import { useParams } from "next/navigation";
import React from "react";
import styles from "./detailPage.module.css";
import DateIcon from "@/components/icons/date-icon";
import AddressIcon from "@/components/icons/address-icon";
// import { getRealAllEvents, getRealEventById } from "@/utils/api";
import Comments from "@/components/input/comments";

export default function EventDetailPage(props: {
  event: EventType;
}) {
  const params = useParams();
  if (!params) {
    return <p>Loading...</p>
  }

  const { eventId } = params as Record<string, string | string[]>;
  const event = getEventById(eventId as string);

  // const { event } = props;

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
      <div className={styles.event}>
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
      <Comments eventId={props.event.id}/>
    </div>
  );
}

// export async function getStaticProps(context: Record<string, any>) {
//   const { eventId } = context.params;
//   const event = await getRealEventById(eventId);
//   return {
//     props: {
//       event
//     },
//     revalidate: 30,
//   }
// }

// export async function getStaticPaths() {
//   const allEvents = await getRealAllEvents();
//   const pathArr = allEvents.map((event) => {
//     return {
//       params: {eventId: event.id}
//     }
//   })
//   return {
//     paths: pathArr,
//     fallback: true,
//   }
// }
