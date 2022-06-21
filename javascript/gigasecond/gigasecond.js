//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (date) => {
  const BILLION_MILLISECONDS = 1000000000000;
  return (date.getTime() + BILLION_MILLISECONDS).toUTCString();
};
