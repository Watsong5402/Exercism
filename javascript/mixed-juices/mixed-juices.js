/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  switch (name) {
    case "Pure Strawberry Joy":
      return 0.5;
    case "Energizer":
    case "Green Garden":
      return 1.5;
    case "Tropical Island":
      return 3;
    case "All or Nothing":
      return 5;
    default:
      return 2.5;
  }
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  if (limes.length == 0 || wedgesNeeded == 0) {
    return 0;
  }
  limes = numeralize_limes(limes);
  let acc = 0;
  for (let i = 0; i < limes.length; i++) {
    const lime = limes[i];
    acc += lime;
    if (acc >= wedgesNeeded) {
      return i + 1; //to one-index
    }
  }
  return limes.length;
}

function numeralize_limes(wedges) {
  return wedges.map((wedge) => {
    switch (wedge) {
      case "small":
        return 6;
      case "medium":
        return 8;
      case "large":
        return 10;
    }
  });
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  let acc = 0;
  for (let i = 0; i < orders.length; i++) {
    const order = timeToMixJuice(orders[i]);
    acc += order;
    if (acc >= timeLeft) {
      return orders.slice(i+1);
    }
  }
  return [];
}
