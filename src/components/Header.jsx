import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="p-4 flex justify-between items-center fixed top-0 left-0 right-0 bg-transparentBrightColor">
      <Link to="/">
        <img className="w-10" src="../img/sunflower.png" alt="sunflower" />
      </Link>
      {/* //# aktive Seite mit gelbem Unterstrich */}
      <nav className="flex gap-5">
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/books">Books</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
    </header>
  );
};

export default Header;
