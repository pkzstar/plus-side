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
        name: "The Truce 2:¡No Pasarán!",
        date: "6/21/25 - 6/22/25",
        location: "Le Kremlin-Bicêtre, France",
        description: "Welcome to the second French Project M 3.6 major since the release of Project +: The Truce 2:¡No Pasarán! On the program: Project M, of course, Singles and Doubles, but also Melee, in case you haven't figured it out - we like illegal games here, hehe!",
        imageUrl: "https://images.start.gg/images/tournament/769345/image-3b234072f79221c181e6d499ef1f6daa.jpg",
        link: "https://www.start.gg/tournament/the-truce-2-no-pasar-n/details",
        rankImg: false, 
        trailer: "",
        stream: ""
      },
      {
        name: "Trading Stocks #15: Summer Tour",
        date: "6/21/25",
        location: "Greer, SC, USA",
        description: "Trading Stocks. A Melee and P+ Tournament",
        imageUrl: "https://images.start.gg/images/tournament/789151/image-c190cbe3ee6d9671442b6052d71c0803.png",
        link: "https://www.start.gg/tournament/trading-stocks-15-summer-tour/details",
        rankImg: false, 
        trailer: "",
        stream: ""
      },
      {
        name: "Unc Frozen's Icebox 5: Melee Edition",
        date: "6/21/25",
        location: "Plano, TX, USA",
        description: "Welcome to the fifth entry in the Icebox tournament series, special Melee edition!",
        imageUrl: "https://images.start.gg/images/tournament/794197/image-2363f4f700d4126a4b5a105a6d4ab208.jpg",
        link: "https://www.start.gg/tournament/unc-frozen-s-icebox-5-melee-edition/details",
        rankImg: true, 
        trailer: "",
        stream: ""
      },
      {
        name: "House of Nimbus 3",
        date: "6/21/25",
        location: "Citrus Heights, CA, USA",
        description: "Welcome to the third iteration of House of Nimbus, a (hopefully) monthly series that starts something up again in NorCal.",
        imageUrl: "https://images.start.gg/images/tournament/797254/image-269f8df508ef2e1df0862bef405f16fc.jpg",
        link: "https://www.start.gg/tournament/house-of-nimbus-3/details",
        rankImg: false, 
        trailer: "",
        stream: ""
      },
      {
        name: "Mass Madness 51",
        date: "6/21/25",
        location: "Waltham, MA, USA",
        description: "Mass Madness returns for another edition! Masks are recommended to be worn while in the venue.",
        imageUrl: "https://images.start.gg/images/tournament/789104/image-4e2ac504b6084d500c64c434c9776892.png",
        link: "https://www.start.gg/tournament/mass-madness-51-the-fine-art-of-interaction/details",
        rankImg: false, 
        trailer: "",
        stream: ""
      },
      {
        name: "Rat Kings",
        date: "6/28/25",
        location: "Goodlettsville, TN, USA",
        description: "doin a thing @ tnlg. Melee/P+. it's at the mall",
        imageUrl: "https://images.start.gg/images/tournament/784324/image-935d6151259b9029a58dae06ac476c49.png",
        link: "https://www.start.gg/tournament/rat-kings/details",
        rankImg: true, 
        trailer: "",
        stream: ""
      },
      {
        name: "Scrapyard 2025: P+ & HDR",
        date: "6/28/25",
        location: "Raleigh, NC, USA",
        description: "Scrapyard 2025 - Project+ & HewDraw Remix. Saturday June 28th - Talley Student Union Room 3285",
        imageUrl: "https://images.start.gg/images/tournament/790722/image-8d41b2e5b384a247217d427b2a940b39.png",
        link: "https://www.start.gg/tournament/scrapyard-2025-p-hdr/details",
        rankImg: false, 
        trailer: "",
        stream: ""
      },
      {
        name: "The Good Ol' Days",
        date: "6/28/25",
        location: "Ionia, MI, USA",
        description: "Located on Ionia’s historic Main Street, Dirtboy presents… The Good Ol’ Days, a west Michigan event bringing back old school vibes at a local card shop - CCGPrime. Come on out to my stomping grounds and get your practice in before our major Game 5 in the upcoming weeks.",
        imageUrl: "https://images.start.gg/images/tournament/798041/image-84ddb6856b036519959d9a664f9ceef8.jpg",
        link: "https://www.start.gg/tournament/the-good-ol-days/details",
        rankImg: false, 
        trailer: "",
        stream: ""
      },
      {
        name: "Pope's Sunday Mass: Conclave",
        date: "6/29/25",
        location: "Carlton, VIC, Australia",
        description: "It is with great pleasure that I am announcing the highly anticipated sequel... Pope's Sunday Mass: Conclave! I am so happy to have the chance to invite all of you to The Clyde Hotel in Carlton to enjoy their Lounge (with attached bar) on Sunday 29th of June, 2025",
        imageUrl: "https://images.start.gg/images/tournament/784333/image-dea410335ee8f381ae4e74b977bcddf5.png",
        link: "https://www.start.gg/tournament/pope-s-sunday-mass-conclave/details",
        rankImg: false, 
        trailer: "",
        stream: ""
      },
      {
        name: "Get Out Of My Venue: Certificate of Disapproval",
        date: "7/4/25 - 7/6/25",
        location: "Toronto, ON, Canada",
        description: "Top 8 for both games will be on SUNDAY time will adjust depending on competitors other brackets",
        imageUrl: "https://images.start.gg/images/tournament/791339/image-b07eff3cbe0f9470ff1a8dbcd88eae32.png",
        link: "https://www.start.gg/tournament/get-out-of-my-venue-certificate-of-disapproval-1/details",
        rankImg: true, 
        trailer: "",
        stream: ""
      },
      {
        name: "Star Spangled Shine Spike",
        date: "7/5/25",
        location: "Jackson, MS, USA",
        description: "We, The People, do hereby declare July 5th, 2025 to be the day of the first Star Spangled Shine Spike",
        imageUrl: "https://images.start.gg/images/tournament/794977/image-60e10ad56569de5337bfe807879178fa.png",
        link: "https://www.start.gg/tournament/star-spangled-shine-spike/details",
        rankImg: false, 
        trailer: "",
        stream: ""
      },
      {
        name: "Second Wind 2025",
        date: "7/11/25 - 7/13/25",
        location: "Te Aro, Wellington, New Zealand",
        description: "Wellington's Favourite Gaming Event. Second Wind returns for 2025 running from Friday 11th to Sunday 13th, a huge range of fighting games all held in one tight venue for a unique experience!",
        imageUrl: "https://images.start.gg/images/tournament/773119/image-97ff7dec6fd4919e6095a828419d0fd9.png",
        link: "https://www.start.gg/tournament/second-wind-2025/details",
        rankImg: false, 
        trailer: "",
        stream: ""
      },
      {
        name: "Game 5 In The D #10: Take Me Out To The Ball Game!",
        date: "7/12/25",
        location: "Detroit, MI, USA",
        description: "Introducing Game 5 In The D, East Michigan's Premier P+ Bi-Monthly Located In Detroit! We welcome all valiant competitors to our local P+ scene's return-to-form! Featuring a professional stream, custom tournament badges, your favorite players, and much, much more, this will be an event you won't want to miss!",
        imageUrl: "https://images.start.gg/images/tournament/797472/image-6120b0c3f5bd518470ae9f3d3a1f6957.jpg",
        link: "https://www.start.gg/tournament/game-5-in-the-d-10-take-me-out-to/details",
        rankImg: true, 
        trailer: "",
        stream: "https://www.twitch.tv/game5projectplus"
      },
      {
        name: "Platform Paradise",
        date: "7/12/25",
        location: "Durham, NC, USA",
        description: "Oak City Esports is introducing a new tournament series aimed at highlighting and promoting platform fighters at Xepher Arcade!",
        imageUrl: "https://images.start.gg/images/tournament/797484/image-4180a11dbf066a5132c9a87b992dd6a1.png",
        link: "https://www.start.gg/tournament/platform-paradise/details",
        rankImg: false, 
        trailer: "",
        stream: ""
      },
      {
        name: "Phantom 2025",
        date: "7/18/25 - 7/20/25",
        location: "Coburg, VIC, Australia",
        description: "Welcome back. Phantom continues for another year, in Melbourne.",
        imageUrl: "https://images.start.gg/images/tournament/762524/image-bd71887f81c5ae41ec8ad09ad0c4cda5.png",
        link: "https://www.start.gg/tournament/phantom-2025/details",
        rankImg: false, 
        trailer: "",
        stream: ""
      },
      {
        name: "Condo of Blood 5: The Summer Saga",
        date: "7/19/25",
        location: "Mississauga, ON, Canada",
        description: "Condo of Blood is an Ontario Project Plus and Rivals of Aether 2 regional hosted directly beside the Port Credit GO station. This accessible recurring tournament series will feature top Ontario talent and is designed fully around our shared love of these platform fighters.",
        imageUrl: "https://images.start.gg/images/tournament/792555/image-a2e915e0817da6f4b65571630446c010.png",
        link: "https://www.start.gg/tournament/condo-of-blood-5-the-summer-saga/details",
        rankImg: false, 
        trailer: "",
        stream: ""
      },
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
        rankImg: false, 
        trailer: "",
        stream: "https://www.twitch.tv/coloradoprojectplus"
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
