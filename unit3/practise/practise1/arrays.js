//  arrays.js
const steps = ["one", "two", "three"];
const listTemplate = function(step) {
  return `<li>${step}</li>`;
}
const stepsHtml = steps.map(listTemplate);
console.log(stepsHtml);
document.querySelector("#myList").innerHTML = stepsHtml.join("");

const letterGrades = ['A', 'B', 'A'];


const gpaCalculator = function(gpaPoint){
    const qualityPointsArray = gpaPoints.map(function(gpaPoint){return gpaPoint * 3;});
    const qualityPointsSum = qualityPointsArray.reduce(function(sum, num){return sum + num;});
    const totalCreditHours = gpaPoints.length * 3;
    return qualityPointsSum / totalCreditHours;
}
  const gpaPointsHTML = letterGrades.map(function(letterGrade) {return `<li>${letterGrade == 'A' ? 4 : 3}</li>`;});
  document.querySelector("#myList2").innerHTML = gpaPointsHTML.join("");
  const gpaPoints = letterGrades.map(function(letterGrade){return letterGrade == 'A' ? 4 : 3;});
  const GPA = gpaPoints.reduce(gpaCalculator);
  document.querySelector("#GPA").innerHTML = "GPA = " + GPA;

  const fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];

  const filteredFruits = fruits.filter(function(fruit){return fruit.length < 6 ? fruit : null});

  console.log("filtered fruits " + filteredFruits);

  const numbers = [12, 34, 21, 54];
  const luckyNumber = 21;
  const luckNumberFound = numbers.indexOf(luckyNumber);
  console.log("Index of the lucky number " + luckNumberFound);

