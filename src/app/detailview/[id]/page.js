import EventDetail from "@/components/EventDetail";
import { Suspense } from "react";

const DetailEvent = async ({ params }) => {
  return (
    <main className="min-h-screen py-5 px-10 md:px-12">
      <Suspense fallback={<div>Loading product details…</div>}>
        <FetchEventDetail params={params} />
      </Suspense>
    </main>
  );
};

const FetchEventDetail = async ({ params }) => {
  const { id } = await params;
  const response = await fetch(`https://nightclub2026.onrender.com/events/${id}`, {});
  const event = await response.json();

  return <EventDetail title={event.title} date={event.date} location={event.location} description={event.description} asset={event.asset?.url} />;
};

export default DetailEvent;
