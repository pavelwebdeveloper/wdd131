
const convertGradesToPoints = (grade) => {
    switch(grade){
        case "A":
            return 4;
            break;
        case "B":
            return 3;
            break;
        case "C":
            return 2;
            break;
    }
}

const calculateGPA = (grades) => {
    const gradesSum = grades.reduce(function(grade, sum){return sum + grade});
    console.log(gradesSum);
    return gradesSum / grades.length;
}

const outputGPA = (GPA) => {
    document.getElementById("output").innerHTML = "Your GPA equals " + GPA;
}

const getInput = () => {
    let grades = document.getElementById("grades").value.split(',');
    grades = grades.map(function(grade){return grade.trim().toUpperCase()});
    //grades = grades.map(grade.trim());
    console.log(grades);
    const gradesAsPoints = grades.map(convertGradesToPoints);
    console.log(gradesAsPoints);
    const GPA = calculateGPA(gradesAsPoints);
    console.log(GPA);
    outputGPA(GPA);
}






document.getElementById("submitButton").addEventListener("click", getInput);
