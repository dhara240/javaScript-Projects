const form = document.getElementById("form");
const username = document.getElementById("username");
const Email = document.getElementById("Email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");


// Show input error message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message
}

// Show success outline 
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success'
}

// Check email is valid 
function checkEmail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (re.test(input.value.trim())) {
        showSuccess(input)
    } else {
        showError(input , 'Email is not valid');
    }
}

// check required fields

function checkRequired(inputArr) {
    inputArr.forEach(input => {
        if(input.value.trim()==''){
            showError(input , `${input.name} is Required`);
        } else {
            showSuccess(input);
        }

    });
}

// check input lenght 
function checkLength(input , min , max) {
    if (input.value.length < min ) {
        showError(input , `${input.name} must be at least ${min} character`);
    } else if (input.value.length > max) {
        showError(input , `${input.name} must be less than ${max} character`);
    } else {
        showSuccess(input);
    }
}


// check password matcd
function checkPasswordMatch(input1, input2) {
    if(input1.value != input2.value){
        showError(input2 , 'password do not match');
    }
}


// Evenelistener
form.addEventListener('submit', function (e) {
    e.preventDefault(); // stop to submit the form
    
    
    // if (username.value == '') {
    //     showError(username, "username is required");
    // } else {
    //     showSuccess(username);
    // }

    // if (Email.value == '') {
    //     showError(Email, "Email is required");
    // } else if(!isValidEmail(Email.value)){
    //     showError(Email, "Email is is not valid");
        
    // } else {
    //     showSuccess(Email);
    // }

    // if (password.value == '') {
    //     showError(password, "password is required");
    // } else {
    //     showSuccess(password);
    // }

    // if (password2.value == '') {
    //     showError(password2, "password2 is required");
    // } else {
    //     showSuccess(password2);
    // }


    checkRequired([username , Email , password , password2]);
    checkLength(username , 3 , 15);
    checkLength(password , 6 , 20);
    checkEmail(Email);
    checkPasswordMatch(password , password2);
})