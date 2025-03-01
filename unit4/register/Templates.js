export function participantTemplate(info){
    console.log("inside participantTemplate function Somebody clicked !!!!");
    info.numberOfParticipants++;
    let html = `<section class="participant${info.numberOfParticipants}">
            <p>Participant ${info.numberOfParticipants}</p>
            <div class="item">
              <label for="fname${info.numberOfParticipants}"> First Name<span>*</span></label>
              <input id="fname${info.numberOfParticipants}" type="text" name="fname${info.numberOfParticipants}" value="" required />
            </div>
            <div class="item activities">
              <label for="activity${info.numberOfParticipants}">Activity #<span>*</span></label>
              <input id="activity${info.numberOfParticipants}" type="text" name="activity${info.numberOfParticipants}" required />
            </div>
            <div class="item">
              <label for="fee${info.numberOfParticipants}">Fee ($)<span>*</span></label>
              <input id="fee${info.numberOfParticipants}" type="number" name="fee${info.numberOfParticipants}" required />
            </div>
            <div class="item">
              <label for="date${info.numberOfParticipants}">Desired Date <span>*</span></label>
              <input id="date${info.numberOfParticipants}" type="date" name="date${info.numberOfParticipants}" required />
            </div>
            <div class="item">
              <label for="grade${info.numberOfParticipants}">Grade</label>
              <select id="grade${info.numberOfParticipants}" name="grade${info.numberOfParticipants}">
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
          
}

export function successTemplate(info){
    document.getElementsByTagName("form")[0].style.display = "none";
    document.getElementById("summary").innerText = `Thank you ${info.adultName} for registering. You have registered ${info.numberOfParticipants} participant${(info.numberOfParticipants == 1)?"":"s"} and owe $${info.feeTotal} in Fees.`;
   }