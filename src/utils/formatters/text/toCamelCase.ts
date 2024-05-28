export const toCamelCase = (str: string): string => {
  return str.replace(
    /(?:^\w|[A-Z]|\b\w|\s+|_+|[^a-zA-Z0-9]+)/g,
    (match, index) => {
      if (/[_\s]/.test(match)) return ""; // Remove underscores and spaces
      return index === 0 ? match.toLowerCase() : match.toUpperCase();
    }
  );
};
