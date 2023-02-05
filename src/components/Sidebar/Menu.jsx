import Icon from "Icons";
import { NavLink } from "react-router-dom";

export default function Menu() {
  return (
    <nav className="px-2">
      <ul className="flex flex-col">
        <li>
          <NavLink
            activeClassName="bg-active text-white"
            exact
            to="/"
            className="h-10 flex gap-x-4 items-center text-sm font-semibold text-link hover:text-white px-4 bg-active rounded"
          >
            <span>
              <Icon name="home" />
            </span>
            Ana sayfa
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName="bg-active text-white"
            to="/search"
            className="h-10 flex gap-x-4 items-center text-sm font-semibold text-link px-4  rounded"
          >
            <span>
              <Icon name="search" />
            </span>
            Ara
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName="bg-active text-white"
            to="/books"
            className="h-10 flex gap-x-4 items-center text-sm font-semibold text-link px-4  rounded"
          >
            <span>
              <Icon name="books" />
            </span>
            Kitaplığım
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
