import EventDetail from "@/components/EventDetail";
import Hero from "@/components/Hero";
import { Suspense } from "react";

const DetailEvent = async ({ params }) => {
  return (
    <main>
      <Suspense fallback={<div>Loading product details…</div>}>
        <FetchEventDetail params={params} />
      </Suspense>
    </main>
  );
};

const FetchEventDetail = async ({ params, title }) => {
  const { id } = await params;
  const response = await fetch(`https://nightclub2026.onrender.com/events/${id}`, {});
  const event = await response.json();

  return (
    <div>
      <EventDetail id={id} heroAsset={event.heroAsset?.url} title={event.title} description={event.description} date={event.date} doorsOpen={event.doorsOpen} location={event.location} category={event.category} price={event.price} ageLimit={event.ageLimit} lineup={event.lineup} schedule={event.schedule.time} />
    </div>
  );
};

export default DetailEvent;
