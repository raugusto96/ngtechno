export const separateCamelCase = (string: string) =>
  string.replace(/([a-z])([A-Z])/g, "$1 $2");
