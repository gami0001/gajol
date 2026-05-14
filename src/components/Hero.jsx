import Image from "next/image";

const Hero = ({ text = "OVERSKRIFT" }) => {
  return (
    <div className="relative w-full h-40">
      <Image src="/assets/bg/footerbg.jpg" alt="background" fill className="object-cover" />

      <div className="absolute inset-0 bg-black-85" />

      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h1 className="text-white text-[40px] md:text-3xl uppercase">{text}</h1>

        <Image src="/assets/bottom_line2.png" alt="bottom line" width={200} height={20} />
      </div>
    </div>
  );
};

export default Hero;
