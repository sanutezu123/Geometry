export class Vector {
  #vector = new Array();
  #overlaySvg;
  getVector() {
    return this.#vector;
  }
  constructor(u, v) {
    this.#vector.push(u, v);
  }
  static create(u, v, overlaySVG) {
    const xOffSet = overlaySVG.getAttribute("width") / 2;
    const yOffset = overlaySVG.getAttribute("height") / 2;
    console.log(xOffSet, yOffset);
    return new Vector(u + xOffSet, v + yOffset);
  }

  add(vector) {
    const otherVector = vector.getVector();
    return [this.#vector[0] + otherVector[0], this.#vector[1] + otherVector[1]];
  }

  sub(vector) {
    const otherVector = vector.getVector();
    return [this.#vector[0] - otherVector[0], this.#vector[1] - otherVector[1]];
  }
}
