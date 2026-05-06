const Nav = () => {
  return (
    <header className="flex justify-between items-center px-30 py-4 border-b sticky top-0 z-50">
      <div className="flex flex-col tracking-[0.12em]">
        <h2 className="text-2xl font-bold">
          NIGHT<span className="text-pink-500">CLUB</span>
        </h2>
        <h3 className="text-[11px] tracking-[0.3em]">HAVE A GOOD TIME</h3>
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
