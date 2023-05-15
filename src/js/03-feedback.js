const throttle = require('lodash.throttle');
const ell = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector("[name='email']"),
    message: document.querySelector("[name='message']"),
}
const formData = {
    email: '',
    message: '',
};
const FEEDBACK_STORAGE_KEY = 'feedback-form-state';

ell.form.addEventListener('input', throttle(getFormValues, 500));
ell.form.addEventListener('submit', submitFormValues);
setFormValues();

function getFormValues(e) {

    switch (e.target.name) {
        case 'email':
            formData.email = e.target.value;
            break;
        case 'message':
            formData.message = e.target.value;
            break;
    }

    localStorage.setItem(FEEDBACK_STORAGE_KEY, JSON.stringify(formData));
}

function submitFormValues(e) {
    e.preventDefault();
    ell.form.reset();
    console.log(formData);
    localStorage.removeItem(FEEDBACK_STORAGE_KEY);
    formData.email = '';
    formData.message = '';
}

function setFormValues() {
    const temporaryObject = JSON.parse(localStorage.getItem(FEEDBACK_STORAGE_KEY));
    if (!temporaryObject) {
        return;
    }

    formData.email = temporaryObject.email;
    formData.message = temporaryObject.message;

    ell.email.value = temporaryObject.email;
    ell.message.value = temporaryObject.message;
}