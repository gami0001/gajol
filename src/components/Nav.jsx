const Nav = () => {
  return (
    <header className="flex justify-between items-center px-30 py-4 border-y sticky top-0 z-50 border-primary-500" style={{ background: "var(--background)" }}>
      <div
        className="absolute top-0 left-0 w-10 h-10 bg-primary-500"
        style={{
          clipPath: "polygon(0 0, 100% 0, 0 100%)",
        }}
      />

      <div
        className="absolute bottom-0 right-0 w-15 h-15 bg-primary-500"
        style={{
          clipPath: "polygon(100% 100%, 100% 0, 0 100%)",
        }}
      />
      <div className="flex flex-col tracking-[0.13em]">
        <h2 className="text-2xl font-bold">
          NIGHT<span className="text-primary-500">CLUB</span>
        </h2>
        <h3 className="text-[10px] tracking-[0.4em]">HAVE A GOOD TIME</h3>
      </div>

      <nav>
        <ul className="flex gap-8">
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/events">Events</a>
          </li>
          <li>
            <a href="/book">Book table</a>
          </li>
          <li>
            <a href="/contact">Contact us</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
