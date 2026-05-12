import Image from "next/image";

const EventDetail = ({ title, asset, description }) => {
  const imageSrc = asset?.startsWith("/") ? `https://nightclub2026.onrender.com${asset}` : asset;

  return (
    <section>
      <div className="relative min-h-125">
        <Image src={imageSrc} alt={title || "event image"} fill className="object-cover" />
      </div>
      <h3 className="text-xl uppercase">{title}</h3>
      <p className="text-gray-500">{description}</p>
    </section>
  );
};

export default EventDetail;
