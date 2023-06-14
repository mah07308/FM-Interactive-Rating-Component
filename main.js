let selectedRating = 0;
const ratingButtons = document.querySelectorAll('.rating-btn');
const ratingState = document.querySelector('.rating-state');
const thankYouStateContainer = document.querySelector(
  '.thank-you-state-container'
);
const submitBtn = document.querySelector('.submit');
const ratingMessage = document.querySelector('.rating-message');

// console.log(ratingButtons);

ratingButtons.forEach(
  button =>
    (button.onclick = e => {
      removeActiveRating();
      button.classList.add('rating-active');
      selectedRating = e.target.value;
      ratingMessage.innerText = `You selected ${selectedRating} out of 5`;
    })
);

function removeActiveRating() {
  ratingButtons.forEach(button => button.classList.remove('rating-active'));
}

submitBtn.onclick = () => {
  ratingState.classList.add('hidden');
  thankYouStateContainer.classList.remove('hidden');
};
