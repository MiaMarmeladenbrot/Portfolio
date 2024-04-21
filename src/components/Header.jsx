import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="p-4 flex justify-between items-center fixed top-0 left-0 right-0 bg-transparentBrightColor">
      <Link to="/">
        <img className="w-10" src="../img/sunflower.png" alt="sunflower" />
      </Link>
      <nav className="flex gap-5">
        <NavLink
          to="/projects"
          className={"hover:text-lightGreyColor text-[#000000]"}
        >
          Projects
        </NavLink>
        <NavLink
          to="/books"
          className={"hover:text-lightGreyColor text-[#000000]"}
        >
          Books
        </NavLink>
        <NavLink
          to="/about"
          className={"hover:text-lightGreyColor text-[#000000]"}
        >
          About
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
