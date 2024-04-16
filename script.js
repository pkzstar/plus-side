// Function to toggle the dropdown content
function toggleDropdown(event) {
  let dropdownContent = document.getElementById("dropdown-content");
  if (dropdownContent.style.display === "none" || dropdownContent.style.display === "") {
    dropdownContent.style.display = "grid";
    // Add event listener to hide dropdown when clicking outside of it
    document.addEventListener('click', hideDropdownOnClickOutside);
  } else {
    dropdownContent.style.display = "none";
    // Remove event listener when hiding dropdown
    document.removeEventListener('click', hideDropdownOnClickOutside);
  }
  // Stop event propagation
  event.stopPropagation();
}

// Function to hide dropdown when clicking outside of it
function hideDropdownOnClickOutside(event) {
  let dropdown = document.getElementById("dropdown-content");
  let button = document.getElementById("past-events-drop-btn");
  if (!dropdown.contains(event.target) && !button.contains(event.target)) {
    dropdown.style.display = "none";
    document.removeEventListener('click', hideDropdownOnClickOutside);
  }
}


//image zoom in and out
function ToggleZoom(imageId) {
    let isZoomed = false;
    let zoomIn = document.getElementById(imageId);
    let zoomInStyle = window.getComputedStyle(zoomIn);

    if (zoomInStyle.cursor === "zoom-out") {
        zoomIn.classList.add("zoomed");
        zoomIn.style.cursor = "zoom-in";

    } else {
        zoomIn.style.cursor = "zoom-out";
        zoomIn.classList.remove("zoomed");

    }
}