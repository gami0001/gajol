import Image from "next/image";

async function getEvents() {
  const res = await fetch("https://nightclub2026.onrender.com/events");
  return res.json();
}

export default async function FeaturedEvents() {
  const events = await getEvents();

  return (
    <div className="flex justify-center gap-6 mt-10">
      {events.slice(0, 2).map((event) => {
        const date = new Date(event.date).toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
        });

        const time = new Date(event.date).toLocaleTimeString("da-DK", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        });

        return (
          <div key={event.id} className="w-[465px]">
            <div className="relative w-full h-[400px] overflow-hidden">
              <Image src={event.heroAsset?.url ? `https://nightclub2026.onrender.com${event.heroAsset.url}` : `https://nightclub2026.onrender.com${event.heroAsset}`} alt={event.title || "event image"} fill className="object-cover" />

              <div className="absolute bottom-0 left-0 w-full bg-pink-500 px-4 py-3 flex justify-between items-center">
                <h3 className="text-sm uppercase">{event.title}</h3>

                <p className="text-sm">
                  {date} · {time}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
