'use client';

import styles from "@/app/styles/page.module.css";
import EventList from "@/components/events/event-list";
import Button from "@/components/ui/button";
import { EventType } from "@/mockData";
import { getRealFeaturedEvents } from "@/utils/api";
import { RefObject, useEffect, useRef, useState } from "react";

// this page is using client-side data fetching, which is not good for SEO
export default function HomePage() {
  const [events, setEvents] = useState<EventType[]>();
  const [feedbacks, setFeedbacks] = useState([]);
  const feedbackRef = useRef() as RefObject<HTMLInputElement>;

  useEffect(() => {
    getRealFeaturedEvents().then((res) => {
      setEvents(res);
    });
    getFeedbackList();
  }, []);

  const getFeedbackList = () => {
    fetch('/api/feedback').then((res) => {
      console.log('response:', res);
      return res.json();
    }).then((data) => {
      console.log('data:', data.data);
      if (data.data) {
        setFeedbacks(data.data);
      }
    })
  }

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
    }).then((res) => {
      console.log('feedback response:', res)
      const status = res.status;
      switch (status) {
        case 200:
          alert('Feedback fetched!')
          break;
        case 201:
          alert('Feedback submitted successfully!');
          break;
        default:
          alert('Feedback submission failed! Try again.');
          break;
      }
    }).finally(() => {
      getFeedbackList();
    });
  }

  if (!events) {
    return <p>Loading...</p>
  }

  return (
    <div className={styles.homepage}>
      <div className={styles.feedback}>
        <label className={styles.label} htmlFor="feedback">Feedback:</label>
        <input className={styles.input} type="text" id="feedback" ref={feedbackRef}/>
        <Button onClick={handleFeedback}>Submit Feedback</Button>
        <Button link="feedback">Show Feedbacks</Button>
      </div>
      <EventList items={events}/>
    </div>
  );
}
