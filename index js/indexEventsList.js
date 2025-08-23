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
        name: "Unc Frozen's Icebox 7",
        date: "8/23/25",
        location: "Plano, TX, USA",
        description: "Welcome to the seventh entry in the Icebox tournament series, presented by your friendly neighborhood Unc Frozen!",
        imageUrl: "https://images.start.gg/images/tournament/812447/image-9223a0a2f72e5eaef276653f179af67f.jpg",
        link: "https://www.start.gg/tournament/unc-frozen-s-icebox-7/details",
        rankImg: false, 
        trailer: "",
        stream: "https://twitch.tv/fxgames_gg"
      },
      {
        name: "Pico Plus #10 - Super Pico or something",
        date: "8/23/25",
        location: "Pico Rivera, CA, USA",
        description: "SOCAL P+ IS BACK! Introducing Pico Plus, a brand new Project+ local in the heart of Pico Rivera, CA",
        imageUrl: "https://images.start.gg/images/tournament/812842/image-42847d3266ce122c517df1e71c1dd7e0.png",
        link: "https://www.start.gg/tournament/pico-plus-10-super-pico-or-something/details",
        rankImg: true, 
        trailer: "",
        stream: "https://www.twitch.tv/socalpm"
      },
      {
        name: "DO NOT SKATE",
        date: "8/23/25",
        location: "North Bergen, NJ, USA",
        description: "Skating is not permitted inside of the venue! We're gonna do it anyway, because it's just a video game. This tournament is a dream Project of Mine. Live at The Boulevard in North Bergen, NJ, this venue has ample parking, and concessions sold inside.",
        imageUrl: "https://images.start.gg/images/tournament/811431/image-b3ede5aed6cf5f1de165d90bc5b5c78e.png",
        link: "https://www.start.gg/tournament/do-not-skate/details",
        rankImg: false, 
        trailer: "",
        stream: "https://www.twitch.tv/essy531"
      },
      {
        name: "Dream Rotation #2 - Winner Stays",
        date: "9/13/25",
        location: "Pittsburgh, PA, USA",
        description: "Dream Rotation is Pittsburgh's dreamiest monthly tournament series for alternative platform fighters! This series features an exciting venue filled with fun activities, plenty of time for friendlies, a rotating late-night bracket, a safe competitive environment for all attendees, and high-stakes competition!",
        imageUrl: "https://images.start.gg/images/tournament/801105/image-99439f35d3d1c5d1bc6c7a2bd7904487.png",
        link: "https://www.start.gg/tournament/dream-rotation-2-winner-stays/details",
        rankImg: false, 
        trailer: "",
        stream: ""
      },
      {
        name: "Get Outplayed 8",
        date: "9/27/25",
        location: "Peoria, IL, USA",
        description: "Get Outplayed 8 is here. On September 27, your favorite GRV regional returns for its eighth installment at Bradley University.",
        imageUrl: "https://images.start.gg/images/tournament/793044/image-4ba9fc219c496585c775ea3edc9d0ed5.png",
        link: "https://www.start.gg/tournament/get-outplayed-8/details",
        rankImg: true, 
        trailer: "",
        stream: ""
      },
      {
        name: "Game 5 In The Woods!",
        date: "10/3/25 - 10/5/25",
        location: "Pentwater, MI, USA",
        description: "Introducing Game 5 In The Woods! Michigan's Newest Retreat Tournament located at Lake Michigan Family Campground! We welcome all valiant competitors to our local P+ scene's first retreat tournament! Featuring a field trip like bus ride to the venue, plenty of outdoor amenities, your favorite players, and much, much more, this will be a historic event you won't want to miss!",
        imageUrl: "https://images.start.gg/images/tournament/812714/image-100a76ebb3235581eb4147e4b1af4ffe.png",
        link: "https://www.start.gg/tournament/game-5-in-the-woods-1/details",
        rankImg: false, 
        trailer: "",
        stream: "https://www.twitch.tv/game5projectplus"
      },
      {
        name: "Québecup 2025",
        date: "10/4/25",
        location: "Montréal, QC, Canada",
        description: "TOKÉBAKICITTE! Welcome to Montréal! Québecup 2025 is a one day major with Melee, Ultimate, P+",
        imageUrl: "https://images.start.gg/images/tournament/798250/image-9559b71c9580d8937051eddb2aaa0917.png",
        link: "https://www.start.gg/tournament/qu-becup-2025/details",
        rankImg: true, 
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
        name: "ASCENSION 2",
        date: "10/4/25",
        location: "Baton Rouge, LA, USA",
        description: "ASCENSION IS BACK AND BIGGER THAN EVER!'BRAWL', ULTIMATE, AND MELEE WITH A BRAND NEW BRACKET FORMAT",
        imageUrl: "https://images.start.gg/images/tournament/812007/image-c129195c1c32f585af14b10d0ecd3dcc.png",
        link: "https://www.start.gg/tournament/ascension-2-5/details",
        rankImg: false, 
        trailer: "",
        stream: ""
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
        name: "Unc Frozen's Icebox 9: Extra Spooky Edition",
        date: "10/18/25",
        location: "Plano, TX, USA",
        description: "Welcome to an ExTrA SpOoKy entry in the Icebox tournament series, presented by your friendly neighborhood Unc Frozen!",
        imageUrl: "https://images.start.gg/images/tournament/812447/image-9223a0a2f72e5eaef276653f179af67f.jpg",
        link: "https://www.start.gg/tournament/unc-frozen-s-icebox-9-extra-spooky-edition/details",
        rankImg: false, 
        trailer: "",
        stream: "https://twitch.tv/fxgames_gg"
      },
      {
        name: "Chase the Crown! @ Knox eSports",
        date: "10/18/25",
        location: "Knoxville, TN, USA",
        description: "KNOX ESPORTS SMASH IS GOING BIG! In collaboration between the Melee and Ult scene from Knoxville we present to you... Chase the Crown! at Knox eSports. Also featuring P+ and HDR! Knox Esports offers a sweet gaming space for you to get some games in, enjoy some concessions, and maybe even walk home with some extra cash in your pocket. This tournament is open to players of all skill levels! Whether its your first or your two-hundred-first, we would love to have you!",
        imageUrl: "https://images.start.gg/images/tournament/811395/image-864709aea60a570f3f39302a39f7b83b.png",
        link: "https://www.start.gg/tournament/chase-the-crown-knox-esports-5/details",
        rankImg: false, 
        trailer: "",
        stream: "https://www.twitch.tv/jaysonmoistrice"
      },
      {
        name: "Into The Depths",
        date: "10/24/25 - 10/26/25",
        location: "Midwest City, OK, USA",
        description: "Metro Plat Vods Presents: Into The Depths!",
        imageUrl: "https://images.start.gg/images/tournament/804286/image-4ec5e7679af683144500ead153e819a8.png",
        link: "https://www.start.gg/tournament/into-the-depths-1/details",
        rankImg: false, 
        trailer: "",
        stream: "https://www.twitch.tv/metrosmashvods"
      },
      {
        name: "Deep Space Tussle",
        date: "10/25/25",
        location: "Normal, IL, USA",
        description: "WE'RE GOING TO SPACE. New atmosphere, same Tussle. From the team at Plus Side, along with help from Motobug and BloNo Smash, the next tournament in the Tussle series is here.",
        imageUrl: "https://images.start.gg/images/tournament/815936/image-74bb73b4a4d073d523a64f21b062b769.png",
        link: "https://www.start.gg/tournament/deep-space-tussle/details",
        rankImg: true, 
        trailer: "https://www.youtube.com/watch?v=ZnOkBWQ8Mxo",
        stream: "https://www.twitch.tv/pplusside"
      },
      {
        name: "Rat Kings 2",
        date: "10/25/25",
        location: "Goodlettsville, TN, USA",
        description: "doin a thing @ tnlg. Melee/P+ and ult now woah! it's at the mall",
        imageUrl: "https://images.start.gg/images/tournament/817217/image-c97bbc06a38a79c032e6369d519f565c.png",
        link: "https://www.start.gg/tournament/rat-kings-2/details",
        rankImg: false, 
        trailer: "",
        stream: "https://www.twitch.tv/jaysonmoistrice"
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
        rankImg: true, 
        trailer: "https://x.com/UIUCSmash/status/1943138575794733460",
        stream: "https://www.twitch.tv/pplusside"
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
