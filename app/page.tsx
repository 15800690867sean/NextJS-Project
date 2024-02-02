'use client';

import styles from "@/app/styles/page.module.css";
import EventList from "@/components/events/event-list";
import { EventType } from "@/mockData";
import { getRealFeaturedEvents } from "@/utils/api";
import { RefObject, useEffect, useRef, useState } from "react";

// this page is using client-side data fetching, which is not good for SEO
export default function HomePage() {
  const [events, setEvents] = useState<EventType[]>();
  const feedbackRef = useRef() as RefObject<HTMLInputElement>;

  useEffect(() => {
    getRealFeaturedEvents().then((res) => {
      setEvents(res);
    });
  }, []);

  const handleFeedback = () => {
    const feedback = feedbackRef.current?.value;
    console.log(feedback);
    fetch('/api/feedback', {
      method: 'POST',
      body: JSON.stringify({
        content: feedback,
      }),
      headers: {
        'Content-Type': 'application/json',
      }
    });
  }

  if (!events) {
    return <p>Loading...</p>
  }

  return (
    <div className={styles.homepage}>
      <label htmlFor="feedback">Feedback:</label>
      <input type="text" id="feedback" ref={feedbackRef}/>
      <button onClick={handleFeedback}>Submit Feedback</button>
      <EventList items={events}/>
    </div>
  );
}
