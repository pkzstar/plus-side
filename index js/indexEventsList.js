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
        name: "Filler Fest",
        date: "7/26/25",
        location: "Lawrence, KS, USA",
        description: "Filler Fest is a celebration of KC Melee, live music, and local artists held in Lawrence Kansas at the wonderful ECM Community Center!",
        imageUrl: "https://images.start.gg/images/tournament/782711/image-0b6b921cf69f427ea3807f0696b1105f.png",
        link: "https://www.start.gg/tournament/filler-fest/details",
        rankImg: true, 
        trailer: "",
        stream: ""
      },
      {
        name: "Pico Plus #9",
        date: "7/26/25",
        location: "Pico Rivera, CA, USA",
        description: "SoCal P+ is back! Introducing Pico Plus, a brand new Project+ local in the heart of Pico Rivera, CA",
        imageUrl: "https://images.start.gg/images/tournament/805139/image-89fda7ff1d4e6aeebd759d5f2a55c5e5.png",
        link: "https://www.start.gg/tournament/pico-plus-9/details",
        rankImg: false, 
        trailer: "",
        stream: "https://www.twitch.tv/socalpm"
      },
      {
        name: "Bristol's Basement: Wrath of the Lich King Classic",
        date: "7/27/25",
        location: "Bristol, UK",
        description: "Bristol's premier melee monthly is back for it's twenty-ninth event!",
        imageUrl: "https://images.start.gg/images/tournament/804165/image-5a87cbe427ec6c49c4065b5702d6d4e0.jpg",
        link: "https://www.start.gg/tournament/bristol-s-basement-wrath-of-the-lich-king-classic/details",
        rankImg: false, 
        trailer: "",
        stream: ""
      },
      {
        name: "Dream Rotation #2 - Winner Stays",
        date: "7/27/25",
        location: "Pittsburgh, PA, USA",
        description: "Dream Rotation is Pittsburgh's dreamiest monthly tournament series for alternative platform fighters! This series features an exciting venue filled with fun activities, plenty of time for friendlies, a rotating late-night bracket, a safe competitive environment for all attendees, and high-stakes competition!",
        imageUrl: "https://images.start.gg/images/tournament/801105/image-99439f35d3d1c5d1bc6c7a2bd7904487.png",
        link: "https://www.start.gg/tournament/dream-rotation-2-winner-stays/details",
        rankImg: false, 
        trailer: "",
        stream: ""
      },
      {
        name: "Monty's Olympic Games",
        date: "8/2/25",
        location: "Baton Rouge, LA, USA",
        description: "Presenting Monty's Olympic Games. A fun community building event with 8 brackets where players compete for bronze, silver & gold. The top overall performer will win a one-of-a-kind trophy! Who will take home the gold?? Find out Aug 2nd at the LSU Student Union.",
        imageUrl: "https://images.start.gg/images/tournament/803977/image-f92bb8393df4fc6c2bd459e12e6f1768.png",
        link: "https://www.start.gg/tournament/monty-s-olympic-games/details",
        rankImg: false, 
        trailer: "",
        stream: ""
      },
      {
        name: "Rev It Up for Charity!",
        date: "8/6/25",
        location: "Oak Park, IL, USA",
        description: "CALLING ALL MELEE AND 'BRAWL' PLAYERS! Have you ever wanted to contribute to your community and the well-being of those around you while playing your favorite games? For the first time ever, Revy eSports and the Chicago Transgender Association are partnering to bring you a charity event harkening back to the events that made our grassroots community as popular as it is today!",
        imageUrl: "https://images.start.gg/images/tournament/799668/image-02c7c381abb660e94bdfd60ff9265070.png",
        link: "https://www.start.gg/tournament/rev-it-up-for-charity/details",
        rankImg: false, 
        trailer: "",
        stream: "https://www.twitch.tv/soulofficer"
      },
      {
        name: "St. No John's 11",
        date: "8/8/25 - 8/10/25",
        location: "St. John's, NL, Canada",
        description: "SmashNL is excited to continue with St. No John's, one of our biggest tournament series that started back in 2014! We are hoping to continue on the momentum gained with SNJX last year, pushing upwards of 200 total attendees throughout the weekend and an increased attendance from out-of-region competitors!",
        imageUrl: "https://images.start.gg/images/tournament/762867/image-5186c03397ad9db4b9df2f145a778d81.png",
        link: "https://www.start.gg/tournament/st-no-john-s-11/details",
        rankImg: false, 
        trailer: "",
        stream: ""
      },
      {
        name: " ˅⁰𝚒Ꮷ 𝘕𝖊Ⱃʯ𝗹𝜶 2: Eternity ",
        date: "8/9/25",
        location: "Chantilly, VA, USA",
        description: "you can't find a way to kill us. find what you're looking for in the back of the brickmania capital store, a mere 1 minute walk from the dulles exposition center. last year, it was difficult. we had to put our knuckles to the grindstone to accomplish a PROJECT so Magnificent, PLUS, we were working on short notice. this time, it will be different. join us.",
        imageUrl: "https://images.start.gg/images/tournament/808583/image-57f90de8d46034f1db69dac305f20b3a.jpg",
        link: "https://www.start.gg/tournament/2-eternity/details",
        rankImg: false, 
        trailer: "",
        stream: "https://www.twitch.tv/essy531"
      },
      {
        name: "Construct X: 2025",
        date: "8/10/25",
        location: "Milwaukee, WI, USA",
        description: "A tool for the Resistance, void of dimension, yet so powerful it presents a danger to the senses. initiate simulation overload.",
        imageUrl: "https://images.start.gg/images/tournament/794501/image-8794fe27cd441ebf73297992d28f01b8.png",
        link: "https://www.start.gg/tournament/construct-x-2025/details",
        rankImg: false, 
        trailer: "",
        stream: "https://twitch.tv/wisconsinsmash2"
      },
      {
        name: "Gold Rush",
        date: "8/16/25",
        location: "Lakewood, CO, USA",
        description: "Welcome to Gold Rush! Join us at Localhost Denver for another Colorado P+ classic",
        imageUrl: "https://images.start.gg/images/tournament/800623/image-8b92e2a8e28481295ea4e27c9def6993.png",
        link: "https://www.start.gg/tournament/gold-rush-10/details",
        rankImg: true, 
        trailer: "",
        stream: "https://www.twitch.tv/coloradoprojectplus"
      },
      {
        name: "Night of the living DED #5",
        date: "8/16/25",
        location: "Port Chester, NY, USA",
        description: "We have free parking in the Waterfront Parking Lot behind the venue, or paid parking on the street in the surrounding area. We have dedicated per player CRTs and Wiis available for all Contenstants. However extra setups are always welcome, and space will be allocated for extra setups for friendlies + Side Games such as P+",
        imageUrl: "https://images.start.gg/images/tournament/810567/image-57519baa7115494776be96b98e3da25a.png",
        link: "https://www.start.gg/tournament/night-of-the-living-ded-5-melee-p/details",
        rankImg: false, 
        trailer: "",
        stream: ""
      },
      {
        name: "Québecup 2025",
        date: "10/4/25",
        location: "Montréal, QC, Canada",
        description: "TOKÉBAKICITTE! Welcome to Montréal! Québecup 2025 is a one day major with Melee, Ultimate, P+",
        imageUrl: "https://images.start.gg/images/tournament/798250/image-9559b71c9580d8937051eddb2aaa0917.png",
        link: "https://www.start.gg/tournament/qu-becup-2025/details",
        rankImg: false, 
        trailer: "",
        stream: ""
      },
      {
        name: "The Big Money Monthly #2 ($400 pot bonus!)",
        date: "10/4/25",
        location: "San Antonio, TX, USA",
        description: "A Monthly in San Antonio, TX",
        imageUrl: "https://images.start.gg/images/tournament/807108/image-0595a918d6b8ca84ec4b24e944867117.png",
        link: "https://www.start.gg/tournament/the-big-money-monthly-2-400-pot-bonus/details",
        rankImg: false, 
        trailer: "",
        stream: "https://www.twitch.tv/sapplus"
      },
      {
        name: "Ruffled Feathers",
        date: "10/11/25",
        location: "Florissant, MO, USA",
        description: "A regional in MO",
        imageUrl: "https://images.start.gg/images/tournament/796666/image-8f001c9be7d679a22099e1332e3aae1b.jpg",
        link: "https://www.start.gg/tournament/ruffled-feathers/details",
        rankImg: false, 
        trailer: "",
        stream: "https://www.twitch.tv/stl_projectplus"
      },
      {
        name: "Somino Noctem",
        date: "10/31/25 - 11/2/25",
        location: "Purmerend, Netherlands",
        description: " SOMNIO NOCTEM - EU Major - October 31st, November 1st & 2nd 2025. FROM THE PEOPLE THAT BROUGHT YOU DREAMHACK ROTTERDAM 2019 & 2022, SECTOR Z, SOMNIO SERIES AND MORE!",
        imageUrl: "https://images.start.gg/images/tournament/799120/image-95004b80bfa048142c0f77fde12a5868.png",
        link: "https://www.start.gg/tournament/somnio-noctem/details",
        rankImg: false, 
        trailer: "",
        stream: ""
      },
      {
        name: "Show Me Your Moves '25",
        date: "11/15/25",
        location: "Champaign, IL, USA",
        description: "Show Me Your Moves turns 21! The longest running smash tournament returns for its 21st birthday and 24th iteration! Show Me Your Moves features Super Smash Bros. Melee and Super Smash Bros. Ultimate as always, and we're thrilled to be bringing you 'Brawl' once more!",
        imageUrl: "https://images.start.gg/images/tournament/784887/image-19e0f4dffa7bc1c0d7a0579be64d4879.jpg",
        link: "https://www.start.gg/tournament/show-me-your-moves-25/details",
        rankImg: false, 
        trailer: "https://www.twitch.tv/pplusside",
        stream: ""
      },
      {
        name: "One More Game",
        date: "11/22/25 - 11/23/25",
        location: "Seattle, WA, USA",
        description: "Registration closes November 18th TUESDAY at 11:59pm!",
        imageUrl: "https://images.start.gg/images/tournament/795071/image-177b8c8cdfe8c8e9c9cc3e6a939f3568.png",
        link: "https://www.start.gg/tournament/one-more-game-2/details",
        rankImg: true, 
        trailer: "https://www.youtube.com/watch?v=hs4mSJYlaFA",
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


    // game 5 + moonshine monthly template
    
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
