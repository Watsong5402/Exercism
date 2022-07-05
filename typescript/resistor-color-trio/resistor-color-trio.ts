export function decodedResistorValue(colors: string[]) {
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

  let tens, ones, zeroesNumber;
  [tens, ones, zeroesNumber] = [...colors.map((val) => colorDict[val])];
  let resistance = tens * 10 + ones;
  resistance *= Math.pow(10, zeroesNumber);
  let kilo = false;
  if (resistance / 1000 > 1) {
    resistance /= 1000;
    kilo = true;
  }
  return `${resistance} ${kilo ? "kilo" : ""}ohms`;
}
