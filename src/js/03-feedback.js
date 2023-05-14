const throttle = require('lodash.throttle');
const ell = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector("[name='email']"),
    message: document.querySelector("[name='message']"),
}
const formData = {
    email: '',
    message: '',
}
const FEEDBACK_STORAGE_KEY = 'feedback-form-state';

ell.form.addEventListener('input', throttle(getFormValues, 500));
setFormValues();
ell.form.addEventListener('submit', submitFormValues);

function getFormValues(e) {
    if (localStorage.getItem(FEEDBACK_STORAGE_KEY)) {
        const temporaryData = JSON.parse(localStorage.getItem(FEEDBACK_STORAGE_KEY));
        formData.email = temporaryData.email;
        formData.message = temporaryData.message;
    }

    if (e.target.name === 'email') {
        formData.email = e.target.value;
    }
    if (e.target.name === 'message') {
        formData.message = e.target.value;
    }

    localStorage.setItem(FEEDBACK_STORAGE_KEY, JSON.stringify(formData));
}

function setFormValues() {
    if (localStorage.getItem(FEEDBACK_STORAGE_KEY)) {
        const temporaryData = JSON.parse(localStorage.getItem(FEEDBACK_STORAGE_KEY));

        ell.email.value = temporaryData.email;
        ell.message.value = temporaryData.message;
    }
}

function submitFormValues(e) {
    e.preventDefault();
    ell.form.reset();
    console.log(`Your email: ${formData.email} ---- and your message is: ${formData.message}`);

    localStorage.removeItem(FEEDBACK_STORAGE_KEY);
}