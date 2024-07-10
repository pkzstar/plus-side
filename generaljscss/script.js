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


//box shadow inset

document.addEventListener('DOMContentLoaded', () => {

  const eventElements = document.querySelectorAll('.events');
  
  Array.from(eventElements).forEach(eventElement => {
      eventElement.addEventListener('mouseleave', () => {
          eventElement.classList.remove('events:hover');
          void eventElement.offsetWidth;
          eventElement.classList.add('eventsAfter');
      });
  })});

  document.addEventListener('DOMContentLoaded', () => {

    const articleElements = document.querySelectorAll('.articleStyle');
    
    Array.from(articleElements).forEach(eventElement => {
        articleElement.addEventListener('mouseleave', () => {
            articleElementElement.classList.remove('articleStyle:hover');
            void articleElement.offsetWidth;
            articleElement.classList.add('articleStyleAfter');
        });
    })});


// startgg inset
document.addEventListener('DOMContentLoaded', () => {

  const startggElements = document.querySelectorAll('.startgg');
  
  Array.from(startggElements).forEach(eventElement => {
      startggElement.addEventListener('mouseleave', () => {
          startggElementElement.classList.remove('startgg:hover');
          void startggElement.offsetWidth;
          startggElement.classList.add('startggAfter');
      });
  })});

  // vods inset
document.addEventListener('DOMContentLoaded', () => {

  const vodsElements = document.querySelectorAll('.vodsPast');
  
  Array.from(vodsElements).forEach(vodsElement => {
      vodsElement.addEventListener('mouseleave', () => {
          vodsElementElement.classList.remove('vodsPast:hover');
          void vodsElement.offsetWidth;
          vodsElement.classList.add('vodsPastAfter');
      });
  })});

// article inset
  document.addEventListener('DOMContentLoaded', () => {

    const articleReadElements = document.querySelectorAll('.articleRead');
    
    Array.from(articleReadElements).forEach(articleReadElement => {
        articleReadElement.addEventListener('mouseleave', () => {
            articleReadElementElement.classList.remove('articleRead:hover');
            void articleReadElement.offsetWidth;
            articleReadElement.classList.add('articleReadAfter');
        });
    })});

    //pressure calc

    // let hitLag = JSON.parse(calcDisplayHitLag);
    // let shieldStun = JSON.parse(calcDisplayshieldStun)

    function calcOption() {
      let forms = document.getElementById("PressureForms");
  
      if (forms.children.length === 0) {

          let frameData = document.createElement("a");
          frameData.href = "https://rukaidata.com/P+/";
          frameData.id = "rukai";
          frameData.innerHTML = "Rukai"
          frameData.target = "_blank";
          forms.appendChild(frameData);
          let inputHitLag = document.createElement('input');
          inputHitLag.classList.add("inputPressure")
          inputHitLag.placeholder = "Landing lag";
          let inputshieldStun = document.createElement('input');
          inputshieldStun.classList.add("inputPressure")
          inputshieldStun.placeholder = "Shield stun";
          forms.appendChild(inputHitLag);
          forms.appendChild(inputshieldStun);
          let submitPressure = document.createElement('button')
          submitPressure.id = "submitPressure"
          forms.appendChild(submitPressure);
          document.getElementById("submitPressure").innerHTML = "Submit";
          submitPressure.addEventListener("click", function() {

            let hitLag = parseInt(inputHitLag.value);
            let shieldStun = parseInt(inputshieldStun.value);
          let calcResult = shieldStun - hitLag;
          let calcOutPut = document.createElement("p");
          calcOutPut.id = "calcOutPut";
          forms.appendChild(calcOutPut);

          if (calcResult >= 1) {
          document.getElementById("calcOutPut").innerHTML = "+" + calcResult;
          console.log(calcResult);
          } else {
            document.getElementById("calcOutPut").innerHTML = calcResult;
            console.log(calcResult);
          }

      
          let submitDisable = document.getElementById("submitPressure")
          submitDisable.disabled = true;
          })
      } else {
          // Remove existing forms
          while (forms.firstChild) {
              forms.removeChild(forms.firstChild);
          }
      }      
  }
  