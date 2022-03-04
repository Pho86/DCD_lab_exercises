const args = require('minimist')(process.argv.slice(2))
console.log(args);

// receive a password from a user from a terminal.

// store this input to a variable 
let password = args['pass']; // in the future this could be a <text input/> value
// create a function to check if the password is valid 

function checkPasswordValid() {
    if (password === '') {
        console.log("You cannot have an empty password.")
    } else if (password.length < 5) {
        console.log("Your password doesn't work. Please make it longer.");
    } else if (password.length > 15) {
        console.log("Your password is too long.");
    } else if (password.includes('@')) {
        console.log("This is not for your email.");
    } else {
        console.log("Password is valid.");
        checkPasswordWord();
        // return true;
    }
    // if the password is longer than 15 characters -> it's too long
    // if the password includes '@' -> it's not for your email
    // else -> the password is valid 
}

// create a function to check if the password matches to a word of your choice
function checkPasswordWord () {
    if (password === ('dogdog')) {
        console.log('You have matched the password correctly.');
    }   else {
        console.log("Password doesn't match.")
    }
}

// run the function
checkPasswordValid();

/* if (checkPasswordValid() === true) {
    checkPasswordWord();
} */
