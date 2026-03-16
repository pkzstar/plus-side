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
    eventTitle: "House of Nimbus 8",
    imageUrl: "https://images.start.gg/images/tournament/889472/image-e6b010b0981bba8636fc8b3b1e4cef61.jpg",
    eventUrl: "https://www.start.gg/tournament/house-of-nimbus-8/details",
    date: "March 14 2026",
    location: "California",
    entrants: 10,
    first: "SipMastah",
    second: "The Doctor",
    third: "Ivayne",
    vodsUrl: "",
    hideRankImage: true
  },
  {
    eventTitle: "Take Flight '26",
    imageUrl: "https://images.start.gg/images/tournament/864665/image-9551083e30bca6b48e9a64d778db43a2.jpg",
    eventUrl: "https://www.start.gg/tournament/take-flight-26/details",
    date: "March 14 2026",
    location: "Ohio",
    entrants: 15,
    first: "Peppy",
    second: "Iceking",
    third: "UP Sanji Player",
    vodsUrl: "",
    hideRankImage: true
  },
  {
    eventTitle: "Unc Frozen's Icebox 12",
    imageUrl: "https://images.start.gg/images/tournament/881750/image-b0569faa89f66f8f4ffbd5889d533aaf.jpg",
    eventUrl: "https://www.start.gg/tournament/unc-frozen-s-icebox-12/details",
    date: "March 7 2026",
    location: "Texas",
    entrants: 15,
    first: "Apathy",
    second: "J-am",
    third: "AshleyAtari",
    vodsUrl: "",
    hideRankImage: true
  },
  {
    eventTitle: "Get Reel: Take 9",
    imageUrl: "https://images.start.gg/images/tournament/875187/image-2f6194fe31105baffc863a3877f3fa07.png",
    eventUrl: "https://www.start.gg/tournament/get-reel-take-9/details",
    date: "February 28 2026",
    location: "British Columbia",
    entrants: 17,
    first: "Espi",
    second: "White Lightning",
    third: "SpiritGun",
    vodsUrl: "",
    hideRankImage: true
  },
  {
    eventTitle: "Cheba Hut Masons Bday Bash: P+ Takeover",
    imageUrl: "https://images.start.gg/images/tournament/877960/image-078d0d2068fbee20f9fefe03f390c99b.png",
    eventUrl: "https://www.start.gg/tournament/cheba-hut-masons-bday-bash-p-takeover/details",
    date: "February 28 2026",
    location: "Washington",
    entrants: 26,
    first: "Mason",
    second: "Helix",
    third: "Sputo",
    vodsUrl: "",
    hideRankImage: true
  },
  {
    eventTitle: "CG House Tournament",
    imageUrl: "https://images.start.gg/images/tournament/871850/image-c3f2c9a593794b64de9097c07958510d.png",
    eventUrl: "https://www.start.gg/tournament/cg-house-tournament/details",
    date: "February 28 2026",
    location: "Mexicali",
    entrants: 7,
    first: "Yoru",
    second: "Panda β",
    third: "JamieHR",
    vodsUrl: "",
    hideRankImage: true
  },
  {
    eventTitle: "Get Spiked On! Winter 2026",
    imageUrl: "https://images.start.gg/images/tournament/873210/image-b696f37f8da7f1792ac254272affd644.png",
    eventUrl: "https://www.start.gg/tournament/get-spiked-on-winter-2026/details",
    date: "February 28 2026",
    location: "Wageningen",
    entrants: 13,
    first: "Xin",
    second: "Kemphaan",
    third: "Freekleef",
    vodsUrl: "",
    hideRankImage: true
  },
  {
    eventTitle: "Allston Allstars VI",
    imageUrl: "https://images.start.gg/images/tournament/870470/image-68fc4cb16635b6b20429bbb69a4565a1.png",
    eventUrl: "https://www.start.gg/tournament/allston-allstars-vi-1/details",
    date: "February 28 2026",
    location: "Massachussetts",
    entrants: 14,
    first: "Imogen Heat",
    second: "sfy bees",
    third: "Tarchwood",
    vodsUrl: "",
    hideRankImage: true
  },
  {
    eventTitle: "Plus House 1",
    imageUrl: "https://images.start.gg/images/tournament/874264/image-0269f85a2b42ff0f5fb1afb0df394e6b.png",
    eventUrl: "https://www.start.gg/tournament/plus-house-1/details",
    date: "February 28 2026",
    location: "Missouri",
    entrants: 16,
    first: "rake",
    second: "Gaz!",
    third: "max",
    vodsUrl: "",
    hideRankImage: true
  },
  {
    eventTitle: "Flash Flood",
    imageUrl: "https://images.start.gg/images/tournament/813787/image-12969cc9155ec8f9247a30aefe8d1120.png",
    eventUrl: "https://www.start.gg/tournament/flash-flood/details",
    date: "February 28 2026",
    location: "Illinois",
    entrants: 49,
    first: "Chaloopy",
    second: "LIVE",
    third: "Ripple",
    vodsUrl: "https://www.youtube.com/playlist?list=PL_OBsvMFKQ5Q2VLAaElL1v1muH7Lql-q7",
    hideRankImage: false
  },
  {
    eventTitle: "Bristol's Basement: Echoes of the Eye",
    imageUrl: "https://images.start.gg/images/tournament/876302/image-b89cee1fa577271d432f968cdcbd2b10.jpg",
    eventUrl: "https://www.start.gg/tournament/bristol-s-basement-echoes-of-the-eye/details",
    date: "February 22 2026",
    location: "Bristol",
    entrants: 20,
    first: "SkillZ",
    second: "Aiika",
    third: "VERD",
    vodsUrl: "",
    hideRankImage: true
  },
  {
    eventTitle: "Northstar IV (4th-Star) at St. Cloud State University",
    imageUrl: "https://images.start.gg/images/tournament/846246/image-a72b87e4ba315c212ba95cab96635833.png",
    eventUrl: "https://www.start.gg/tournament/northstar-iv-4th-star-at-st-cloud-state-university/details",
    date: "February 21 2026 - February 22 2026",
    location: "Minnesota",
    entrants: 15,
    first: "Veka",
    second: "Preeminent",
    third: "Ben",
    vodsUrl: "",
    hideRankImage: true
  },
  {
    eventTitle: "Chamberi Champions #5: La Enfermedad del Lomo",
    imageUrl: "https://images.start.gg/images/tournament/866192/image-3f3e6a563981bd53b7818ef7dd6e9a67.png",
    eventUrl: "https://www.start.gg/tournament/chamberi-champions-5-la-enfermedad-del-lomo/details",
    date: "February 21 2026",
    location: "Spain",
    entrants: 15,
    first: "Glenco Mastantuono",
    second: "Verdal",
    third: "IuDKing",
    vodsUrl: "",
    hideRankImage: true
  },
  {
    eventTitle: "Condo of Love: Ares x Blitz",
    imageUrl: "https://images.start.gg/images/tournament/876164/image-973ccad4af779392912d3820ca7efb14.jpg",
    eventUrl: "https://www.start.gg/tournament/condo-of-love-ares-x-blitz/details",
    date: "February 21 2026",
    location: "Ontario",
    entrants: 28,
    first: "Dirtboy",
    second: "Krumpberry",
    third: "Blitz",
    vodsUrl: "",
    hideRankImage: false
  },
  {
    eventTitle: "Smash of the Titans 11",
    imageUrl: "https://images.start.gg/images/tournament/841162/image-725756f044cd841d6402cb75cff7c2c3.jpg",
    eventUrl: "https://www.start.gg/tournament/smash-of-the-titans-11-1/details",
    date: "February 21 2026",
    location: "Illinois",
    entrants: 45,
    first: "Ryzuul",
    second: "Comb",
    third: "SoulOfficer",
    vodsUrl: "",
    hideRankImage: false
  },
  {
    eventTitle: "Docked And Loaded 4",
    imageUrl: "https://images.start.gg/images/tournament/837439/image-df48365313d01a791dca3b6ed8c9ec17.png",
    eventUrl: "https://www.start.gg/tournament/docked-and-loaded-4/details",
    date: "February 21 2026",
    location: "Auckland",
    entrants: 15,
    first: "IcyK",
    second: "PoeFire",
    third: "Hydrocephalus",
    vodsUrl: "",
    hideRankImage: true
  },
  {
    eventTitle: "Dash Dance: The Sequel",
    imageUrl: "https://images.start.gg/images/tournament/878421/image-b53fca5b793660a225a60f2924f80633.jpg",
    eventUrl: "https://www.start.gg/tournament/dash-dance-the-sequel/details",
    date: "February 15 2026",
    location: "New York",
    entrants: 10,
    first: "Bassyxx",
    second: "firestarW",
    third: "John",
    vodsUrl: "",
    hideRankImage: true
  },
  {
    eventTitle: "Exodus 2026",
    imageUrl: "https://images.start.gg/images/tournament/873548/image-4d1423b87f343c812d7b54bf5b9b62c6.png",
    eventUrl: "https://www.start.gg/tournament/exodus-2026/details",
    date: "February 15 2026",
    location: "California",
    entrants: 84,
    first: "The Doctor",
    second: "SipMastah",
    third: "RapMonster",
    vodsUrl: "https://www.youtube.com/watch?v=l66JFgwh0AM",
    hideRankImage: false
  },
  {
    eventTitle: "Unc Frozen's Icebox 11: Lovey Dubby Edition",
    imageUrl: "https://images.start.gg/images/tournament/872259/image-697d83b9de5bb9f9afd9c4d52d2f48cb.jpg",
    eventUrl: "https://www.start.gg/tournament/unc-frozen-s-icebox-11-lovey-dubby-edition/details",
    date: "February 14 2026",
    location: "Texas",
    entrants: 8,
    first: "J-am",
    second: "AshleyAtari",
    third: "Sente",
    vodsUrl: "",
    hideRankImage: true
  },
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
    hideRankImage: false
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
