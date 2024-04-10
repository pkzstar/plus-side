//Add an event button toggle
const toggleBtn = document.getElementById('toggleBtn');
        const inputContainer = document.getElementById('inputContainer');
        const eventTitleElement = document.getElementById('EventTitleUpcoming');
        eventTitleElement.innerHTML = "Title :";
        const eventDateElement = document.getElementById('EventDateUpcoming');
        eventDateElement.innerHTML = "Date :";
        const eventLocationElement = document.getElementById('EventLocationUpcoming');
        eventLocationElement.innerHTML = "Location :";
        const eventUrlElement = document.getElementById('EventUrlUpcoming');
        eventUrlElement.innerHTML = "Link :";
        const eventImageElement = document.getElementById('EventImageUpcoming');
        eventImageElement.innerHTML = "Image :";
        const eventDescriptionElement = document.getElementById('EventDescriptionUpcoming');
        eventDescriptionElement.innerHTML = "Description :";

        toggleBtn.addEventListener('click', () => {
            inputContainer.classList.toggle('hidden');
            if (!inputContainer.classList.contains('hidden')) {
                // If input is visible, focus on it
                document.getElementById('textInput').focus();
            }
        });

//submit button
const submitBtn = document.getElementById('SubmitBtn');
const inputFields = document.querySelectorAll('input[type="text"]');
let originalBtnText = submitBtn.textContent;
let submitted = false;

submitBtn.addEventListener('click', () => {
    if (!submitted) {
        // Change the text of the button
        submitBtn.textContent = 'Your request is being reviewed';

        // Clear the information in all input fields
        inputFields.forEach(input => input.value = '');

        submitted = true;
    } else {
        // Reset button text
        submitBtn.textContent = originalBtnText;
        submitted = false;
    }
    setTimeout(() => {
        submitBtn.textContent = originalBtnText;
    }, 3000);
});