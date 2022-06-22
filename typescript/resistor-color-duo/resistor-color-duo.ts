export function decodedValue(colors: string[]) {
  interface ColorDictionary {
    readonly [color: string]: number;
  }

  const colorDict: ColorDictionary = {
    black: 0,
    brown: 1,
    red: 2,
    orange: 3,
    yellow: 4,
    green: 5,
    blue: 6,
    violet: 7,
    grey: 8,
    white: 9,
  };

  return colors
    .slice(0, 2)
    .reverse()
    .map((color) => colorDict[color])
    .reduce(
      (sum, ele, i) => sum + ele * Math.pow(10, i)
    );
}