export const cookingStatus = (remainingTime) => {
  switch (remainingTime) {
    case undefined:
    case null:
    case "":
      return "You forgot to set the timer.";
    case 0:
      return "Lasagna is done.";
  }
  const timeNumber = Number(remainingTime);
  if (timeNumber.toString() === "NaN") {
    return "You forgot to set the timer.";
  }
  return "Not done, please wait.";
};

export const preparationTime = (layers, avgTimePerLayer = 2) => {
  return layers.length * avgTimePerLayer;
};

export const quantities = (ingredients) => {
  let noodles = 0;
  let sauce = 0;
  ingredients.map((ingredient) => {
    if (ingredient === "noodles") {
      noodles += 50;
    } else if (ingredient === "sauce") {
      sauce += 0.2;
    }
  });
  return { noodles: noodles, sauce: sauce };
};

export const addSecretIngredient = (friendsList, myList) => {
  myList.push(friendsList[friendsList.length - 1]);
};

export const scaleRecipe = (recipe, portionCount) => {
  let delta = portionCount / 2;
  let recipeCopy = Object.assign({}, recipe);
  for (let property in recipeCopy) {
    recipeCopy[property] *= delta;
  }
  return recipeCopy;
};
