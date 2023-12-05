// Circle - Class

class Circle {
  constructor(radius, color, piValue) {
    this.radius = radius;
    this.color = color;
    this.piValue = piValue;
  }
  getRadius() {
    return `The Radius Of The Circle Is ${this.radius}`;
  }
  set changeRadius(newValue) {
    this.radius = newValue;
  }
  getColor() {
    return `The Color Of The Circle Is${this.color}`;
  }
  set(colorNewValue) {
    this.color = colorNewValue;
  }
  set toString(updatedValues) {
    this.radius = updatedValues;
    this.color = updatedValues;
  }
  getareaOfCircle() {
    return `Area of The Circle ${this.piValue * this.radius * this.radius}`;
  }
  getcircumferenceOfCircle() {
    return `The Circumference Of Circle Is ${2 * this.piValue * this.radius}`;
  }
}
var circleData = new Circle(1, "red", 3.14);
console.log(circleData);
console.log(circleData.radius);
console.log(circleData.color);
circleData.radius = 3;
circleData, (color = "green");
console.log(circleData.radius.toString());
console.log(circleData.color.toString());
console.log(circleData.getareaOfCircle());
console.log(circleData.getcircumferenceOfCircle());