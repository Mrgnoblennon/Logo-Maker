//adding classes for shapes

class Circle {
  constructor(radius) {
    this.radius = radius;
}

//adding own functons
getArea() {
  return Math.PI * this.radius ** 2;
}
}
  
class Triangle {
  constructor(base, height) {
    this.base = base;
    this.height = height;
}

getArea() {
    return 0.5 * this.base * this.height;
}
}

class Square {
  constructor(sideLength) {
    this.sideLength = sideLength;
}

getArea() {
  return this.sideLength ** 2;
}
}


//exporting object
module.exports = {
Circle,
Triangle,
Square,
};
