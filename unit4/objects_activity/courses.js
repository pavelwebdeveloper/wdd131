// courses.js
const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [{ sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T'},
        { sectionNum: 2, roomNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'Sis A'}],
   enrollStudent: function(){
        enrollOrDropStudent("Enroll", document.getElementById("sectionNumber").value);
   },
   dropStudent: function(){
    enrollOrDropStudent("Drop", document.getElementById("sectionNumber").value);
   }
  };

  let setCourseNameAndNumber = function(aCourse) {
    document.getElementById("courseName").innerText = aCourse.name;
    document.getElementById("courseCode").innerText = aCourse.code;
  }

  setCourseNameAndNumber(aCourse);

  let renderSections = function(section){
    
        const row = document.createElement("tr");
        tbodyElement.appendChild(row);
        Object.values(section).forEach(function(value){
            const td = document.createElement("td");
            const textNode = document.createTextNode(value);
            td.appendChild(textNode);
            row.appendChild(td);
  })
}

let getInputandPerformAction = function(event){
    
    if(event.target.innerText == "Enroll Student"){
        aCourse.enrollStudent();
    } else if(event.target.innerText == "Drop Student"){
        aCourse.dropStudent();
    }
}

function enrollOrDropStudent(option, sectionNum){
    
    if((aCourse.sections.findIndex((section) => section.sectionNum == sectionNum)) != -1){            
        let selectedSection = aCourse.sections[aCourse.sections.findIndex((section) => section.sectionNum == sectionNum)];
        if(option == "Enroll"){
            selectedSection.enrolled += 1;   
        } else if(option == "Drop"){
            selectedSection.enrolled -= 1;  
        }
        document.getElementById("sections").innerHTML = ""; 
        aCourse.sections.forEach(renderSections);
    }
}
  const tbodyElement = document.getElementById("sections");

  aCourse.sections.forEach(renderSections);

  document.getElementById("enrollStudent").addEventListener("click", getInputandPerformAction);
  document.getElementById("dropStudent").addEventListener("click", getInputandPerformAction);

  
  