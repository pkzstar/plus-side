

function createNavBar() {
  const navBar = document.createElement('div');
  navBar.className = 'headerNav';

   //clock 
const timeContainer = document.createElement('div');
timeContainer.classList.add('timeContainer');

const timeDisplay = document.createElement('p');
timeDisplay.classList.add('digits');

timeContainer.appendChild(timeDisplay);
navBar.appendChild(timeContainer);

function updateTime() {
  const now = new Date();
  let hours = now.getHours();
  let displayHour = hours % 12 || 12;
  let minutes = now.getMinutes();
  if (minutes < 10) minutes = `0` + minutes;

  let ampm = hours >= 12 ? 'PM' : 'AM';
  const timeValue = `${displayHour}:${minutes} ${ampm}`;
  timeDisplay.innerHTML = timeValue;
}

// Run once immediately
updateTime();

// Update every second
setInterval(updateTime, 1000);



  const plusSideLink = document.createElement('a');
  plusSideLink.href = '/';
  const plusSideImage = document.createElement('img');
  plusSideImage.className = 'plus-side-net-nav';
  plusSideImage.src = 'https://github.com/pkzstar/plus-side/blob/main/images/plusside.net.png?raw=true';
  plusSideImage.alt = 'oops';
  plusSideLink.appendChild(plusSideImage);
  navBar.appendChild(plusSideLink);

   // Twitter & Bluesky cycling section
   const socialLink = document.createElement('a');
   socialLink.className = 'socialLink';
   socialLink.href = 'https://twitter.com/pplusside';
   socialLink.target = '_blank';
   
   const socialImage = document.createElement('img');
   socialImage.className = 'socialImage';
   socialImage.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/2491px-Logo_of_Twitter.svg.png';
   socialImage.alt = 'Twitter';
 
   socialLink.appendChild(socialImage);
   navBar.appendChild(socialLink);
 
   // Start cycling images
   // Start cycling images
const socialImages = [
  { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/2491px-Logo_of_Twitter.svg.png', link: 'https://twitter.com/pplusside', alt: 'Twitter', className: 'twitterLink' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Bluesky_Logo.svg/1200px-Bluesky_Logo.svg.png', link: 'https://bsky.app/profile/plusside.net', alt: 'Bluesky', className: 'blueSkyLink' }
];

let index = 0;
setInterval(() => {
  index = (index + 1) % socialImages.length;
  socialImage.style.opacity = 0; // Fade out

  setTimeout(() => {
    socialImage.src = socialImages[index].src;
    socialImage.alt = socialImages[index].alt;
    socialLink.href = socialImages[index].link;

    // Remove old class and add new one
    socialLink.classList.remove('twitterLink', 'blueSkyLink');
    socialLink.classList.add(socialImages[index].className);
    socialImage.style.opacity = 1; // Fade in
  }, 500);
}, 3000);

   
 
  const twitchLink = document.createElement('a');
  twitchLink.className = 'youtubeLink';
  twitchLink.href = 'https://www.twitch.tv/pplusside';
  twitchLink.target = '_blank';
  const twitchImage = document.createElement('img');
  twitchImage.className = 'youtubeLink';
  twitchImage.src = 'https://cdn-icons-png.freepik.com/256/15059/15059878.png?semt=ais_hybrid';
  twitchLink.appendChild(twitchImage);
  navBar.appendChild(twitchLink);

  const youtubeLink = document.createElement('a');
  youtubeLink.className = 'youtubeLink';
  youtubeLink.href = 'https://www.youtube.com/@PPlusSide/featured';
  youtubeLink.target = '_blank';
  const youtubeImage = document.createElement('img');
  youtubeImage.className = 'youtubeLink';
  youtubeImage.src = 'https://github.com/pkzstar/plus-side/blob/main/images/youtubelogo.png?raw=true';
  youtubeLink.appendChild(youtubeImage);
  navBar.appendChild(youtubeLink);



  // const twitchLink = document.createElement('a');
  // twitchLinkLink.className = 'youtubeLink';
  // twitchLinkLinkhref = 'https://www.youtube.com/@PPlusSide/featured';
  // twitchLinkLink.target = '_blank';
  // const twitchImage = document.createElement('img');
  // twitchImage.className = 'youtubeLink';
  // twitchImage.src = 'https://github.com/pkzstar/plus-side/blob/main/images/youtubelogo.png?raw=true';
  // twitchLink.appendChild(twitchImage);
  // navBar.appendChild(twitchLink);

  const navTextSection = document.createElement('section');
  navTextSection.className = 'navText';
  const eventsLink = document.createElement('a');
  eventsLink.href = '/';
  const eventsText = document.createElement('p');
  eventsText.id = 'navText';
  eventsText.className = 'navTextContent';
  eventsText.textContent = 'Events';
  eventsLink.appendChild(eventsText);
  navTextSection.appendChild(eventsLink);

  const articlesLink = document.createElement('a');
  articlesLink.href = '/Articles.html';
  const articlesText = document.createElement('p');
  articlesText.id = 'navText';
  articlesText.className = 'navTextContent';
  articlesText.textContent = 'Articles';
  articlesLink.appendChild(articlesText);
  navTextSection.appendChild(articlesLink);
  navBar.appendChild(navTextSection);

  // const CharactersLink = document.createElement('a');
  // CharactersLink.href = '/Characters.html';
  // const CharactersText = document.createElement('p');
  // CharactersText.id = 'navText';
  // CharactersText.textContent = 'Characters';
  // CharactersLink.appendChild(CharactersText);
  // navTextSection.appendChild(CharactersLink);
  // navBar.appendChild(navTextSection);

  return navBar;
}

// Get the div with id 'navBar'
const navBarElement = document.getElementById('navBar');

// Create the navbar and append it to the 'navBar' div
const navbarElement = createNavBar();
navBarElement.appendChild(navbarElement);


const style = document.createElement('style');
style.textContent = `
  .socialImage {
    transition: opacity 1s;
  }
`;
document.head.appendChild(style);