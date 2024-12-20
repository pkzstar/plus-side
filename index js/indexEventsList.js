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
        name: "Gecko Cavern 8 - The Holiday Special",
        date: "12/21/24",
        location: "Burwood, NSW, Australia",
        description: "Happy Holidays everyone! Gecko Cavern 8 is on its way! Hosted at Club Burwood along Burwood Road on the top floor of the venue, Gecko Cavern is the tournament series for Project Plus in Sydney! We also feature other games such as Melee, Rivals, and more! ",
        imageUrl: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F738073%2Fimage-420abd763db6b7810c89ef2065605ff1-optimized.png&ehk=MBjOzveFlZdIUDxVuNGUBFEAHrLZfXPCBfF%2BBWQWTeA%3D&w=280&h=280&r=0",
        link: "https://www.start.gg/tournament/gecko-cavern-8-the-holiday-special/details",
        rankImg: false, 
        trailer: "",
        stream: ""
      },
      {
        name: "Bristol's The Basement Before Christmas 2: love actually",
        date: "12/22/24",
        location: "Bristol, UK",
        description: "Bristol's premier Melee monthly is back for another very special event! We decided the last Sunday of this month would be inconvenient for most people, as it falls between Christmas and New Years and we know most people will be with family, so we're running a more laid back, side-event focused tournament.",
        imageUrl: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F734148%2Fimage-00d0282df9b5c493f4821289575651f5-optimized.png&ehk=M88s%2F4c%2FFI%2FoB6PWsQc4Mht2x1PACX6g6dJpnaoHlc4%3D&w=280&h=280&r=0",
        link: "https://www.start.gg/tournament/bristol-s-the-basement-before-christmas-2-love-actually/details",
        rankImg: false, 
        trailer: "",
        stream: ""
      },
      {
        name: "Tennessee P+ Summit 2025",
        date: "1/10/25 - 1/12/25",
        location: "Knoxville, TN, USA",
        description: "The Tennessee P+ Summit is back! 20 of the best P+ players from Tennessee will compete for fame and bragging rights in everyone's favorite smash mod.",
        imageUrl: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F714654%2Fimage-9fcdb8b8b1acc8a88280304e3b010b63-optimized.jpg&ehk=8mBzXSK23mbPNHjSmTQkpgvRRF9qYsJ5PfgQ4qo4BJw%3D&w=280&h=280&r=0",
        link: "https://www.start.gg/tournament/tennessee-p-summit-2025/details",
        rankImg: false, 
        trailer: "",
        stream: ""
      },
      {
        name: "TECH 2025",
        date: "1/11/25",
        location: "Mt Pleasant, SC, USA",
        description: "Nobody goes 0-2! Based on how each player places in pools, the will be sent into either the bronze, silver, or gold bracket and will play against other players who placed similarly!",
        imageUrl: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F703812%2Fimage-621a3df3388b485f1c17bc39ef5043b4-optimized.png&ehk=fmJ2bU7fSCoK6ta%2FoMgERgnFVVH1449V1iaXyonXZPQ%3D&w=280&h=280&r=0",
        link: "https://www.start.gg/tournament/tech-2025/details",
        rankImg: false, 
        trailer: "",
        stream: ""
      },
      {
        name: "Game 5 in the D #7",
        date: "1/18/25",
        location: "Detroit, MI, USA",
        description: "Introducing Game 5 In The D, East Michigan's Premier P+ Bi-Monthly Located In Detroit! We welcome all valiant competitors to our local P+ scene's return-to-form! Featuring a professional stream, custom tournament badges, your favorite players, and much, much more, this will be an event you won't want to miss!",
        imageUrl: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F741982%2Fimage-06d3c983cce808794b6e3357614d9716-optimized.jpg&ehk=Mm%2BdADFo6UiO6w63CtfQqvkLv1qT%2BVUH3vGCQimwKA4%3D&w=280&h=280&r=0",
        link: "https://www.start.gg/tournament/game-5-in-the-d-7/details",
        rankImg: false, 
        trailer: "",
        stream: ""
      },
      {
        name: "Somnio 6",
        date: "1/25/25",
        location: "Eindhoven, Netherlands",
        description: "FROM THE PEOPLE THAT BROUGHT YOU DREAMHACK ROTTERDAM 2019 & 2022, SECTOR Z, NL ARCADIAN AND MORE!",
        imageUrl: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F704301%2Fimage-7860f2d53c5c19158a1af5bb595b62f2-optimized.png&ehk=Lvf0cBp42V7xFlwNJ8bxtOnyYKPG5AFv3lZxf8Pd1LQ%3D&w=280&h=280&r=0",
        link: "https://www.start.gg/tournament/somnio-6/details",
        rankImg: false, 
        trailer: "",
        stream: ""
      },
      {
        name: "Wrath 2025",
        date: "2/1/25 - 2/2/25",
        location: "Baton Rouge, LA, USA",
        description: "You will need a pass for the other event occurring that day in the same venue in order to attend this event! Please message ultradill for clarification",
        imageUrl: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F733428%2Fimage-186746c11909b2a0b5c3fc0b2010014e-optimized.png&ehk=KP599AJILaMiQGI97%2Fljy8k4%2BEkXb3LyjQav3TVjH3s%3D&w=280&h=280&r=0",
        link: "https://www.start.gg/tournament/wrath-2025/details",
        rankImg: true, 
        trailer: "",
        stream: ""
      },
      
      {
        name: "Journey to the West",
        date: "2/21/25 - 2/23/25",
        location: "Bentley, WA, Australia",
        description: "Smash Majors make a triumphant return to Perth after a 5 year wait over at The Hub, Bentley Technology Park. I encourage old and new faces alike to make an effort to come as this will most likely be the last major run for Ultimate in Perth.",
        imageUrl: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F731623%2Fimage-120c39ca0b9e548595ff1c4f88a45860-optimized.jpg&ehk=lsIwpkupKikujRh8VEMGEvMyMCytWXbF%2BCAGiF3N4ZQ%3D&w=280&h=280&r=0",
        link: "https://www.start.gg/tournament/journey-to-the-west/details",
        rankImg: false, 
        trailer: "",
        stream: ""
      },
      {
        name: "Winter is Crouching",
        date: "3/1/25 - 3/2/25",
        location: "Le Kremlin-Bicêtre, Paris, France",
        description: "Muahahaha! Are you ready for winter? Winter is crouching ❄️❄️❄️ On the program: Project+ of course, we love illegal games 😈, but also Melee and Rivals of Aether 2 hehe",
        imageUrl: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F687306%2Fimage-5618485cca829ee70b7125791593c3e2-optimized.png&ehk=qQc4jLdbvBzwuFG7iw%2BIaofHMDeQPOdtUyGDqI7HPDE%3D&w=280&h=280&r=0",
        link: "https://www.start.gg/tournament/winter-is-crouching/details",
        rankImg: false, 
        trailer: "",
        stream: ""
      },  
      {
        name: "Smash of the Titans 10",
        date: "3/22/25",
        location: "Bloomington, Illinois, USA",
        description: "Welcome to Smash of the Titans 10! Illinois Wesleyan University is back with our semesterly Smash regional! The tournament will be held in the Young Main Lounge in the Memorial center on campus (there will be signage posted too). ",
        imageUrl: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F733623%2Fimage-6a2f830b3ed2448c8cd4fdc5df2927dc-optimized.jpg&ehk=P6xRQjtL7NCBckUUb%2FvT03FR%2BA%2Bxwgf0XzQ8baE09kk%3D&w=280&h=280&r=0",
        link: "https://www.start.gg/tournament/smash-of-the-titans-10-1/details",
        rankImg: false, 
        trailer: "",
        stream: ""
      },     
      {
        name: "Full Bloom 2025",
        date: "4/5/25 - 4/6/25",
        location: "Bloomington, IN, USA",
        description: "Full Bloom 2025 is a 2-day, super smash bros, Project+ and Rivals of Aether 2 tournament held at the Indiana Memorial Union in Bloomington, Indiana",
        imageUrl: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F715134%2Fimage-35f8b3298b2d53d5d028afc8f3d63422-optimized.png&ehk=QGeDTX8I9NdN%2FFIsuMr%2B4GVjU80B69p8KQOXMGqK0n8%3D&w=280&h=280&r=0",
        link: "https://www.start.gg/tournament/full-bloom-2025/details",
        rankImg: true, 
        trailer: "https://www.youtube.com/watch?v=oCO0FoZf6VU",
        stream: ""
      },
      {
        name: "Project D",
        date: "5/17/25",
        location: "Birmingham, UK",
        description: "It's time for the biggest P+ tournament in the UK since Not Fête back in 2023! This is an 18+ event",
        imageUrl: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F734216%2Fimage-ee3ee05c35dba007a95866d0be0d48da-optimized.png&ehk=yWRBbth3w%2BRzWsSxGEGuUudXJ15ui28vMkBOBEMevio%3D&w=280&h=280&r=0",
        link: "https://www.start.gg/tournament/project-d/details",
        rankImg: false, 
        trailer: "",
        stream: ""
      },
      {
        name: "Blacklisted 9",
        date: "TBA",
        location: "Springfield, MA, USA",
        description: "Blacklisted has moved venues for the first time in five years! Join us in Springfield, Massachusetts for the biggest and best Blacklisted yet! Blacklisted 9 will be returning with Doubles and Singles pools which will send players into double elimination Pro and Amateur brackets - now for both Project+ and HDR!",
        imageUrl: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F681909%2Fimage-7d4e0ff8435ebeb4a6ceb3cd129b1705-optimized.png&ehk=sQBjT2ATBqcPGXSXEzLSl2H8PYlq6I79X7ucG2mT4hU%3D&w=280&h=280&r=0",
        link: "https://www.start.gg/tournament/blacklisted-9-a-project-and-hdr-major/details",
        rankImg: false, 
        trailer: "https://twitter.com/BlacklistedSSB/status/1817403907984761246",
        stream: "https://www.twitch.tv/projectmnexus"
      },
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
