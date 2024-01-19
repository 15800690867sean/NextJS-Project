import { EventType } from "@/mockData";

export async function getRealAllEvents() {
    const response = await fetch('https://nextjs-backend-b4b66-default-rtdb.firebaseio.com/events.json');
    const data : Record<string, Omit<EventType, 'id'>> = await response.json();

    const events = [];

    for(const key in data) {
        events.push({
            id: key,
            ...data[key],
        });
    };

    return events;
}

export async function getRealFeaturedEvents() {
    const allEvents = await getRealAllEvents();
    return allEvents.filter((event) => event.isFeatured);
}