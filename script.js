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


// pm rank spin

document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.pm-rank');
  console.log(images); // Check if images are selected correctly
  images.forEach(image => {
    let rotation = 0;
    image.addEventListener('mouseenter', () => {
      console.log("Mouse entered"); // Check if mouseenter event is triggered
      rotation += 360; // Increment rotation by 360 degrees
      image.style.transform = `rotate3d(0, 1, 0, ${rotation}deg)`;

      setTimeout(() => {
        // No need to reset the transform
      }, 500); // Delay to ensure reset happens before reapplying transformation
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const imagesCentered = document.querySelectorAll('.pm-rank-centered');
  console.log(imagesCentered); // Check if images are selected correctly
  imagesCentered.forEach(imagesCentered => {
    let rotation = 0;
    imagesCentered.addEventListener('mouseenter', () => {
      console.log("Mouse entered"); // Check if mouseenter event is triggered
      rotation += 360; // Increment rotation by 360 degrees
      imagesCentered.style.transform = `rotate3d(0, 1, 0, ${rotation}deg)`;

      setTimeout(() => {
        // No need to reset the transform
      }, 500); // Delay to ensure reset happens before reapplying transformation
    });
  });
});
