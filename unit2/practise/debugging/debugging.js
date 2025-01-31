const PI = 3.14;
let area = 0;
function circleArea(radius) {
    const area = radius * radius * PI;
    return area;
  }
area = circleArea(3);
console.log("At first the area equals: " + area)
area = circleArea(4);
console.log("After changing the radius the area equals: " + area)

