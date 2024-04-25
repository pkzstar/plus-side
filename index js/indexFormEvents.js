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
        });

//submit button
const submitBtn = document.getElementById('SubmitBtn');
const inputFields = document.querySelectorAll('input[type="text"]');
let originalBtnText = submitBtn.textContent;
let submitted = false;

submitBtn.addEventListener('click', (event) => {
    event.preventDefault()
    if (!submitted) {
        // Change the text of the button
        submitBtn.textContent = 'Your request is being reviewed';

        // Clear the information in all input fields
        // inputFields.forEach(input => input.value = '');

        submitted = true;

        axios.post('/submitEvent', { 
            upcomingTitle: inputFields[0].value, 
            upcomingDate: inputFields[1].value, 
            upcomingLocation: inputFields[2].value, 
            upcomingUrl: inputFields[3].value, 
            upcomingImg: inputFields[4].value, 
            upcomingDescription: inputFields[5].value
          })

        .then(response => {
            // const data = response.data;
            // console.log('Fetched Data:', data); // Check fetched data
            // // Merge fetched data with existing eventsData without duplicates
            // const mergedData = [
            // ...eventsData,
            // ...data.filter(
            //     fetchedItem => !eventsData.some(existingItem => existingItem.name === fetchedItem.name)
            // ),
            // ];
            // console.log('Merged Data:', mergedData); // Check merged data
            // Use mergedData as needed, for example:
            // renderEventsList(mergedData);
        })
        .catch(error => {
            console.error('Error fetching and merging data:', error);
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