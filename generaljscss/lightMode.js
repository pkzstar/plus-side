
      
// Get the bulb element
const bulb = document.getElementById("bulb");

// Function to set mode
function setMode(isDark) {
    if (isDark) {
        bulb.src = 'https://raw.githubusercontent.com/pkzstar/plus-side/8492b4fa5d68b55899473283879884976a77f904/images/bulbDark.png';
        updateBackgroundImages('https://raw.githubusercontent.com/pkzstar/plus-side/96e3c064c37da4290e7c24a7c7b6c1cc8ea2c8cb/images/imageLight.png'); // Dark mode image

        const pastEventsHeader = document.getElementsByClassName('pastEventsHeader');
        for (let i = 0; i < pastEventsHeader.length; i++) {
            pastEventsHeader[i].style.color = 'black';
        }

        const bgColor = document.body;
        bgColor.style.backgroundColor = `white`;
        
        const patronsLink = document.getElementsByClassName('patrons');
        for (let i = 0; i < patronsLink.length; i++) {
            patronsLink[i].style.color = 'black';
        }

        const donorName = document.getElementsByClassName('donorName');
        for (let i = 0; i < donorName.length; i++) {
            donorName[i].style.color = 'black';
        }
        console.log("light mode enabled")

        // Save the dark mode setting
        localStorage.setItem('theme', 'dark');
    } else {
        bulb.src = '../images/bulbLight.png';
        updateBackgroundImages('https://github.com/pkzstar/plus-side/blob/main/images/bg100.png?raw=true'); // Light mode image

        const pastEventsHeader = document.getElementsByClassName('pastEventsHeader');
        for (let i = 0; i < pastEventsHeader.length; i++) {
            pastEventsHeader[i].style.color = 'white';
        }

        const bgColor = document.body;
        bgColor.style.backgroundColor = `black`;

        const patronsLink = document.getElementsByClassName('patrons');
        for (let i = 0; i < patronsLink.length; i++) {
            patronsLink[i].style.color = 'white';
        }

        const donorName = document.getElementsByClassName('donorName');
        for (let i = 0; i < donorName.length; i++) {
            donorName[i].style.color = 'white';
        }
        console.log("dark mode enabled")


        // Save the light mode setting
        localStorage.setItem('theme', 'light');
    }
}

// Toggle mode when bulb is clicked
bulb.onclick = function() {
    const isDarkMode = bulb.src.includes('bulbDark');
    setMode(!isDarkMode);
}

// Initialize mode based on saved preference or default to dark mode
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    setMode(savedTheme === 'dark');
} else {
    setMode(false); // Default to dark mode if no preference is saved
}

// Update background images for wallpapers
function updateBackgroundImages(imageUrl) {
    const wallPapers = document.getElementsByClassName("wallpaper");
    const wallPapers2 = document.getElementsByClassName("wallpaper2");

    for (let i = 0; i < wallPapers.length; i++) {
        wallPapers[i].style.backgroundImage = `url('${imageUrl}')`;
    }

    for (let i = 0; i < wallPapers2.length; i++) {
        wallPapers2[i].style.backgroundImage = `url('${imageUrl}')`;
    }
}
console.log("dark mode enabled")
