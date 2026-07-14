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
        name: "Pico Plus #20",
        date: "6/27/26",
        location: "Pico Rivera, California, USA",
        description: "SoCal P+ is back! Introducing Pico Plus, a brand new Project+ local in the heart of Pico Rivera, CA",
        imageUrl: "https://images.start.gg/images/tournament/916015/image-fa38eded5089a4ae847fb9130a617c1c.png",
        link: "https://www.start.gg/tournament/pico-plus-20/details",
        rankImg: false, 
        trailer: "",
        stream: ""
      },
      {
        name: "Plus House 5",
        date: "6/27/26",
        location: "Springfield, Missouri, USA",
        description: "18+ event! Alcohol and weed may be present. Ask a 417 melee player for address! (or me if you don’t know any lol). Do not share address anywhere public, in servers, or in groupchats. 1 on 1 DMs or verbally in private only. Respect the venue, this is a house where people live",
        imageUrl: "https://images.start.gg/images/tournament/915546/image-8d8c525896bcea9df818bf5d7b57842d.png",
        link: "https://www.start.gg/tournament/plus-house-5/details",
        rankImg: false, 
        trailer: "",
        stream: ""
      },
      {
        name: "Gecko Cavern 21",
        date: "6/27/26",
        location: "Burwood, New South Wales, Australia",
        description: "Gecko Cavern 21 is making it chill! Hosted in the heart of Burwood at Club Burwood's top floor venue, Gecko Cavern is the tournament series for Project Plus in Sydney! We also feature other games such as Melee, Rivals of Aether, and more! ",
        imageUrl: "https://images.start.gg/images/tournament/921633/image-6baa715c75173114634a753dd468706f.png",
        link: "https://www.start.gg/tournament/gecko-cavern-21/details",
        rankImg: false, 
        trailer: "",
        stream: ""
      },
      {
        name: "Plus World",
        date: "6/30/26",
        location: "Minneapolis, Minnesota, USA",
        description: "pm at new world. Doors at 6 Bracket at 7",
        imageUrl: "https://images.start.gg/images/tournament/923762/image-5aa27b5a6c46ac0c74eab6382b2944e8.png",
        link: "https://www.start.gg/tournament/plus-world/details",
        rankImg: false, 
        trailer: "",
        stream: ""
      },
      {
        name: "Bark in the Park",
        date: "7/5/26",
        location: "Lambertville, New Jersey, USA",
        description: "All ages are welcome to attend! There is no alcohol allowed in the park! Lunch, snacks, and water will provided to all attendees!",
        imageUrl: "https://images.start.gg/images/tournament/919629/image-f8badf48461ea380c0298f168e8695ea.png",
        link: "https://www.start.gg/tournament/bark-in-the-park/details",
        rankImg: false, 
        trailer: "",
        stream: ""
      }, 
      {
        name: "Second Wind 2026",
        date: "7/10/26 - 7/12/26",
        location: "Pipitea, Wellington, New Zealand",
        description: "The Best Gaming NZ Has to Offer! Second Wind returns for 2026 from Friday 10th to Sunday 12th of July. A huge range of fighting games all held in the heart of Wellington NZ for a weekend you'll never forget!",
        imageUrl: "https://images.start.gg/images/tournament/887941/image-10a83b8764db886fe5fd3f0c7be1de60.png",
        link: "https://www.start.gg/tournament/second-wind-2026/details",
        rankImg: false, 
        trailer: "",
        stream: "https://twitch.tv/pplusside"
      },      
      {
        name: "KREWE 2",
        date: "7/11/26",
        location: "Mobile, Alabama, USA",
        description: "Welcome to KREWE: A Melee Mardi Gras Ball! Who says Mardi Gras can't happen in July??",
        imageUrl: "https://images.start.gg/images/tournament/882658/image-56a1f3782f7809b3c5045175d138d31d.png",
        link: "https://www.start.gg/tournament/krewe-2/details",
        rankImg: true, 
        trailer: "",
        stream: ""
      },
      {
        name: "Evergreen 2026",
        date: "7/11/26",
        location: "Ridgewood, New Jersey, USA",
        description: "Evergreen 2026. A competitor pass for the other event on the same day is required",
        imageUrl: "https://images.start.gg/images/tournament/895362/image-478eeccd61f890c6edd38a4ca4562b8f.png",
        link: "https://www.start.gg/tournament/evergreen-2026/details",
        rankImg: true, 
        trailer: "",
        stream: ""
      },
      {
        name: "Melee Prom",
        date: "7/18/26",
        location: "Coralville, Iowa, USA",
        description: "Welcome to Melee Prom, a prom themed Melee and 'Brawl' Doubles tournament! Find a partner, dress up, and join us at the Hyatt Regency Coralville for a marvelous night of doubles, dancing, drinking, and more! ",
        imageUrl: "https://images.start.gg/images/tournament/823912/image-eff5d227a14f2168da8a7d217aa7e7ac.png",
        link: "https://www.start.gg/tournament/melee-prom-rise/details",
        rankImg: false, 
        trailer: "",
        stream: ""
      },
      {
        name: "RPM 100",
        date: "7/21/26",
        location: "Chicago, Illinois, USA",
        description: "RPM is a Project+ & Melee tournament held at Replay Lincoln Park, a barcade, on Tuesdays. You must be 21+ to attend RPM.",
        imageUrl: "https://images.start.gg/images/tournament/910910/image-70aa0dc4bc3a0814da6edb4c1dc33071.png",
        link: "https://www.start.gg/tournament/rpm-100/details",
        rankImg: true, 
        trailer: "",
        stream: ""
      },
      {
        name: "Game 5 In The Arena!",
        date: "7/25/26",
        location: "Detroit, Michigan, USA",
        description: " Introducing Game 5 In The Arena, A Game 5 Project+ Event Focused On Fun, Fitness, And Competition. We welcome all valiant competitors to the newest event in The Game 5 Project+ Tournament Series! Featuring a Bench Press competition, roller skating, and a bar open during Top 8. Alongside The Game 5 Project+ staples like custom tournament badges, a professional stream, your favorite players, and much, much more, this will be an event you won't want to miss! ",
        imageUrl: "https://images.start.gg/images/tournament/907913/image-cfb3aa1f2ec4c493e40a7d7d657da1a3.png",
        link: "https://www.start.gg/tournament/game-5-in-the-arena/details",
        rankImg: false, 
        trailer: "",
        stream: ""
      },
      {
        name: "Get Out of My Venue 2026",
        date: "7/31/26 - 8/2/26",
        location: "Mississauga, Ontario, Canada",
        description: "TO FEE $5 - Bring a setup? REFUNDED! Help run bracket? REFUNDED! Recording setup? REFUNDED! Let me (Eggnogdog) know if you're able to provide any of these in discord before the event. Both Top 8s will be on Sunday. Scheduling depends on the brackets the players are in and will be discussed.",
        imageUrl: "https://images.start.gg/images/tournament/898275/image-f08e456c5c2d48ccf1f29f529dc67bfd.png",
        link: "https://www.start.gg/tournament/get-out-of-my-venue-2026/details",
        rankImg: false, 
        trailer: "",
        stream: ""
      },
      {
        name: "Main Event - 3",
        date: "8/2/26",
        location: "Birmingham, United Kingdom, Europe",
        description: "Main Event is back!",
        imageUrl: "https://images.start.gg/images/tournament/919808/image-913f14e6d536f5fecd7f090a6f46b906.jpg",
        link: "https://www.start.gg/tournament/main-event-3/details",
        rankImg: false, 
        trailer: "",
        stream: "https://www.twitch.tv/phoenixsmash"
      },
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
        name: "Cabin Fever",
        date: "10/9/26 - 10/12/26",
        location: "Elbert, Colorado, USA",
        description: "Cabin Fever is a 3 day, Melee and 'Brawl' tournament hosted at the JCC Ranch Camp in Elbert, Colorado, 75 minutes from downtown Denver and the Denver International Airport.",
        imageUrl: "../images/upcoming events/CabinFever.png",
        link: "https://parry.gg/cabinfever",
        rankImg: false, 
        trailer: "",
        stream: ""
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
