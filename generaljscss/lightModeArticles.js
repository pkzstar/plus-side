
      
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
        
        const h2 = document.querySelectorAll('h2');
        for (let i = 0; i < h2.length; i++) {
            h2[i].style.color = 'black';
        }

        const h3 = document.querySelectorAll('h3');
        for (let i = 0; i < h3.length; i++) {
            h3[i].style.color = 'black';
        }

        const h4 = document.querySelectorAll('h4');
        for (let i = 0; i < h4.length; i++) {
            h4[i].style.color = 'black';
        }

        const li = document.querySelectorAll('li');
        for (let i = 0; i < li.length; i++) {
            li[i].style.color = 'black';
        }

        const p = document.querySelectorAll('p');
        for (let i = 0; i < p.length; i++) {
            p[i].style.color = 'black';
        }

        const articleLink = document.getElementsByClassName('articleLink');
        for (let i = 0; i < articleLink.length; i++) {
            articleLink[i].style.color = '';
        }

        console.log("light mode enabled")

        // Save the dark mode setting
        localStorage.setItem('theme', 'dark');
    } else {
        bulb.src = 'https://www.emphysys.com/wp-content/uploads/2015/04/iconmonstr-light-bulb-17-icon-256.png';
        updateBackgroundImages('https://github.com/pkzstar/plus-side/blob/main/images/bg100.png?raw=true'); // Light mode image

        const pastEventsHeader = document.getElementsByClassName('pastEventsHeader');
        for (let i = 0; i < pastEventsHeader.length; i++) {
            pastEventsHeader[i].style.color = 'white';
        }

        const h2 = document.querySelectorAll('h2');
        for (let i = 0; i < h2.length; i++) {
            h2[i].style.color = 'white';
        }

        const h3 = document.querySelectorAll('h3');
        for (let i = 0; i < h3.length; i++) {
            h3[i].style.color = 'white';
        }

        const h4 = document.querySelectorAll('h4');
        for (let i = 0; i < h4.length; i++) {
            h4[i].style.color = 'white';
        }

        const li = document.querySelectorAll('li');
        for (let i = 0; i < li.length; i++) {
            li[i].style.color = 'white';
        }

        const p = document.querySelectorAll('p');
        for (let i = 0; i < p.length; i++) {
            p[i].style.color = 'white';
        }

        
        const articleLink = document.getElementsByClassName('articleLink');
        for (let i = 0; i < articleLink.length; i++) {
            articleLink[i].style.color = '';
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
    setMode(true); // Default to dark mode if no preference is saved
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
