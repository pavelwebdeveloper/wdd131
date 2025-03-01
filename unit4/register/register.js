import { participantTemplate, successTemplate } from "./Templates.js";

const info = {
  adultName: "",
  numberOfParticipants: 1,
  feeTotal: 0
}


function submitForm(e){
    e.preventDefault();
    calculateTheFeeTotal(document.querySelectorAll("[id^=fee]")); 
    
    info.adultName = document.getElementById("adult_name").value;
    successTemplate(info);
}

function calculateTheFeeTotal(allTheFeeInputs){
        
    allTheFeeInputs = [...allTheFeeInputs]
        
    allTheFeeInputs.forEach((feeInput)=>{info.feeTotal += Number(feeInput.value)});
}




document.getElementById("add").addEventListener("click", function(){participantTemplate(info);});
document.getElementById("form").addEventListener("submit", submitForm);


