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

    return data.map((event, index) => {
      return <CardEvent key={event.id} id={event.id} title={event.title} date={event.date} location={event.location} description={event.description} asset={event.asset.url} index={index} />;
    });
  } catch (error) {
    return <p>Failed to load events. Please try again later.</p>;
  }
};

export default Events;
