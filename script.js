
document.getElementById('reviewForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const reviewText = document.getElementById('review').value;
  document.getElementById('feedbackMessage').innerText = `Your feedback: "${reviewText}" is always appreciated`;
  document.getElementById('feedbackMessage').style.display = 'block';
  
  document.getElementById('review').style.display = 'none';
  this.querySelector('input[type="submit"]').style.display = 'none';
});

// Review modal
const modal = document.getElementById("reviewModal");
const btn = document.getElementById("review-btn");
const span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Size modal
const sizeModalContainer = document.getElementById("sizeModal");
const sizeChartBtn = document.getElementById("size-chart-btn");
const sizeCloseBtn = document.getElementById("close-modal");

// Show the modal when the button is clicked
sizeChartBtn.onclick = function() {
  sizeModalContainer.style.display = "block";
}

// Close the modal when the 'Close' button is clicked
sizeCloseBtn.onclick = function() {
  sizeModalContainer.style.display = "none";
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
  if (event.target == sizeModalContainer) {
    sizeModalContainer.style.display = "none";
  }
}

// Handle selection
const options = document.getElementById('options');
const selectedSizeElement = document.getElementById('selectedSize');

options.addEventListener('change', function() {
  const selectedSize = options.value;
  selectedSizeElement.innerText = `You have selected: ${selectedSize}`;
  localStorage.setItem('selectedSize', selectedSize);
  displayConfirmationMessage(selectedSize);
});

// Load selected size from local storage on page load
window.onload = function() {
  const storedSize = localStorage.getItem('selectedSize');
  if (storedSize) {
    selectedSizeElement.innerText = `You have selected: ${storedSize}`;
    displayConfirmationMessage(storedSize);
  }
};

// Function to display confirmation message
function displayConfirmationMessage(size) {
  const confirmationMessage = document.getElementById("confirmationMessage");
  confirmationMessage.innerText = `selection confirmed`;
  confirmationMessage.style.display = "block";
  
  // Optional: hide confirmation message after 3 seconds
  setTimeout(() => {
    confirmationMessage.style.display = "none";
  }, 3000);
}


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
    ).innerText = `Your feedback is always appreciated`;
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

document.getElementById('reviewForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  document.getElementById('feedbackMessage').innerText = 'Your feedback is always appreciated';
  document.getElementById('feedbackMessage').style.display = 'block';

  document.getElementById('review').style.display = 'none';
  this.querySelector('input[type="submit"]').style.display = 'none';

  // Refresh the page after 10 seconds
  setTimeout(() => {
    window.location.reload();
  }, 10000);
});

