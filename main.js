const radioButtons = document.querySelectorAll('.rating-form__radio');
const submitButton = document.querySelector('.submit');

radioButtons.forEach(radioButton => {
  radioButton.addEventListener('change', () => {
    submitButton.removeAttribute('disabled');
  });
});

const form = document.querySelector('.rating-form');
const ratingMessage = document.querySelector('.rating-message');
const thankYouStateContainer = document.querySelector(
  '.thank-you-state-container'
);
const ratingState = document.querySelector('.rating-state');

form.addEventListener('submit', e => {
  e.preventDefault();
  const selectedRating = e.target.rating.value;
  ratingState.classList.add('hidden');
  ratingMessage.innerText = `You selected ${selectedRating} out of 5`;
  thankYouStateContainer.classList.remove('hidden');
});
