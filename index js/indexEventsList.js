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
        name: "One More Game",
        date: "11/22/25 - 11/23/25",
        location: "Seattle, WA, USA",
        description: "Registration closes November 18th TUESDAY at 11:59pm!",
        imageUrl: "https://images.start.gg/images/tournament/795071/image-177b8c8cdfe8c8e9c9cc3e6a939f3568.png",
        link: "https://www.start.gg/tournament/one-more-game-2/details",
        rankImg: true, 
        trailer: "https://www.youtube.com/watch?v=hs4mSJYlaFA",
        stream: "https://www.twitch.tv/projectmnexus"
      },
      {
        name: "Gecko Cavern 16",
        date: "11/22/25",
        location: "Burwood, NSW, Australia",
        description: "Gecko Cavern 16 is incoming! Hosted at Club Burwood along Burwood Road on the top floor of the venue, Gecko Cavern is the tournament series for Project Plus in Sydney! We also feature other games such as Melee, Rivals of Aether, and more!",
        imageUrl: "https://images.start.gg/images/tournament/849765/image-58355caaa5d49290f5f3ec754e55b461.png",
        link: "https://www.start.gg/tournament/gecko-cavern-16/details",
        rankImg: false, 
        trailer: "",
        stream: ""
      },
      {
        name: "Pico Plus #13",
        date: "11/22/25",
        location: "Pico Rivera, CA, USA",
        description: "SoCal P+ is back! Introducing Pico Plus, a brand new Project+ local in the heart of Pico Rivera, CA",
        imageUrl: "https://images.start.gg/images/tournament/849645/image-d77fccdb1e86eb7bb98bc751e70326ba.png",
        link: "https://www.start.gg/tournament/pico-plus-13/details",
        rankImg: false, 
        trailer: "",
        stream: "https://www.twitch.tv/socalpm"
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
        name: "Get Sliced On! | Fall 2025",
        date: "12/13/25",
        location: "Wageningen, Netherlands",
        description: "This December you can enjoy another 'GSO' event! With doubles for both games and singles formats that ensure plenty of competitive sets at all levels of play there's plenty of gaming for everyone at Get Sliced On!",
        imageUrl: "https://images.start.gg/images/tournament/782485/image-bd6e5058d3c1c346dd915bf841431aea.png",
        link: "https://www.start.gg/tournament/get-sliced-on-fall-2025/details",
        rankImg: false, 
        trailer: "",
        stream: ""
      },
      {
        name: "Unc Frozen's Icebox 10: Holiday Edition",
        date: "12/13/25",
        location: "Plano, TX, USA",
        description: "Welcome to an extra festive entry in the Icebox tournament series, presented by your friendly neighborhood Unc Frozen!",
        imageUrl: "https://images.start.gg/images/tournament/846003/image-08d7caac8751cec6c714feea250e063c.jpg",
        link: "https://www.start.gg/tournament/unc-frozen-s-icebox-10-holiday-edition/details",
        rankImg: false, 
        trailer: "",
        stream: "https://www.twitch.tv/fxgames_gg"
      },
      {
        name: "Tripoint Smash: The Finale",
        date: "12/19/25",
        location: "Romeoville, IL, USA",
        description: "The Sendoff for Chicagoland's Premier Multi-Game Event! After 8 years of Tripoint, the Community Arts Center has declined to renew our venue lease. Come join us to commemorate the end of one of the longest running locals in Illinois history. This may be the end of this chapter for UGS, but stay tuned for future announcements regarding Chicago locals.",
        imageUrl: "https://images.start.gg/images/tournament/850279/image-11a290228f126497d1ee4b5d1ec42cd3.png",
        link: "https://www.start.gg/tournament/tripoint-smash-the-finale/details",
        rankImg: false, 
        trailer: "",
        stream: "https://twitch.tv/projectmnexus"
      },
      {
        name: "Blacklisted 9: Blacklisted Forever",
        date: "1/10/26 - 1/11/26",
        location: "Waltham, MA, USA",
        description: "As tournaments once again fall into the shadows, it shows that we are truly Blacklisted Forever. Blacklisted 9 will be running both Doubles and Singles brackets with the greatest talent from past and present. This is the final tournament that will be run by Motobug and the final tournament in the Blacklisted series - don't miss out on this historic event!",
        imageUrl: "https://images.start.gg/images/tournament/681909/image-c043212981c638b1eaf4cef1bb2c5363.png",
        link: "https://www.start.gg/tournament/blacklisted-9-blacklisted-forever/details",
        rankImg: true, 
        trailer: "https://www.youtube.com/watch?v=q0z5bPfY948",
        stream: "https://www.twitch.tv/projectmnexus"
      },
      {
        name: "Pope's Sunday Mass IV",
        date: "2/1/26",
        location: "Carlton, VIC, Australia",
        description: "That's right. Back and better than ever it's Pope's Sunday Mass IV !! I am so happy to be able to invite all of you to The Clyde Hotel in Carlton to enjoy their Lounge (with attached bar) on Sunday 1st of February for your chance to win a share of over $500 in prize money across Singles and Doubles!!",
        imageUrl: "https://images.start.gg/images/tournament/847360/image-d9bf248b1dbeca6ecc7cca0a8ac107b3.png",
        link: "https://www.start.gg/tournament/pope-s-sunday-mass-iv/details",
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
