"use client";

import React, { FormEvent, MutableRefObject, useRef } from "react";
import Button from "../ui/button";
import styles from './event-search.module.css';

interface IProps {
    onSearch: (year: string, month: string) => void;
}

export default function EventSearch(props: IProps) {
    const yearInput = useRef();
    const monthInput = useRef();

    function submitHandler(event: FormEvent) {
        event.preventDefault();

        const selectedYear = (yearInput.current as unknown as HTMLSelectElement).value;
        const selectedMonth = (monthInput.current as unknown as HTMLSelectElement).value;

        props.onSearch(selectedYear, selectedMonth);
    };
    
  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div className={styles.controls}>
        <div className={styles.control}>
          <label htmlFor="year">Year</label>
          <select id="year" ref={yearInput as unknown as MutableRefObject<HTMLSelectElement>}>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
          </select>
        </div>
        <div className={styles.control}>
          <label htmlFor="month">Month</label>
          <select id="month" ref={monthInput as unknown as MutableRefObject<HTMLSelectElement>}>
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
      </div>
      <Button>Find Events</Button>
    </form>
  );
}
