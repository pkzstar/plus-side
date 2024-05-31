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
        name: "Smash Camp: New Lands",
        date: "5/31/24 - 6/2/24",
        location: "Gresham, OR, USA",
        description: "Smash Camp returns to New Lands! Join us again in the Pacific Northwest this Spring 2024. 📅 Friday May 31 5PM - Monday June 3 9AM PT All main brackets take place on Saturday June 1 and Sunday June 2",
        imageUrl: "https://github.com/pkzstar/plus-side/blob/main/images/upcoming%20events/smashcamp.png?raw=true",
        link: "https://www.start.gg/tournament/smash-camp-new-lands-2024/details",
        rankImg: true,
        trailer: "https://www.youtube.com/watch?v=VhDWVcVyX90",
        stream: ""
      },
      {
        name: "Invincible VIII",
        date: "6/1/24 - 6/2/24",
        location: "Madison, WI, USA",
        description: "10,000+ Square Feet Heart of downtown Madison, in walking distance of great restaurants & entertainment. Attached hotel, additional hotels close by Flying in Dane County Regional Airport (MSN) is located 20 minutes away from Union South.",
        imageUrl: "https://github.com/pkzstar/plus-side/blob/main/images/upcoming%20events/invincible8.png?raw=true",
        link: "https://www.start.gg/tournament/invincible-viii/details",
        rankImg: true,
        trailer: "https://www.youtube.com/watch?v=AvtB-nDAju8",
        stream: "https://www.twitch.tv/ugsgaming"
      },
      {
        name: "Ripped Off",
        date: "6/14/24",
        location: "Marietta, GA, USA",
        description: "Ripped Off is here as the P+ shadow major for Tipped Off 15! Taking place across the campus in the KSU engineering and technology center on Friday June 14th, Ripped Off brings a new home to all the P+ players of the South East.",
        imageUrl: "https://github.com/pkzstar/plus-side/blob/main/images/upcoming%20events/ripped.png?raw=true",
        link: "https://www.start.gg/tournament/ripped-off-1/details",
        rankImg: true,
        trailer: ""
      },
      {
        name: "Untitled Stoke Tournament",
        date: "6/16/24",
        location: "College RdStoke-on-Trent, UK",
        description: "A New Melee Regional In Stoke-On-Trent! Brought To You By The Choke On Trent Team",
        imageUrl: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F661701%2Fimage-fd4e28a68d3eef0eda541bef36e01a0f-optimized.png&ehk=1k8V3O4JFqIok2XJzcUdVsy4uG1NQMISoCxy%2Fg%2BnAxA%3D&w=280&h=280&r=0",
        link: "https://www.start.gg/tournament/untitled-stoke-tournament/details",
        rankImg: false,
        trailer: ""
      },
      {
        name: "Game 5: Canadian Invasion",
        date: "6/22/24",
        location: "Detroit, MI, USA",
        description: "We welcome all valiant competitors to our local P+ scene's return-to-form! Featuring a professional stream, custom tournament badges, your favorite players, and much, much more, this will be an event you won't want to miss!",
        imageUrl: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F675196%2Fimage-54ebffee07de2dd4d200af40c8df6987-optimized.jpg&ehk=6cxSKy3MqOJK%2FFkbqEGwYZdcBnEglYc1xpdIKB0zOBs%3D&w=280&h=280&r=0",
        link: "https://www.start.gg/tournament/game-5-in-the-d-4-the-canadian-invasion/details",
        rankImg: false,
        trailer: "",
        stream: "https://www.youtube.com/@Game5ProjectPlus"
      },
      {
        name: "The Black Market",
        date: "6/22/24",
        location: "Calgary, AB, Canada",
        description: "A celebration of Smash Bros. fan games!Featuring HDR Singles, HDR Doubles and P+ Singles as paid events, along with plenty of free side events such as HDR Amateur brackets, Smash Remix, Rivals of Aether and Sonic Adventure 2!",
        imageUrl: "https://github.com/pkzstar/plus-side/blob/main/images/upcoming%20events/blackmarket.png?raw=true",
        link: "https://www.start.gg/tournament/the-black-market/details",
        rankImg: false,
        trailer: "https://www.youtube.com/watch?v=l8kSbqR6urc"
      },
      {
        name: "SUPER CLOUDY SCUFFLE",
        date: "6/22/24",
        location: "Oshawa, ON, Canada",
        description: "Karamel is proud to present: SUPER CLOUDY SCUFFLE! A Durham Regional 🐈 In collaboration with No Style Esports, ft. Ultimate, Melee, Rivals of Aether 2, Project+ and HDR This tournament is dedicated to Karamel's late cat, Cloudy.",
        imageUrl: "https://github.com/pkzstar/HDReport/blob/main/images/upcoming%20events/super%20cloudy%20scuffle.png?raw=true",
        link: "https://www.start.gg/tournament/super-cloudy-scuffle-a-durham-regional/details",
        rankImg: false,
        trailer: ""
      },
      {
        name: "Mineral Melee",
        date: "6/22/24",
        location: "Austin, TX, USA",
        description: "This event features three different tiers of brackets after pools, so each tier of player will have a chance to compete against other players around their skill level. That means there's a trophy for the winner of each bracket!",
        imageUrl: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F674411%2Fimage-a6eb8cdb1ecb9ff623700df120a6d0da-optimized.png&ehk=vC2efFJcqrX9OoFYOhe%2FewrublZOliZQgSSMSmH%2B33U%3D&w=280&h=280&r=0",
        link: "https://www.start.gg/tournament/mineral-melee-a-best-in-texas-league-event/details",
        rankImg: false,
        trailer: ""
      },
      {
        name: "Phantom 2024",
        date: "7/06/24 - 7/07/24",
        location: "Coburg, VIC, Australia",
        description: "Phantom returns after a year away, and this time in Melbourne.",
        imageUrl: "https://github.com/pkzstar/plus-side/blob/main/images/upcoming%20events/phantom.png?raw=true",
        link: "https://www.start.gg/tournament/phantom-2024/details",
        rankImg: false,
        trailer: ""
      },
      {
        name: "Terminal Velocity",
        date: "7/14/24",
        location: "Boston, MA, USA",
        description: "📍Terminal Velocity takes place Sunday, July 14, at Balance Patch on Commonwealth Avenue in Boston.",
        imageUrl: "https://github.com/pkzstar/plus-side/blob/main/images/upcoming%20events/terminal.png?raw=true",
        link: "https://www.start.gg/tournament/terminal-velocity/details",
        rankImg: false,
        trailer: "",
        stream: "https://www.twitch.tv/projectmnexus"
      },
      {
        name: "Warehouse War 4",
        date: "7/26/24 - 7/27/24",
        location: "Nashville, TN, USA",
        description: "$10,000 in Pot Bonuses Premier Top Talent Huge venue complex with indoor and outdoor skate park as well as a full service coffee bar Venue located in the heart of Nashville within walking distance of the historic and famous Broadway Street Fun Friday side events and Saturday main events",
        imageUrl: "https://github.com/pkzstar/plus-side/blob/main/images/upcoming%20events/ww4.png?raw=true",
        link: "https://www.start.gg/tournament/warehouse-war-4/details",
        rankImg: true,
        trailer: "https://www.youtube.com/watch?v=gMGJVzZlSqg"
      },
      {
        name: "Carnival Clash 2",
        date: "7/26/24 - 7/27/24",
        location: "Portland, OR, USA",
        description: "We're So Back! 🎡 August 3rd, 2024 Oregon's Ride-Filled Summer Regional Returns for another lap on the roller coaster! Why Oaks Amusement Park? Smash & Ride! Rides and attractions will be OPEN.",
        imageUrl: "https://github.com/pkzstar/plus-side/blob/main/images/upcoming%20events/carnivalclash2.png?raw=true",
        link: "https://www.start.gg/tournament/carnival-clash-2/details",
        rankImg: false,
        trailer: ""
      },
      {
        name: "Undertow 2024",
        date: "9/6/24 - 9/9/24",
        location: "Sandusky, OH, USA",
        description: "Thanks to the dedication of the Midwest Project+ and HDR communities, we're proud to continue the water park shadow major tradition in 2024!",
        imageUrl: "https://github.com/pkzstar/plus-side/blob/main/images/upcoming%20events/undertow2024.png?raw=true",
        link: "https://www.start.gg/tournament/undertow-2024/details",
        rankImg: false,
        trailer: "https://drive.google.com/file/d/1vimHNr_rDTmjhH1vFLUpQZjQPFIsG7xR/view"
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
