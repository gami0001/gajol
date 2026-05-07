import Image from "next/image";
import EventList from "../components/EventList";

export default function Home() {
  return (
    <main>
      <EventList />
      <div>
        <h2>WANT THE LATEST CLUB NEWS?</h2>
      </div>
    </main>
  );
}
