import Image from "next/image";
import Button from "@/components/Button";
import Header from "@/components/Header";
import Nav from "@/components/Nav";
import { Suspense } from "react";
import FeaturedEvents from "@/components/FeaturedEvents";

export default function Home() {
  return (
    <main>
      <Header />
      <Nav />
      <h2 className="pt-20 text-center text-[25px] uppercase">welcome in nightclub</h2>
      <Image className="mx-auto" src="/assets/bottom_line2.png" alt="bottom line" width={200} height={20} />

      <div className="flex flex-col md:flex-row justify-center gap-6 mt-10 items-center">
        <Image src="/assets/content-img/thumb1.jpg" alt="Food on table" width={300} height={300} />
        <Image src="/assets/content-img/reastaurant_1.jpg" alt="Food and waiter" width={300} height={300} />
        <Image src="/assets/content-img/thumb2.jpg" alt="A girl in the club" width={300} height={300} />
      </div>

      <h2 className="pt-30 text-center text-[25px] uppercase">featured events</h2>
      <Image className="mx-auto" src="/assets/bottom_line2.png" alt="bottom line" width={200} height={20} />

      <Suspense fallback={<p className="text-center">Loading events...</p>}>
        <FeaturedEvents />
      </Suspense>

      <div className="my-30">
        <h2 className="text-center text-xl uppercase">Want the latest club news?</h2>
        <h3 className="text-center">
          Subscribe to our newsletter and never miss an <span className="text-primary-500">Event</span>
        </h3>
        <div className="text-center mt-10">
          <input className="border-b-1 pb-2 mr-8" type="email" id="email" pattern=".+@example\.com" size="50" required placeholder="Enter Your Email" />
          <Button variant="primary">Subscribe</Button>
        </div>
      </div>
    </main>
  );
}
