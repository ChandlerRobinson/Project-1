<<<<<<< HEAD
function changeImage(imagePath) {
    document.getElementById('images').src = imagePath;
}
=======
document.getElementById('reviewForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const reviewText = document.getElementById('review').value;
    document.getElementById('feedbackMessage').innerText = `Your feedback: "${reviewText}" is always appreciated`;
    document.getElementById('feedbackMessage').style.display = 'block';
    
    document.getElementById('review').style.display = 'none';
    this.querySelector('input[type="submit"]').style.display = 'none';
  });
>>>>>>> 321fe5971b8c36b3f018484c4c2a14741edd96cd
