import EventList from "@/components/EventList";
import Hero from "@/components/Hero";
import Image from "next/image";
import Nav from "@/components/Nav";

const Events = () => {
  return (
    <div>
      <Nav />
      <Hero text="EVENTS" />
      <EventList />
    </div>
  );
};

export default Events;
