export function decodedValue(colors: string[]) {
  interface ColorDictionary {
    readonly [color: string]: number;
  }

  const colorDict: ColorDictionary = {
    'black': 0,
    'brown': 1,
    'red': 2,
    'orange': 3,
    'yellow': 4,
    'green': 5,
    'blue': 6,
    'violet': 7,
    'grey': 8,
    'white': 9,
  };

  let backwordColors = colors.slice(0, 2).reverse();
  let sum: number = 0;
  for (let i = 0; i < backwordColors.length; i++) {
    let colorValue = colorDict[backwordColors[i]];
    sum += colorValue * Math.pow(10, i);
  }
  return sum;
}
