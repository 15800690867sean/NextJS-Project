export interface EventType {
  id: string;
  title: string;
  description: string;
  location: string;
  date: string;
  image: string;
  isFeatured: boolean;
}

const mockData: EventType[] = [
  {
    id: "e1",
    title: "Demo Event Number 1",
    description: "this is the first demo event",
    location: "somewhere in Sydney",
    date: "2023-12-25",
    image: "images/animal-event.jpg",
    isFeatured: false,
  },
  {
    id: "e2",
    title: "Demo Event Number 2",
    description: "this is the second demo event",
    location: "somewhere in Melbourne",
    date: "2024-01-01",
    image: "images/animal-event.jpg",
    isFeatured: true,
  },
  {
    id: "e3",
    title: "Demo Event Number 3",
    description: "this is the third demo event",
    location: "somewhere in Queensland",
    date: "2024-11-11",
    image: "images/animal-event.jpg",
    isFeatured: true,
  },
];

export function getFeaturedEvents() {
  return mockData.filter((event) => event.isFeatured);
}

export function getAllEvents() {
  return mockData;
}

export function getFilteredEvents(dateFilter: { year: number; month: number }) {
  const { year, month } = dateFilter;

  let filteredEvents = mockData.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}

export function getEventById(id: string) {
  return mockData.find((event) => event.id === id);
}
