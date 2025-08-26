document.addEventListener('DOMContentLoaded', function () { // DOMContentLoaded, waits for all code: html, css and images to load
    //addEventListener when an event happens, event that is looking out for is in the ' ';
    const modalElement = document.getElementById('modalAD');
    const modal = new bootstrap.Modal(modalElement); //Create a new instance of a modal so that you can .show() or .hide()

    // Time to wait before showing the modal
    const timeToWait = 1000; // 1 second

    //After 1 second the modal is shown
    setTimeout(function () {
        modal.show();
    }, timeToWait);
});