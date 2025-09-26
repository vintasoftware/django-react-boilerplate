import { Link, useLoaderData } from "react-router";

import { PaginatedUserList } from "../api";
import { TopNav } from "../components";
import "../../css/users.css";

const Users = () => {
  const data = useLoaderData<PaginatedUserList>();

  const makeLink = (href: string | null | undefined) => {
    if (!href) return null;
    const u = new URL(href, window.location.origin);
    return `?${u.searchParams.toString()}`;
  };

  const prev = makeLink(data.previous);
  const next = makeLink(data.next);

  return (
    <>
      <TopNav />
      <section className="users-wrap">
        <h1 className="users-title">Users</h1>

        <ul className="users-list">
          {data.results.map((u) => (
            <li key={u.id} className="users-item">
              {u.email}
            </li>
          ))}
        </ul>

        <div className="users-pager">
          <span className="users-count">
            {data.results.length} on this page • {data.count} total
          </span>

          <div className="flex items-center gap-2">
            <Link
              aria-disabled={!prev}
              className="users-btn users-btn--primary"
              to={prev || "#"}
              onClick={(e) => !prev && e.preventDefault()}
            >
              ← Previous
            </Link>
            <Link
              aria-disabled={!next}
              className="users-btn users-btn--primary"
              to={next || "#"}
              onClick={(e) => !next && e.preventDefault()}
            >
              Next →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Users;
