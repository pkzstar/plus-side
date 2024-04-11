function createPastEventElement(eventData) {
    // Create a container for all past events
    const eventList = document.createElement('ul');
    eventList.id = 'pastList';
    eventList.className = 'pastList';

  
    // Loop through each event data object and create elements for them
    eventData.forEach(event => {
      const eventListItem = document.createElement('li');
      eventListItem.classList.add('past-events');
  
      const eventDiv = document.createElement('div');
      eventDiv.style.flex = '0';
  
      const eventLink = document.createElement('a');
      eventLink.href = event.eventUrl;
      eventLink.target = '_blank';
  
      const eventImage = document.createElement('img');
      eventImage.classList.add('past-events-banners');
      eventImage.src = event.imageUrl;
      eventImage.alt = '';
  
      eventLink.appendChild(eventImage);
      eventDiv.appendChild(eventLink);
  
      if (!event.hideRankImage) {
        const rankImageDiv = document.createElement('div');
        const rankImage = document.createElement('img');
        rankImage.classList.add('pm-rank-centered');
        rankImage.id = "yourContainerElementId";
        rankImage.src = 'https://github.com/pkzstar/plus-side/blob/main/images/pmrank.png?raw=true';
        rankImage.alt = '';
        rankImageDiv.appendChild(rankImage);
        eventDiv.appendChild(rankImageDiv);
      } else {
        const rankImageDiv = document.createElement('div');
        const rankImage = document.createElement('img');
        rankImage.classList.add('pm-rank-centered-invis');
        rankImage.id = "yourContainerElementId";
        rankImage.src = 'https://github.com/pkzstar/plus-side/blob/main/images/pmrank.png?raw=true';
        rankImage.alt = '';
        rankImageDiv.appendChild(rankImage);
        eventDiv.appendChild(rankImageDiv);
      };
  
      const eventTitleLink = document.createElement('a');
      eventTitleLink.href = event.eventUrl;
      eventTitleLink.target = '_blank';
      eventTitleLink.textContent = event.eventTitle;
  
      const eventTitle = document.createElement('h1');
      eventTitle.classList.add('past-events-title');
      eventTitle.appendChild(eventTitleLink);
      eventDiv.appendChild(eventTitle);
  
      const dateParagraph = document.createElement('p');
      dateParagraph.classList.add('past-article-text');
      dateParagraph.textContent = 'Date : ' + event.date;
      eventDiv.appendChild(dateParagraph);
  
      const locationParagraph = document.createElement('p');
      locationParagraph.classList.add('past-article-text');
      locationParagraph.textContent = 'Location : ' + event.location;
      eventDiv.appendChild(locationParagraph);
  
      const entrantsParagraph = document.createElement('p');
      entrantsParagraph.classList.add('past-article-text');
      entrantsParagraph.textContent = 'Entrants : ' + event.entrants;
      eventDiv.appendChild(entrantsParagraph);
  
      const firstPlaceParagraph = document.createElement('p');
      firstPlaceParagraph.classList.add('top3');
      firstPlaceParagraph.textContent = '🥇: ' + event.first;
      eventDiv.appendChild(firstPlaceParagraph);
  
      const secondPlaceParagraph = document.createElement('p');
      secondPlaceParagraph.classList.add('top3');
      secondPlaceParagraph.textContent = '🥈: ' + event.second;
      eventDiv.appendChild(secondPlaceParagraph);
  
      const thirdPlaceParagraph = document.createElement('p');
      thirdPlaceParagraph.classList.add('top3');
      thirdPlaceParagraph.textContent = '🥉: ' + event.third;
      eventDiv.appendChild(thirdPlaceParagraph);
  
      if (event.vodsUrl) {
        const vodsLink = document.createElement('a');
        vodsLink.classList.add('vods-past');
        vodsLink.href = event.vodsUrl;
        vodsLink.target = '_blank';
        vodsLink.textContent = 'Vods';
        eventDiv.appendChild(vodsLink);
      }
  
      const startGGLink = document.createElement('a');
      startGGLink.classList.add('start-gg');
      startGGLink.href = event.eventUrl;
      startGGLink.target = '_blank';
      startGGLink.textContent = 'start.gg';
      eventDiv.appendChild(startGGLink);
  
      eventListItem.appendChild(eventDiv);
      eventList.appendChild(eventListItem);
    });
    
    return eventList;
  }
  // Sample data for past event
const eventData = [
  {
    eventTitle: "Somnio 5",
    imageUrl: "https://github.com/pkzstar/plus-side/blob/main/images/past-events/somniov.png?raw=true",
    eventUrl: "https://www.start.gg/tournament/somnio-5/event/brawl-singles-somnio-5",
    date: "April 6 2024",
    location: "Eindhoven",
    entrants: 27,
    first: "Smash_Falco3",
    second: "Melody",
    third: "Ace",
    vodsUrl: "https://www.youtube.com/playlist?list=PLXuSSlxxWDDocvJs5SkF29chHQz-wUvn6",
    hideRankImage: true
  },
  {
    eventTitle: "The Action 2: Action Replay",
    imageUrl: "https://github.com/pkzstar/plus-side/blob/main/images/past-events/replay.png?raw=true",
    eventUrl: "https://www.start.gg/tournament/the-action-2-action-replay/event/project-singles",
    date: "April 5-6 2024",
    location: "Canberra",
    entrants: 32,
    first: "Ryzuul",
    second: "RNGReallyNotGood",
    third: "Tyler",
    vodsUrl: "",
    hideRankImage: true
  },
  {
    eventTitle: "Metal Tavern",
    imageUrl: "https://github.com/pkzstar/plus-side/blob/main/images/past-events/metal-tavern.png?raw=true",
    eventUrl: "https://www.start.gg/tournament/metal-tavern/event/joust-project-singles",
    date: "March 30 2024",
    location: "Arizona",
    entrants: 37,
    first: "Jonny Sosa",
    second: "Av",
    third: "Cloudburst",
    vodsUrl: "https://www.youtube.com/playlist?list=PLUlQZqWo6xoRBr-_93qfQn_ZlzdijLgGq",
    hideRankImage: false
  },
  {
    eventTitle: "Sakura-Con",
    imageUrl: "https://github.com/pkzstar/plus-side/blob/main/images/past-events/sakura.png?raw=true",
    eventUrl: "https://www.start.gg/tournament/sakura-con-2024/events/project/brackets/1582567/2370758/standings",
    date: "March 29-31 2024",
    location: "Washington",
    entrants: 32,
    first: "PwrUp!",
    second: "PartyGhoul",
    third: "JC0nyx",
    vodsUrl: "",
    hideRankImage: true
  },
  {
    eventTitle: "ETSU-Con 2024",
    imageUrl: "https://github.com/pkzstar/plus-side/blob/main/images/past-events/etsu.png?raw=true",
    eventUrl: "https://www.start.gg/tournament/etsu-con-2024/event/p-singles",
    date: "March 23 2024",
    location: "Tennessee",
    entrants: "21",
    first: "Moist",
    second: "Shenanigans",
    third: "Mr. Brandandorf",
    vodsUrl: "",
    hideRankImage: true
  },
  {
    eventTitle: "Smash of the Titans 8",
    imageUrl: "https://github.com/pkzstar/plus-side/blob/main/images/past-events/titans.png?raw=true",
    eventUrl: "https://www.start.gg/tournament/smash-of-the-titans-8-1/event/p-singles",
    date: "March 23 2024",
    location: "Illinois",
    entrants: "22",
    first: "Chaloopy",
    second: "ORLY",
    third: "Star",
    vodsUrl: "",
    hideRankImage: false
  },
  {
    eventTitle: "Game 5 In The D #2",
    imageUrl: "https://github.com/pkzstar/plus-side/blob/main/images/past-events/game5In.png?raw=true",
    eventUrl: "https://www.start.gg/tournament/game-5-in-the-d-2-yuko-s-bday-edition/event/project-singles",
    date: "March 23 2024",
    location: "Michigan",
    entrants: "18",
    first: "Dirtboy",
    second: "Anther",
    third: "techboy",
    vodsUrl: "https://www.youtube.com/playlist?list=PLp0mqricKIh1JTJG2dp7GdUt0opZwKrrI",
    hideRankImage: true
  },
  {
    eventTitle: "Cascade Clash",
    imageUrl: "https://github.com/pkzstar/plus-side/blob/main/images/past-events/cascade.png?raw=true",
    eventUrl: "https://www.start.gg/tournament/cascade-clash-a-best-in-texas-league-event-1/event/p-singles",
    date: "March 23 2024",
    location: "Texas",
    entrants: "28",
    first: "Salt",
    second: "Apathy",
    third: "SDJ",
    vodsUrl: "",
    hideRankImage: true
  },
  {
    eventTitle: "Storm VIII",
    imageUrl: "https://github.com/pkzstar/plus-side/blob/main/images/past-events/storm.png?raw=true",
    eventUrl: "https://www.start.gg/tournament/storm-viii-1/event/pm-singles",
    date: "March 16 2024",
    location: "Newcastle upon Tyne",
    entrants: "24",
    first: "Eon",
    second: "maXy",
    third: "squeachu",
    vodsUrl: "",
    hideRankImage: true
  },
  {
    eventTitle: "Aftershock P+ & HDR",
    imageUrl: "https://github.com/pkzstar/plus-side/blob/main/images/past-events/aftershock.png?raw=true",
    eventUrl: "https://www.start.gg/tournament/aftershock-p-hdr-2/details",
    date: "March 15 2024",
    location: "New Jersey",
    entrants: "39",
    first: "Shiny Zubat",
    second: "Jodeci Joestar",
    third: "Vaporeon",
    vodsUrl: "",
    hideRankImage: false
  },
  {
    eventTitle: "Northstar II",
    imageUrl: "https://raw.githubusercontent.com/pkzstar/plus-side/main/images/past-events/northstar.png",
    eventUrl: "https://www.start.gg/tournament/northstar-ii-at-cloud-con/events/project-singles/brackets/1585325/2374365/standings",
    date: "March 10 2024",
    location: "Minnesota",
    entrants: "10",
    first: "Ben",
    second: "Perfect Sunset",
    third: "Cranky",
    vodsUrl: "",
    hideRankImage: true
  },
  {
    eventTitle: "College Park Mutiny: Blossom",
    imageUrl: "https://github.com/pkzstar/plus-side/blob/main/images/past-events/mutiny.png?raw=true",
    eventUrl: "https://www.start.gg/tournament/college-park-mutiny-blossom-feat-eve-kevin-maples-mvlvchi-200/event/project-singles/brackets/1564756/2347891",
    date: "March 2 2024",
    location: "Maryland",
    entrants: "10",
    first: "Hyperflame",
    second: "Mo $",
    third: "Bluuest",
    vodsUrl: "https://www.twitch.tv/videos/2114594529",
    hideRankImage: true
  },
  {
    eventTitle: "Full Bloom 2024",
    imageUrl: "https://github.com/pkzstar/plus-side/blob/main/images/past-events/fullbloom.png?raw=true",
    eventUrl: "https://www.start.gg/tournament/full-bloom-2024/event/project-singles",
    date: "February 24-25, 2024",
    location: "Indiana",
    entrants: "84",
    first: "Dirtboy",
    second: "Anther",
    third: "Chaloopy",
    vodsUrl: "https://www.youtube.com/playlist?list=PL28nRWo732KWJjJ5ujIrH_34dLYDxqwJd",
    hideRankImage: false
  },
  {
    eventTitle: "Perfect Pivot",
    imageUrl: "https://github.com/pkzstar/plus-side/blob/main/images/past-events/pp.png?raw=true",
    eventUrl: "https://www.start.gg/tournament/perfect-pivot/details",
    date: "February 24-25, 2024",
    location: "Winnipeg",
    entrants: "27",
    first: "Blitz",
    second: "2665",
    third: "Jams",
    vodsUrl: "",
    hideRankImage: true
  },
  {
    eventTitle: "The Truce",
    imageUrl: "https://github.com/pkzstar/plus-side/blob/main/images/past-events/truce.png?raw=true",
    eventUrl: "https://www.start.gg/tournament/the-truce/details",
    date: "February 24-25, 2024",
    location: "Le Kremlin-Bicêtre",
    entrants: "40",
    first: "Smash_Falco3",
    second: "Melody",
    third: "iPunch",
    vodsUrl: "https://www.youtube.com/playlist?list=PLKRfQKsyLmMa-134SQQmSRVh_QHmI69fW",
    hideRankImage: true
  },
  {
    eventTitle: "Beantown Lean House I",
    imageUrl: "https://github.com/pkzstar/plus-side/blob/main/images/past-events/beantown.png?raw=true",
    eventUrl: "https://www.start.gg/tournament/beantown-lean-house-i/event/project-singles",
    date: "February 24 2024",
    location: "Massachusetts",
    entrants: "8",
    first: "Serb",
    second: "Foxy Grandpa",
    third: "sfy bees",
    vodsUrl: "https://www.youtube.com/watch?v=2DsDtuoZIN4",
    hideRankImage: true
  },
  {
    eventTitle: "Exodus 2024",
    imageUrl: "https://github.com/pkzstar/plus-side/blob/main/images/past-events/exodus.png?raw=true",
    eventUrl: "https://www.start.gg/tournament/exodus-2024/details",
    date: "February 17 2024",
    location: "California",
    entrants: "51",
    first: "SipMastah",
    second: "Sneez",
    third: "Darc",
    vodsUrl: "https://www.youtube.com/playlist?list=PLK6QY5XQ-uu1tUnqdIf51uxtC4l_sPUVI",
    hideRankImage: false
  },
  {
    eventTitle: "Smashing Grounds 10th Anniversary Celebration",
    imageUrl: "https://github.com/pkzstar/plus-side/blob/main/images/past-events/10th%20aniv.png?raw=true",
    eventUrl: "https://www.start.gg/tournament/smashing-grounds-10th-anniversary-celebration-a-melee-and-project-regional/events/project-singles/brackets/1545109/2321524/overview",
    date: "February 10 2024",
    location: "Massachusetts",
    entrants: "34",
    first: "wren",
    second: "Shadowhawke",
    third: "~CP9~",
    vodsUrl: "https://www.youtube.com/playlist?list=PLAIIMiVssmgoLW_ael9HgTWKG5L3SIyUq",
    hideRankImage: false
  },
  {
    eventTitle: "The Cure",
    imageUrl: "https://github.com/pkzstar/plus-side/blob/main/images/past-events/the%20cure.png?raw=true",
    eventUrl: "https://www.start.gg/tournament/the-cure-100-pot-bonus-p-invitational/event/singles/brackets/1533162/2305744",
    date: "February 9 2024",
    location: "Colorado",
    entrants: "14",
    first: "Whoratio",
    second: "shwang",
    third: "meecrobs",
    vodsUrl: "https://www.youtube.com/playlist?list=PLjAjRxkFDTqOIcs4xm5tbfH_KuO0FvY4S",
    hideRankImage: true
  },
  {
    eventTitle: "Vortex Gallery at Frosty Faustings XVI",
    imageUrl: "https://github.com/pkzstar/plus-side/blob/main/images/past-events/vortex.png?raw=true",
    eventUrl: "https://www.start.gg/tournament/vortex-gallery-at-frosty-faustings-xvi/event/project-wii/standings",
    date: "January 28 2024",
    location: "Illinois",
    entrants: "34",
    first: "Rise",
    second: "yung Quaff",
    third: "Twisty",
    vodsUrl: "https://www.youtube.com/playlist?list=PLov8ro2MZrJKniuhKgF_Qp5swkhIroZlW",
    hideRankImage: false
  },
  {
    eventTitle: "Game 5 In The D",
    imageUrl: "https://github.com/pkzstar/plus-side/blob/main/images/past-events/game5In.png?raw=true",
    eventUrl: "https://www.start.gg/tournament/game-5-in-the-d/details",
    date: "January 20 2024",
    location: "Michigan",
    entrants: "44",
    first: "Morsecode762",
    second: "Techboy",
    third: "Star",
    vodsUrl: "https://www.youtube.com/@Game5ProjectPlus",
    hideRankImage: false
  },
];
  
// Create past event element
const pastEventElement = createPastEventElement(eventData);

// Append the past event element to a container (e.g., a div with id 'pastListContainer')
const pastListContainer = document.getElementById('pastListContainer');
pastListContainer.appendChild(pastEventElement);
