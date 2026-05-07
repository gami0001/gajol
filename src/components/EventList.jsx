import { Suspense } from "react";
import CardEvent from "./CardEvent";

const Events = () => {
  return (
    <div>
      <Suspense fallback={<p>Loading events…</p>}>
        <FetchEvent />
      </Suspense>
    </div>
  );
};
const FetchEvent = async () => {
  "use server";

  var url = `https://nightclub2026.onrender.com/events`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    return data.events.map((events) => {
      return <CardEvent id={events.id} title={events.title} date={events.date} location={events.location} description={events.description} asset={events.asset} />;
    });
  } catch (error) {
    return <p>Failed to load events. Please try again later.</p>;
  }
};

export default Events;
