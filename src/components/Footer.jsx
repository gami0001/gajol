import Image from "next/image";

const Footer = () => {
  return (
    <div className="relative w-full h-100 z-0">
      <Image src="/assets/bg/footerbg.jpg" alt="background" fill className="object-cover" />

      {/* overlay */}
      <div className="absolute inset-0 bg-black-90 z-0" />

      {/* content */}
      <div className="relative z-10 grid grid-cols-2 gap-4 pt-20 mx-30">
        <div className="flex flex-col tracking-[0.13em]">
          <h2 className="text-2xl font-bold uppercase">
            Night<span className="text-primary-500">Club</span>
          </h2>
          <h3 className="text-[10px] tracking-[0.4em] uppercase">Have a good time</h3>

          <h4 className="text-primary-500 mt-10 uppercase">Location</h4>
          <p>Kompagnistræde 278</p>
          <p>1265 København K</p>
          <h4 className="text-primary-500 mt-10 uppercase">Opening Hours</h4>
          <p>WED - THU 10:30 PMTO 3 AM</p>
          <p>SAT - SUN: 11 PM TO 5 AM</p>
        </div>
        <div className="grid grid-cols-2 gap-10">
          <div>
            <h4 className="text-primary-500 uppercase">News</h4>
            <p className="mt-10">Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
            <p className="text-primary-500">April 17, 2026</p>
            <p className="mt-10">Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
            <p className="text-primary-500">April 17, 2026</p>
          </div>
          <div>
            <h4 className="text-primary-500 uppercase">Recent Posts</h4>
            <p className="mt-10">It is a long established fact that a reader will be distracted by the readable... </p>
            <p className="text-primary-500">5 hours ago</p>
            <p className="mt-10">It is a long established fact that a reader will be distracted by the readable... </p>
            <p className="text-primary-500">5 hours ago</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center mt-30 mx-10">
        <p className="text-gray-500">Night Club - All Rights Reserved</p>
        <p>Stay Connected With Us</p>
        <p className="text-gray-500">Copyright © NightClub</p>
      </div>
    </div>
  );
};

export default Footer;
