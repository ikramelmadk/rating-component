
const ratingPage = document.getElementById('rating-page');
const reviewSummaryPage = document.getElementById('review-summary-page');
const buttons = document.querySelectorAll('.rating-button');
const submitButton = document.getElementById('submit-button');
const reviewSummary = document.getElementById('selected-score');

let selectedRating = null;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove the "focused" class from all buttons
    buttons.forEach(button => {
      button.classList.remove('focused');
    });
    // Add the "focused" class to the clicked button
    button.classList.add('focused');
    // Update the selectedRating variable
    selectedRating = button.innerHTML;
  });
});

// Add click event listener to the submit button
submitButton.addEventListener('click', () => {
  if (!selectedRating) {
    // Highlight the buttons if no rating is selected
    buttons.forEach(button => {
      button.classList.add('highlight');
      setTimeout(() => {
        button.classList.remove('highlight');
      }, 250);
    });
  } else {
  // Display the review summaryratingPage.style.display = 'none';
  ratingPage.style.display = 'none';
  reviewSummaryPage.style.display = 'flex';
  reviewSummary.innerHTML = selectedRating;
  }
});