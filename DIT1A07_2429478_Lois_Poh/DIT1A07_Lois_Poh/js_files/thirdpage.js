let countDownDate = new Date ("October 26, 2024 00:00:00").getTime();

let x = setInterval(function () {
    let now = new Date().getTime();
    let distance = countDownDate - now;
    let days = Math.floor(distance/ (1000*60*60*24));
    let hours = Math.floor((distance % (1000*60*60*24)/(1000*60*60)));
    let minutes = Math.floor((distance % (1000*60*60*24)/(1000*60)));
    let seconds= Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("countdown").innerHTML = days + "d " + hours + "h "+ minutes + "m " + seconds + "s ";
    if (distance < 0) {
        clearInterval(x);
        year += 1;
        countDownDate = new Date ("October 26," + year + "00:00:00").getTime();
        x = setInterval(function () {
            let now = new Date().getTime();
            let distance = countDownDate - now;
            let days = Math.floor(distance/ (1000*60*60*24));
            let hours = Math.floor((distance % (1000*60*60*24)/(1000*60*60)));
            let minutes = Math.floor((distance % (1000*60*60*24)/(1000*60)));
            let seconds= Math.floor((distance % (1000 * 60)) / 1000);
            document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
            + minutes + "m " + seconds + "s ";

      },1000)
}
},1000);

document.getElementById('myform').addEventListener('submit', function(event) {
    // Check if the form is valid
    if (this.checkValidity()) {
      // If the form is valid, show alert
      alert('“Thank you for taking the time to fill out this form. We appreciate your feedback and will carefully consider your feedback. Your particulars will be kept strictly confidential.”');
    } else {
      // If the form isn't valid, the form submission is prevented an alert is shown 
      event.preventDefault();
      alert('Please fill out all the required fields.');
    }
  });

// function onImageLoad () {
// let onLoadImage = document.getElementById('imagePop');
// onLoadImage.innerHTML = 'transform: scale(1.1); transition : transform 0.5s;'
// }

function onLoadImage() {
  let whenLoad = document.getElementById('imagePop');
  whenLoad.classList.add('imagePop');
  setTimeout(function() {
      whenLoad.classList.remove('imagePop');
      whenLoad.classList.add('imagePopafter');
  }, 500); // 500ms matches the transition duration in CSS
}


