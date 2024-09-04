function createNavBar() {
  const navBar = document.createElement('div');
  navBar.className = 'headerNav';

  const plusSideLink = document.createElement('a');
  plusSideLink.href = '/';
  const plusSideImage = document.createElement('img');
  plusSideImage.className = 'plus-side-net-nav';
  plusSideImage.src = 'https://github.com/pkzstar/plus-side/blob/main/images/plusside.net.png?raw=true';
  plusSideImage.alt = 'oops';
  plusSideLink.appendChild(plusSideImage);
  navBar.appendChild(plusSideLink);

  const twitterLink = document.createElement('a');
  twitterLink.className = 'twitterLink';
  twitterLink.href = 'https://twitter.com/pplusside';
  twitterLink.target = '_blank';
  const twitterImage = document.createElement('img');
  twitterImage.className = 'twitterLink';
  twitterImage.src = 'https://github.com/pkzstar/plus-side/blob/main/images/twitterlogo.png?raw=true';
  twitterLink.appendChild(twitterImage);
  navBar.appendChild(twitterLink);

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
