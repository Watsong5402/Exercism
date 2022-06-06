export class QueenAttack {
  constructor({ black, white } = {}) {
    if (white) {
      if (white[0] > -1 && white[0] < 8 && white[1] > -1 && white[1] < 8)
        this.white = white;
      else throw new Error("Queen must be placed on the board");
    } else this.white = [7, 3];

    if (black) {
      if (black[0] > -1 && black[0] < 8 && black[1] > -1 && black[1] < 8)
        this.black = black;
      else throw new Error("Queen must be placed on the board");
    } else this.black = [0, 3];

    if (this.black[0] === this.white[0] && this.black[1] === this.white[1]) {
      throw new Error("Queens cannot share the same space");
    }
  }

  toString() {
    return Array(8)
      .fill(0)
      .map((_, rowIdx) =>
        Array(8)
          .fill(0)
          .map((_, colIdx) => {
            if (rowIdx === this.white[0] && colIdx === this.white[1])
              return "W";
            if (rowIdx === this.black[0] && colIdx === this.black[1])
              return "B";
            return "_";
          })
          .join(" ")
      )
      .join("\n");
  }

  get canAttack() {
    if (this.white[0] === this.black[0]) return true;
    if (this.white[1] === this.black[1]) return true;

    const onDiag = [
      ...Array(this.white[0])
        .fill(0)
        .map((_, idx) => [this.white[0] - 1 - idx, this.white[1] - 1 - idx]),

      ...Array(7 - this.white[0])
        .fill(0)
        .map((_, idx) => [this.white[0] + 1 + idx, this.white[1] + 1 + idx]),

      ...Array(this.white[0])
        .fill(0)
        .map((_, idx) => [this.white[0] - 1 - idx, this.white[1] + 1 + idx]),

      ...Array(7 - this.white[0])
        .fill(0)
        .map((_, idx) => [this.white[0] + 1 + idx, this.white[1] - 1 - idx]),
    ].find(([x, y]) => x === this.black[0] && y === this.black[1]);

    if (onDiag) return true;
    return false;
  }
}