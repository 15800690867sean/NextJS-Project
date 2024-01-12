import styles from "@/app/styles/page.module.css";
// import { getFeaturedEvents } from "@/mockData";
import EventList from "../components/events/event-list";
import { EventType } from "@/mockData";
import path from "path";
import fs from 'fs/promises';

export default async function HomePage() {
  // const featuredEvents = getFeaturedEvents();
  const featuredEvents: EventType[] = (await fetchData()).featuredEvents;

  return (
    <div className={styles.homepage}>
      <EventList items={featuredEvents}/>
    </div>
  );
}

const fetchData = async () => {
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData as unknown as string);
  return {
      featuredEvents: data.events,
  }
}
