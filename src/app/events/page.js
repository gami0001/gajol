import EventList from "@/components/EventList";
import Hero from "@/components/Hero";
import Image from "next/image";

const Events = () => {
  return (
    <div>
      <Hero text="EVENTS" />
      <EventList />
    </div>
  );
};

export default Events;
