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
        name: "Gecko Cavern 10",
        date: "5/10/25",
        location: "Burwood, NSW, Australia",
        description: "Gecko Cavern 10 is Here! Hosted at Club Burwood along Burwood Road on the top floor of the venue, Gecko Cavern is the tournament series for Project Plus in Sydney! We also feature other games such as Melee, Rivals, and more! ",
        imageUrl: "https://images.start.gg/images/tournament/784340/image-dbadece0f8a6841bbb93fe5c2f7d569f.png",
        link: "https://www.start.gg/tournament/gecko-cavern-10/details",
        rankImg: false, 
        trailer: "",
        stream: ""
      },
      {
        name: "Trading Stocks #14: Summer Tour",
        date: "5/10/25",
        location: "Greer, SC, USA",
        description: "A Melee and P+ Tournament. Please no outside food or drinks unless bought locally from Downtown Greer! Drinks (including alcoholic drinks) and snacks are sold at the venue. Players may not enter two events that start at the same time.",
        imageUrl: "https://images.start.gg/images/tournament/786320/image-28defc849a03e7c455154e7c517441a1.png",
        link: "https://www.start.gg/tournament/trading-stocks-14-summer-tour/details",
        rankImg: false, 
        trailer: "",
        stream: ""
      },
      {
        name: "swaggerbeebumbler spring-fling bash #shoutoutmoms",
        date: "5/11/25",
        location: "Cary, NC, USA",
        description: "Come Celebrate Spring! At Lochmere Clubhouse in Cary. This is a community event. This tournament is Pre- Registration only. You must Pre-register before May 10th at 11:59pm. If you do not pre-reg I cannot even let you in the clubhouse due to rules from Lochmere.",
        imageUrl: "https://images.start.gg/images/tournament/774539/image-cdaad655ab58537f66fb9d518480b359.png",
        link: "https://www.start.gg/tournament/swaggerbeebumbler-spring-fling-bash-shoutoutmoms/details",
        rankImg: false, 
        trailer: "",
        stream: ""
      },
      {
        name: "Untitled Colorado Project Plus Tournament",
        date: "5/16/25",
        location: "Lone Tree, CO, USA",
        description: "Welcome to the first Untitled Colorado Project Plus Tournament. This one day event takes place at the wonderful Lone Tree Hub",
        imageUrl: "https://images.start.gg/images/tournament/757771/image-8310886c0466b603a684f568a135a115.png?ehk=20Doph1xkV9g6apsC%2BYIyLvlSIDaAR1CWumo4HsGOOI%3D&ehkOptimized=9HUJfmE%2FUw%2BFO4OKnGpRkl1ElZEx5E0ocEAPk8FV3Fk%3D",
        link: "https://www.start.gg/tournament/untitled-colorado-project-plus-tournament/details",
        rankImg: false, 
        trailer: "",
        stream: "https://www.twitch.tv/coloradoprojectplus"
      },
      {
        name: "Project D",
        date: "5/17/25",
        location: "Birmingham, UK",
        description: "It's time for the biggest P+ tournament in the UK since Not Fête back in 2023! This is an 18+ event",
        imageUrl: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F734216%2Fimage-ee3ee05c35dba007a95866d0be0d48da-optimized.png&ehk=yWRBbth3w%2BRzWsSxGEGuUudXJ15ui28vMkBOBEMevio%3D&w=280&h=280&r=0",
        link: "https://www.start.gg/tournament/project-d/details",
        rankImg: false, 
        trailer: "",
        stream: "https://www.twitch.tv/gouxoxo"
      },
      {
        name: "Somnio 7",
        date: "5/17/25 - 5/18/25",
        location: "Eindhoven, Netherlands",
        description: "SOMNIO VII - May 17th & 18th, 2025. FROM THE PEOPLE THAT BROUGHT YOU DREAMHACK ROTTERDAM 2019 & 2022, SECTOR Z, NL ARCADIAN AND MORE!",
        imageUrl: "https://images.start.gg/images/tournament/751000/image-ed26f48afad2877aba57f1490bb6f714.png?ehk=6y%2FyE%2BucwtxN5FHMui%2FrMuvo4VgUICio6mgUEdCk4eE%3D&ehkOptimized=0sZkKNeR5pDkTDdlWAu53aBCDIMVsLokiPOWWWvzLJI%3D",
        link: "https://www.start.gg/tournament/somnio-7/details",
        rankImg: false, 
        trailer: "",
        stream: "https://www.youtube.com/@SmashWageningen/streams"
      },
      {
        name: "Super TPS V",
        date: "5/23/25",
        location: "Romeoville, IL, USA",
        description: "The Romeoville Project+ Tournament Returns! Taking place Combo Breaker weekend, ILPM and UGS are once again bringing you a premier P+ event, now with the help of Plus Side! featuring our massive venue, top quality livestream production with MULTIPLE streams, and plenty of setups!",
        imageUrl: "https://images.start.gg/images/tournament/759108/image-a789036f8d8bd8b3f9d3d4f64691be2f.png",
        link: "https://www.start.gg/tournament/super-tps-v/details",
        rankImg: false, 
        trailer: "",
        stream: "https://twitch.tv/pplusside"
      },
      {
        name: "Who's on Ledge? 12",
        date: "5/24/25",
        location: "Des Moines, IA, USA",
        description: "DMGC presents Who's on Ledge? Our monthly tournament series featuring Super Smash Bros. Melee, Ultimate, Project+, and Rivals of Aether II at RezBlue Arena!",
        imageUrl: "https://images.start.gg/images/tournament/786126/image-a1d57cc11cc587883ff617c3d5450671.png",
        link: "https://www.start.gg/tournament/who-s-on-ledge-12/details",
        rankImg: false, 
        trailer: "",
        stream: ""
      },
      {
        name: "Game 5 in the D #9",
        date: "5/24/25",
        location: "Detroit, MI, USA",
        description: "Introducing Game 5 In The D, East Michigan's Premier P+ Bi-Monthly Located In Detroit! We welcome all valiant competitors to our local P+ scene's return-to-form! Featuring a professional stream, custom tournament badges, your favorite players, and much, much more, this will be an event you won't want to miss!",
        imageUrl: "https://images.start.gg/images/tournament/786534/image-5587e14194f46331fd2a5c0919905cac.jpg",
        link: "https://www.start.gg/tournament/game-5-in-the-d-9/details",
        rankImg: false, 
        trailer: "",
        stream: ""
      },
      {
        name: "Fight at the Museum",
        date: "5/31/25",
        location: "Portland, OR, USA",
        description: "Super Smash at a Museum 🚀 May 31st, 2025! Oregon Melee proudly presents: Fight At The Museum!",
        imageUrl: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F742717%2Fimage-2444e0547ec209b104c997fb05a82292-optimized.png&ehk=f8KGbI3l8GNjIe3d9S5hzXS2esnzIeI4n%2BLesCb%2F9p0%3D&w=280&h=280&r=0",
        link: "https://www.start.gg/tournament/fight-at-the-museum/details",
        rankImg: true, 
        trailer: "",
        stream: "https://twitch.tv/projectmnexus"
      },
      {
        name: "Evergreen 2025",
        date: "6/14/25",
        location: "Ridgewood, NJ, USA",
        description: "A competitor pass for the other event on the same day is required. If you are only entering games on this page (Side Event games), a competitor pass is still required. Spectator passes will not allow you to compete in Evergreen events",
        imageUrl: "https://images.start.gg/images/tournament/750366/image-eafe71c5eb426044109a764ff4e509e6.png?ehk=9K7Fu4sI1p1c%2B46PJC1aUGNOkQMLidsxRtyFnmzPcDo%3D&ehkOptimized=RokVDvc%2FvsAXu1Ql9wytiQWCuVBQ7%2BqG018F1DGCfvQ%3D",
        link: "https://www.start.gg/tournament/evergreen-2025/details",
        rankImg: true, 
        trailer: "",
        stream: ""
      },
      {
        name: "King's Ransom",
        date: "6/14/25",
        location: "Kingsport, TN, USA",
        description: "64 entrant cap. Doors open at 12, Melee at 1, P+ at 2. All bo3 till top 8. $50 pot bonus for both Melee and P+",
        imageUrl: "https://images.start.gg/images/tournament/769414/image-e69ffb0c62ba05fd003d5d5c00e88218.png",
        link: "https://www.start.gg/tournament/king-s-ransom/details",
        rankImg: false, 
        trailer: "",
        stream: ""
      },
      {
        name: "Schlocal Arcadian 2025",
        date: "6/14/25",
        location: "Brunswick, VIC, Australia",
        description: "This is an Arcadian event, meaning Power Ranked Melee players are not allowed to enter!",
        imageUrl: "https://images.start.gg/images/tournament/781625/image-28dde452f2dbbaf547c84bd62a25e8bf.png",
        link: "https://www.start.gg/tournament/schlocal-arcadian-2025/details",
        rankImg: false, 
        trailer: "",
        stream: ""
      },
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
        name: "Rat Kings",
        date: "6/28/25",
        location: "Goodlettsville, TN, USA",
        description: "doin a thing @ tnlg. Melee/P+. it's at the mall",
        imageUrl: "https://images.start.gg/images/tournament/784324/image-935d6151259b9029a58dae06ac476c49.png",
        link: "https://www.start.gg/tournament/rat-kings/details",
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
        name: "Second Wind 2025",
        date: "7/11/25 - 7/13/25",
        location: "Te Aro, Wellington, New Zealand",
        description: "Wellington's Favourite Gaming Event. Second Wind returns for 2025 running from Friday 11th to Sunday 13th, a huge range of fighting games all held in one tight venue for a unique experience!",
        imageUrl: "https://images.start.gg/images/tournament/773119/image-9058a675285a63cee2e7853e567464bc.png",
        link: "https://www.start.gg/tournament/second-wind-2025/details",
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
        name: "Undertow 2025",
        date: "9/7/25",
        location: "Sandusky, Ohio, United States",
        description: "Undertow returns to the Sandusky Best Western in 2025. We may be displaced, but we'll never go hollow. This will be a one-day event with a 96 entrant cap.",
        imageUrl: "https://images.start.gg/images/tournament/775856/image-07898797f4d6bbc657f7349d0c14201d.png",
        link: "https://www.start.gg/tournament/undertow-2025/details",
        rankImg: true, 
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
