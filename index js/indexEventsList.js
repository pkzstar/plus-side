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
        name: "Warehouse War 4",
        date: "7/26/24 - 7/27/24",
        location: "Nashville, TN, USA",
        description: "$10,000 in Pot Bonuses Premier Top Talent Huge venue complex with indoor and outdoor skate park as well as a full service coffee bar Venue located in the heart of Nashville within walking distance of the historic and famous Broadway Street Fun Friday side events and Saturday main events",
        imageUrl: "https://github.com/pkzstar/plus-side/blob/main/images/upcoming%20events/ww4.png?raw=true",
        link: "https://www.start.gg/tournament/warehouse-war-4/details",
        rankImg: true,
        trailer: "https://www.youtube.com/watch?v=gMGJVzZlSqg",
        stream: "https://www.twitch.tv/projectmnexus"
      },
      {
        name: "Glacier Gauntlet",
        date: "8/3/24",
        location: "Webster, TX, USA",
        description: "This event features three different tiers of brackets after pools, so each tier of player will have a chance to compete against other players around their skill level. That means there's a trophy for the winner of each bracket!",
        imageUrl: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F681727%2Fimage-d59c9aef0d5d77939939dbd970ef6c7d-optimized.png&ehk=AUUIFLk0Oiq1d3WhjesVORgtOMv3%2FhrahPeTbelbXa8%3D&w=280&h=280&r=0",
        link: "https://www.start.gg/tmgg",
        rankImg: false,
        trailer: ""
      },
      {
        name: "Carnival Clash 2",
        date: "8/3/24",
        location: "Portland, OR, USA",
        description: "We're So Back! 🎡 August 3rd, 2024 Oregon's Ride-Filled Summer Regional Returns for another lap on the roller coaster! Why Oaks Amusement Park? Smash & Ride! Rides and attractions will be OPEN.",
        imageUrl: "https://github.com/pkzstar/plus-side/blob/main/images/upcoming%20events/carnivalclash2.png?raw=true",
        link: "https://www.start.gg/tournament/carnival-clash-2/details",
        rankImg: true,
        trailer: ""
      },
      {
        name: "Garden Brawl",
        date: "8/24/24",
        location: "Ridgewood, NJ, USA",
        description: "On August 24th, it's time to return to the garden. Over 4 years later, our namesake event is back! 🌼 Melee, Ultimate, P+, and HDR 🌼 256 Event Cap 🌼 Ridgewood, New Jersey",
        imageUrl: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F673156%2Fimage-0a6f4b065a1ae1c4d91d5756129d7bb8-optimized.png&ehk=ba6JikL4X%2Frf5t3o54c5h95%2BdgVUtm66bGi3H2jzZV8%3D&w=280&h=280&r=0",
        link: "https://www.start.gg/tournament/garden-brawl/details",
        rankImg: false,
        trailer: "https://twitter.com/i/status/1797729780219224249"
      },
      {
        name: "Tech Zone 3",
        date: "8/31/24",
        location: "Lisle, IL, USA",
        description: "Competitor Registration (7/12 - 8/30) $15. Day-Of Competitor Registration (8/31) $20. Spectator Registration $10. Online Day-Of registration will be available from 12:00am-02:00pm. If you would like to register at the venue, you will have to be there at least 1 hour before your bracket of choice is set to start.",
        imageUrl: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F685674%2Fimage-c4721066d975473bbb300c0cb9c6fba3-optimized.png&ehk=8hPucP15HYK%2BadyuKPEp36gjy6N9HFnZm5UZKxcINS8%3D&w=280&h=280&r=0",
        link: "https://www.start.gg/tournament/tech-zone-3/details",
        rankImg: false,
        trailer: "",
        stream: ""
      },
      {
        name: "Undertow 2024",
        date: "9/6/24 - 9/9/24",
        location: "Sandusky, OH, USA",
        description: "Thanks to the dedication of the Midwest Project+ and HDR communities, we're proud to continue the water park shadow major tradition in 2024!",
        imageUrl: "https://github.com/pkzstar/plus-side/blob/main/images/upcoming%20events/undertow2024.png?raw=true",
        link: "https://www.start.gg/tournament/undertow-2024/details",
        rankImg: true,
        trailer: "https://drive.google.com/file/d/1vimHNr_rDTmjhH1vFLUpQZjQPFIsG7xR/view",
        stream: "https://www.twitch.tv/projectmnexus"
      },
      {
        name: "Infrared 2024",
        date: "10/6/24",
        location: "Westford, MA, USA",
        description: "This event will take place on Saturday, October 6th inside of the Wavelength 2024 Venue. You MUST be registered for Wavelength 2024 as a competitor or spectator in order to attend this event!",
        imageUrl: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F689857%2Fimage-beb293c506128370f03dbac8b3301b61-optimized.jpg&ehk=USndSOdl8bTgh1izawrAwxr2nxvNn%2FTpocJgAGqoDY0%3D&w=280&h=280&r=0",
        link: "https://www.start.gg/tournament/infrared-2024/details",
        rankImg: false,
        trailer: "",
        stream: ""
      },
      {
        name: "Big Cheese 5",
        date: "10/11/24 - 10/13/24",
        location: "Woodville South SA, Australia",
        description: "The South Australian Smash & Fighting Game Community are proud to announce the return of Adelaide's local competitive gaming community Major - The Big Cheese ",
        imageUrl: "https://github.com/pkzstar/plus-side/blob/main/images/upcoming%20events/bigcheese5.png?raw=true",
        link: "https://www.start.gg/tournament/big-cheese-5-south-australia-smash-fgc-major/details",
        rankImg: false,
        trailer: ""
      },
      {
        name: "Five Nights at Fingy's 2",
        date: "10/12/24 - 10/13/24",
        location: "Mesa, AZ, USA",
        description: "AZPM is back! Five Nights at Fingy's 2 is a FNAF themed Project+ Tournament in Mesa, Arizona",
        imageUrl: "https://github.com/pkzstar/plus-side/blob/main/images/upcoming%20events/fnaf2.png?raw=true",
        link: "https://www.start.gg/tournament/five-nights-at-fingy-s-2/details",
        rankImg: false, 
        trailer: "https://www.youtube.com/watch?v=mEsQ1_rF7gM&feature=youtu.be",
        stream: "https://www.twitch.tv/AZPM"
      }
    ];

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
