function createEventComponent(eventData) {
  // Create the main li element
  const eventLi = document.createElement('li');
  eventLi.classList.add('events');

  // Create the anchor tag for the event image
  const imgLink = document.createElement('a');
  imgLink.href = eventData.link;
  imgLink.target = '_blank';
  const eventImg = document.createElement('img');
  eventImg.classList.add('events-banners');
  eventImg.src = eventData.imageUrl;
  eventImg.alt = '';
  imgLink.appendChild(eventImg);
  eventLi.appendChild(imgLink);

  // Create the div for event details
  const eventDetailsDiv = document.createElement('div');
  eventDetailsDiv.style.flex = 'auto';
  eventDetailsDiv.classList.add('eventsContent');


  // Create the h1 element for event name
  const eventNameLink = document.createElement('a');
  eventNameLink.href = eventData.link;
eventNameLink.classList.add('eventTitle');;

  eventNameLink.target = '_blank';
  eventNameLink.textContent = eventData.name;
  const eventName = document.createElement('h1');
  eventName.style.flex = '100';
  eventName.classList.add('event-head');
  eventName.appendChild(eventNameLink);
  const lineBreak = document.createElement('br');
eventName.appendChild(lineBreak)

  // Check if rankImg should be visible
  if (eventData.rankImg) {
      const rankImg = document.createElement('img');
      rankImg.classList.add('pm-rank');
      rankImg.src = "https://github.com/pkzstar/plus-side/blob/main/images/pmrank.png?raw=true";
      rankImg.alt = '';
      eventDetailsDiv.appendChild(rankImg); // Append the rankImg to the eventName (div) element
  }

// Append the event location to the h1 element
const locationLabel = document.createElement('b');
locationLabel.classList.add('event-date');
locationLabel.style.display = 'inline-flex';
eventName.appendChild(locationLabel);
const location = document.createElement('b');
location.classList.add('event-date');
location.style.display = 'inline-flex';
location.textContent = eventData.location;
eventName.appendChild(location);


  const eventDate = document.createElement('p');
  eventDate.classList.add('event-date');
  eventDate.style.display = 'block';
  eventDate.textContent = eventData.date;
  eventName.appendChild(eventDate);
  eventDetailsDiv.appendChild(eventName);


  // Create paragraphs for event description
  const eventDescription = document.createElement('p');
  eventDescription.classList.add('events-text');
  eventDescription.textContent = eventData.description;
  eventDetailsDiv.appendChild(eventDescription);

  // Create the start.gg link
  const startGgLink = document.createElement('a');
  startGgLink.classList.add('startgg');
  startGgLink.classList.add('start-gg-home');
  startGgLink.href = eventData.link;
  startGgLink.target = '_blank';
  startGgLink.textContent = 'Start.gg';
  eventDetailsDiv.appendChild(startGgLink);

    // Create the streams link
    const streamLink = document.createElement('a');
    streamLink.classList.add('stream');
    streamLink.classList.add('start-gg-home');
    if (eventData.stream) {
      streamLink.href = eventData.stream;
      streamLink.target = '_blank';
      eventDetailsDiv.appendChild(streamLink);
      streamLink.textContent = 'Stream';
  
    } else {
      // If eventData.stream is empty, do something else or just skip appending streamLink
    }


  // Create the trailer link
  const trailerLink = document.createElement('a');
  trailerLink.classList.add('trailer');
  trailerLink.classList.add('start-gg-home');
  if (eventData.trailer) {
    trailerLink.href = eventData.trailer;
    trailerLink.target = '_blank';
    eventDetailsDiv.appendChild(trailerLink);
    trailerLink.textContent = 'Trailer';

  } else {
    // If eventData.trailer is empty, do something else or just skip appending trailerLink
  }


  // Append the event details div to the main li element
  eventLi.appendChild(eventDetailsDiv);

  return eventLi;
}

// Sample event data (replace this with actual event data)
const eventsData = [

      {
        name: "Wave Land 2026",
        date: "11/6/26 - 11/8/26",
        location: "Preston, VIC, Australia",
        description: "PLEASE be respectful of the venue as we want to be able to host tournaments again so please show respect to both the staff as well as the public.",
        imageUrl: "https://images.start.gg/images/tournament/905005/image-b92310b9b0599b4067ec868f195266c6.jpg",
        link: "https://www.start.gg/tournament/wave-land-2026/details",
        rankImg: false, 
        trailer: "",
        stream: ""
      },
      {
        name: "Tussle Thru Time",
        date: "11/7/26 - 11/8/26",
        location: "Normal, Illinois, USA",
        description: "The Tussle Series Returns, now with TWO DAYS! Singles, Doubles, and more... From the teams at Plus Side, BloNo Smash and CherryNASB, the next installment in the Tussle Series is here...",
        imageUrl: "https://images.start.gg/images/tournament/900443/image-ec0bb81bd43806b5d548de3a8e25365b.png",
        link: "https://www.start.gg/tournament/tussle-thru-time/details",
        rankImg: true, 
        trailer: "https://fixupx.com/PPlusSide/status/2072465697934905435",
        stream: "https://www.multitwitch.tv/pplusside/pplusside2/isu_smash"
      },
      {
        name: "0mega Con 2026",
        date: "11/7/26",
        location: "Mexicali, Baja California, Mexico",
        description: "After the end of an era, Omega Con will take the lost projects in this new adventure in Mexicali, Baja California",
        imageUrl: "https://images.start.gg/images/tournament/242007/image-178d206ae4cf36ab087b25c838e62252-optimized.png",
        link: "https://www.start.gg/tournament/0mega-con-2026/details",
        rankImg: false, 
        trailer: "",
        stream: ""
      },
      {
        name: "One More Game II: Run it Back",
        date: "11/21/26 - 11/22/26",
        location: "Seattle, Washington, USA",
        description: "ONE MORE GAME IS BACK",
        imageUrl: "https://images.start.gg/images/tournament/891540/image-7c60d7daf97a01a0033384b0c0b5b556.png",
        link: "https://www.start.gg/tournament/one-more-game-ii-run-it-back/details",
        rankImg: true, 
        trailer: "https://www.youtube.com/watch?v=1SJVYnyYT5A",
        stream: "https://twitch.tv/pplusside"
      },
      {
        name: "Plus House 7",
        date: "11/21/26",
        location: "Springfield, Missouri, USA",
        description: "18+ event! Alcohol and weed may be present",
        imageUrl: "https://images.start.gg/images/tournament/956385/image-e5541534e0e6bf8f571d2fbcef9d09c5-optimized.png",
        link: "https://www.start.gg/tournament/plus-house-7/details ",
        rankImg: false, 
        trailer: "",
        stream: "https://www.twitch.tv/plus_house"
      },
      {
        name: "Get Outplayed 10",
        date: "12/6/26",
        location: "Peoria, Illinois, USA",
        description: "Get Outplayed 10 is here. On December 6th, your favorite GRV regional returns for its Tenth installment at Bradley University.",
        imageUrl: "https://images.start.gg/images/tournament/963563/image-97024f93458d8229cdacce4c518b293c-optimized.png",
        link: "https://www.start.gg/tournament/get-outplayed-10/details",
        rankImg: false, 
        trailer: "",
        stream: ""
      },
      {
        name: "Game 5: A Pittsburgh Project Plus and Rivals 2 Arcadian - $100 Pot Bonus!",
        date: "12/13/26",
        location: "Pittsburgh, Pennsylvania, USA",
        description: "⋆⋆✩ WE GOT A GAME FIVE IN PITTSBURGH!!! ✩⋆⋆ Game 5 is PEN's (Pittsburgh, Northeast Ohio, Erie, and surrounding areas) big end-of-year regional arcadian meant to celebrate the communities that have been playing their hearts out for years now, with brackets built to encourage as much serious practice and competition as possible along with a raffle giving every attendee a chance to win a commemorative poster board signed by everyone that shows up!",
        imageUrl: "https://images.start.gg/images/tournament/965259/image-bf2a30afacb161c83e0beb0c096e0ee6-optimized.png",
        link: "https://www.start.gg/tournament/game-5-a-pittsburgh-project-plus-and-rivals-2-arcadian-100-pot-bonus/details",
        rankImg: false, 
        trailer: "",
        stream: "https://www.twitch.tv/pghprojectm"
      },
      {
        name: "CHERRYBOMB 2",
        date: "1/30/27",
        location: "Austin, Texas, USA",
        description: "An Austin regional tournament featuring RR Melee Singles, Melee Doubles, RR P+ Singles, and a Melee Redemption bracket, and 64 Remix Singles.",
        imageUrl: "https://images.start.gg/images/tournament/950263/image-5f1916705bd8eb6bc5050f202e6887c7-optimized.jpg",
        link: "https://www.start.gg/tournament/cherrybomb-2/details",
        rankImg: false, 
        trailer: "",
        stream: ""
      },
      {
        name: "Docked and Loaded 5",
        date: "2/19/27 - 2/21/27",
        location: "Auckland CBD, Auckland 1010, New Zealand",
        description: "The long awaited fivequel. Expect some of New Zealand's hypest Smash Bros. Ultimate, Melee and Rivals plays at DOCKED & LOADED 5!",
        imageUrl: "https://images.start.gg/images/tournament/956310/image-6a5de550efb9e960c156685f43fe760c-optimized.png",
        link: "https://www.start.gg/tournament/docked-and-loaded-5/details",
        rankImg: false, 
        trailer: "",
        stream: "https://twitch.tv/nzsmash"
      },
      {
        name: "Perfect Pivot 3",
        date: "4/17/27 - 4/18/27",
        location: "Winnipeg, Manitoba, Canada",
        description: "Manitoba's mainstay major event is back and better than it's ever been. Featuring Super Smash Bros. Ultimate, Melee, Remix, HDR, Project+, Smash 4 and MYSTERY BRACKET, players of all skill levels are welcome to come and play! Face off against Manitoba's biggest and best, or come hangout and try some new games. Entry into a bracket varies depending on the game, with a couple free-entry brackets to fill the time. ",
        imageUrl: "https://images.start.gg/images/tournament/957629/image-b09c7c0a7ec253c6c361e31ca343ce0d-optimized.png",
        link: "https://www.start.gg/tournament/perfect-pivot-3/details",
        rankImg: false, 
        trailer: "https://www.youtube.com/watch?v=mK7qYtVvKwU",
        stream: ""
      },
    ];


    /* game 5 + Unc Frozen's template
    
      {
        name: "Game 5 In The D #8",
        date: "3/22/25",
        location: "Detroit, MI, USA",
        description: "We welcome all valiant competitors to our local P+ scene's return-to-form! Featuring a professional stream, custom tournament badges, your favorite players, and much, much more, this will be an event you won't want to miss!",
        imageUrl: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F753458%2Fimage-682f23c7c6853c9f14a932032d05ead0-optimized.jpg&ehk=A8Q7W63tKoq8g098URhncVeF0MzGbkVlA7hknPHAYZ0%3D&w=280&h=280&r=0",
        link: "https://www.start.gg/tournament/game-5-in-the-d-8-yuko-s-bday-edition/details",
        rankImg: false, 
        trailer: "",
        stream: ""
      }, */ 
    /* {
        name: "Unc Frozen's Icebox 7",
        date: "8/23/25",
        location: "Plano, TX, USA",
        description: "Welcome to the seventh entry in the Icebox tournament series, presented by your friendly neighborhood Unc Frozen!",
        imageUrl: "https://images.start.gg/images/tournament/812447/image-9223a0a2f72e5eaef276653f179af67f.jpg",
        link: "https://www.start.gg/tournament/unc-frozen-s-icebox-7/details",
        rankImg: false, 
        trailer: "",
        stream: "https://twitch.tv/fxgames_gg"
      }, */

// Create a single div element to contain all the lists
const eventsContainer = document.createElement('div');
eventsContainer.classList.add('eventsContainer');

// Create the event components for each pair of events
for (let i = 0; i < eventsData.length; i += 2) {
    // Create a new ul for each pair of events
    const eventList = document.createElement('ul');
    eventList.classList.add('eventsList');

    // Create and append the li elements for each event in the pair
    for (let j = i; j < i + 2 && j < eventsData.length; j++) {
        const eventData = eventsData[j];
        const eventComponent = createEventComponent(eventData);
        // Append the event component directly to the ul
        eventList.appendChild(eventComponent);
    }

// Check if there's only one li element in the ul and it's not on a screen less than 600px wide
const lis = eventList.querySelectorAll('li');
const screenWidthLessThan600 = window.matchMedia("(max-width: 600px)").matches;
if (lis.length === 1 && !screenWidthLessThan600) {
    // Apply max-width: 100% to the single li element
    lis[0].style.marginLeft = '25%';
}



    // Append the ul (with li inside) to the container div
    eventsContainer.appendChild(eventList);
}

// Append the container div to the eventsListDiv
document.addEventListener('DOMContentLoaded', function () {
    const eventsListDiv = document.getElementById('eventsList');
    eventsListDiv.appendChild(eventsContainer);
});
