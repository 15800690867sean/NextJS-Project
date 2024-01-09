"use client";
import Link from "next/link";
import React, { ReactNode } from "react";
import styles from "./button.module.css";

interface IProps {
  link?: string;
  children?: ReactNode;
  onClick?: () => void;
}

export default function Button(props: IProps) {
  return props.link ? (
    <Link className={styles.btn} href={props.link}>
      {props.children}
    </Link>
  ) : (
    <button className={styles.btn} onClick={props.onClick}>{props.children}</button>
  );
}
