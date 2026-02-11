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
      vodsLink.classList.add('vodsPast');
      vodsLink.href = event.vodsUrl;
      vodsLink.target = '_blank';
      vodsLink.textContent = 'Vods';
      eventDiv.appendChild(vodsLink);
    }

    const startGGLink = document.createElement('a');
    startGGLink.classList.add('startgg');
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
    eventTitle: "King’s Ransom 2",
    imageUrl: "https://images.start.gg/images/tournament/807112/image-629ebbd7c0afcc7f7993a88b00c12cc0.png",
    eventUrl: "https://www.start.gg/tournament/king-s-ransom-2/details",
    date: "February 7 2026",
    location: "Tennessee",
    entrants: 27,
    first: "Moist",
    second: "knight",
    third: "jankie",
    vodsUrl: "https://www.youtube.com/playlist?list=PLL2RqAT-Fg9YeYpwRhPSDm-KAWtPaZG5l",
    hideRankImage: true
  },
  {
    eventTitle: "Pico Plus #16",
    imageUrl: "https://images.start.gg/images/tournament/874014/image-4b8b29a313fa02abe178bc7edbda0922.png",
    eventUrl: "https://www.start.gg/tournament/pico-plus-16/details",
    date: "February 7 2026",
    location: "California",
    entrants: 27,
    first: "Ryzuul",
    second: "Jonny Sosa",
    third: "Nezergy",
    vodsUrl: "",
    hideRankImage: false
  },
  {
    eventTitle: "Pope's Sunday Mass IV",
    imageUrl: "https://images.start.gg/images/tournament/847360/image-d9bf248b1dbeca6ecc7cca0a8ac107b3.png",
    eventUrl: "https://www.start.gg/tournament/pope-s-sunday-mass-iv/details",
    date: "February 1 2026",
    location: "Victoria",
    entrants: 16,
    first: "Ryzuul",
    second: "Tyler",
    third: "DD",
    vodsUrl: "",
    hideRankImage: true
  },
  {
    eventTitle: "Mahtay Melee - Winter '26 Edition",
    imageUrl: "https://images.start.gg/images/tournament/863499/image-45acb75418444796356138f20b59b114.png",
    eventUrl: "https://www.start.gg/tournament/mahtay-melee-winter-26-edition/details",
    date: "January 31 2026",
    location: "Ontario",
    entrants: 21,
    first: "BING",
    second: "Zaza",
    third: "Erg",
    vodsUrl: "",
    hideRankImage: true
  },
  {
    eventTitle: "Get Outplayed 9",
    imageUrl: "https://images.start.gg/images/tournament/864902/image-68b7df2019e573705b541192fad00a3b.png",
    eventUrl: "https://www.start.gg/tournament/get-outplayed-9/details",
    date: "January 31 2026",
    location: "Illinois",
    entrants: 7,
    first: "PokePoke",
    second: "Kief",
    third: "Nano",
    vodsUrl: "",
    hideRankImage: true
  },
  {
    eventTitle: "Pico Plus #15",
    imageUrl: "https://images.start.gg/images/tournament/860989/image-d18a4bd977c91b9e83aab35faed2226b.png",
    eventUrl: "https://www.start.gg/tournament/pico-plus-15/details",
    date: "January 24 2026",
    location: "California",
    entrants: 38,
    first: "Jonny Sosa",
    second: "Blank",
    third: "Sneez",
    vodsUrl: "",
    hideRankImage: false
  },
  {
    eventTitle: "SOLARPOWERED: BLACKOUT",
    imageUrl: "https://images.start.gg/images/tournament/863219/image-d4257a618b9f740a0407de02fea07eb9.jpg",
    eventUrl: "https://www.start.gg/tournament/solarpowered-blackout/details",
    date: "January 17 2026",
    location: "Texas",
    entrants: 4,
    first: "J-am",
    second: "Mason?",
    third: "Peston",
    vodsUrl: "",
    hideRankImage: true
  },
  {
    eventTitle: "Blacklisted 9: Blacklisted Forever",
    imageUrl: "https://images.start.gg/images/tournament/681909/image-c043212981c638b1eaf4cef1bb2c5363.png",
    eventUrl: "https://www.start.gg/tournament/blacklisted-9-blacklisted-forever/details",
    date: "January 10-11 2026",
    location: "Massachussetts",
    entrants: 111,
    first: "RapMonster",
    second: "Comb",
    third: "Sebas",
    vodsUrl: "https://www.youtube.com/playlist?list=PLov8ro2MZrJL2n1puraMz0NdojK-MB2aG",
    hideRankImage: false
  },
];

// Create past event element
const pastEventElement = createPastEventElement(eventData);

// Append the past event element to a container (e.g., a div with id 'pastListContainer')
const pastListContainer = document.getElementById('pastListContainer');
pastListContainer.appendChild(pastEventElement);



// below is a wip for making the past events format to the left when added

// // Create past event element
// const pastEventElement = createPastEventElement(eventData);

// // Loop through each set of four events
// for (let i = 0; i < eventsData.length; i += 4) {
//     // Create a new ul for each set of four events
//     const eventList = document.createElement('ul');
//     eventList.classList.add('pastList');
//     eventList.id = 'pastList' + i; // Unique ID for each list

//     // Create and append the li elements for each event in the set
//     for (let j = i; j < i + 4 && j < eventsData.length; j++) {
//         const eventData = eventsData[j];
//         const eventComponent = createEventComponent(eventData);
//         // Append the event component directly to the ul
//         eventList.appendChild(eventComponent);
//     }

//     // Check if there's only one li element in the ul and it's not on a screen less than 600px wide
//     const lis = eventList.querySelectorAll('li');
//     const screenWidthLessThan600 = window.matchMedia("(max-width: 600px)").matches;
//     if (lis.length === 1 && !screenWidthLessThan600) {
//         // Apply max-width: 100% to the single li element
//         lis[0].style.marginLeft = '25%';
//     }

//     // Append the ul (with li inside) to the past event element
//     pastEventElement.appendChild(eventList);
// }

// // Append the past event element to the container with id 'pastListContainer'
// const pastListContainer = document.getElementById('pastListContainer');
// pastListContainer.appendChild(pastEventElement);

document.addEventListener('DOMContentLoaded', () => {
  let calPosition = document.querySelector('.calPosition');

  let pmrFilter = document.createElement('a');
  calPosition.appendChild(pmrFilter);
  pmrFilter.classList.add('navCalPast');

  let pmrFilterBtn = document.createElement('button');
  pmrFilter.appendChild(pmrFilterBtn);
  pmrFilterBtn.classList.add('calView');
  pmrFilterBtn.innerHTML = 'PM Rank';

  let pmrHidden = false; // toggle flag

  pmrFilterBtn.addEventListener('click', function () {
    console.log('Button clicked!');

    if (Array.isArray(eventData)) {
      const allPastEvents = document.querySelectorAll('.past-events');

      eventData.forEach((event, index) => {
        if (event.hideRankImage === true) {
          const targetEvent = allPastEvents[index];
          if (targetEvent) {
            if (!pmrHidden) {
              targetEvent.classList.add('hidden');
              console.log(`Hid past-event at index ${index}`);
            } else {
              targetEvent.classList.remove('hidden');
              console.log(`Re-shown past-event at index ${index}`);
            }
          }
        }
      });

      pmrHidden = !pmrHidden;

    } else {
      console.error('eventData is not an array');
    }
  });
});
