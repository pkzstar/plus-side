// Add an event button toggle
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
const eventPassElement = document.getElementById('EventPassUpcoming');
eventPassElement.innerHTML = "+side Staff :";

toggleBtn.addEventListener('click', () => {
    inputContainer.classList.toggle('hidden');
});

// submit button
const submitBtn = document.getElementById('SubmitBtn');
const inputFields = document.querySelectorAll('input[type="text"]');
let originalBtnText = submitBtn.textContent;
let submitted = false;

submitBtn.addEventListener('click', (event) => {
    event.preventDefault();

    if (!submitted) {
        // Change the text of the button
        submitBtn.textContent = 'Your request is being reviewed';

        // Clear the information in all input fields
        // inputFields.forEach(input => input.value = '');

        submitted = true;

        // Get the password from the input field
        const password = document.getElementById('textPassUpcoming').value;

        axios.post('/submitEvent', { 
            upcomingTitle: inputFields[0].value, 
            upcomingDate: inputFields[1].value, 
            upcomingLocation: inputFields[2].value, 
            upcomingUrl: inputFields[3].value, 
            upcomingImg: inputFields[4].value, 
            upcomingDescription: inputFields[5].value,
            upcomingPass: password  // Include the password in the request
        })
        .then(response => {
            const data = response.data;
            console.log('Response Data:', data); // Check the response data

            // Check if the password is correct in the response
            if (data.passwordCorrect) {
                console.log('Password is correct!');
                // Perform actions or display messages as needed
            } else {
                console.log('Incorrect password. Access denied.');
                // Handle incorrect password scenario
            }
        })
        .catch(error => {
            console.error('Error submitting event:', error);
        });

    } else {
        // Reset button text
        submitBtn.textContent = originalBtnText;
        submitted = false;
    }
    setTimeout(() => {
        submitBtn.textContent = originalBtnText;
    }, 3000);
});
