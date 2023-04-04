'use strict'
console.log('file connected');

let loginButton = document.querySelector(".login__button");
let logInForm = document.querySelector(".log-in-form");

// event listener for the log-in button to remove the "hidden" attribute from the log-in-form section
loginButton.addEventListener("click", function () {
    logInForm.removeAttribute("hidden");
});

// Click event listener to the log-in form to hide it when clicking outside the form.
document.addEventListener("click", function (event) {
    if (!logInForm.contains(event.target) && !loginButton.contains(event.target)) {
        logInForm.setAttribute("hidden", true);
    }
});
