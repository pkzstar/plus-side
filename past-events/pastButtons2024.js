document.addEventListener('DOMContentLoaded', function () {
    const headerButtonsDiv = document.getElementById('headerButtons');
  
    const upcomingEventsHTML = `
      <div class="upcoming-image-parent">
        <h1 id="pageHeader" class="textGradient">2024 PAST EVENTS</h1>
        <div>
        <button class="calView"><a href="../Calendar/CalView.html">Calendar</a></button>
          <div onclick="toggleDropdown(event)" style="display: inline-flex;" class="past-events-drop calView">
            <!-- Dropdown Button -->
            <button id="past-events-drop-btn" class="past-events-drop-btn">
              Past Events
              <i class="2023-drop"></i>
            </button>
            <!-- Dropdown Content -->
            <div id="dropdown-content" class="dropdown-content" style="display: none;">  
              <a class="dropdown-links" href="/past-events/2023.html"><p id="past-year">2023</p></a>
              <a class="dropdown-links" href="/past-events/2024.html"><p id="past-year">2024</p></a>
            </div>
          </div>
        </div>
      </div>
    `;
  
    headerButtonsDiv.innerHTML = upcomingEventsHTML;
  });
  