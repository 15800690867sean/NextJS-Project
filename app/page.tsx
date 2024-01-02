import Image from "next/image";
import styles from "@/app/styles/page.module.css";
import Link from "next/link";
import { getFeaturedEvents } from "@/mockData";
import EventList from "../components/events/event-list";

export default function HomePage() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <h1>Main Page</h1>
      <EventList items={featuredEvents}/>
    </div>
  );
}
