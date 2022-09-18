import throttle from 'lodash.throttle';
const STORAGE = 'feedbackData';
const feedbackData = {};
const refs = {
  form: document.querySelector('.js-feedback-form'),
  nameinput: document.querySelector('.name'),
  textinput: document.querySelector('.text'),
};
refs.form.addEventListener('submit', onSubmit);
refs.form.addEventListener('input', throttle(onInput, 500));
populate();
function onSubmit(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE);
}
function onInput(evt) {
  feedbackData[evt.target.name] = evt.target.value;
  localStorage.setItem(STORAGE, JSON.stringify(feedbackData));
}
function populate() {
  const savedMessage = JSON.parse(localStorage.getItem(STORAGE));
  if (savedMessage.name) {
    refs.nameinput.value = savedMessage.name;
  }
  if (savedMessage.message) {
    refs.textinput.value = savedMessage.message;
  }
}
