"use client";

import { EventType } from "@/mockData";
import Button from "../ui/button";
import React from "react";
import styles from "./event-item.module.css";
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";
import Image from "next/image";

export default function EventItem(props: EventType) {
  const { title, image, date, location, id } = props;

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const exploreLink = `/events/${id}`;

  return (
    <li className={styles.item}>
      <Image src={`/${image}`} alt={title} width={340} height={160} />
      <div className={styles.infoBlock}>
        <div className={styles.content}>
          <h2>{title}</h2>
          <div className={styles.rol}>
            <DateIcon />
            <time>{humanReadableDate}</time>
          </div>
          <div className={styles.rol}>
            <AddressIcon />
            <address>{location}</address>
          </div>
        </div>
        <Button link={exploreLink}>
          <div className={styles.rol}>
            <span>Explore event</span>
            <ArrowRightIcon />
          </div>
        </Button>
      </div>
    </li>
  );
}
