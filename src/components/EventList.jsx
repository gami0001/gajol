"use client";

import { useEffect, useState } from "react";
import CardEvent from "./CardEvent";

const EVENTS_PER_PAGE = 3;

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("https://nightclub2026.onrender.com/events");
        const data = await response.json();

        setEvents(data);
      } catch (error) {
        console.error("Failed to load events");
      }
    };

    fetchEvents();
  }, []);

  // Pagination logic
  const startIndex = (currentPage - 1) * EVENTS_PER_PAGE;
  const endIndex = startIndex + EVENTS_PER_PAGE;

  const currentEvents = events.slice(startIndex, endIndex);

  const totalPages = Math.ceil(events.length / EVENTS_PER_PAGE);

  return (
    <div className="flex flex-col  mb-12">
      {currentEvents.map((event, index) => (
        <CardEvent key={event.id} id={event.id} title={event.title} date={event.date} location={event.location} description={event.description} asset={event.asset.url} index={index} />
      ))}

      <div className="flex justify-center items-center gap-8 mt-10 text-lg">
        {/* Page numbers */}
        {Array.from({ length: totalPages }, (_, i) => (
          <button key={i} onClick={() => setCurrentPage(i + 1)} className={`transition pb-1 ${currentPage === i + 1 ? "border-b border-white" : ""}`}>
            {i + 1}
          </button>
        ))}
        {currentPage < totalPages && <button onClick={() => setCurrentPage(currentPage + 1)}>næste &gt;</button>}
      </div>
    </div>
  );
};

export default EventList;
