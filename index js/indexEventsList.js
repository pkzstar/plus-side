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
        name: "Mahtay Melee - Summer '25 Edition",
        date: "9/20/25",
        location: "St. Catharines, ON, Canada",
        description: "Make the drive to Niagara on Saturday, September 20th for Mahtay Melee, a one-day tournament hosted in an amazing community-focused venue, the Mahtay Café & Lounge in St. Catharines, ON.",
        imageUrl: "https://images.start.gg/images/tournament/810534/image-b0813696d50fa0323c0c80c5f16b25bf.jpg",
        link: "https://www.start.gg/tournament/mahtay-melee-summer-25-edition/details",
        rankImg: false, 
        trailer: "",
        stream: ""
      },
      {
        name: "Gecko Cavern 14",
        date: "9/20/25",
        location: "Burwood, NSW, Austrailia",
        description: "Gecko Cavern 14 is on its way! Hosted at Club Burwood along Burwood Road on the top floor of the venue, Gecko Cavern is the tournament series for Project Plus in Sydney! We also feature other games such as Melee, Rivals of Aether, and more!",
        imageUrl: "https://images.start.gg/images/tournament/826307/image-a030a32e1e230b7bb79568254756001c.png",
        link: "https://www.start.gg/tournament/gecko-cavern-14/details",
        rankImg: false, 
        trailer: "",
        stream: ""
      },
      {
        name: "Mass Madness 53 - Fleeting Joy",
        date: "9/20/25",
        location: "Waltham, MA, USA",
        description: "Mass Madness returns for another edition! Masks are recommended to be worn while in the venue. For this event, we'll be running Melee doubles and singles, along with Project+ singles. Every match both Melee and Project+ singles is best of 5.",
        imageUrl: "https://images.start.gg/images/tournament/819943/image-46188b97d89ea521645ca2e3d54065e3.png",
        link: "https://www.start.gg/tournament/mass-madness-53-fleeting-joy/details",
        rankImg: false, 
        trailer: "",
        stream: ""
      },
      {
        name: "UMD Unity: Re-Enrollment",
        date: "9/20/25",
        location: "College Park, MD, USA",
        description: "We are very happy to announce the return of the unity series at UMD! After being kicked out of our old venue we have decided to switch to monthlies full time and to return to the series that built umd smash into what it is today.",
        imageUrl: "https://images.start.gg/images/tournament/825411/image-4bfbc5a75be6e616f8134f29be56cc09.png",
        link: "https://www.start.gg/tournament/umd-unity-re-enrollment/details",
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
        name: "Who's on Ledge? 13 (SDIowa 5 Qualifier)",
        date: "9/27/25",
        location: "Des Moines, IA, USA",
        description: "DMGC presents Who's on Ledge? Our monthly tournament series featuring Super Smash Bros. Melee, Ultimate, Project+, and Rivals of Aether II at RezBlue Arena!",
        imageUrl: "https://images.start.gg/images/tournament/820011/image-c956b372325fc1a9c7521ca1812380d5.png",
        link: "https://www.start.gg/tournament/who-s-on-ledge-13-sdiowa-5-qualifier/details",
        rankImg: false, 
        trailer: "",
        stream: ""
      },
      {
        name: "Unc Frozen's Icebox 8",
        date: "9/27/25",
        location: "Plano, TX, USA",
        description: "Welcome to the eighth entry in the Icebox tournament series, Unc Frozen's Birthday Bash, presented by your friendly neighborhood Unc Frozen!",
        imageUrl: "https://images.start.gg/images/tournament/812456/image-4167347f6a5141a897344ee39c4e94f6.jpg",
        link: "https://www.start.gg/tournament/unc-frozen-s-icebox-8-1/details",
        rankImg: false, 
        trailer: "",
        stream: "https://www.twitch.tv/fxgames_gg"
      },
      {
        name: "Night of the living DED #6",
        date: "9/27/25",
        location: "Port Chester, NY, USA",
        description: "We have free parking in the 'Waterfront Parking Lot' behind the venue, or paid parking on the street in the surrounding area. We have dedicated per player CRTs and wiis available for all contenstants. Extra setups are welcome but space for any extra setups cannot be guaranteed. ",
        imageUrl: "https://images.start.gg/images/tournament/821585/image-dfa691353747d79e2d4964fdbe2c8182.png",
        link: "https://www.start.gg/tournament/night-of-the-living-ded-6-melee-p/details",
        rankImg: false, 
        trailer: "",
        stream: "https://www.twitch.tv/ded__gaming"
      },
      {
        name: "Pico Plus #11",
        date: "9/27/25",
        location: "Pico Rivera, CA, USA",
        description: "SOCAL P+ IS BACK! Introducing Pico Plus, a brand new Project+ local in the heart of Pico Rivera, CA",
        imageUrl: "https://images.start.gg/images/tournament/825404/image-85414f173df05dafd8c4f3aabd1f645a.png",
        link: "https://www.start.gg/tournament/pico-plus-11/details",
        rankImg: false, 
        trailer: "",
        stream: "https://www.twitch.tv/socalpm"
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
        rankImg: true, 
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
        imageUrl: "https://images.start.gg/images/tournament/815936/image-ad01466e083a7c957ab5113a42b5d00f.png",
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
        description: "SOMNIO NOCTEM - EU Major - October 31st, November 1st & 2nd 2025. FROM THE PEOPLE THAT BROUGHT YOU DREAMHACK ROTTERDAM 2019 & 2022, SECTOR Z, SOMNIO SERIES AND MORE!",
        imageUrl: "https://images.start.gg/images/tournament/799120/image-95004b80bfa048142c0f77fde12a5868.png",
        link: "https://www.start.gg/tournament/somnio-noctem/details",
        rankImg: false, 
        trailer: "",
        stream: ""
      },
      {
        name: "The Bird House 14: Winter Formal",
        date: "11/1/25",
        location: "Normal, IL, USA",
        description: "The Bird House is back and snazzier than ever! This November 1st, The Bird House is returning to Illinois State University with a bit more bravo! Hosted in the Bone Student Center's Old Main Room, ISU's premiere regional tournament is coming back in style!",
        imageUrl: "https://images.start.gg/images/tournament/816692/image-3d9f142e14300ece28aff766c1734c25.png",
        link: "https://www.start.gg/tournament/the-bird-house-14-winter-formal/details",
        rankImg: false, 
        trailer: "",
        stream: ""
      },
      {
        name: "Condo of Blood 6: The Nintendo Switching Hour",
        date: "11/1/25",
        location: "Mississauga, ON, Canada",
        description: "Condo of Blood is an Ontario Project Plus and Rivals of Aether 2 regional hosted directly beside the Port Credit GO station, but this time read this description in a scary voice. This accessible recurring tournament series will feature top Ontario talent and is designed fully around our shared love of these platform fighters.",
        imageUrl: "https://images.start.gg/images/tournament/824855/image-baac4749e20688a618512441b58ac0f4.png",
        link: "https://www.start.gg/tournament/condo-of-blood-6-the-nintendo-switching-hour/details",
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
        name: "Pissmas 6",
        date: "12/5/25 - 12/7/25",
        location: "Southport, QLD, Australia",
        description: "Christmas Smash Major in collaboration with Queensland Ultimate, Tournameta and Piss Gang. Pissmas 6 will run over three days, feature four games, seven brackets and the one and only Pissbet!",
        imageUrl: "https://images.start.gg/images/tournament/825531/image-1121c89e50d3f48692a4aeccafbd882d.png",
        link: "https://www.start.gg/tournament/pissmas-6/details",
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
