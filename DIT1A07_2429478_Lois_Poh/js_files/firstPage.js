//SP title transition
function onLoadHandler() {
    titleChange.classList.add("titletransition"); //add the transition
}

//remove SP title transition on click 
function removeTransition() {
    titleChange.classList.remove("titletransition"); //remove the transition
    titleChange.classList.add("titletransitionafter") //add the transition back
}


 

let thanTo = document.getElementById("thanTo");

let messages = ["What better way to promote SP70 in my own way", "talk about the things I love about SP!"];
function changeMessage() {
    let messageElement = document.getElementById("changingMessage");
    let currentMessage = messageElement.textContent;
    if (currentMessage === messages[0]) { //if the textcontent is the same as the comment in the array, if true change it to the other comment vice versa.
        messageElement.textContent = messages[1];
    } else {
        messageElement.textContent = messages[0];
    }
}

let titleChange = document.getElementById("titleschoolname");





