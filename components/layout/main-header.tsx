"use client";

import Link from "next/link";
import React from "react";
import styles from './main-header.module.css';

export default function MainHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href={"/"}>NextEvents</Link>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href={"/events"}>Browser All Events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
