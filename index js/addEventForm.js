//addEventForm.js

document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.getElementById("toggleBtn");
    const addEventFormDiv = document.getElementById("addEventForm");

    // Create the form elements
    const formHTML = `
        <div id="inputContainer" class="Upcoming-event-form">
            <form action="/past-events/2024" method="post">
                <p id="EventTitleUpcoming"></p>
                <input placeholder="Event Name" type="text" id="PastTitle" name="PastTitle">
                <br>
                <p id="EventDateUpcoming"></p>
                <input placeholder="Event Date(s)" type="text" id="PastDate" name="PastDate">
                <br>
                <p id="EventLocationUpcoming"></p>
                <input placeholder="State" type="text" id="PastLocation" name="PastLocation">
                <br>
                <p id=""></p>
                <input placeholder="Entrant Count" type="text" id="PastEntrantCount" name="PastEntrantCount">
                <br>
                <p id="EventUrlUpcoming"></p>
                <input placeholder="Start.gg" type="text" id="PastUrl" name="PastUrl">
                <br>
                <p id="EventImageUpcoming"></p>
                <input placeholder="Image" type="text" id="PastImg" name="PastImg">
                <br>
                <p id="EventDescriptionUpcoming"></p>
                <input placeholder="1st" type="text" id="Past1" name="Past1">
                <br>
                 <p id="EventDescriptionUpcoming"></p>
                <input placeholder="2nd" type="text" id="Past2" name="Past2">
                <br>
                <p id="EventDescriptionUpcoming"></p>
                <input placeholder="3rd" type="text" id="Past3" name="Past3">
                <br>
                <input type="radio" id="PmRankDisplay" name="PmRankDisplay" value="Yes"> Yes
                <input type="radio" id="PmRankDisplayNo" name="PmRankDisplayNo" value="No"> No
                <br>
                <button type="submit" id="SubmitBtn" class="submit-btn">Submit</button>
            </form>
        </div>
    `;

    // Insert the form into the addEventForm div
    addEventFormDiv.innerHTML = formHTML;

    const inputContainer = document.getElementById("inputContainer");

    toggleBtn.addEventListener("click", function (event) {
        toggleForm(event);
    });

    function toggleForm(event) {
        inputContainer.classList.toggle("hidden");
        if (inputContainer.classList.contains("hidden")) {
            toggleBtn.textContent = "Add an Event";
        } else {
            toggleBtn.textContent = "Hide Event Form";
        }
    }
});
