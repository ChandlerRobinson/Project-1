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
const sizeModal = document.getElementById("sizeModal");
const sizeChartBtn = document.getElementById("size-chart-btn");
const sizeCloseSpan = sizeModal.getElementsByClassName("close")[0];
const options = document.getElementById('options');

// Correctly get the selected size element
const selectedSizeElement = document.getElementById('selectedSize');

// Display the modal when the button is clicked
sizeChartBtn.onclick = function() {
  sizeModal.style.display = "block";
}

// Close the modal when the 'x' span is clicked
sizeCloseSpan.onclick = function() {
  sizeModal.style.display = "none";
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
  if (event.target == sizeModal) {
    sizeModal.style.display = "none";
  }
}

// Handle selection
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
  confirmationMessage.innerText = `You selected size (${size})`;
  confirmationMessage.style.display = "block";
  
  // Optional: hide confirmation message after 3 seconds
  setTimeout(() => {
    confirmationMessage.style.display = "none";
  }, 3000);
}