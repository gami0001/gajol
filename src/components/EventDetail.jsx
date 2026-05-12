import Image from "next/image";
import Hero from "./Hero";
import Nav from "./Nav";
import Button from "./Button";

const EventDetail = ({ title, heroAsset, description, date, doorsOpen, location, category, price, ageLimit, lineup, schedule }) => {
  const imageSrc = heroAsset?.startsWith("/") ? `https://nightclub2026.onrender.com${heroAsset}` : heroAsset;

  return (
    <section className="min-h-screen">
      <Nav />
      <Hero text={title} />
      <div className="mx-auto max-w-5xl px-6 py-10">
        {/* Image */}
        <div className="relative h-80 overflow-hidden rounded-xl">
          <Image src={imageSrc} alt={title || "event image"} fill className="object-cover" />
        </div>
        {/* Content */}
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {/* Left side */}
          <div>
            <h2 className="mb-4 text-2xl font-bold uppercase">{title}</h2>
            <p className="mb-6 text-gray-500">{description}</p>
            <div className="mb-6">
              <h3 className="mb-2 font-semibold uppercase text-primary-500">Lineup</h3>
              <p className="text-gray-500">{lineup}</p>
            </div>
            <div>
              <h3 className="mb-2 font-semibold uppercase text-primary-500">Schedule</h3>
              <p className="text-gray-500">{schedule}</p>
            </div>
          </div>
          {/* Right side */}
          <div className="rounded-xl border border-primary-500 p-6">
            <h3 className="mb-6 text-xl font-bold uppercase">Event Details</h3>

            <div className="space-y-4">
              <p>
                <span className="text-gray-500">Date:</span> {date}
              </p>
              <p>
                <span className="text-gray-500">Doors:</span> {doorsOpen}
              </p>
              <p>
                <span className="text-gray-500">Location:</span> {location}
              </p>
              <p>
                <span className="text-gray-500">Category:</span> {category}
              </p>
              <p>
                <span className="text-gray-500">Price:</span> <span className="text-primary-500 font-bold">{price}</span>
              </p>
              <p>
                <span className="text-gray-500">Age:</span> {ageLimit}
              </p>
            </div>

            <div className="mt-8">
              <Button variant="primary">BOOK NOW</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetail;
