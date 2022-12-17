export const createSlug = (stringToFormat) => {
  const newString = stringToFormat.replaceAll(' ', '-');

  return newString;
};
