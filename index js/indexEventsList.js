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
        name: "Bustered Out",
        date: "10/19/24",
        location: "Nashville, TN, USA",
        description: "Welcome to Bustered Out! This is a Melee/P+ Regional event located in the Opry Mills Mall Dave & Busters. All registration will include entry to the event as well as an all-you-can-eat catered buffet.",
        imageUrl: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F703739%2Fimage-37259456efe40fdef53a88c108f61736-optimized.png&ehk=BeB8DjJp5ZmXStsCqSKmFtIEfHIqDl7UUDZv2fdRuU4%3D&w=280&h=280&r=00",
        link: "https://www.start.gg/tournament/bustered-out/details",
        rankImg: false, 
        trailer: "",
        stream: ""
      },
      {
        name: "LA Super Nexus XVI",
        date: "10/19/24",
        location: "Baton Rouge, LA, USA",
        description: "BATON ROUGE SMASH IS BACK, THIS TIME AT THE NEXUS LOUISIANA TECH PARK! Baton Rouge Smash is proud to present: LA Super Nexus XVI",
        imageUrl: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F702923%2Fimage-63104f6428f87cba5cc7db5a34d7e9a9-optimized.png&ehk=Gd2KsBZ6MpIu%2BN%2BtSrYDgTfvc6anIk%2B%2FNF72y1tiwVE%3D&w=280&h=280&r=0",
        link: "https://www.start.gg/tournament/la-super-nexus-xvi/details",
        rankImg: false, 
        trailer: "",
        stream: ""
      },
      {
        name: "Condo of Blood 1+1/2",
        date: "10/19/24",
        location: "Mississauga, Ontario, Canada",
        description: "Condo of Blood 1+1/2 is an Ontario Project Plus and Rivals of Aether 2 regional hosted directly beside the Port Credit GO station. This accessible recurring tournament series will feature top Ontario talent and is designed fully around our shared love of these alternate smash games.",
        imageUrl: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F715099%2Fimage-663dbb431d19589ada53ac7ac9231f4f-optimized.png&ehk=DYbYVTiK0yQLi3ZT1kpljn6S%2FWG7iiBSd8fPVaa6%2B%2Bc%3D&w=280&h=280&r=0",
        link: "https://www.start.gg/tournament/condo-of-blood-1-1-2-rumble-arena-of-lovers/details",
        rankImg: false, 
        trailer: "",
        stream: ""
      },
      {
        name: "The Masters Eight: The Best in Texas Finale",
        date: "10/19/24",
        location: "Austin, TX, USA",
        description: "Welcome to the season finale for the 2024 Best in Texas Season! All Project Plus events will take place on Saturday Oct. 19th!",
        imageUrl: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F710846%2Fimage-a280ba6e5ebd674f8e4cf5792f03daa6-optimized.png&ehk=AbKKao2cGi%2Fv2vHt%2FR%2FfCJOi1mLF45pFFOKlaL73Cl4%3D&w=280&h=280&r=0",
        link: "https://www.start.gg/tournament/the-masters-eight-the-best-in-texas-finale/details",
        rankImg: false, 
        trailer: "",
        stream: "https://twitch.tv/projectmnexus"
      },
      {
        name: "Tussleopolis",
        date: "10/26/24",
        location: "Normal, IL, USA",
        description: "It's a new era. The game has changed, but the tussle remains...The Tussle Saga is BACK. Return to the Midwest grassroots Project M experience. From the team that brought you Warp Zone 2, Undertow, and Bird House XII, we are thrilled to revitalize this Midwest PM series.",
        imageUrl: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F694928%2Fimage-d570f648aa26ccea66517f31a2dccda5-optimized.png&ehk=wQJOmHo9Afn6nRwa%2FwDShMfftHg7tIqqjo%2BnGCznW8s%3D&w=280&h=280&r=0",
        link: "https://www.start.gg/tournament/tussleopolis/details",
        rankImg: true, 
        trailer: "https://youtu.be/VY6JO0mD0po",
        stream: ""
      },
      {
        name: "EUGG's: Now Slaying!",
        date: "10/26/24",
        location: "Edinboro, PA, USA",
        description: "EUGG's Super Smash Boro is held at Butterfield Hall, Room 134, at Edinboro University's Campus in Edinboro, PA. Our venue features ample seating and power, multiple projectors. POSTERS AVAILABLE FOR PREORDER!",
        imageUrl: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F707279%2Fimage-c671e5249610d692af2e9390a5bd39b6-optimized.png&ehk=%2FfxMt4ldJJRdMBSJ2rkkrUGI06gxa%2FUO8cw2J2cGfHU%3D&w=280&h=280&r=0",
        link: "https://www.start.gg/tournament/eugg-s-the-monthly-grindhouse-now-slaying/details",
        rankImg: false, 
        trailer: "",
        stream: ""
      },
      {
        name: "College Park Mutiny: THE HORROR!",
        date: "10/26/24",
        location: "College Park, MD, USA",
        description: "Welcome to the first iteration of Mutiny this semester! Mutiny is a regional tournament hosted and ran by a team of UMD college students led by Arden and Stutter Step Steven.",
        imageUrl: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F718217%2Fimage-909fd918014a0f14666628f9d2dacb2c-optimized.png&ehk=StdABTKuhDnUDTEa7oRlh7V3y9EXS0xzJLBubh84ZaU%3D&w=280&h=280&r=0",
        link: "https://www.start.gg/tournament/college-park-mutiny-the-horror/details",
        rankImg: false, 
        trailer: "",
        stream: ""
      },
      {
        name: "Beachin",
        date: "11/1/24 - 11/3/24",
        location: "Sunny Isles Beach, FL, USA",
        description: "Huge vibes going down on Saturday Night in the friendlies room of a certain major event down in Florida",
        imageUrl: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F686090%2Fimage-684569cc3ea9311290b0ea4112e96952-optimized.png&ehk=QzjLADSfuKgzgjCzafkZLcvUzaGH%2Fu69WSLcT4QYIMo%3D&w=280&h=280&r=0",
        link: "https://www.start.gg/tournament/beachin/details",
        rankImg: false, 
        trailer: "",
        stream: "https://www.twitch.tv/rome0_ssb"
      },
      {
        name: "Homecoming",
        date: "11/2/24",
        location: "Cincinnati, OH, USA",
        description: "A reunion tournament celebrating the 10 Year Anniversary of Project M's heyday in Southwest Ohio! Now featuring HDR Singles and a Cobalt X side bracket, with P+ characters banned",
        imageUrl: "https://github.com/pkzstar/plus-side/blob/main/images/upcoming%20events/homecominglogo.png?raw=true",
        link: "https://smashboards.com/threads/homecoming-p-hdr-nov-9th-2024.523550/",
        rankImg: false, 
        trailer: "",
        stream: ""
      },
      {
        name: "Show Me Your Moves 24",
        date: "11/9/24",
        location: "Urbana, IL, USA",
        description: "Show Me Your Moves features Super Smash Bros. Melee and Super Smash Bros. Ultimate as always, and we're thrilled to be bringing you Project+ once more!",
        imageUrl: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F698361%2Fimage-d2e2c3e64de1dc9428c9460ea5c42180-optimized.jpg&ehk=i1VdSzAZQGuklEvHYhFum3SBQvSjxHcoDLlRYbWuOKA%3D&w=280&h=280&r=0",
        link: "https://www.start.gg/tournament/show-me-your-moves-24-1/details",
        rankImg: false, 
        trailer: "",
        stream: ""
      },
      {
        name: "cardd's basement",
        date: "11/9/24",
        location: "Atlanta, GA, USA",
        description: "spiritual successor to georgia's most densely stacked tournament series. this is not in cardd's basement. only in their metaphorical basement.",
        imageUrl: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F700328%2Fimage-23f218e8ddb0bde41f1f0de22c998782-optimized.png&ehk=OVSnkj%2BgETglWhmNzEkT0oB%2FjTi%2FIxbzMQcjrXSGnR4%3D&w=280&h=280&r=0",
        link: "https://www.start.gg/tournament/cardd-s-basement/details",
        rankImg: false, 
        trailer: "",
        stream: ""
      },
      {
        name: "Blacklisted 9",
        date: "11/16/24 - 11/17/24",
        location: "Springfield, MA, USA",
        description: "Blacklisted has moved venues for the first time in five years! Join us in Springfield, Massachusetts for the biggest and best Blacklisted yet! Blacklisted 9 will be returning with Doubles and Singles pools which will send players into double elimination Pro and Amateur brackets - now for both Project+ and HDR!",
        imageUrl: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F681909%2Fimage-7d4e0ff8435ebeb4a6ceb3cd129b1705-optimized.png&ehk=sQBjT2ATBqcPGXSXEzLSl2H8PYlq6I79X7ucG2mT4hU%3D&w=280&h=280&r=0",
        link: "https://www.start.gg/tournament/blacklisted-9-a-project-and-hdr-major/details",
        rankImg: true, 
        trailer: "https://twitter.com/BlacklistedSSB/status/1817403907984761246",
        stream: "https://www.twitch.tv/projectmnexus"
      },
      {
        name: "Pissmas 5",
        date: "11/29/24 - 12/1/24",
        location: "Southport, QLD, Australia",
        description: "A Christmas Smash Major in collaboration with Queensland Ultimate, Tournameta and Piss Gang. Pissmas 5 will run over three days, feature 7 brackets and the one and only Pissbet!",
        imageUrl: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F711199%2Fimage-13f747fdf4949ee152c280b5ad6213dc-optimized.png&ehk=B4KLu7um2O7wIzURoDP%2F1L8VLvwVop4KB47typTJpaQ%3D&w=280&h=280&r=0",
        link: "https://www.start.gg/tournament/pissmas-5/details",
        rankImg: false, 
        trailer: "",
        stream: ""
      },
      {
        name: "Condo of Blood 2",
        date: "12/14/24",
        location: "Mississauga, Ontario, Canada",
        description: "Condo of Blood is an Ontario Project Plus and HDR regional hosted directly beside the Port Credit GO station. This accessible recurring tournament series will feature top Ontario talent and is designed fully around our shared love of these modded smash games.",
        imageUrl: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F702378%2Fimage-8d2b7a057fea4990d7c65f0a9029ce55-optimized.png&ehk=IdU531WdJ2NzjRvsKva8PJUtCeLIIHB6Di%2BJqFU80bU%3D&w=280&h=280&r=0",
        link: "https://www.start.gg/tournament/condo-of-blood-2-2/details",
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
