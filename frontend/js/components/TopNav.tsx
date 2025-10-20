import { NavLink } from 'react-router';

const TopNav = () => {
  return (
    <header className="sticky top-0 z-50">
      <nav
        aria-label="Primary"
        className="mx-auto mt-4 mb-6 max-w-6xl rounded-xl bg-zinc-900/80 backdrop-blur ring-1 ring-white/10"
      >
        <div className="flex items-center gap-2 px-4 py-2">
          <a className="mr-2 font-semibold tracking-tight text-white" href="/">
            django-react-boilerplate
          </a>

          <NavLink
            className={({ isActive }) =>
              [
                'px-3 py-2 rounded-lg text-sm font-medium text-zinc-300 transition',
                'hover:text-white hover:bg-white/5',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40',
                isActive ? 'text-white bg-white/10' : '',
              ].join(' ')
            }
            end
            to="/"
          >
            Home
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              [
                'px-3 py-2 rounded-lg text-sm font-medium text-zinc-300 transition',
                'hover:text-white hover:bg-white/5',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40',
                isActive ? 'text-white bg-white/10' : '',
              ].join(' ')
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
