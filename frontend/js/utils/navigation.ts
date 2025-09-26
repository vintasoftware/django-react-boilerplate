export const makeLink = (href: string | null | undefined) => {
  if (!href) return null;
  const u = new URL(href, window.location.origin);
  return `?${u.searchParams.toString()}`;
};
