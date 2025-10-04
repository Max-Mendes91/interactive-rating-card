// TODO: Select all elements you need here
const ratingBtns = document.querySelectorAll('.rating-btn')
const submitBtn = document.querySelector('#submit-btn')
const ratingCard = document.querySelector('#rating-card')
const thankyouCard = document.querySelector('#thankyou-card')
const selectedRatingSpan = document.querySelector('#selected-rating')


// TODO: Create variable to store selected rating
let selectedRating = 0;

// TODO: Add click event to each rating button
ratingBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove 'selected' from all buttons
        ratingBtns.forEach(button => {
            button.classList.remove('selected')
        });
        // Add 'selected' to clicked button
        btn.classList.add('selected')
        // Get the value from input and store it
        selectedRating = btn.textContent;
    })
});


// TODO: Add click event to submit button
submitBtn.addEventListener('click', () => {
    // Check if rating is selected
    // Update the selected rating text
    if (selectedRating > 0) {
        selectedRatingSpan.textContent = selectedRating;
    }
    // Hide rating card
    ratingCard.classList.add('hidden');
    // Show thank you card
    thankyouCard.classList.remove('hidden');
});