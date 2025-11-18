import Link from "next/link";

const Header = () => {
  return (
    <header
      className={`backdrop:blur-2xl shadow-2xl text-white fixed top-0 w-full left-0 backdrop-blur-lg z-100`}
    >
      <nav
        className={`flex max-w-5xl xl:max-w-7xl mx-auto justify-between items-center py-4`}
      >
        <a href="">
          <h4 className={`text-[min(10vw,24px)] font-serif font-bold`}>
            Analyzer
          </h4>
        </a>
        <ul className={`hidden md:flex gap-3 items-center text-secondary`}>
          <li>
            <Link href={"/home"} className="nav-btn pt-2 pb-2.5 px-5">
              Home
            </Link>
          </li>
          <li>
            <Link href={"/about"} className="nav-btn pt-2 pb-2.5 px-5">
              About
            </Link>
          </li>
          <li>
            <Link href={"/pricing"} className="nav-btn pt-2 pb-2.5 px-5">
              Pricing
            </Link>
          </li>
          <li>
            <Link href={"/contact"} className="nav-btn pt-2 pb-2.5 px-5">
              Contact
            </Link>
          </li>
        </ul>
        <ul className={`flex gap-6 items-center`}>
          <li>
            <button className={`btn-out py-2`}>LOG IN</button>
          </li>
          <li>
            <button className={`btn-con py-2`}>GET STARTED</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
