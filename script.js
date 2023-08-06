const email = document.getElementById('email');
const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function validateEmail() {
    if (email.value === '' || !email.value.match(validRegex)) {
        alert('Please, write your email');
    } else {
        alert('Your email is correct');
    }
}

