"use client";

import Link from "next/link";

const Nav = () => {
  return (
    <header className="relative sticky top-0 z-50 border-y border-primary-500 bg-black px-6 md:px-35 py-6">
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

      <div className="flex items-center justify-between">
        <div className="flex flex-col tracking-[0.13em]">
          <Link href="/" className="flex flex-col items-start">
            <h2 className="text-2xl font-bold text-white uppercase">
              Night<span className="text-primary-500">Club</span>
            </h2>

            <h3 className="text-[10px] tracking-[0.4em] text-white uppercase">Have a good time</h3>
          </Link>
        </div>

        <nav className="hidden md:block">
          <ul className="flex gap-8 text-white uppercase">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/events">Events</Link>
            </li>
            <li>
              <Link href="/book">Book Table</Link>
            </li>
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </nav>

        <button popoverTarget="mobile-menu" className="text-3xl text-white md:hidden">
          ☰
        </button>
      </div>

      <nav
        id="mobile-menu"
        popover="auto"
        className="
          fixed inset-0
          h-dvh w-dvw
          bg-black/90
          text-white
          m-0 p-0
        "
      >
        <div className="absolute top-6 right-6">
          <button popoverTarget="mobile-menu" popoverTargetAction="hide" className="text-4xl">
            ✕
          </button>
        </div>

        <ul className="flex h-full flex-col items-center justify-center gap-10 text-3xl uppercase">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/events">Events</Link>
          </li>
          <li>
            <Link href="/book">Book Table</Link>
          </li>
          <li>
            <Link href="/contact">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
