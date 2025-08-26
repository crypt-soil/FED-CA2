
// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    const forms = document.querySelectorAll('.needs-validation')  //get the class 'needs-validation' 
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => { //Array.from(forms) is converted into an array, forEach is a loop   
      form.addEventListener('submit', event => { //an eventlistener for each array that submits 
        if (!form.checkValidity()) { //checks the form validity, if not valid it returns true and the code in the if runs
          event.preventDefault() //it prevents form from being submitted
          event.stopPropagation() 
        }
  
        form.classList.add('was-validated') //adds was-validated so that the 'invalid-feedback' divs will be shown
      }, false)
    })
  })()

