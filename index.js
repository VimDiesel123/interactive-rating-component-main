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
