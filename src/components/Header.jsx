import Image from "next/image";
import Button from "./Button";
import Link from "next/link";

const Header = () => {
  return (
    <div className="relative w-full h-150">
      <Image src="/assets/bg/header_bg_2.jpg" alt="background" fill className="object-cover" />

      {/* overlay */}
      <div className="absolute inset-0 bg-black-70" />

      {/* centered text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-5">
        <Image src="/assets/icon/Logo.svg" alt="logo" width={700} height={30}></Image>
        <h3 className="text-[30px] tracking-[0.65em] uppercase">Have a good time</h3>
        <Image src="/assets/bottom_line.png" alt="bottom line" width={500} height={30} />
        <div className="grid grid-cols-2 gap-5 mt-5">
          <Link href="/events">
            <Button variant="secondary">View event</Button>
          </Link>
          <Link href="/book">
            <Button variant="tertiary">Book table</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
