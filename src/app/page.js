import Image from "next/image";
import EventList from "../components/EventList";
import Button from "@/components/Button";
import Header from "@/components/Header";
import Nav from "@/components/Nav";

export default function Home() {
  return (
    <main>
      <Header />
      <Nav />
      <EventList />
      <div className="my-30">
        <h2 className="text-center text-xl">WANT THE LATEST CLUB NEWS?</h2>
        <h3 className="text-center">
          Subscribe to our newsletter and never miss an <span className="text-primary-500">Event</span>
        </h3>
        <div className="text-center mt-10">
          <input className="border-b-1 pb-2 mr-8" type="email" id="email" pattern=".+@example\.com" size="50" required placeholder="Enter Your Email" />
          <Button variant="primary">SUBSCRIBE</Button>
        </div>
      </div>
    </main>
  );
}
