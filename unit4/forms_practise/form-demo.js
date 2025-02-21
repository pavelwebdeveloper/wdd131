// form-demo.js
function validateForm(event) {
    //event.preventDefault();
    // get a reference to the form. Because we attached a submit event listener to the form itself, we can access the form either through 'event.target', or 'this'
    const theForm = event.target;
    console.log(theForm.elements);
    console.log("What is in the form?");
    console.log(theForm.elements[0].value.split(" ").includes("Bob"));
    console.log("What is in the form?");

    // the default behavior for a form submit is to try and navigate to another page where the form would be processed, if a url is not provided it will reload the current page. This sometimes is not desirable behavior. One case when we might do this is if we think there is bad data in the form.
    // To keep it from happening we can can call e.preventDefault()
    // You should always give feedback to the user about what went wrong so they can fix it. We will store the error messages here
    const errors = [];
    // start by assuming the form is valid.
    let isValid = true;
    // add our validations here
    if(!(theForm.elements[0].value.split(" ").includes("Bob"))){
            errors.push('only people named "Bob" can submit the form');
            isValid = false;
        } 
    
    if(theForm.elements[3].value == "Credit Card" && theForm.elements[4].value != 1234123412341234){
            errors.push('Only one number is valid: 1234123412341234');
            isValid = false;
        }

    // if we ran into any problems above valid will be false.
    if (!isValid) {
      //stop the form from being submitted
      event.preventDefault();
      // show the errors
      showErrors(errors);
      // return false to let the browser know the form was not submitted.
      return false;
    }
  }
  
  function togglePaymentDetails(e) {

    // get a reference to the form. We can access all the named form inputs through the form element.
    const theForm = document.getElementById("checkoutForm");
    console.log(theForm);
    console.log(theForm.elements);
    /*console.log(theForm.elements[4]);
    console.log(theForm.elements[5]);*/
    // we will also need the creditCardContainer and paypalUsernameContainer
    //const creditCardContainer = theForm.elements[4];
    //const paypalContainer = theForm.elements[5];
    const creditCardContainer = document.getElementById("creditCardNumberContainer");
    const paypalContainer = document.getElementById("paypalUsernameContainer");
    console.log(creditCardContainer);
    console.log(paypalContainer);
    // Hide payment containers by adding the '.hide' class to each of them
    /*creditCardContainer.classList.add("hide");
    paypalContainer.classList.add("hide");*/
  
    // Disable required for payment fields...if we hide a required field the browser will throw an error when we try to submit!

    theForm.elements[4].required = false;
    theForm.elements[5].required = false;
  
  
    // Show the container based on the selected payment method, and add the required attribute back.
    console.log(e.target.value.length);
    if(e.target.value === "Credit Card"){
        console.log("You have chosen Credit Card !!");
        console.log(creditCardContainer.classList);
        creditCardContainer.classList.remove("hide");
        paypalContainer.classList.add("hide");
        theForm.elements[4].required = true;
        theForm.elements[5].required = false;
    } else if(e.target.value === "Pay Pal"){
        console.log("You have chosen Pay Pal !!");
        console.log(paypalContainer.classList);
        paypalContainer.classList.remove("hide");
        creditCardContainer.classList.add("hide");
        theForm.elements[5].required = true;
        theForm.elements[4].required = false;
    }
  
  }
  
  // helper function to display our errors.
  function showErrors(errors) {
    const errorEl = document.querySelector(".errors");
    const html = errors.map((error) => `<p>${error}</p>`);
    errorEl.innerHTML = html.join("");
  }
  // attach a change event handler to the paymentMethod input
  document.getElementById("paymentMethod").addEventListener("change", togglePaymentDetails);
  
  // attach a submit event handler to the form
  document.getElementById("checkoutForm").addEventListener("submit", validateForm);