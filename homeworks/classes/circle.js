class Circle {
  constructor(radius = 0) {
    this.radius = radius;
  }

  set radius(value) {
    this._radius = value;
  }

  get radius() {
    return this._radius;
  }

  get diameter() {
    return 2 * this.radius;
  }

  getArea(radius = this.radius) {
    return Math.PI * Math.pow(radius, 2)
  }

  getLength(radius = this.radius) {
    return 2 * Math.PI * radius;
  }
}

export default Circle;