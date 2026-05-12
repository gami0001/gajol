"use client";

import Link from "next/link";

const Nav = () => {
  return (
    <header className="sticky top-0 z-50 border-y border-primary-500 bg-black px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex flex-col tracking-[0.13em]">
          <h2 className="text-2xl font-bold text-white">
            NIGHT<span className="text-primary-500">CLUB</span>
          </h2>

          <h3 className="text-[10px] tracking-[0.4em] text-white">HAVE A GOOD TIME</h3>
        </div>

        <nav className="hidden md:block">
          <ul className="flex gap-8 text-white">
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

        {/* CENTER LINKS */}
        <ul className="flex h-full flex-col items-center justify-center gap-10 text-3xl">
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
