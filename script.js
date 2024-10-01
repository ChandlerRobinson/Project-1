document.getElementById('reviewForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const reviewText = document.getElementById('review').value;
    document.getElementById('feedbackMessage').innerText = `Your feedback: "${reviewText}" is always appreciated`;
    document.getElementById('feedbackMessage').style.display = 'block';
    
    document.getElementById('review').style.display = 'none';
    this.querySelector('input[type="submit"]').style.display = 'none';
  });