// ------------------Const---------------------------
const throttle = require('lodash.throttle');
const formREf = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';
const feedbackFormState = {};
// ------------------------------------------------
function saveInputData(e) {
  localStorage.setItem(STORAGE_KEY, feedbackFormState);
  feedbackFormState[e.target.name] = e.target.value;
}
formREf.addEventListener('input', throttle(saveInputData, 500));
// ------------------------------------------------
formREf.addEventListener('submit', function (e) {
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  console.log(feedbackFormState);
});
