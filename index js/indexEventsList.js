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
        rankImg: true, 
        trailer: "",
        stream: ""
      },
      {
        name: "Mass Madness Deluxe",
        date: "11/16/24",
        location: "Waltham, MA, USA",
        description: "New England Melee and Massachusetts Project+ have come together to run a large regional! Pre-registration is MANDATORY, and closes at 4:00 PM on Friday, November 15th, or once we hit our entry caps.",
        imageUrl: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F722151%2Fimage-868aa56131de1627a08419780bb84420-optimized.png&ehk=axLCB38xhnZMiXM%2F4Uz1Bme%2BwrhpVNO27PDEWVKyY1I%3D&w=280&h=280&r=0",
        link: "https://www.start.gg/tournament/mass-madness-deluxe-a-project-melee-and-hdr-regional/details",
        rankImg: false, 
        trailer: "",
        stream: ""
      },
      {
        name: "Rage Against the CRT",
        date: "11/16/24",
        location: "Chattanooga, TN, USA",
        description: "This month will be our first ever STREAMED tournament! In addition, we are bring back doubles!",
        imageUrl: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F712613%2Fimage-e04444fd05867f4207020d6da948a147-optimized.jpg&ehk=MvKIkvnSe5Wtv24w%2BIoyNjg8Ere7fgr53c8xUpy%2BZ9Y%3D&w=280&h=280&r=0",
        link: "https://www.start.gg/tournament/rage-against-the-crt/details",
        rankImg: false, 
        trailer: "",
        stream: ""
      },
      {
        name: "Birdhouse 13 Charity for the Foodbank",
        date: "11/16/24",
        location: "Normal, IL, USA",
        description: "Bloomington-Normal's Premiere Smash Regional Returns! The ISU Smash team is happy to announce the 13th iteration of Bird House!",
        imageUrl: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F723673%2Fimage-1aeb7b34779d59e9909f10cf735714c3-optimized.jpg&ehk=e2h9y%2FCTF7Aw7%2FGVtqZinnCqeudWtq%2FxFsTFRF0ZZg8%3D&w=280&h=280&r=0",
        link: "https://www.start.gg/tournament/birdhouse-13-charity-for-the-foodbank/details",
        rankImg: false, 
        trailer: "",
        stream: ""
      },
      {
        name: "LA NEXUS XVII",
        date: "11/16/24",
        location: "Baton Rouge, LA, USA",
        description: "BATON ROUGE SMASH IS BACK, THIS TIME AT THE NEXUS LOUISIANA TECH PARK!",
        imageUrl: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F727138%2Fimage-7ab76bac26ade3b8758f0670081a4209-optimized.png&ehk=Qg64TBf4HmR69ichFld9TAFau9v9T1v9kY%2Bo7n6Cthw%3D&w=280&h=280&r=0",
        link: "https://www.start.gg/tournament/la-nexus-xvii/details",
        rankImg: false, 
        trailer: "",
        stream: ""
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
        rankImg: true, 
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
        name: "LUST 50",
        date: "2/1/25 - 2/2/25",
        location: "Baton Rouge, LA, USA",
        description: "RETURNING ON FEBRUARY 1ST AND 2ND...LUST IS BACK FOR IT'S 50TH INSTALLMENT!",
        imageUrl: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F718205%2Fimage-f7bc746a62b66f66d8604eb85d04ac49-optimized.png&ehk=OyS2etB7Qrzc6H8qxwJupdTt3jIBpdqYTeu6kN9QyJI%3D&w=280&h=280&r=0",
        link: "https://www.start.gg/tournament/lust-50-a-louisiana-regional/details",
        rankImg: true, 
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
