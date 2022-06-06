/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  return birdsPerDay.reduce(
    (previousValue, currentValue) => previousValue + currentValue
  );
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  const nth_day = (week - 1) * 7;
  try {
    return totalBirdCount(birdsPerDay.slice(nth_day, nth_day + 7));
  } catch {
    return totalBirdCount(birdsPerDay.slice(nth_day));
  }
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {number[]} corrected bird count data
 */
export function fixBirdCountLog(birdsPerDay) {
  for (let i = 0; i < birdsPerDay.length; i++) {
    i % 2 == 0 ? (birdsPerDay[i] += 1) : (birdsPerDay[i] += 0);
  }
  return birdsPerDay;
}
