function createNavBar() {
  const navBar = document.createElement('div');
  navBar.className = 'header-nav';

  const plusSideLink = document.createElement('a');
  plusSideLink.href = '/';
  const plusSideImage = document.createElement('img');
  plusSideImage.className = 'plus-side-net-nav';
  plusSideImage.src = 'https://github.com/pkzstar/plus-side/blob/main/images/plusside.net.png?raw=true';
  plusSideImage.alt = 'oops';
  plusSideLink.appendChild(plusSideImage);
  navBar.appendChild(plusSideLink);

  const twitterLink = document.createElement('a');
  twitterLink.className = 'twitter-link';
  twitterLink.href = 'https://twitter.com/pplusside';
  twitterLink.target = '_blank';
  const twitterImage = document.createElement('img');
  twitterImage.className = 'twitter-link';
  twitterImage.src = 'https://github.com/pkzstar/plus-side/blob/main/images/twitterlogo.png?raw=true';
  twitterLink.appendChild(twitterImage);
  navBar.appendChild(twitterLink);

  const youtubeLink = document.createElement('a');
  youtubeLink.className = 'youtube-link';
  youtubeLink.href = 'https://www.youtube.com/@PPlusSide/featured';
  youtubeLink.target = '_blank';
  const youtubeImage = document.createElement('img');
  youtubeImage.className = 'youtube-link';
  youtubeImage.src = 'https://github.com/pkzstar/plus-side/blob/main/images/youtubelogo.png?raw=true';
  youtubeLink.appendChild(youtubeImage);
  navBar.appendChild(youtubeLink);

  const navTextSection = document.createElement('section');
  navTextSection.className = 'nav-text';
  const eventsLink = document.createElement('a');
  eventsLink.href = '/';
  const eventsText = document.createElement('p');
  eventsText.id = 'navText';
  eventsText.textContent = 'Events';
  eventsLink.appendChild(eventsText);
  navTextSection.appendChild(eventsLink);
  const articlesLink = document.createElement('a');
  articlesLink.href = '/Articles.html';
  const articlesText = document.createElement('p');
  articlesText.id = 'navText';
  articlesText.textContent = 'Articles';
  articlesLink.appendChild(articlesText);
  navTextSection.appendChild(articlesLink);
  navBar.appendChild(navTextSection);

  return navBar;
}

// Get the div with id 'navBar'
const navBarElement = document.getElementById('navBar');

// Create the navbar and append it to the 'navBar' div
const navbarElement = createNavBar();
navBarElement.appendChild(navbarElement);
