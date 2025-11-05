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
        name: "Night of the living DED #7 (Melee & P+)",
        date: "11/8/25",
        location: "Port Chester, NY, USA",
        description: "We have free parking in the 'Waterfront Parking Lot' behind the venue, or paid parking on the street in the surrounding area.We have dedicated per player CRTs and wiis available for all contenstants. Extra setups are welcome but space for any extra setups cannot be guaranteed. ",
        imageUrl: "https://images.start.gg/images/tournament/834279/image-60b5f58c889ef1904f09961eb67e83aa.png",
        link: "https://www.start.gg/tournament/night-of-the-living-ded-7-melee-p/details",
        rankImg: false, 
        trailer: "",
        stream: ""
      },
      {
        name: "Triple Tactics Talent 2025",
        date: "11/8/25",
        location: "Waltham, MA, USA",
        description: "This is New England Melee's first attempt at a large triples tournament! We're also running Project+ and Melee Doubles as well. PLEASE NOTE THAT DUE TO TECHNICAL LIMITATIONS, THERE IS A MAXIMUM OF TWO DIFFERENT CHARACTERS PER TRIPLES TEAM. Ports 1 and 5 along with Ports 2 and 6 are linked and MUST have the same character selected due to the limitations in question.",
        imageUrl: "https://images.start.gg/images/tournament/839343/image-4d4e9c8aa4d0c31a02a946881882bf28.png",
        link: "https://www.start.gg/tournament/triple-tactics-talent-2025/details",
        rankImg: false, 
        trailer: "",
        stream: ""
      },
      {
        name: "20MD",
        date: "11/8/25",
        location: "College Park, MD, USA",
        description: "Parking: Park in either lot 1 or lot z. If those are full you can try Mowatt Lane Garage, Union Lane Garage, Stadium Drive Garage or Regents Drive Garage (though you may have to pay). the tournament itself will be held at STAMP",
        imageUrl: "https://images.start.gg/images/tournament/847187/image-17329736fb66bc71a6471bd1f710172a.png",
        link: "https://www.start.gg/tournament/20md/details",
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
        name: "SOAR 2",
        date: "11/15/25",
        location: "Jacksonville, FL, USA",
        description: "GOOGLE MAPS TO THE THOMAS G. CARPENTER LIBRARY IS THE EASIEST WAY TO GET TO THE BUILDING. The optimal Parking location is in front of the Thomas G. Carpenter library. Parking is free anywhere in the lot. If the lot is full, park in the Fine Arts Garage.",
        imageUrl: "https://images.start.gg/images/tournament/814277/image-e3d84f3e973a9d0868bd2e56e5265815.png",
        link: "https://www.start.gg/tournament/soar-2-1/details",
        rankImg: false, 
        trailer: "",
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
        stream: ""
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
        name: "Flash Flood",
        date: "2/28/26",
        location: "Normal, Illinois, USA",
        description: "Welcome to Flash Flood, GRV's brand new major event. Featuring singles, doubles, and amateur brackets for Ultimate, Melee, and 'Brawl', we aim to provide an unforgettable experience!",
        imageUrl: "https://images.start.gg/images/tournament/813787/image-12969cc9155ec8f9247a30aefe8d1120.png",
        link: "https://www.start.gg/tournament/flash-flood/details",
        rankImg: false, 
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
