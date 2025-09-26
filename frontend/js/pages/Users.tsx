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
            {/* Anchor elements do not natively support 'aria-disabled', which can cause accessibility issues. To improve accessibility, use 'tabIndex={-1}' with 'aria-disabled', or render a instead of when disabled. */}
            {!prev ? (
              <span
                aria-disabled="true"
                className="users-btn users-btn--primary users-btn--disabled"
                tabIndex={-1}
              >
                ← Previous
              </span>
            ) : (
              <Link className="users-btn users-btn--primary" to={prev}>
                ← Previous
              </Link>
            )}
            {!next ? (
              <span
                aria-disabled="true"
                className="users-btn users-btn--primary users-btn--disabled"
                tabIndex={-1}
              >
                Next →
              </span>
            ) : (
              <Link className="users-btn users-btn--primary" to={next}>
                Next →
              </Link>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Users;
