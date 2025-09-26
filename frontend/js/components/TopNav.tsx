import { NavLink } from "react-router";

const TopNav = () => {
  return (
    <header className="sticky top-0 z-50">
      <nav aria-label="Primary" className="nav">
        <div className="flex items-center gap-2 px-4 py-2">
          <a className="nav-brand" href="/">
            django-react-boilerplate
          </a>

          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-link nav-link--active" : "nav-link"
            }
            end
            to="/"
          >
            Home
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-link nav-link--active" : "nav-link"
            }
            to="/users"
          >
            Users
          </NavLink>
        </div>
      </nav>
    </header>
  );
};
export default TopNav;
