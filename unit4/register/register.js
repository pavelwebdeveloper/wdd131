let count = 1;

const info = {
    adultName: "",
    numberOfParticipants: 0,
    feeTotal: 0
}



function participantTemplate(){
    console.log("inside participantTemplate function Somebody clicked !!!!");
    count++;
    let html = `<section class="participant${count}">
            <p>Participant ${count}</p>
            <div class="item">
              <label for="fname${count}"> First Name<span>*</span></label>
              <input id="fname${count}" type="text" name="fname${count}" value="" required />
            </div>
            <div class="item activities">
              <label for="activity${count}">Activity #<span>*</span></label>
              <input id="activity${count}" type="text" name="activity${count}" />
            </div>
            <div class="item">
              <label for="fee${count}">Fee ($)<span>*</span></label>
              <input id="fee${count}" type="number" name="fee${count}" />
            </div>
            <div class="item">
              <label for="date${count}">Desired Date <span>*</span></label>
              <input id="date${count}" type="date" name="date${count}" />
            </div>
            <div class="item">
              <label for="grade${count}">Grade</label>
              <select id="grade${count}" name="grade${count}">
                <option selected value="" disabled selected></option>
                <option value="1">1st</option>
                <option value="2">2nd</option>
                <option value="3">3rd</option>
                <option value="4">4th</option>
                <option value="5">5th</option>
                <option value="6">6th</option>
                <option value="7">7th</option>
                <option value="8">8th</option>
                <option value="9">9th</option>
                <option value="10">10th</option>
                <option value="11">11th</option>
                <option value="12">12th</option>
              </select>
            </div>
          </section>`
          document.getElementById("add").insertAdjacentHTML("beforebegin", html);
          info.numberOfParticipants = count;
}

function submitForm(e){
    e.preventDefault();
    calculateTheFeeTotal(document.querySelectorAll("[id^=fee]"));
    //let allTheFeeInputs = document.getElementsByClassName("fee");
    
    
    /*for(i=0;i<allTheFeeInputs.length;i++){
        info.feeTotal += Number(allTheFeeInputs[i].value);
    }*/  
    
    info.adultName = document.getElementById("adult_name").value;
    console.log(info.adultName);
    successTemplate(info);
}

function calculateTheFeeTotal(allTheFeeInputs){
    console.log(allTheFeeInputs);
    info.feeTotal = 0;
    for(i=0;i<allTheFeeInputs.length;i++){
        info.feeTotal += Number(allTheFeeInputs[i].value);
    } 
    console.log(info.feeTotal);
}

function successTemplate(info){
    console.log(document.getElementsByName("form"));
 document.getElementsByName("form")[0].style.display = "none";
 document.getElementById("summary").innerText = `Thank you ${info.adultName} for registering. You have registered ${info.numberOfParticipants} participants and owe $${info.feeTotal} in Fees.`;
}


document.getElementById("add").addEventListener("click", participantTemplate);
document.getElementById("form").addEventListener("submit", submitForm);
document.getElementById("submitButton").addEventListener("click", submitForm);