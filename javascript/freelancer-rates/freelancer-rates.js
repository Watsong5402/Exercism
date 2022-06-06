const HOURS_PER_DAY = 8;
/**
 * The day rate, given a rate per hour
 *
 * @param {number} ratePerHour
 * @returns {number} the rate per day
 */
export function dayRate(ratePerHour) {
  return HOURS_PER_DAY * ratePerHour;
}

const BILLABLE_DAYS_PER_MONTH = 22;
/**
 * Calculates the rate per month
 *
 * @param {number} ratePerHour
 * @param {number} discount for example 20% written as 0.2
 * @returns {number} the rounded up monthly rate
 */
export function monthRate(ratePerHour, discount = 0) {
  const DAY_RATE = dayRate(ratePerHour);
  const BEFORE_DISCOUNT =  DAY_RATE * BILLABLE_DAYS_PER_MONTH;
  return Math.ceil(applyDiscount(BEFORE_DISCOUNT, discount));
}

/**
 * Calculates the number of days in a budget, rounded down
 *
 * @param {number} budget the total budget
 * @param {number} ratePerHour the rate per hour
 * @param {number} discount to apply, example 20% written as 0.2
 * @returns {number} the number of days
 */
export function daysInBudget(budget, ratePerHour, discount = 0) {
  const DAY_RATE = dayRate(ratePerHour);
  const DISCOUNTED_DAY_RATE = applyDiscount(DAY_RATE, discount);
  let FLOATING_DISCOUNTED_DAYS_IN_BUDGET = budget / DISCOUNTED_DAY_RATE;
  return Math.floor(FLOATING_DISCOUNTED_DAYS_IN_BUDGET);
}

/**
 * Applies a discount to the value
 *
 * @param {number} value
 * @param {number} percentage for example 20% written as 0.2
 * @returns {number} the discounted value
 */
function applyDiscount(value, percentage = 0) {
  return value * (1-percentage);
}
