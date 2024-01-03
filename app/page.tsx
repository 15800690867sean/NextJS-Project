import styles from "@/app/styles/page.module.css";
import { getFeaturedEvents } from "@/mockData";
import EventList from "../components/events/event-list";

export default function HomePage() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div className={styles.homepage}>
      <EventList items={featuredEvents}/>
    </div>
  );
}
