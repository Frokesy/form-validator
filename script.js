const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

const showError = (input, message) => {
    const parent = input.parentElement;
    parent.className = "form-group error"
    const small = parent.querySelector('small');
    small.innerText = message;
}

const showSuccess = (input) => {
    const parent = input.parentElement;
    parent.className = "form-group success"
}

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

form.addEventListener('submit', (e) => {
    e.preventDefault();

    //username validation
    if (username.value === '') {
        showError(username, 'Username is required');
    } else if (username.value.length < 3) {
        showError(username, 'Username must be at least 3 characters long');
    } else if (username.value.length > 15) {
        showError(username, 'Username must be less than 15 characters long');
    } else {
        showSuccess(username)
    }


    //email validation
    if (email.value === '') {
        showError(email, 'Email is required');
    } else if (!validateEmail(email.value)) {
        showError(email, 'Email is not valid');
    } else {
        showSuccess(email)
    }


    //password validation
    if (password.value === '') {
        showError(password, 'Password is required');
    } else if (password.value.length < 6) {
        showError(password, 'Password must be at least 6 characters long');
    } else if (password.value.length > 20) {
        showError(password, 'Password must be less than 20 characters long');
    } else {
        showSuccess(password)
    }


    if (password2.value === '') {
        showError(password2, 'Password is required');
    } else if (password2.value.length < 6) {
        showError(password2, 'Password must be at least 6 characters long');
    } else if (password2.value.length > 20) {
        showError(password2, 'Password must be less than 20 characters long');
    } else {
        showSuccess(password2)
    }

    //check if passwords match
    if (password.value !== password2.value) {
        showError(password2, 'Passwords do not match');
    }
})