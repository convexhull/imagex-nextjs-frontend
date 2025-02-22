export const capitalize: (str: string) => string = (str) => {
  return str.length > 0 ? str[0].toUpperCase() + str.slice(1) : str;
};
