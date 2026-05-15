import Image from "next/image";

export default function WelcomeCard({ image, icon, title, text }) {
  return (
    <div className="relative w-[90%] md:w-[300px] h-[400px] overflow-hidden group">
      <Image src={image} alt={title} width={300} height={400} className="object-cover w-full h-full transition duration-300 group-hover:scale-110" />

      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex flex-col justify-center items-center text-white text-center p-4">
        {/* ICON */}

        <div
          className="absolute top-0 left-0 w-10 h-10 bg-primary-500"
          style={{
            clipPath: "polygon(0 0, 100% 0, 0 100%)",
          }}
        />

        <div
          className="absolute bottom-0 right-0 w-10 h-10 bg-primary-500"
          style={{
            clipPath: "polygon(100% 100%, 100% 0, 0 100%)",
          }}
        />

        <div className="mb-2">{icon}</div>

        <h3 className="uppercase text-lg">{title}</h3>
        <p className="text-sm text-gray-200">{text}</p>
      </div>
    </div>
  );
}
