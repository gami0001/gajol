const Nav = () => {
  return (
    <div>
      <h1 className="text-4xl text-blue-500 font-bold">Virker Tailwind?</h1>
      <h2>
        NIGHT<span>CLUB</span>
      </h2>
      <h3>Have a good time</h3>

      <nav>
        <ul class="menu">
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
    </div>
  );
};

export default Nav;
