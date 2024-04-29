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

  // Create the h1 element for event name
  const eventNameLink = document.createElement('a');
  eventNameLink.href = eventData.link;
  eventNameLink.target = '_blank';
  eventNameLink.textContent = eventData.name;
  const eventName = document.createElement('h1');
  eventName.style.flex = '100';
  eventName.classList.add('article-head');
  eventName.appendChild(eventNameLink);

  // Check if rankImg should be visible
  if (eventData.rankImg) {
      const rankImg = document.createElement('img');
      rankImg.classList.add('pm-rank');
      rankImg.src = "https://github.com/pkzstar/plus-side/blob/main/images/pmrank.png?raw=true";
      rankImg.alt = '';
      eventDetailsDiv.appendChild(rankImg); // Append the rankImg to the eventName (div) element
  }

  const eventDate = document.createElement('p');
  eventDate.classList.add('article-date');
  eventDate.style.display = 'block';
  eventDate.textContent = eventData.date;
  eventName.appendChild(eventDate);
  eventDetailsDiv.appendChild(eventName);

  // Create the div for event location
  const eventLocationDiv = document.createElement('div');
  eventLocationDiv.classList.add('article-head');
  eventLocationDiv.style.flex = 'auto';
  const locationLabel = document.createElement('b');
  locationLabel.classList.add('article-date');
  locationLabel.style.display = 'inline-flex';
  locationLabel.textContent = 'Location :' + '\u00A0';
  eventLocationDiv.appendChild(locationLabel);
  const location = document.createElement('b');
  location.classList.add('article-date');
  location.style.display = 'inline-flex';
  location.textContent = eventData.location;
  eventLocationDiv.appendChild(location);
  eventDetailsDiv.appendChild(eventLocationDiv);

  // Create paragraphs for event description
  const eventDescription = document.createElement('p');
  eventDescription.classList.add('events-text');
  eventDescription.textContent = eventData.description;
  eventDetailsDiv.appendChild(eventDescription);

  // Create the start.gg link
  const startGgLink = document.createElement('a');
  startGgLink.classList.add('start-gg');
  startGgLink.href = eventData.link;
  startGgLink.target = '_blank';
  startGgLink.textContent = 'start.gg';
  eventDetailsDiv.appendChild(startGgLink);

  // Append the event details div to the main li element
  eventLi.appendChild(eventDetailsDiv);

  return eventLi;
}

// Sample event data (replace this with actual event data)
const eventsData = [

    {
      name: "Rainbow Rodeo",
      date: "5/4/24",
      location: "San Antonio, TX, USA",
      description: "Welcome to the fourth Best in Texas 2024 League event! This event features three different tiers of brackets after pools, so each tier of player will have a chance to compete against other players around their skill level. That means there's a trophy for the winner of each bracket!",
      imageUrl: "https://github.com/pkzstar/plus-side/blob/main/images/upcoming%20events/rainbow.png?raw=true",
      link: "https://www.start.gg/tournament/rainbow-rodeo-a-best-in-texas-league-event/details",
      rankImg: false
  },
    {
      name: "Creed III",
      date: "5/11/24",
      location: "Philadelphia, PA, USA",
      imageUrl: "https://github.com/pkzstar/plus-side/blob/main/images/upcoming%20events/creed.png?raw=true",
      link: "https://www.start.gg/tournament/creed-iii/details",
      rankImg: true

    }, 
    { 
        name: "Ghost Town 2",
        date: "5/11/24",
        location: "Portland, OR, USA",
        description: "ft. Zamu, Spark, Fiction, Stiv, Pbag Portland's fighting game community will be renting out a 500 person capacity event room inside of the Lloyd Center in the middle of NE Portland. Spectator passes will be $5 at the door. No refunds after 4/11/2024",
        imageUrl: "https://github.com/pkzstar/plus-side/blob/main/images/past-events/ghost-town.png?raw=true",
        link: "https://www.start.gg/tournament/ghost-town-2-call-of-the-lloyd-ft-zamu-spark/details",
        rankImg: false
      },
      {
        name: "Game 5 In The D #3",
        date: "5/18/24",
        location: "Detroit, MI, USA",
        description: "We welcome all valiant competitors to our local P+ scene's return-to-form! Featuring a professional stream, custom tournament badges, your favorite players, and much, much more, this will be an event you won't want to miss!",
        imageUrl: "https://github.com/pkzstar/plus-side/blob/main/images/past-events/game5In.png?raw=true",
        link: "https://www.start.gg/tournament/game-5-in-the-d-3-1/details",
        rankImg: false
      },
      {
        name: "Super TPS III",
        date: "5/24/24",
        location: "Romeoville, IL, USA",
        description: "The Romeoville Project+ Tournament Returns! Taking place Combo Breaker weekend, ILPM and UGS are once again bringing you a premier P+ event, featuring our massive venue, top quality livestream production with MULTIPLE streams, and plenty of setups!",
        imageUrl: "https://github.com/pkzstar/plus-side/blob/main/images/upcoming%20events/supertps.png?raw=true",
        link: "https://www.start.gg/tournament/tripoint-smash-presents-super-tps-iii/details",
        rankImg: false
      },
      {
        name: "Smash Camp: New Lands 2024",
        date: "5/31/24 - 6/2/24",
        location: "Gresham, OR, USA",
        description: "Smash Camp returns to New Lands! Join us again in the Pacific Northwest this Spring 2024. 📅 Friday May 31 5PM - Monday June 3 9AM PT All main brackets take place on Saturday June 1 and Sunday June 2 🤝 Venue Fee: $220 Your venue fee gives you: Access to the entire camp 8 total meals (1x Friday, 3x Saturday, 3x Sunday, 1x Monday) A spot in a powered and heated cabin with bunk beds on Friday, Saturday, and Sunday night. 24hr friendlies 250 total attendee cap",
        imageUrl: "https://github.com/pkzstar/plus-side/blob/main/images/upcoming%20events/smashcamp.png?raw=true",
        link: "https://www.start.gg/tournament/smash-camp-new-lands-2024/details",
        rankImg: true
      },
      {
        name: "Invincible VIII",
        date: "6/1/24 - 6/2/24",
        location: "Madison, WI, USA",
        description: "10,000+ Square Feet Heart of downtown Madison, in walking distance of great restaurants & entertainment. Attached hotel, additional hotels close by Flying in Dane County Regional Airport (MSN) is located 20 minutes away from Union South by car Cheaper flights can be found to General Mitchell Airport (MKE) or O'Hare International Airport (ORD) If flying into O'Hare you can take the Van Galder bus",
        imageUrl: "https://github.com/pkzstar/plus-side/blob/main/images/upcoming%20events/invincible8.png?raw=true",
        link: "https://www.start.gg/tournament/invincible-viii/details",
        rankImg: true
      },
      {
        name: "Ripped Off",
        date: "6/14/24",
        location: "Marietta, GA, USA",
        description: "Ripped Off is here as the P+ shadow major for Tipped Off 15! Taking place across the campus in the KSU engineering and technology center on Friday June 14th, Ripped Off brings a new home to all the P+ players of the South East.",
        imageUrl: "https://github.com/pkzstar/plus-side/blob/main/images/upcoming%20events/ripped.png?raw=true",
        link: "https://www.start.gg/tournament/ripped-off-1/details",
        rankImg: true
      },
      {
        name: "The Black Market",
        date: "6/22/24",
        location: "Calgary, AB, Canada",
        description: "A celebration of Smash Bros. fan games!Featuring HDR Singles, HDR Doubles and P+ Singles as paid events, along with plenty of free side events such as HDR Amateur brackets, Smash Remix, Rivals of Aether and Sonic Adventure 2!",
        imageUrl: "https://github.com/pkzstar/plus-side/blob/main/images/upcoming%20events/blackmarket.png?raw=true",
        link: "https://www.start.gg/tournament/the-black-market/details",
        rankImg: false
      },
      {
        name: "Phantom 2024",
        date: "7/06/24 - 7/07/24",
        location: "Coburg, VIC, Australia",
        description: "Phantom returns after a year away, and this time in Melbourne.",
        imageUrl: "https://github.com/pkzstar/plus-side/blob/main/images/upcoming%20events/phantom.png?raw=true",
        link: "https://www.start.gg/tournament/phantom-2024/details",
        rankImg: false
      },
      {
        name: "Warehouse War 4",
        date: "7/26/24 - 7/27/24",
        location: "Nashville, TN, USA",
        description: "$10,000 in Pot Bonuses Premier Top Talent Huge venue complex with indoor and outdoor skate park as well as a full service coffee bar Venue located in the heart of Nashville within walking distance of the historic and famous Broadway Street Fun Friday side events and Saturday main events",
        imageUrl: "https://github.com/pkzstar/plus-side/blob/main/images/upcoming%20events/ww4.png?raw=true",
        link: "https://www.start.gg/tournament/warehouse-war-4/details",
        rankImg: true
      },
      {
        name: "Carnival Clash 2",
        date: "7/26/24 - 7/27/24",
        location: "Portland, OR, USA",
        description: "We're So Back! 🎡 August 3rd, 2024 Oregon's Ride-Filled Summer Regional Returns for another lap on the roller coaster! Why Oaks Amusement Park? Smash & Ride! Rides and attractions will be OPEN. Carnival Food on site! 🍔  Get 20% off UNLIMITED ALL DAY RIDE BRACELET!",
        imageUrl: "https://github.com/pkzstar/plus-side/blob/main/images/upcoming%20events/carnivalclash2.png?raw=true",
        link: "https://www.start.gg/tournament/carnival-clash-2/details",
        rankImg: false
      },
      {
        name: "Undertow 2024",
        date: "9/6/24 - 9/9/24",
        location: "Sandusky, OH, USA",
        description: "Thanks to the dedication of the Midwest Project+ and HDR communities, we're proud to continue the water park shadow major tradition in 2024!",
        imageUrl: "https://github.com/pkzstar/plus-side/blob/main/images/upcoming%20events/undertow2024.png?raw=true",
        link: "https://www.start.gg/tournament/undertow-2024/details",
        rankImg: false
      },
      {
        name: "Big Cheese 5",
        date: "10/11/24 - 10/13/24",
        location: "Woodville South SA, Australia",
        description: "The South Australian Smash & Fighting Game Community are proud to announce the return of Adelaide's local competitive gaming community Major - The Big Cheese ",
        imageUrl: "https://github.com/pkzstar/plus-side/blob/main/images/upcoming%20events/bigcheese5.png?raw=true",
        link: "https://www.start.gg/tournament/big-cheese-5-south-australia-smash-fgc-major/details",
        rankImg: false
      }
    ];



// Create the event components for each event
const eventComponents = eventsData.map(eventData => createEventComponent(eventData));

// Append the event components to the eventsList div
document.addEventListener('DOMContentLoaded', function () {
    const eventsList = document.createElement('ul');
    eventsList.classList.add('eventsList');
    eventComponents.forEach(eventComponent => eventsList.appendChild(eventComponent));
    
    const eventsListDiv = document.getElementById('eventsList');
    eventsListDiv.parentNode.insertBefore(eventsList, eventsListDiv);
});
