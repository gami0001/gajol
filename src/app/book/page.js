"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { z } from "zod";

import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Image from "next/image";
import Button from "@/components/Button";

const tableCapacities = {
  1: 4,
  2: 4,
  3: 6,
  4: 4,
  5: 8,
  6: 4,
  7: 4,
  8: 6,
  9: 4,
  10: 8,
  11: 4,
  12: 4,
  13: 6,
  14: 4,
  15: 8,
};

const reservationSchema = z
  .object({
    name: z.string().min(2, "Name is required"),
    email: z.string().email("Invalid email"),
    table: z.string().min(1, "Choose a table"),
    guests: z.string().min(1, "Number of guests required"),
    phone: z.string().min(6, "Phone number required"),
  })
  .superRefine((data, ctx) => {
    const tableNumber = Number(data.table);
    const guests = Number(data.guests);

    const max = tableCapacities[tableNumber];

    if (!max) {
      ctx.addIssue({
        path: ["table"],
        message: "Invalid table selected",
        code: "custom",
      });
      return;
    }

    if (guests > max) {
      ctx.addIssue({
        path: ["guests"],
        message: `Max ${max} guests allowed for this table`,
        code: "custom",
      });
    }
  });
const tableImages = ["/assets/table/table_1.png", "/assets/table/table_1.png", "/assets/table/table_2.png", "/assets/table/table_1.png", "/assets/table/table_3.png", "/assets/table/table_1.png", "/assets/table/table_1.png", "/assets/table/table_2.png", "/assets/table/table_1.png", "/assets/table/table_3.png", "/assets/table/table_1.png", "/assets/table/table_1.png", "/assets/table/table_2.png", "/assets/table/table_1.png", "/assets/table/table_3.png"];

const Book = () => {
  const searchParams = useSearchParams();
  const eventId = searchParams.get("eventId");

  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [reservedTables, setReservedTables] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    table: "",
    guests: "",
    phone: "",
    comment: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");
  const [submitError, setSubmitError] = useState("");

  // FETCH EVENTS
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch("https://nightclub2026.onrender.com/events");
        const data = await res.json();
        setEvents(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchEvents();
  }, []);

  // FETCH RESERVATIONS
  const fetchReservations = async (eventDate) => {
    try {
      const res = await fetch("https://nightclub2026.onrender.com/reservations");
      const data = await res.json();

      const filtered = data.filter((r) => new Date(r.date).toDateString() === new Date(eventDate).toDateString());

      setReservedTables(filtered.map((r) => String(r.table)));
    } catch (error) {
      console.error(error);
    }
  };

  // APPLY EVENT (single source of truth)
  const applyEvent = (event) => {
    if (!event) return;

    setSelectedEvent(event);

    fetchReservations(event.date);

    window.history.replaceState(null, "", `/book?eventId=${event.id}`);
  };

  // URL AUTO SELECT
  useEffect(() => {
    if (!eventId || events.length === 0) return;

    const found = events.find((e) => String(e.id) === String(eventId));

    if (found) {
      applyEvent(found);
    }
  }, [eventId, events]);

  // INPUT CHANGE
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // TABLE SELECT
  const handleSelectTable = (tableNumber) => {
    if (reservedTables.includes(String(tableNumber))) return;

    setFormData((prev) => ({
      ...prev,
      table: String(tableNumber),
    }));
  };

  // EVENT CHANGE
  const handleEventChange = (e) => {
    const event = events.find((ev) => String(ev.id) === e.target.value);

    applyEvent(event);
  };

  // SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    setSuccess("");
    setSubmitError("");

    if (!selectedEvent) {
      setSubmitError("Please choose a night first.");
      return;
    }

    try {
      reservationSchema.parse(formData);
      setErrors({});
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors = {};

        error.issues.forEach((err) => {
          newErrors[err.path[0]] = err.message;
        });

        setErrors(newErrors);
      }
      return;
    }

    try {
      const response = await fetch("https://nightclub2026.onrender.com/reservations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          eventId: selectedEvent.id,
          date: selectedEvent.date,
          eventTitle: selectedEvent.title,
        }),
      });

      if (response.status === 409) {
        setSubmitError("This table is already reserved.");
        return;
      }

      if (!response.ok) throw new Error();

      setSuccess("Reservation successful!");

      setReservedTables((prev) => [...prev, formData.table]);

      setFormData({
        name: "",
        email: "",
        table: "",
        guests: "",
        phone: "",
        comment: "",
      });
    } catch (error) {
      console.error(error);
      setSubmitError("Failed to send reservation.");
    }
  };

  return (
    <div>
      <Nav />
      <Hero text="Book table" />

      {/* TABLES */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mt-20 mx-30">
        {tableImages.map((src, index) => {
          const tableNumber = String(index + 1);

          const isReserved = reservedTables.includes(tableNumber);
          const isSelected = formData.table === tableNumber;

          return (
            <button
              key={index}
              type="button"
              onClick={() => handleSelectTable(tableNumber)}
              disabled={isReserved}
              className={`
                relative flex items-center justify-center
                ${isReserved ? "opacity-30 cursor-not-allowed" : "cursor-pointer"}
                ${isSelected ? "scale-110 transition" : ""}
              `}
            >
              <Image src={src} alt={`table ${tableNumber}`} width={200} height={20} />
              <span className="absolute font-bold text-m">{tableNumber}</span>
            </button>
          );
        })}
      </div>

      {/* FORM */}
      <div className="mt-5 mx-5 md:mt-20 md:mx-30">
        <h2 className="uppercase text-2xl font-bold">Book a Table</h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {/* NAME */}
          <div>
            <input name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} className="w-full border px-5 py-5" />
            {errors.name && <p className="text-pink-500 text-sm mt-1">{errors.name}</p>}
          </div>

          {/* EMAIL */}
          <div>
            <input name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} className="w-full border px-5 py-5" />
            {errors.email && <p className="text-pink-500 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* TABLE */}
          <div>
            <input name="table" placeholder="Table Number" value={formData.table} onChange={handleChange} className="w-full border px-5 py-5" />
            {errors.table && <p className="text-pink-500 text-sm mt-1">{errors.table}</p>}
          </div>

          {/* GUESTS */}
          <div>
            <input name="guests" placeholder="Number of Guests" value={formData.guests} onChange={handleChange} className="w-full border px-5 py-5" />
            {errors.guests && <p className="text-pink-500 text-sm mt-1">{errors.guests}</p>}
          </div>

          {/* EVENT */}
          <div>
            <select value={selectedEvent ? String(selectedEvent.id) : ""} onChange={handleEventChange} className="w-full border px-5 py-5 bg-black">
              <option value="" disabled>
                Choose a night
              </option>

              {events.map((event) => (
                <option key={event.id} value={String(event.id)}>
                  {event.title}
                </option>
              ))}
            </select>
          </div>

          {/* PHONE */}
          <div>
            <input name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} className="w-full border px-5 py-5" />
            {errors.phone && <p className="text-pink-500 text-sm mt-1">{errors.phone}</p>}
          </div>

          {/* COMMENT */}
          <div className="md:col-span-2">
            <textarea name="comment" placeholder="Comment" value={formData.comment} onChange={handleChange} className="w-full border px-5 py-5" />
          </div>

          {/* SUCCESS + ERROR */}
          {success && <p className="text-green-500 md:col-span-2">{success}</p>}

          {submitError && <p className="text-pink-500 md:col-span-2">{submitError}</p>}

          {/* BUTTON */}
          <div className="md:col-span-2 flex justify-end">
            <Button type="submit" variant="primary">
              RESERVE
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Book;
