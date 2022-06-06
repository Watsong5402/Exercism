/**
 * Respond with the correct character, given the blurb, if this were said at
 * the front door.
 *
 * @param {string} blurb
 * @returns {string}
 */
export function frontDoorResponse(blurb) {
  return blurb.charAt(0);
}

/**
 * Respond with the correct character, given the blurb, if this were said at
 * the back door.
 *
 * @param {string} blurb
 * @returns {string}
 */
export function backDoorResponse(blurb) {
  blurb = blurb.trim();
  return blurb.charAt(blurb.length - 1);
}

/**
 * Capitalizes a word, meaning only the first character is a capital, and the
 * remaining letters are lower case.
 *
 * @param {string} word
 * @returns {string}
 */
function capitalize(word) {
  return word.toUpperCase();
}

/**
 * Give the password for the front-door, given the responses.
 *
 * @param {string} responses the responses
 * @returns {string} the password
 */
export function frontDoorPassword(responses) {
  if (responses.split("\n").length > 1)
    return responses
      .split("\n")
      .map((response, index) =>
        index == 0
          ? capitalize(frontDoorResponse(response))
          : frontDoorResponse(response)
      )
      .join("");
  else {
    return capitalize(responses.charAt(0)) + responses.slice(1).toLowerCase();
  }
}

/**
 * Give the password for the back-door, given the responses.
 *
 * @param {string} responses the responses
 * @returns {string} the password
 */
export function backDoorPassword(responses) {
  responses = responses.trim();
  if (responses.split("\n").length > 1)
    return responses
      .split("\n")
      .map((response, index) =>
        index == 0
          ? capitalize(backDoorResponse(response))
          : backDoorResponse(response)
      )
      .join("");
  else {
    return (
      capitalize(responses.charAt(0)) +
      responses.slice(1).toLowerCase() +
      ", please"
    );
  }
}
