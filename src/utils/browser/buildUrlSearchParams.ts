export const buildUrlSearchParams = (
  object: Record<string, string | string[] | undefined>,
): URLSearchParams => {
  const searchParams = new URLSearchParams();

  for (const [key, value] of Object.entries(object)) {
    if (typeof value === 'string') {
      searchParams.append(key, value);
    }

    if (Array.isArray(value)) {
      for (const x of value) {
        searchParams.append(key, x);
      }
    }
  }

  return searchParams;
};
