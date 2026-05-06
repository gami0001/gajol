const Nav = () => {
  return (
    <header className="flex justify-between items-center px-30 py-4 border-b sticky top-0 z-50">
      <div className="flex flex-col">
        <h2 className="text-2xl font-bold">
          NIGHT<span className="text-pink-500">CLUB</span>
        </h2>
        <h3 className="text-sm text-gray-500 tracking-wide">HAVE A GOOD TIME</h3>
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
