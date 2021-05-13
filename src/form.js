//global variables
const form = document.querySelector('form');
const email = document.querySelector('#email');
const checkbox = document.querySelector('#account');
const accountInfo = document.querySelector('#accountInfo');
const username = document.querySelector('#username');
const password = document.querySelector('#password');
const passwordConfirm = document.querySelector('#passwordCheck');
const submit = document.querySelector('#submitButton');
const firstnameError = document.querySelector('#firstname + span.error');
const lastnameError = document.querySelector('#lastname + span.error');
const emailError = document.querySelector('#email + span.error');
const usernameError = document.querySelector('#username + span.error');
const passwordError = document.querySelector('#password + span.error');
const passwordConfirmError = document.querySelector('#passwordCheck + span.error');
const submitError = document.querySelector('#submitButton + span.error');

//regex variables
const nameRegX = /\b[A-Za-z]{2,18}\b/;
const emailRegX = /^[^@]+@\w+(\.\w+)+\w$/;
const usernameRegX = /^(?=.{4,20}$)(?:[a-zA-Z\d]+(?:(?:\.|-|_)[a-zA-Z\d])*)+$/gi;
const passwordRegX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,16}$/;

//type mismatch string variables
const nameMismatch = 'No numbers or special characters'
const emailMismatchString = 'Entered value needs to be an e-mail address.';
const usernameMismatchString = 'Entered value needs to be a name';
const passwordMismatchString = 'Must contain letters, numbers, and a special character';
const passwordConfirmMistmatchString = 'Passwords do not match'


function showError(input, error, mismatch) {
    if(input.validity.valueMissing) {
      // If the field is empty
      // display the following error message.
      error.textContent = 'You need to enter a value';
    } else if(input.validity.typeMismatch) {
      // If the field doesn't contain a proper input for that input type
      // display the following error message.
      error.textContent = mismatch;
    } else if(input.validity.tooShort) {
      // If the data is too short
      // display the following error message.
      error.textContent = `Input should be at least ${input.minLength} characters; you entered ${input.value.length}`;
    } else if (input.validity.tooLong) {
        error.textContent = `Input can't be above ${input.maxLength} characters; you entered ${input.value.length}`
    } else if (input.validity.patternMismatch) {
        error.textContent = mismatch;
    } else if (input.id === 'passwordCheck') {
        error.textContent = passwordConfirmMistmatchString;
    } else if (input.id === 'submitButtton') {
        error.textContent = 'mismatch';
    }
    // Set the styling appropriately
    error.className = 'error active';
  }

function hideError(error) {
    error.textContent = '';
    error.className = 'error'
}

function accountAttributes(bool) {
    if (bool) {
        username.setAttribute('required', 'required');
        password.setAttribute('required', 'required');
        passwordConfirm.setAttribute('required', 'required');
    } else if (!bool) {
        username.removeAttribute('required');
        username.setCustomValidity('');
        username.value = '';
        password.removeAttribute('required');
        password.setCustomValidity('');
        password.value = '';
        passwordConfirm.removeAttribute('required');
        passwordConfirm.setCustomValidity('');
        passwordConfirm.value = '';
    }
}

function initFormValidation() {
    form.addEventListener('input', (e) => {
        const target = e.target;
        const id = target.id;
        accountAttributes(checkbox.checked);
        if (id === 'firstname' || id === 'lastname') {
            if (nameRegX.test(target.value)) {
                target.setCustomValidity('');
                hideError(firstnameError);
                hideError(lastnameError);
            } else {
                target.setCustomValidity('invalid');
                (id === 'firstname') ? showError(target, firstnameError, nameMismatch) : showError(target, lastnameError, nameMismatch);
            }
        } else if (id === 'email') {
            if (emailRegX.test(target.value)) {
                email.setCustomValidity('');
                hideError(emailError);
            } else {
                email.setCustomValidity("invalid");
                showError(target, emailError, emailMismatchString);
            }
        } else if (id === 'account') {
            accountInfo.classList.toggle('hidden');
        } else if (id === 'username') {
            if (usernameRegX.test(target.value)) {
                username.setCustomValidity('');
                hideError(usernameError);
            } else {
                username.setCustomValidity("invalid");
                showError(target, usernameError, usernameMismatchString);
            }
        } else if (id === 'password') {
            if (passwordRegX.test(target.value)) {
                password.setCustomValidity('');
                hideError(passwordError);
            } else {
                password.setCustomValidity("invalid");
                showError(target, passwordError, passwordMismatchString);
            }
        } else if (id === 'passwordCheck') {
            if (password.value === passwordConfirm.value) {
                passwordConfirm.setCustomValidity('');
                hideError(passwordConfirmError);
            } else {
                passwordConfirm.setCustomValidity("invalid");
                showError(target, passwordConfirmError, passwordConfirmMistmatchString);
            }
        }
    });
    
    submit.addEventListener('click', e => {
        e.preventDefault();
        if (!checkbox.checked) {
            accountAttributes(false);
        }
        const formInputs = [...document.querySelectorAll('form input')];
        const failed = formInputs.filter(input => !input.validity.valid);
        if (failed.length > 0) {
            submitError.classList.add('active');
            submitError.textContent = 'Please fill out all required inputs properly';
        } else {
            submitError.textContent = '';
            submitError.classList.remove('active');
            form.reset();
        }
    });
}


export {initFormValidation};
