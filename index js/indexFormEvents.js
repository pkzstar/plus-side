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

submitBtn.addEventListener('click', async (event) => {
    event.preventDefault();

    if (!submitted) {
        // Change the text of the button
        submitBtn.textContent = 'Your request is being reviewed';

        // Get the password from the input field
        const password = document.getElementById('textPassUpcoming').value;

        const savedPassword = process.env.Form_Pass; // Password saved in the environment variable
        const hashedPassword = process.env.Hashed_Form_Pass; // Hashed password from the environment variable

        async function verifyPassword(enteredPass, savedPass) {
            try {
                // Verify the entered password against the saved password
                const match = await argon2.verify(savedPass, enteredPass);
                return match;
            } catch (error) {
                console.error('Error verifying password:', error);
                return false;
            }
        }

        // Call the function to verify the password
        const isPasswordCorrect = await verifyPassword(password, hashedPassword);

        if (isPasswordCorrect) {
            // Proceed with submitting the form data
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
                console.log('Form submitted successfully!');
                // Perform actions or display messages as needed
            })
            .catch(error => {
                console.error('Error submitting event:', error);
            });
        } else {
            console.log('Incorrect password. Access denied.');
            // Handle incorrect password scenario
        }

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
