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
        name: "Wrath 2025",
        date: "2/1/25 - 2/2/25",
        location: "Baton Rouge, LA, USA",
        description: "You will need a pass for the other event occurring that day in the same venue in order to attend this event! Please message ultradill for clarification",
        imageUrl: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F733428%2Fimage-186746c11909b2a0b5c3fc0b2010014e-optimized.png&ehk=KP599AJILaMiQGI97%2Fljy8k4%2BEkXb3LyjQav3TVjH3s%3D&w=280&h=280&r=0",
        link: "https://www.start.gg/tournament/wrath-2025/details",
        rankImg: true, 
        trailer: "",
        stream: ""
      },
      {
        name: "Unc Frozen's Icebox 1",
        date: "2/8/25",
        location: "Plano, TX, USA",
        description: "Announcing the brand new monthly tournament series Icebox, presented by your friendly neighborhood Unc Frozen! Come hang out with us at FX Games and play! Also featuring several player bounties! Ask a TO for details.",
        imageUrl: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F744542%2Fimage-4ea708dcb4e53c99a762359bb323cbcb-optimized.jpg&ehk=hMjL84EyvgKtS9QTg1n7e3ldsuZWs8Az2D4RPeb4p1Q%3D&w=280&h=280&r=0",
        link: "https://www.start.gg/tournament/unc-frozen-s-icebox-1/details",
        rankImg: false, 
        trailer: "",
        stream: ""
      },
      {
        name: "Mass Madness 49",
        date: "2/8/25",
        location: "Waltham, MA, USA",
        description: "Mass Madness IS BACK after a 3-month break! Masks are recommended to be worn while in the venue. For this event, we'll be running Melee doubles and singles, along with Project+ singles. Every match both Melee and Project+ singles is best of 5.",
        imageUrl: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F742227%2Fimage-fe9a3c15d98a4b0d6d4b6735c938e250-optimized.png&ehk=9aDHEGWPs7LQslYPnbvbHzvdyAErzYs7GmSF4hp6UT0%3D&w=280&h=280&r=0",
        link: "https://www.start.gg/tournament/mass-madness-49-a-new-england-melee-and-project-event/details",
        rankImg: false, 
        trailer: "",
        stream: "https://www.youtube.com/@GameUndergroundStore/streams"
      },     
      {
        name: "Exodus 2025",
        date: "2/15/25",
        location: "San Jose, CA, USA",
        description: "NorCal PM returns with Exodus 2025! We're the Project M tournament across the street.",
        imageUrl: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F749811%2Fimage-c4c1170601043bc749596397e0ce48d4-optimized.png&ehk=3amV9R1wU9Gdp328M%2FmCzXfqfY%2FeutcFXYaHS%2BT%2BVXQ%3D&w=280&h=280&r=0",
        link: "https://www.start.gg/tournament/exodus-2025/details",
        rankImg: false, 
        trailer: "",
        stream: ""
      },
      {
        name: "Journey to the West",
        date: "2/21/25 - 2/23/25",
        location: "Bentley, WA, Australia",
        description: "Smash Majors make a triumphant return to Perth after a 5 year wait over at The Hub, Bentley Technology Park. I encourage old and new faces alike to make an effort to come as this will most likely be the last major run for Ultimate in Perth.",
        imageUrl: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F731623%2Fimage-120c39ca0b9e548595ff1c4f88a45860-optimized.jpg&ehk=lsIwpkupKikujRh8VEMGEvMyMCytWXbF%2BCAGiF3N4ZQ%3D&w=280&h=280&r=0",
        link: "https://www.start.gg/tournament/journey-to-the-west/details",
        rankImg: false, 
        trailer: "",
        stream: ""
      },
      {
        name: "Condo of Blood 3",
        date: "2/22/25",
        location: "Mississauga, ON, Canada",
        description: "Condo of Blood is an Ontario Project Plus and Rivals of Aether 2 regional hosted directly beside the Port Credit GO station. This accessible recurring tournament series will feature top Ontario talent and is designed fully around our shared love of these platform fighters.",
        imageUrl: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F743233%2Fimage-6bcba47e76de47e7d7fca4ef74828624-optimized.png&ehk=9Q00a1ghM%2B07wEiqLP9Oj6uhVKpvVIBiZ8a89NJ%2BMcY%3D&w=280&h=280&r=0",
        link: "https://www.start.gg/tournament/condo-of-blood-3/details",
        rankImg: false, 
        trailer: "",
        stream: ""
      },
      {
        name: "KREWE - Melee Mardi Gras Ball",
        date: "2/22/25",
        location: "Mobile, AL, USA",
        description: "Welcome to KREWE: A Melee Mardi Gras Ball! Join us February 22nd for a tournament unlike any you've seen before!",
        imageUrl: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F694915%2Fimage-4e2e751a32f9d8e2c9ed852592dff5c7-optimized.png&ehk=Sf%2FUMLvFp%2ByxB9yjxlljQV7vDCCXSm7q%2FykOBfT6aU8%3D&w=280&h=280&r=0",
        link: "https://www.start.gg/tournament/krewe-melee-mardi-gras-ball/details",
        rankImg: false, 
        trailer: "",
        stream: ""
      },
      {
        name: "Moonshine Monthly #2",
        date: "2/23/25",
        location: "Greenville, SC 29601, USA",
        description: "South Carolina's P+ ONLY Monthly Series. Venue $5: 32 singles cap (pls bring setups). Singles $5: 4 person RR pools",
        imageUrl: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F753025%2Fimage-d1d570002d763332029ed8cafa5d584a-optimized.png&ehk=8aMjwzJmP%2F0DXXICOPCB1u8gm8hs9O8Rv7Y7AbfGnRo%3D&w=280&h=280&r=0",
        link: "https://www.start.gg/tournament/moonshine-monthly-2/details",
        rankImg: false, 
        trailer: "",
        stream: "https://twitch.tv/kn19h7"
      },
      {
        name: "Winter is Crouching",
        date: "3/1/25 - 3/2/25",
        location: "Le Kremlin-Bicêtre, Paris, France",
        description: "Muahahaha! Are you ready for winter? Winter is crouching ❄️❄️❄️ On the program: Project+ of course, we love illegal games 😈, but also Melee and Rivals of Aether 2 hehe",
        imageUrl: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F687306%2Fimage-5618485cca829ee70b7125791593c3e2-optimized.png&ehk=qQc4jLdbvBzwuFG7iw%2BIaofHMDeQPOdtUyGDqI7HPDE%3D&w=280&h=280&r=0",
        link: "https://www.start.gg/tournament/winter-is-crouching/details",
        rankImg: false, 
        trailer: "",
        stream: ""
      },
      {
        name: "Tennessee P+ Summit 2025",
        date: "3/7/25 - 3/9/25",
        location: "Knoxville, TN, USA",
        description: "The Tennessee P+ Summit is back! 20 of the best P+ players from Tennessee will compete for fame and bragging rights in everyone's favorite smash mod.",
        imageUrl: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F714654%2Fimage-9fcdb8b8b1acc8a88280304e3b010b63-optimized.jpg&ehk=8mBzXSK23mbPNHjSmTQkpgvRRF9qYsJ5PfgQ4qo4BJw%3D&w=280&h=280&r=0",
        link: "https://www.start.gg/tournament/tennessee-p-summit-2025/details",
        rankImg: false, 
        trailer: "https://www.youtube.com/watch?v=qC1IEzQkPZ8",
        stream: ""
      },
      {
        name: "Take Flight 2025",
        date: "3/8/25",
        location: "Dayton, OH, USA",
        description: "Take Flight is Southwest Ohio’s new annual regional platform fighter tournament! This event is 21+!",
        imageUrl: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F745417%2Fimage-22e93b2763bc5ea28149c5b1943cc48c-optimized.jpg&ehk=QEWGcGNnjIx84ORNjbf%2BZdtBdueQemhfLhofbYKzTRM%3D&w=280&h=280&r=0",
        link: "https://www.start.gg/tournament/take-flight-2025/details",
        rankImg: false, 
        trailer: "",
        stream: ""
      },
      {
        name: "Northstar III",
        date: "3/8/25",
        location: "St Cloud, MN, USA",
        description: "Melee, Ultimate, Project +, Street Fighter 6, Rocket League, Tekken 8, Guilty Gear Strive, Rivals of Aether 2, Valorant",
        imageUrl: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F726126%2Fimage-f943b48b4354f5f0aaab13ec7ebcb5e8-optimized.png&ehk=IZXQ%2Fh9W6UxS9mmlIX9aSENB1OiCrxPSyf%2FiKMIvKqo%3D&w=280&h=280&r=0",
        link: "https://www.start.gg/tournament/northstar-iii-at-st-cloud-state/details",
        rankImg: false, 
        trailer: "https://www.youtube.com/watch?v=pJUsiCOC_mk",
        stream: ""
      },
      {
        name: "Kame House: The Dark Tournament",
        date: "3/15/25",
        location: "Atlanta, GA, USA",
        description: "Inspired by Yu Yu Hakusho's Dark Tournament arc we're excited to bring you a Project+ ONLY Kame House event. Singles Capped at 64 entrants with a very exciting waterfall format for singles, and a 3v3 crew battle tournament capped at 8 teams (Its a Dark Tournament themed event, how could we not do crews...)",
        imageUrl: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F740096%2Fimage-cb200c9d81bd09bf0a66d6994fe89bc5-optimized.png&ehk=0EWnOEIzKjh6VS8gO%2B7Tr4NtfojUQwjBahF%2BasiKOic%3D&w=280&h=280&r=0",
        link: "https://www.start.gg/tournament/kame-house-the-dark-tournament/details",
        rankImg: true, 
        trailer: "https://www.youtube.com/watch?v=GYqh0lz3vPs",
        stream: ""
      },  
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
      },  
      {
        name: "Smash of the Titans 10",
        date: "3/22/25",
        location: "Bloomington, IL, USA",
        description: "Welcome to Smash of the Titans 10! Illinois Wesleyan University is back with our semesterly Smash regional! The tournament will be held in the Young Main Lounge in the Memorial center on campus (there will be signage posted too).",
        imageUrl: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F733623%2Fimage-6a2f830b3ed2448c8cd4fdc5df2927dc-optimized.jpg&ehk=P6xRQjtL7NCBckUUb%2FvT03FR%2BA%2Bxwgf0XzQ8baE09kk%3D&w=280&h=280&r=0",
        link: "https://www.start.gg/tournament/smash-of-the-titans-10-1/details",
        rankImg: false, 
        trailer: "",
        stream: ""
      },  
      {
        name: "ETSU-Con 2025",
        date: "3/29/25",
        location: "Johnson City, TN, USA",
        description: "ETSU-Con is back! East Tennessee State University will welcome artists, vendors, voice actors, ETSU faculty & alumni, current & prospective students, and anyone interested in pop-culture, comics, anime, digital media, computer science, science fiction, fantasy, Japanese language & culture, digital & conventional art, theatre, storytelling, and more from around the region to the amazing, multi-genre convention at ETSU in beautiful Johnson City, TN known as ETSU-Con. To Enter Tournaments You Must Have An ETSU-Con Pass",
        imageUrl: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F748686%2Fimage-1d923a682a2d077b81710449795913f1-optimized.png&ehk=dABwyUsN%2BoM%2BswuB0v9Nx7OuT2AMwb5ZXRqHF1Jp8oQ%3D&w=280&h=280&r=0",
        link: "https://www.start.gg/tournament/etsu-con-2025-1/details",
        rankImg: false, 
        trailer: "",
        stream: ""
      },   
      {
        name: "Full Bloom 2025",
        date: "4/5/25 - 4/6/25",
        location: "Bloomington, IN, USA",
        description: "Full Bloom 2025 is a 2-day, super smash bros, Project+ and Rivals of Aether 2 tournament held at the Indiana Memorial Union in Bloomington, Indiana",
        imageUrl: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F715134%2Fimage-35f8b3298b2d53d5d028afc8f3d63422-optimized.png&ehk=QGeDTX8I9NdN%2FFIsuMr%2B4GVjU80B69p8KQOXMGqK0n8%3D&w=280&h=280&r=0",
        link: "https://www.start.gg/tournament/full-bloom-2025/details",
        rankImg: true, 
        trailer: "https://www.youtube.com/watch?v=oCO0FoZf6VU",
        stream: ""
      },
      {
        name: "Smash Camp 2025",
        date: "4/19/25 - 4/20/25",
        location: "Prescott, AZ, USA",
        description: "After two years away we're back at Friendly Pines Camp in Prescott, Arizona. Come experience on eof th emost unique venues the community has to offer.",
        imageUrl: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F745405%2Fimage-6327114b0866259802cb7cc27961a65e-optimized.png&ehk=ePMjyKUnayBCiQbvVO%2BLL54RPPXoPK6Xr6USxXDQcXc%3D&w=280&h=280&r=0",
        link: "https://www.start.gg/tournament/smash-camp-2025/details",
        rankImg: true, 
        trailer: "https://www.youtube.com/watch?v=ls81XhcCZXA",
        stream: ""
      },
      {
        name: "Outrivaled",
        date: "5/3/25",
        location: "Lisle, IL, USA",
        description: "A Rivals centric event! Singles and Doubles for Official and Amateur Bracket! Free to enter crew battle! P+ Singles and Doubles! Free to enter Pokemon TCG Pocket bracket! Food and drinks available at venue!",
        imageUrl: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F753093%2Fimage-9b2bf5f982e081df3b24026678ec7647-optimized.jpg&ehk=XXsx6z6UOd7LkTqWzFfC8v87P6TNOfPQzq6hE7hxd%2BU%3D&w=280&h=280&r=0",
        link: "https://www.start.gg/tournament/outrivaled-max-s-birthday-bash/details",
        rankImg: false, 
        trailer: "",
        stream: ""
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
