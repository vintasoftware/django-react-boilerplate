import { Link, useLoaderData } from 'react-router';

import { PaginatedUserList } from '@/js/api';
import { TopNav } from '@/js/components';
import { makeLink } from '@/js/utils';

const Users = () => {
  const data = useLoaderData<PaginatedUserList>();

  const prev = makeLink(data.previous);
  const next = makeLink(data.next);

  return (
    <>
      <TopNav />
      <section className="mx-auto max-w-3xl px-4">
        <h1 className="mt-4 mb-3 font-semibold text-slate-950">Users</h1>

        <ul className="bg-white rounded-xl border border-zinc-300">
          {data?.results?.map((u) => (
            <li
              key={u.id}
              className="px-4 py-3 text-sm text-slate-900 border-t border-zinc-200 first:border-t-0 hover:bg-slate-50"
            >
              {u.email}
            </li>
          ))}
        </ul>

        <div className="mt-3 flex items-center justify-between text-sm">
          <span className="text-slate-600">
            {data?.results?.length} on this page • {data.count} total
          </span>

          <div className="flex items-center gap-2">
            {!prev ? (
              <span
                aria-disabled="true"
                className="inline-flex items-center gap-1 px-3 py-2 rounded-lg text-sm text-white bg-emerald-600 border border-transparent opacity-45 pointer-events-none"
                tabIndex={-1}
              >
                ← Previous
              </span>
            ) : (
              <Link
                className="inline-flex items-center gap-1 px-3 py-2 rounded-lg text-sm text-white bg-emerald-600 hover:bg-emerald-700 border border-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/45"
                to={prev}
              >
                ← Previous
              </Link>
            )}

            {!next ? (
              <span
                aria-disabled="true"
                className="inline-flex items-center gap-1 px-3 py-2 rounded-lg text-sm text-white bg-emerald-600 border border-transparent opacity-45 pointer-events-none"
                tabIndex={-1}
              >
                Next →
              </span>
            ) : (
              <Link
                className="inline-flex items-center gap-1 px-3 py-2 rounded-lg text-sm text-white bg-emerald-600 hover:bg-emerald-700 border border-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/45"
                to={next}
              >
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
