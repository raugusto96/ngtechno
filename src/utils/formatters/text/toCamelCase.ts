const normalizeString = (str: string): string => {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9]/g, "");
};

export const toCamelCase = (str: string): string => {
  const normalizedStr = normalizeString(str);
  return normalizedStr.replace(
    /(?:^\w|[A-Z]|\b\w|\s+|_+|[^a-zA-Z0-9]+)/g,
    (match, index) => {
      if (/[_\s]/.test(match)) return ""; // Remove underscores and spaces
      return index === 0 ? match.toLowerCase() : match.toUpperCase();
    }
  );
};
