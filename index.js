let starRating;
const starInputs = document.querySelectorAll(".card__star-option");

starInputs.forEach((starInput) => {
  starInput.addEventListener("change", () => {
    console.log("HERE");
    starLabels = document.querySelectorAll(".card__star-label");
    starLabels.forEach((label) => {
      label.classList.remove("selected");
    });

    const selectedLabel = document.querySelector(
      "label[for=" + starInput.id + "]"
    );
    selectedLabel.classList.add("selected");
    console.log(selectedLabel);

    starInput.checked = !starInput.checked;
  });
});

const submitButton = document.querySelector(".button");

submitButton.addEventListener("click", () => {
  const ratingCard = document.querySelector(".card--rating");
  ratingCard.classList.add("hidden");

  const thankYouCard = document.querySelector(".thank-you");
  thankYouCard.classList.remove("hidden");
});
