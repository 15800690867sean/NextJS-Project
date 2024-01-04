"use client";
import Link from "next/link";
import React, { ReactNode } from "react";
import styles from "./button.module.css";

interface IProps {
  link: string;
  children?: ReactNode;
}

export default function Button(props: IProps) {
  return (
    <Link className={styles.btn} href={props.link}>
      {props.children}
    </Link>
  );
}
