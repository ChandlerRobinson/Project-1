
function changeImage(imagePath) {
  document.getElementById("images").src = imagePath;
}


document
  .getElementById("reviewForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const reviewText = document.getElementById("review").value;
    document.getElementById(
      "feedbackMessage"
    ).innerText = `Your feedback: "${reviewText}" is always appreciated`;
    document.getElementById("feedbackMessage").style.display = "block";

    document.getElementById("review").style.display = "none";
    this.querySelector('input[type="submit"]').style.display = "none";
  });


// Modal logic for size chart

const open = document.getElementById("size-chart-btn");
const modalContainer = document.querySelector(".size-modal-container");
const close = document.getElementById("close-modal");

open.addEventListener("click", () => {
  modalContainer.classList.add("show");
});

close.addEventListener("click", () => {
  modalContainer.classList.remove("show");
});

