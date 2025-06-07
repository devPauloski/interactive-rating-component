const form = document.querySelector("form");
const ratings = document.querySelectorAll("input[type=radio]");
const selectedRating = document.querySelector(".selected-rating");
const feedbackSection = document.querySelector(".feedback-section");
const confirmationSection = document.querySelector(".confirmation-section");
let clickedRating;

ratings.forEach((rating) => {
  rating.addEventListener("change", (event) => {
    clickedRating = event.target.value;
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (clickedRating !== undefined) {
    selectedRating.textContent = clickedRating;
    feedbackSection.classList.add("hidden");
    confirmationSection.classList.remove("hidden");
    ratings.forEach(rating => rating.checked = false);
  }
});
