// formsModule.js

export const formsModule = (function () {
    // Get the elements from the HTML
    const loginButton = document.querySelector(".login__button");
    const signUpLink = document.querySelector(".form__signup-link");
    const logInLink = document.querySelector(".form__login-link");
    const logInForm = document.querySelector(".log-in-form");
    const signUpForm = document.querySelector(".sign-up-form");

    // Function to show the login form and hide the sign-up form
    function showLoginForm() {
        logInForm.removeAttribute("hidden");
        signUpForm.setAttribute("hidden", "");
    }

    // Function to show the sign-up form and hide the login form
    function showSignUpForm() {
        signUpForm.removeAttribute("hidden");
        logInForm.setAttribute("hidden", "");
    }

    // Add event listeners to the login button, sign-up link, and log-in link
    loginButton.addEventListener("click", showLoginForm);
    signUpLink.addEventListener("click", showSignUpForm);
    logInLink.addEventListener("click", showLoginForm);

    // Function to hide both forms
    function hideForms() {
        logInForm.setAttribute("hidden", "");
        signUpForm.setAttribute("hidden", "");
    }

    // Event listener for clicks on the document
    document.addEventListener("click", (event) => {
        // Check if the click event target is outside both forms and not a login or sign-up button/link
        if (
            !logInForm.contains(event.target) &&
            !signUpForm.contains(event.target) &&
            event.target !== loginButton &&
            event.target !== signUpLink &&
            event.target !== logInLink
        ) {
            hideForms();
        }
    });
})();
