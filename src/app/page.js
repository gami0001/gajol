import Image from "next/image";
import EventList from "../components/EventList";

export default function Home() {
  return (
    <main>
      <EventList />
      <div>
        <h2 className="text-center">WANT THE LATEST CLUB NEWS?</h2>
        <h3 className="text-center">
          Subscribe to our newsletter and never miss an <span className="text-primary-500">Event</span>
        </h3>
        <input className="border-b-2" type="email" id="email" pattern=".+@example\.com" size="30" required placeholder="Enter your email" />
      </div>
    </main>
  );
}
