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
        name: "Bristol's Basement: Echoes of the Eye",
        date: "2/22/26",
        location: "Bristol, UK",
        description: "Bristol's premier melee monthly is back for it's thirty-fourth event!",
        imageUrl: "https://images.start.gg/images/tournament/876302/image-b89cee1fa577271d432f968cdcbd2b10.jpg",
        link: "https://www.start.gg/tournament/bristol-s-basement-echoes-of-the-eye/details",
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
        stream: "https://www.twitch.tv/pplusside"
      },
      {
        name: "Plus House",
        date: "2/28/26",
        location: "Springfield, Missouri, USA",
        description: "18+ event! Ask a 417 melee player for address!",
        imageUrl: "https://images.start.gg/images/tournament/874264/image-0269f85a2b42ff0f5fb1afb0df394e6b.png",
        link: "https://www.start.gg/tournament/plus-house/details",
        rankImg: false, 
        trailer: "",
        stream: ""
      },  
      {
        name: "Allston Allstars VI",
        date: "2/28/26",
        location: "Boston, Massachussetts, USA",
        description: "Boston's seasonal event returns! Allston Allstars is Boston's premiere seasonal Super Smash Bros Melee and Project+ tournament! It's a true New England crossover event when we can all come together on a Saturday in Boston to watch NH win it all. Kalvar isn't gonna do it again, right??",
        imageUrl: "https://images.start.gg/images/tournament/870470/image-68fc4cb16635b6b20429bbb69a4565a1.png",
        link: "https://www.start.gg/tournament/allston-allstars-vi-1/details",
        rankImg: false, 
        trailer: "",
        stream: ""
      },
      {
        name: "Get Spiked On! Winter 2026",
        date: "2/28/26",
        location: "Wageningen, Netherlands",
        description: "BACK AGAIN WITH MORE SMASHWAGENINGEN @ KSV FRANCISCUS. February 28th you can enjoy another 'GSO' event! With doubles for both games and singles formats that ensure plenty of competitive sets at all levels of play there's plenty of gaming for everyone at Get Spiked On!",
        imageUrl: "https://images.start.gg/images/tournament/873210/image-b696f37f8da7f1792ac254272affd644.png",
        link: "https://www.start.gg/tournament/get-spiked-on-winter-2026/details",
        rankImg: false, 
        trailer: "",
        stream: ""
      },
      {
        name: "CG House Tournament",
        date: "2/28/26",
        location: "Mexicali, Mexico",
        description: "",
        imageUrl: "https://images.start.gg/images/tournament/871850/image-c3f2c9a593794b64de9097c07958510d.png",
        link: "https://www.start.gg/tournament/cg-house-tournament/details",
        rankImg: false, 
        trailer: "",
        stream: ""
      },
      {
        name: "Cheba Hut Masons Bday Bash: P+ Takeover",
        date: "2/28/26",
        location: "Bellingham, Washington, USA",
        description: "THE BIG BLUNT",
        imageUrl: "https://images.start.gg/images/tournament/877960/image-078d0d2068fbee20f9fefe03f390c99b.png",
        link: "https://www.start.gg/tournament/cheba-hut-masons-bday-bash-p-takeover/details",
        rankImg: false, 
        trailer: "",
        stream: ""
      },
      {
        name: "Get Reel: Take 9",
        date: "2/28/26",
        location: "New Westminister, British Columbia, Canada",
        description: "Event by: Phantom Alley",
        imageUrl: "https://images.start.gg/images/tournament/875187/image-2f6194fe31105baffc863a3877f3fa07.png",
        link: "https://www.start.gg/tournament/get-reel-take-9/details",
        rankImg: false, 
        trailer: "",
        stream: ""
      },
      {
        name: "Unc Frozen's Icebox 12",
        date: "3/7/26",
        location: "Plano, Texas, USA",
        description: "Welcome to the 12th entry in the Icebox tournament series, presented by your friendly neighborhood Unc Frozen!",
        imageUrl: "https://images.start.gg/images/tournament/881750/image-b0569faa89f66f8f4ffbd5889d533aaf.jpg",
        link: "https://www.start.gg/tournament/unc-frozen-s-icebox-12/details",
        rankImg: false, 
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
        name: "Game 5 In The D #11 Yuko's Bday Edition!",
        date: "3/21/26",
        location: "Detroit, Michigan, USA",
        description: "Introducing Game 5 In The D, East Michigan's Premier P+ Bi-Monthly Located In Detroit! We welcome all valiant competitors to our local P+ scene's new home at Kings and Queens Hall! Featuring a professional stream, custom tournament badges, your favorite players, and much, much more, this will be an event you won't want to miss!",
        imageUrl: "https://images.start.gg/images/tournament/873498/image-7ce940d1c981a6095a431b24fa230713.jpg",
        link: "https://www.start.gg/tournament/game-5-in-the-d-11-yuko-s-bday-edition/details",
        rankImg: false, 
        trailer: "",
        stream: "https://www.twitch.tv/game5projectplus"
      },
      {
        name: "Pico Plus #17",
        date: "3/21/26",
        location: "Pico Rivera, California, USA",
        description: "SoCal P+ is back! Introducing Pico Plus, a brand new Project+ local in the heart of Pico Rivera, CA.",
        imageUrl: "https://images.start.gg/images/tournament/882103/image-6ec87fd29601aa63ffe308c00a05161b.png",
        link: "https://www.start.gg/tournament/pico-plus-17/details",
        rankImg: false, 
        trailer: "",
        stream: "https://www.twitch.tv/socalpm"
      },
      {
        name: "Minnesota Monthly Melee #31: Arcadian Assembly",
        date: "3/21/26",
        location: "Minneapolis, Minnesota, USA",
        description: "Minnesota's Premier Super Smash Brothers Melee Monthly Series! Now at Inbound Brewing",
        imageUrl: "https://images.start.gg/images/tournament/873538/image-03e6ca7cf426677a258555fb07d61483.png",
        link: "https://www.start.gg/tournament/minnesota-monthly-melee-31-arcadian-assembly/details",
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
        stream: "https://www.twitch.tv/phoenixsmash"
      },
      {
        name: "Knock Out 11",
        date: "3/28/26",
        location: "Middlesbrough, UK",
        description: "Team Knock Out finally with Knock Out 11!",
        imageUrl: "https://images.start.gg/images/tournament/879647/image-7885175c52adcfd76b131ec1a54230eb.png",
        link: "https://www.start.gg/tournament/knock-out-11/details",
        rankImg: false, 
        trailer: "",
        stream: "https://www.twitch.tv/phoenixsmash"
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
        name: "DEAD ZONE #3",
        date: "4/4/26 - 4/5/26",
        location: "Le Kremlin-Bicêtre, France",
        description: "We are Cycom, the esport organisation representing both EPITA and EPITECH schools since 1998. We have hosted several tournaments such as EPITA Smash Arena, Ultimate Wanted, Pixel Perfect, The Truce, and of course Dead Zone 1 and 2.",
        imageUrl: "https://images.start.gg/images/tournament/862296/image-d781404055a8253cb034cdc35e0d9892.png",
        link: "https://www.start.gg/tournament/dead-zone-3-1/details",
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
        stream: "https://www.twitch.tv/pplusside"
      },
      {
        name: "Chase the Crown! 2",
        date: "4/25/26",
        location: "Knoxville, Tennessee, USA",
        description: "KNOX ESPORTS SMASH IS GOING BIG! In collaboration between the Melee and Ult scene from Knoxville we present to you...Chase the Crown! 2 at Knox eSports.",
        imageUrl: "https://images.start.gg/images/tournament/872891/image-407782ce47d4bc5e657952315a28ae28.png",
        link: "https://www.start.gg/tournament/chase-the-crown-2-1/details",
        rankImg: false, 
        trailer: "",
        stream: "https://www.youtube.com/@sorenzzz/streams"
      },
      {
        name: "Pure Fundies",
        date: "4/25/26",
        location: "Rotunda, Dublin, Ireland",
        description: "",
        imageUrl: "https://images.start.gg/images/tournament/814734/image-1a3a9e53df7bf2c8f74d2029a2665db7.png",
        link: "https://www.start.gg/tournament/pure-fundies/details",
        rankImg: false, 
        trailer: "",
        stream: ""
      },
      {
        name: "Perfect Pivot 2",
        date: "5/16/26 - 5/17/26",
        location: "Winnipeg, Manitoba, Canada",
        description: "SourSpot Studios is back to bring you Perfect Pivot 2!",
        imageUrl: "https://images.start.gg/images/tournament/865655/image-96fe290b2295df7a30ff0bdda4732318.png",
        link: "https://www.start.gg/tournament/perfect-pivot-2-1/details",
        rankImg: false, 
        trailer: "",
        stream: "https://www.youtube.com/@TG2Official"
      },
      {
        name: "Project +1: Holy Smashtrimony",
        date: "6/27/26",
        location: "Mississauga, Ontario, Canada",
        description: "You're Cordially Invited",
        imageUrl: "https://images.start.gg/images/tournament/883226/image-3e72fc26c7d8bc2c68ffad045b822526.png",
        link: "https://www.start.gg/tournament/project-1-holy-smashtrimony/details",
        rankImg: false, 
        trailer: "",
        stream: "https://www.youtube.com/@ontarioprojectm8374/streams"
      },
      /* {
        name: "Smash Camp: Heartlands",
        date: "5/29/26 - 6/1/26",
        location: "Wautoma, Wisconsin, USA",
        description: "Smash Camp Comes To The Midwest! In the ever wonderful state of Wisconsin, it's the Smash Camp you love in a place that's new. At the beautiful Camp Lakotah you can hike, swim, and go 0-2 (in Melee or Beach Volleyball!) at one the of the most unique venues our scene has to offer.",
        imageUrl: "https://images.start.gg/images/tournament/848016/image-ad81fb6d62d51b7553360cac9de398bd.png",
        link: "https://www.start.gg/tournament/smash-camp-heartlands/details",
        rankImg: true, 
        trailer: "",
        stream: ""
      } */
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
