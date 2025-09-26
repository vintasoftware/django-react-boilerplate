import { redirectDocument } from "react-router";

import { ApiError, UsersService } from "../api";

export async function usersLoader({ request }: { request: Request }) {
  const url = new URL(request.url);
  const limit = Number(url.searchParams.get("limit") || 10);
  const offset = Number(url.searchParams.get("offset") || 0);
  try {
    return await UsersService.usersList({ limit, offset });
  } catch (error) {
    if (
      error instanceof ApiError &&
      (error?.status === 401 || error?.status === 403)
    ) {
      const url = new URL(request.url);
      const next = url.pathname + url.search + url.hash;
      throw redirectDocument(`/admin/login/?next=${encodeURIComponent(next)}`);
    }
    throw error;
  }
}
