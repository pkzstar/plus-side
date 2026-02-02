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
        name: "Pico Plus #16",
        date: "2/7/26",
        location: "Pico Rivera, California, USA",
        description: "Introducing Pico Plus, a brand new Project+ local in the heart of Pico Rivera, CA",
        imageUrl: "https://images.start.gg/images/tournament/874014/image-4b8b29a313fa02abe178bc7edbda0922.png",
        link: "https://www.start.gg/tournament/pico-plus-16/details",
        rankImg: false, 
        trailer: "",
        stream: ""
      },
      {
        name: "Smash of the Titans 11",
        date: "2/21/26",
        location: "Bloomington, Illinois, USA",
        description: "Welcome to Smash of the Titans 11! Illinois Wesleyan University is back with our 11th edition of Smash regional featuring Dabuz, Deliboid, Shadowhawke, and many more!! ",
        imageUrl: "https://images.start.gg/images/tournament/841162/image-725756f044cd841d6402cb75cff7c2c3.jpg",
        link: "https://www.start.gg/tournament/smash-of-the-titans-11-1/details",
        rankImg: true, 
        trailer: "",
        stream: ""
      },
      {
        name: "Condo of Love: Ares x Blitz",
        date: "2/21/26",
        location: "Mississauga, Ontario, Canada",
        description: "Condo of Love is a very special tournament dedicated to a very special Ike main who is near and dear to Death's Door. Ares turned 31 this year and only has so many Project M tournaments left to play before he aethers into the great beyond. Come celebrate the life and times of AresxBlitz95 in Mississauga Ontario.",
        imageUrl: "https://images.start.gg/images/tournament/876164/image-973ccad4af779392912d3820ca7efb14.jpg",
        link: "https://www.start.gg/tournament/condo-of-love-ares-x-blitz/details",
        rankImg: false, 
        trailer: "",
        stream: ""
      },
      {
        name: "Flash Flood",
        date: "2/28/26",
        location: "Normal, Illinois, USA",
        description: "Welcome to Flash Flood, GRV's brand new major event. Featuring singles, doubles, and amateur brackets for Ultimate, Melee, and 'Brawl', we aim to provide an unforgettable experience!",
        imageUrl: "https://images.start.gg/images/tournament/813787/image-12969cc9155ec8f9247a30aefe8d1120.png",
        link: "https://www.start.gg/tournament/flash-flood/details",
        rankImg: true, 
        trailer: "",
        stream: ""
      },
      {
        name: "Take Flight '26",
        date: "3/14/26",
        location: "Dayton, Ohio, USA",
        description: "Take Flight is Dayton, Ohio’s annual regional platform fighter tournament!",
        imageUrl: "https://images.start.gg/images/tournament/864665/image-9551083e30bca6b48e9a64d778db43a2.jpg",
        link: "https://www.start.gg/tournament/take-flight-26/details",
        rankImg: false, 
        trailer: "",
        stream: ""
      },
      {
        name: "Main Event - 2",
        date: "3/22/26",
        location: "Birmingham, UK",
        description: "Main Event is back!",
        imageUrl: "https://images.start.gg/images/tournament/860982/image-f7116ff2a6a425b54362412cff28cadc.png",
        link: "https://www.start.gg/tournament/main-event-2/details",
        rankImg: false, 
        trailer: "",
        stream: ""
      },
      {
        name: "Bustered Out 2",
        date: "4/4/26",
        location: "Nashville, Tennessee, USA",
        description: "Welcome to Bustered Out 2! This is a Melee/'BRAWL' Regional event located in the Opry Mills Mall Dave & Busters. All registration will include entry to the event as well as a catered dinner. ",
        imageUrl: "https://images.start.gg/images/tournament/859269/image-4c4804477550479932e7df06bcd73fbb.png",
        link: "https://www.start.gg/tournament/bustered-out-2/details",
        rankImg: false, 
        trailer: "",
        stream: ""
      },
      {
        name: "Volan 2026",
        date: "4/10/26 - 4/12/26",
        location: "Knoxville, Tennessee, USA",
        description: "The annual Esports Tournament hosted by the student run Esports Club at the University of Tennessee. The event is focused on providing an in-person LAN experience to college esports teams and clubs in the Southeast. Participating in most events will be college student only, but some will be open to the public (Smash and FGC for example. Please see respective event details for more information).",
        imageUrl: "https://images.start.gg/images/tournament/841158/image-2cc3597d9d558d105a4406a7ed422903.png",
        link: "https://www.start.gg/tournament/volan-2026/details",
        rankImg: false, 
        trailer: "",
        stream: ""
      },
      {
        name: "Element",
        date: "4/18/26 - 4/19/26",
        location: "Minneapolis, Minnesota, USA",
        description: "I'm in my Element",
        imageUrl: "https://images.start.gg/images/tournament/839045/image-231e7c9fdd38b22d6e77688c8836cd22.jpg",
        link: "https://www.start.gg/tournament/element-1/details",
        rankImg: true, 
        trailer: "",
        stream: ""
      },
      {
        name: "House of Paign 25",
        date: "4/25/26",
        location: "Urbana, Illinois, USA",
        description: "After a year-long hiatus, during which we ran Never Melee and Paign: Automata, the House of Paign series is BACK with its 25th iteration and its 12th year.",
        imageUrl: "https://images.start.gg/images/tournament/864395/image-d48ee13c8ec71aa4cd3a8b6da0e35c4a.png",
        link: "https://www.start.gg/tournament/house-of-paign-25/details",
        rankImg: false, 
        trailer: "",
        stream: ""
      },
      {
        name: "Smash Camp: Heartlands",
        date: "5/29/26 - 6/1/26",
        location: "Wautoma, Wisconsin, USA",
        description: "Smash Camp Comes To The Midwest! In the ever wonderful state of Wisconsin, it's the Smash Camp you love in a place that's new. At the beautiful Camp Lakotah you can hike, swim, and go 0-2 (in Melee or Beach Volleyball!) at one the of the most unique venues our scene has to offer.",
        imageUrl: "https://images.start.gg/images/tournament/848016/image-ad81fb6d62d51b7553360cac9de398bd.png",
        link: "https://www.start.gg/tournament/smash-camp-heartlands/details",
        rankImg: true, 
        trailer: "",
        stream: ""
      }
    ];


    // game 5 + moonshine monthly + Unc Frozen's template
    
    //  {
    //   name: "Game 5 In The D #8",
    //   date: "3/22/25",
    //   location: "Detroit, MI, USA",
    //   description: "We welcome all valiant competitors to our local P+ scene's return-to-form! Featuring a professional stream, custom tournament badges, your favorite players, and much, much more, this will be an event you won't want to miss!",
    //   imageUrl: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F753458%2Fimage-682f23c7c6853c9f14a932032d05ead0-optimized.jpg&ehk=A8Q7W63tKoq8g098URhncVeF0MzGbkVlA7hknPHAYZ0%3D&w=280&h=280&r=0",
    //   link: "https://www.start.gg/tournament/game-5-in-the-d-8-yuko-s-bday-edition/details",
    //   rankImg: false, 
    //   trailer: "",
    //   stream: ""
    // },
    // {
    //   name: "Moonshine Monthly #2",
    //   date: "2/23/25",
    //   location: "Greenville, SC 29601, USA",
    //   description: "South Carolina's P+ ONLY Monthly Series. Venue $5: 32 singles cap (pls bring setups). Singles $5: 4 person RR pools",
    //   imageUrl: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F753025%2Fimage-d1d570002d763332029ed8cafa5d584a-optimized.png&ehk=8aMjwzJmP%2F0DXXICOPCB1u8gm8hs9O8Rv7Y7AbfGnRo%3D&w=280&h=280&r=0",
    //   link: "https://www.start.gg/tournament/moonshine-monthly-2/details",
    //   rankImg: false, 
    //   trailer: "",
    //   stream: "https://twitch.tv/kn19h7"
    // },
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
