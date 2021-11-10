// ------------------Const---------------------------
const throttle = require('lodash.throttle');
const formREf = document.querySelector('.feedback-form');
const emailREf = formREf.querySelector('input');
const textREf = formREf.querySelector('textarea');
const STORAGE_KEY = 'feedback-form-state';
let feedbackFormState = {};
// ------------------------------------------------
returnSevedMessage();
// ------------------------------------------------
function saveInputData(e) {
  feedbackFormState[e.target.name] = e.target.value;
  if (localStorage) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(feedbackFormState));
  }
}
formREf.addEventListener('input', throttle(saveInputData, 500));
// ------------------------------------------------
formREf.addEventListener('submit', function (e) {
  e.preventDefault();
  e.currentTarget.reset();
  console.log(localStorage.getItem(STORAGE_KEY));
  localStorage.removeItem(STORAGE_KEY);
});
function returnSevedMessage() {
  let parstLocalStorage = localStorage.getItem(STORAGE_KEY);
  if (parstLocalStorage) {
    emailREf.value = JSON.parse(parstLocalStorage).email;
    textREf.value = JSON.parse(parstLocalStorage).message;
  }
  return;
}