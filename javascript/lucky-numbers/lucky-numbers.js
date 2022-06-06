// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  return arrayToNumber(array1) + arrayToNumber(array2);
}

export const arrayToNumber = (array) => {
  let builder = 0;
  let ct = 0;
  while (array.length > 0) {
    builder += Math.pow(10, ct) * array.pop();
    ct++;
  }
  return builder;
};

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean}  whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  const orig = value;
  let rev = 0;
  while (value % 10 >= 0 && value !== 0) {
    const target = pop(value);
    value = integer_div(value, 10);
    rev = push(rev, target);
  }
  return rev === orig;
}

function pop(value) {
  return value % 10;
}

function push(x, target) {
  return x * 10 + target;
}

function integer_div(num, denom) {
  return Math.floor(num / denom);
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if (input === null || input === undefined || input == "") {
    return "Required field";
  }
  const num = new Number(input).toString();
  if (num.toString() === "NaN" || num === "0") {
    return "Must be a number besides 0";
  }
  return "";
}
