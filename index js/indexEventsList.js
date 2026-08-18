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
        name: "Enchanted",
        date: "8/22/26",
        location: "Herriman, Utah, Europe",
        description: "Join us for an Enchanted day of Smash! Enchanted Events Center presents a magical day of gaming, whether you're striving for glory or looking for leisure.",
        imageUrl: "https://images.start.gg/images/tournament/922540/image-074c0205ef617434b71c63bf3f64953f.jpg",
        link: "https://www.start.gg/tournament/enchanted-100-pot-bonus/details",
        rankImg: false, 
        trailer: "",
        stream: ""
      },
      {
        name: "Re:Raise 2026",
        date: "8/22/26",
        location: "Herriman, Utah, Europe",
        description: "We're back again this year with another event to help raise funds for Re:Cupid’s major scale tournament series, ONE MORE GAME 2: Run it Back!",
        imageUrl: "https://images.start.gg/images/tournament/936991/image-b6bf4bb181d74b57b46d5066d534f520.png",
        link: "https://www.start.gg/tournament/re-raise-2026/details",
        rankImg: false, 
        trailer: "",
        stream: ""
      },
      {
        name: "Don't Mind The Cats 3",
        date: "8/29/26",
        location: "Rittenhouse, Philadelphia, USA",
        description: "Welcome to Don't Mind The Cats! A monthly Project+ house tournament featuring the best talent Philadelphia has to offer. On top of that, all proceeds raised by the event will be donated to Morris Animal Refuge; Philadelphia's own and one of America's first animal shelter!",
        imageUrl: "https://images.start.gg/images/tournament/920555/image-b2bba0c2d528899ea5cdfd42b3519cbf.png",
        link: "https://www.start.gg/tournament/don-t-mind-the-cats-3/details",
        rankImg: false, 
        trailer: "",
        stream: ""
      },
      {
        name: "The Big Cheese 6 - South Australian Smash & FGC Major",
        date: "9/26/26 - 9/27/26",
        location: "Woodville, South SA, Australia",
        description: "The South Australian Smash & Fighting Game Community are proud to announce the return of Adelaide's local competitive gaming community Major - The Big Cheese!",
        imageUrl: "https://images.start.gg/images/tournament/916952/image-af1778120d061a4c3aeb86b9d809d100.png",
        link: "https://www.start.gg/tournament/the-big-cheese-6-south-australian-smash-fgc-major/details",
        rankImg: false, 
        trailer: "",
        stream: ""
      }, 
      {
        name: "Show Me Your Moves '26",
        date: "10/3/26",
        location: "Champaign, Illinois, USA",
        description: "Show Me Your Moves turns 22! The longest running smash tournament returns for its 22nd birthday and 25th iteration! Show Me Your Moves features Super Smash Bros. Melee and Super Smash Bros. Ultimate as always, and we're thrilled to be bringing you 'Brawl' once more!",
        imageUrl: "https://images.start.gg/images/tournament/910945/image-5c15c635d3557f148f707970ef639252.jpg",
        link: "https://www.start.gg/tournament/show-me-your-moves-26/details",
        rankImg: true, 
        trailer: "",
        stream: ""
      },   
      {
        name: "The Big Money Monthly #3",
        date: "10/3/26",
        location: "San Antonio, Texas, USA",
        description: "We will be using HD Monitor set ups as well as CRT set ups. From our testing here in San Antonio, these HD set ups are fine to play on and it will used for stream matches. They are fair game for all tournament matches. If there are any discrepancies, please let a T.O. know. Please go to the T.O. stream room or find ~ CP9 ~, Ntire, or Plate to report your matches.",
        imageUrl: "https://images.start.gg/images/tournament/934775/image-dc5a1275e925581b48b065582cb826c8.png",
        link: "https://www.start.gg/tournament/the-big-money-monthly-3-500-pot-bonus/details",
        rankImg: false, 
        trailer: "",
        stream: ""
      },
      {
        name: "Evergreen Rising 14",
        date: "10/3/26",
        location: "Des Moines, Washington, USA",
        description: "Evergreen Rising is BACK!! Sign up now for the classic regional’s 14th iteration this October!!",
        imageUrl: "https://images.start.gg/images/tournament/913658/image-289637b8f06e084feb7d19623ebdb2b2.png",
        link: "https://www.start.gg/tournament/evergreen-rising-14/details",
        rankImg: false, 
        trailer: "https://x.com/FUTURExDREAM/status/2088801163055632650",
        stream: ""
      },   
      {
        name: "Cabin Fever",
        date: "10/9/26 - 10/12/26",
        location: "Elbert, Colorado, USA",
        description: "Cabin Fever is a 3 day, Melee and 'Brawl' tournament hosted at the JCC Ranch Camp in Elbert, Colorado, 75 minutes from downtown Denver and the Denver International Airport.",
        imageUrl: "../images/upcoming events/CabinFever.png",
        link: "https://parry.gg/cabinfever",
        rankImg: true, 
        trailer: "",
        stream: ""
      },
      {
        name: "第04回 SMASH WARRIORS 大阪PM大会",
        date: "10/10/26 - 10/11/26",
        location: "Fukushima Ward, Osaka, Japan",
        description: "Smash Warriors（スマウォリ）は大阪福島駅周辺で2日間開催されているスマブラPM + HDR の大会です。\nSmash Warriors is a P+ and HDR tournament held near 'Fukushima' Station on the JR Osaka Loop Line.",
        imageUrl: "https://images.start.gg/images/tournament/925173/image-28e4d760c3c5903fd53f21ea99d47f4a.png",
        link: "https://www.start.gg/tournament/04-smash-warriors-pm/details",
        rankImg: false, 
        trailer: "",
        stream: ""
      },
      {
        name: "Game 5 In The Woods! #2",
        date: "10/16/26 - 10/17/26",
        location: "Pentwater, Michigan, USA",
        description: "Introducing Game 5 In The Woods! Michigan's Newest Retreat Tournament located at Lake Michigan Family Campground!",
        imageUrl: "https://images.start.gg/images/tournament/941222/image-5b2dd0dd1ed1809cc4ce5be9ef68e83c.png",
        link: "https://www.start.gg/tournament/game-5-in-the-woods-2-1/details",
        rankImg: false, 
        trailer: "https://www.youtube.com/watch?v=Wj9O-wbV7fE",
        stream: ""
      },
      {
        name: "Wave Land 2026",
        date: "11/6/26 - 11/8/26",
        location: "Preston, VIC, Australia",
        description: "PLEASE be respectful of the venue as we want to be able to host tournaments again so please show respect to both the staff as well as the public.",
        imageUrl: "https://images.start.gg/images/tournament/905005/image-b92310b9b0599b4067ec868f195266c6.jpg",
        link: "https://www.start.gg/tournament/wave-land-2026/details",
        rankImg: false, 
        trailer: "",
        stream: ""
      },
      {
        name: "Tussle Thru Time",
        date: "11/7/26 - 11/8/26",
        location: "Normal, Illinois, USA",
        description: "The Tussle Series Returns, now with TWO DAYS! Singles, Doubles, and more... From the teams at Plus Side, BloNo Smash and CherryNASB, the next installment in the Tussle Series is here...",
        imageUrl: "https://images.start.gg/images/tournament/900443/image-ec0bb81bd43806b5d548de3a8e25365b.png",
        link: "https://www.start.gg/tournament/tussle-thru-time/details",
        rankImg: true, 
        trailer: "https://fixupx.com/PPlusSide/status/2072465697934905435",
        stream: "https://twitch.tv/pplusside"
      },
      {
        name: "One More Game II: Run it Back",
        date: "11/21/26 - 11/22/26",
        location: "Seattle, Washington, USA",
        description: "ONE MORE GAME IS BACK",
        imageUrl: "https://images.start.gg/images/tournament/891540/image-7c60d7daf97a01a0033384b0c0b5b556.png",
        link: "https://www.start.gg/tournament/one-more-game-ii-run-it-back/details",
        rankImg: true, 
        trailer: "https://www.youtube.com/watch?v=1SJVYnyYT5A",
        stream: "https://twitch.tv/pplusside"
      },
    ];


    /* game 5 + Unc Frozen's template
    
      {
        name: "Game 5 In The D #8",
        date: "3/22/25",
        location: "Detroit, MI, USA",
        description: "We welcome all valiant competitors to our local P+ scene's return-to-form! Featuring a professional stream, custom tournament badges, your favorite players, and much, much more, this will be an event you won't want to miss!",
        imageUrl: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F753458%2Fimage-682f23c7c6853c9f14a932032d05ead0-optimized.jpg&ehk=A8Q7W63tKoq8g098URhncVeF0MzGbkVlA7hknPHAYZ0%3D&w=280&h=280&r=0",
        link: "https://www.start.gg/tournament/game-5-in-the-d-8-yuko-s-bday-edition/details",
        rankImg: false, 
        trailer: "",
        stream: ""
      }, */ 
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
