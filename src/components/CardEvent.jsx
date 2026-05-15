import Image from "next/image";
import Button from "./Button";
import Link from "next/link";

const CardEvent = ({ id, title, date, location, description, asset, index }) => {
  const imageSrc = asset?.startsWith("/") ? `https://nightclub2026.onrender.com${asset}` : asset;

  const cleanDate = date.split("T")[0];

  const isReversed = index % 2 === 1;

  return (
    <section className={`flex gap-6 ${isReversed ? "flex-row-reverse" : "flex-row"}`}>
      <div className="relative min-h-100 w-1/2">
        <Image src={imageSrc} alt={title || "event image"} fill className="object-cover" />
      </div>

      <div className={`w-1/2 flex flex-col gap-4 pt-10 ${isReversed ? "pl-40 pr-4" : "pr-40 pl-4"}`}>
        <h3 className="text-xl uppercase">{title}</h3>

        <div className="flex gap-2">
          <p className="text-primary-500">{cleanDate}</p>
          <span>|</span>
          <p className="uppercase">{location}</p>
        </div>

        <p className="text-gray-500">{description}</p>

        <div className="mt-4 flex justify-end">
          <Link href={`/detailview/${id}`}>
            <Button variant="primary">READ MORE</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CardEvent;
