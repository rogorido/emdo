export const createSlug = (stringToFormat) => {
  const newString = stringToFormat.replaceAll(' ', '_');

  return newString;
};
