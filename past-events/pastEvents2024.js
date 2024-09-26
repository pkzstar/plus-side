function createPastEventElement(eventData) {
  // Create a container for all past events
  const eventList = document.createElement('ul');
  eventList.id = 'pastList';
  eventList.className = 'pastList';


  // Loop through each event data object and create elements for them
  eventData.forEach(event => {
    const eventListItem = document.createElement('li');
    eventListItem.classList.add('past-events');

    const eventDiv = document.createElement('div');
    eventDiv.style.flex = '0';

    const eventLink = document.createElement('a');
    eventLink.href = event.eventUrl;
    eventLink.target = '_blank';

    const eventImage = document.createElement('img');
    eventImage.classList.add('past-events-banners');
    eventImage.src = event.imageUrl;
    eventImage.alt = '';

    eventLink.appendChild(eventImage);
    eventDiv.appendChild(eventLink);

    if (!event.hideRankImage) {
      const rankImageDiv = document.createElement('div');
      const rankImage = document.createElement('img');
      rankImage.classList.add('pm-rank-centered');
      rankImage.id = "yourContainerElementId";
      rankImage.src = 'https://github.com/pkzstar/plus-side/blob/main/images/pmrank.png?raw=true';
      rankImage.alt = '';
      rankImageDiv.appendChild(rankImage);
      eventDiv.appendChild(rankImageDiv);
    } else {
      const rankImageDiv = document.createElement('div');
      const rankImage = document.createElement('img');
      rankImage.classList.add('pm-rank-centered-invis');
      rankImage.id = "yourContainerElementId";
      rankImage.src = 'https://github.com/pkzstar/plus-side/blob/main/images/pmrank.png?raw=true';
      rankImage.alt = '';
      rankImageDiv.appendChild(rankImage);
      eventDiv.appendChild(rankImageDiv);
    };

    const eventTitleLink = document.createElement('a');
    eventTitleLink.href = event.eventUrl;
    eventTitleLink.target = '_blank';
    eventTitleLink.textContent = event.eventTitle;

    const eventTitle = document.createElement('h1');
    eventTitle.classList.add('past-events-title');
    eventTitle.appendChild(eventTitleLink);
    eventDiv.appendChild(eventTitle);

    const dateParagraph = document.createElement('p');
    dateParagraph.classList.add('past-article-text');
    dateParagraph.textContent = 'Date : ' + event.date;
    eventDiv.appendChild(dateParagraph);

    const locationParagraph = document.createElement('p');
    locationParagraph.classList.add('past-article-text');
    locationParagraph.textContent = 'Location : ' + event.location;
    eventDiv.appendChild(locationParagraph);

    const entrantsParagraph = document.createElement('p');
    entrantsParagraph.classList.add('past-article-text');
    entrantsParagraph.textContent = 'Entrants : ' + event.entrants;
    eventDiv.appendChild(entrantsParagraph);

    const firstPlaceParagraph = document.createElement('p');
    firstPlaceParagraph.classList.add('top3');
    firstPlaceParagraph.textContent = '🥇: ' + event.first;
    eventDiv.appendChild(firstPlaceParagraph);

    const secondPlaceParagraph = document.createElement('p');
    secondPlaceParagraph.classList.add('top3');
    secondPlaceParagraph.textContent = '🥈: ' + event.second;
    eventDiv.appendChild(secondPlaceParagraph);

    const thirdPlaceParagraph = document.createElement('p');
    thirdPlaceParagraph.classList.add('top3');
    thirdPlaceParagraph.textContent = '🥉: ' + event.third;
    eventDiv.appendChild(thirdPlaceParagraph);

    if (event.vodsUrl) {
      const vodsLink = document.createElement('a');
      vodsLink.classList.add('vodsPast');
      vodsLink.href = event.vodsUrl;
      vodsLink.target = '_blank';
      vodsLink.textContent = 'Vods';
      eventDiv.appendChild(vodsLink);
    }

    const startGGLink = document.createElement('a');
    startGGLink.classList.add('startgg');
    startGGLink.href = event.eventUrl;
    startGGLink.target = '_blank';
    startGGLink.textContent = 'start.gg';
    eventDiv.appendChild(startGGLink);

    eventListItem.appendChild(eventDiv);
    eventList.appendChild(eventListItem);
  });
  
  return eventList;
}
// Sample data for past event
const eventData = [


  // {
  //   eventTitle: "Rising Rumble",
  //   imageUrl: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F696391%2Fimage-7685a90fa93f882994733553bd877bdb-optimized.png&ehk=J4kX1Hmj1QYyaSM6lqGDfNRXKJsBVr%2BD0j7R%2ByW%2B1aY%3D&w=280&h=280&r=0",
  //   eventUrl: "https://www.start.gg/tournament/rising-rumble-a-best-in-texas-league-event/details",
  //   date: "September 14 2024",
  //   location: "Texas",
  //   entrants: 25,
  //   first: "Apathy",
  //   second: "Salt",
  //   third: "Studebacher Hoch",
  //   vodsUrl: "",
  //   hideRankImage: true
  // },
  {
    eventTitle: "Rising Rumble",
    imageUrl: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F696391%2Fimage-7685a90fa93f882994733553bd877bdb-optimized.png&ehk=J4kX1Hmj1QYyaSM6lqGDfNRXKJsBVr%2BD0j7R%2ByW%2B1aY%3D&w=280&h=280&r=0",
    eventUrl: "https://www.start.gg/tournament/rising-rumble-a-best-in-texas-league-event/details",
    date: "September 14 2024",
    location: "Texas",
    entrants: 25,
    first: "Apathy",
    second: "Salt",
    third: "Studebacher Hoch",
    vodsUrl: "",
    hideRankImage: true
  },
  {
    eventTitle: "Undertow 2024",
    imageUrl: "https://github.com/pkzstar/plus-side/blob/main/images/upcoming%20events/undertow2024.png?raw=true",
    eventUrl: "https://www.start.gg/tournament/undertow-2024/details",
    date: "September 6-8 2024",
    location: "Illinois",
    entrants: 120,
    first: "Ellipsis",
    second: "Shiny Zubat",
    third: "ORLY",
    vodsUrl: "https://www.youtube.com/playlist?list=PLXuSSlxxWDDqkAM66euQKkMjRIrYICQFV",
    hideRankImage: false
  },
  {
    eventTitle: "Tech Zone 3",
    imageUrl: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F685674%2Fimage-c4721066d975473bbb300c0cb9c6fba3-optimized.png&ehk=8hPucP15HYK%2BadyuKPEp36gjy6N9HFnZm5UZKxcINS8%3D&w=280&h=280&r=0",
    eventUrl: "https://www.start.gg/tournament/tech-zone-3/details",
    date: "August 31 2024",
    location: "Illinois",
    entrants: 31,
    first: "Chaloopy",
    second: "ORLY",
    third: "Comb",
    vodsUrl: "",
    hideRankImage: false
  },
  {
    eventTitle: "DFW Fest FINALE",
    imageUrl: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F694863%2Fimage-566e5e5f63a5f87f94a87375509f61c9-optimized.png&ehk=CaWmVw9oqVniui2UvyVvvcfkhfGIJ9rEMmwP9AdBz9A%3D&w=280&h=280&r=0",
    eventUrl: "https://www.start.gg/tournament/dfw-fest-finale/event/p-singles",
    date: "August 31 2024",
    location: "Texas",
    entrants: 59,
    first: "Apathy",
    second: "Pug",
    third: "Captain Birdman",
    vodsUrl: "",
    hideRankImage: false
  },
  {
    eventTitle: "Condo of Blood",
    imageUrl: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F695366%2Fimage-69b08d9c6872b4db4d2ffa1374652983-optimized.png&ehk=4bF4qUThMtweHMe%2ByEqvxnBepEhxvTi95m0CU5Lh5Q0%3D&w=280&h=280&r=0",
    eventUrl: "https://www.start.gg/tournament/condo-of-blood/details",
    date: "August 24 2024",
    location: "Ontario",
    entrants: 26,
    first: "Blitz",
    second: "Krumpberry",
    third: "The clencher",
    vodsUrl: "",
    hideRankImage: true
  },
  {
    eventTitle: "Garden Brawl",
    imageUrl: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F673156%2Fimage-0a6f4b065a1ae1c4d91d5756129d7bb8-optimized.png&ehk=ba6JikL4X%2Frf5t3o54c5h95%2BdgVUtm66bGi3H2jzZV8%3D&w=280&h=280&r=0",
    eventUrl: "https://www.start.gg/tournament/garden-brawl/details",
    date: "August 24 2024",
    location: "New Jersey",
    entrants: 53,
    first: "Shiny Zubat",
    second: "Switch",
    third: "Aklo",
    vodsUrl: "",
    hideRankImage: false
  },
  {
    eventTitle: "Final Warning: The Golden Age",
    imageUrl: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F682493%2Fimage-3f77ea1166a44f5bb47bd76086aca4f0-optimized.png&ehk=Ihr%2FiITlMPIj3eGoJ8rx7jp8LU9d0zM47PLNNfo3S3E%3D&w=280&h=280&r=0",
    eventUrl: "https://start.gg/fw",
    date: "August 17 2024",
    location: "Maine",
    entrants: 37,
    first: "Flarp",
    second: "Thalia",
    third: "Serb",
    vodsUrl: "",
    hideRankImage: false
  },
  {
    eventTitle: "Storm IX",
    imageUrl: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F685889%2Fimage-93aa902db1980d230e1408e73e570b32-optimized.png&ehk=k0xKVQvVRrSRjoIXPf4YN4aPmQXvWKjwYTpH2OKTo0E%3D&w=280&h=280&r=0",
    eventUrl: "https://www.start.gg/tournament/storm-ix/details",
    date: "August 17 2024",
    location: "Newcastle",
    entrants: 12,
    first: "Eon",
    second: "Jacob <3",
    third: "The Notorious H.R.T.",
    vodsUrl: "https://www.twitch.tv/videos/2226605677",
    hideRankImage: true
  },
  {
    eventTitle: "Glacier Gauntlet",
    imageUrl: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F681727%2Fimage-d59c9aef0d5d77939939dbd970ef6c7d-optimized.png&ehk=AUUIFLk0Oiq1d3WhjesVORgtOMv3%2FhrahPeTbelbXa8%3D&w=280&h=280&r=0",
    eventUrl: "https://www.start.gg/tournament/glacier-gauntlet-a-best-in-texas-league-event/details",
    date: "August 3 2024",
    location: "Texas",
    entrants: 33,
    first: "Apathy",
    second: "~CP9~",
    third: "Phorcys",
    vodsUrl: "https://www.youtube.com/playlist?list=PLjsXbJ48MWJXTDjYZ5r3Dmk40Itt8E-Z9",
    hideRankImage: true
  },
  {
    eventTitle: "Carnival Clash 2",
    imageUrl: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F640839%2Fimage-e94ee53615edd49f9d209151dd01861e-optimized.png&ehk=wF2gPXe%2FQdTGVh6VH9aj%2BfckKLzhz2jnWAHHb6WP0NQ%3D&w=280&h=280&r=0",
    eventUrl: "https://www.start.gg/tournament/carnival-clash-2-ft-joshman-zamu-aura-essy-zoey-clich/details",
    date: "August 3 2024",
    location: "Oregon",
    entrants: 59,
    first: "Kycse",
    second: "Flarp",
    third: "Pikmon",
    vodsUrl: "",
    hideRankImage: false
  },
  {
    eventTitle: "Warehouse War IV",
    imageUrl: "https://github.com/pkzstar/plus-side/blob/main/images/upcoming%20events/ww4.png?raw=true",
    eventUrl: "https://www.start.gg/tournament/warehouse-war-4/details",
    date: "July 26-27 2024",
    location: "Tennessee",
    entrants: 140,
    first: "SipMastah",
    second: "Jagz$",
    third: "Chaloopy",
    vodsUrl: "https://www.youtube.com/playlist?list=PLXuSSlxxWDDrdouF5cQ8pIom1LThma6iJ",
    hideRankImage: false
  },
  {
    eventTitle: "Game 5 in the D #4: Canadian Invasion",
    imageUrl: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F675196%2Fimage-54ebffee07de2dd4d200af40c8df6987-optimized.jpg&ehk=6cxSKy3MqOJK%2FFkbqEGwYZdcBnEglYc1xpdIKB0zOBs%3D&w=280&h=280&r=0",
    eventUrl: "https://www.start.gg/tournament/game-5-in-the-d-4-the-canadian-invasion/details",
    date: "July 20 2024",
    location: "Michigan",
    entrants: 38,
    first: "Rongunshu",
    second: "Anther",
    third: "Dirtboy",
    vodsUrl: "https://www.youtube.com/playlist?list=PLp0mqricKIh1HlPwJrTSU2jiVt3qD0w0j",
    hideRankImage: false
  },
  {
    eventTitle: "Sunset 2024",
    imageUrl: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F674387%2Fimage-bd67f6a27e634d0fa71050cf01605081-optimized.jpg&ehk=vdl14TFJAjqPpTQ9MaYEu7eid%2BvknHYwSI%2FfNal95aY%3D&w=280&h=280&r=0",
    eventUrl: "https://www.start.gg/tournament/sunset-2024/details",
    date: "July 14 2024",
    location: "Etobicoke, ON, Canada",
    entrants: 14,
    first: "Blitz",
    second: "Erg",
    third: "LF DOOM",
    vodsUrl: "https://www.youtube.com/playlist?list=PLdxdm5Mb0WcsgLJUH2osXNn_m2WhZnHBO",
    hideRankImage: true
  },
  {
    eventTitle: "Terminal Velocity",
    imageUrl: "https://github.com/pkzstar/plus-side/blob/main/images/upcoming%20events/terminal.png?raw=true",
    eventUrl: "https://www.start.gg/tournament/terminal-velocity/details",
    date: "July 14 2024",
    location: "Boston, MA, USA",
    entrants: 31,
    first: "Shiny Zubat",
    second: "Flarp",
    third: "Motobug",
    vodsUrl: "https://youtube.com/playlist?list=PLov8ro2MZrJJjtzUKAX6QJq6A1KNr-cMd&si=_t0VpsS-ZZovO_Ej",
    hideRankImage: false
  },
  {
    eventTitle: "Phantom",
    imageUrl: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F649930%2Fimage-ea6128ec783d22d9b09b445dc22aeaf8-optimized.png&ehk=PqsAaF02V88lpgpAagfN8Qq6YySbqtD9S%2BaEmNnClWU%3D&w=280&h=280&r=0",
    eventUrl: "https://www.start.gg/tournament/phantom-2024/details",
    date: "July 6-7 2024",
    location: "Coburg VIC",
    entrants: 40,
    first: "Ryzuul",
    second: "Tyler",
    third: "Joshman",
    vodsUrl: "https://www.youtube.com/watch?v=T8lu5vUywU4&list=PL4cUURZHmnRi6mpPVII99e_XhZfUcWiu5&index=10",
    hideRankImage: true
  },
  {
    eventTitle: "Mineral Melee",
    imageUrl: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F674411%2Fimage-a6eb8cdb1ecb9ff623700df120a6d0da-optimized.png&ehk=vC2efFJcqrX9OoFYOhe%2FewrublZOliZQgSSMSmH%2B33U%3D&w=280&h=280&r=0",
    eventUrl: "https://www.start.gg/tournament/mineral-melee-a-best-in-texas-league-event/details",
    date: "June 22 2024",
    location: "Texas",
    entrants: 30,
    first: "Fury",
    second: "Apathy",
    third: "~CP9~",
    vodsUrl: "https://www.youtube.com/playlist?list=PLjsXbJ48MWJVIW0pYZoYoCVfOynequsfZ",
    hideRankImage: true
  },
  {
    eventTitle: "SUPER CLOUDY SCUFFLE",
    imageUrl: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F651261%2Fimage-907569c693d1a20fe255d3941409bdb5-optimized.png&ehk=GmueA6BdKSm8c9PTry1mZa4hXidSXkW2o8sX%2FbpxJzI%3D&w=280&h=280&r=0",
    eventUrl: "https://www.start.gg/tournament/super-cloudy-scuffle-a-durham-regional/details",
    date: "June 22 2024",
    location: "Oshawa",
    entrants: 8,
    first: "Blitz",
    second: "Zaza",
    third: "Erg",
    vodsUrl: "https://www.youtube.com/watch?v=37tIU45_lMU&t=4904s",
    hideRankImage: true
  },
  {
    eventTitle: "The Black Market",
    imageUrl: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F661639%2Fimage-1395622085e1cb5b86833f8060d8b3d0-optimized.png&ehk=Ni2vnmmggNSQOH8FzKf7y4JwfWGpmfvWxPKaOs6z%2Fg0%3D&w=280&h=280&r=0",
    eventUrl: "https://www.start.gg/tournament/the-black-market/details",
    date: "June 22 2024",
    location: "Calgary",
    entrants: 8,
    first: "Smear",
    second: "BlueZone",
    third: "nunavut kaiju",
    vodsUrl: "https://www.youtube.com/playlist?list=PLFcAeieXqWf2xwQNCd7NrwxmpAZFCumLP",
    hideRankImage: true
  },
  {
    eventTitle: "Untitled Stoke Tournament",
    imageUrl: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F661701%2Fimage-fd4e28a68d3eef0eda541bef36e01a0f-optimized.png&ehk=1k8V3O4JFqIok2XJzcUdVsy4uG1NQMISoCxy%2Fg%2BnAxA%3D&w=280&h=280&r=0",
    eventUrl: "https://www.start.gg/tournament/untitled-stoke-tournament/details",
    date: "June 16 2024",
    location: "Staffordshire",
    entrants: 14,
    first: "SkillZ",
    second: "Squeachu",
    third: "HyPeVxStarz",
    vodsUrl: "",
    hideRankImage: true
  },
  {
    eventTitle: "Ripped Off",
    imageUrl: "https://github.com/pkzstar/plus-side/blob/main/images/upcoming%20events/ripped.png?raw=true",
    eventUrl: "https://www.start.gg/tournament/ripped-off-1/details",
    date: "June 14 2024",
    location: "Georgia",
    entrants: 36,
    first: "Xtreme",
    second: "Jagz$",
    third: "Chaloopy",
    vodsUrl: "https://www.youtube.com/playlist?list=PLJIkd-7ajnoVydrvmblVMnQ8oJvfHdKdf",
    hideRankImage: false
  },
  {
    eventTitle: "Mass Madness 47",
    imageUrl: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F668782%2Fimage-f46841adb07e246ca977f2ebb36cdf7d-optimized.png&ehk=ktORfrKbxTMuLt%2FfCTZ5o32wj%2FgWtpvPfByFbDBAQOA%3D&w=280&h=280&r=0",
    eventUrl: "https://www.start.gg/tournament/mass-madness-47-a-new-england-melee-and-project-event/event/project-singles",
    date: "June 8 2024",
    location: "Massachusets",
    entrants: 5,
    first: "Thalia",
    second: "Motobug",
    third: "snafu",
    vodsUrl: "",
    hideRankImage: true
  },
  {
    eventTitle: "Invincible VIII",
    imageUrl: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F628549%2Fimage-b9b41a8a31d09900d2b140c591720d36-optimized.png&ehk=lCA84Qw9j67HhjlW8rDhiJXc2%2FC1ByJPk51BjbOrvi8%3D&w=280&h=280&r=0",
    eventUrl: "https://www.start.gg/tournament/invincible-viii/event/project-singles",
    date: "June 1-2 2024",
    location: "Wisconsin",
    entrants: 46,
    first: "Chaloopy",
    second: "Veka",
    third: "ORLY",
    vodsUrl: "https://www.youtube.com/playlist?list=PLXuSSlxxWDDphaX9nXuYE7lcUGnv9V3ua",
    hideRankImage: false
  },
  {
    eventTitle: "Smash Camp: New Lands",
    imageUrl: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F610441%2Fimage-19ea60088cabdbbf7b59e5246a8b4d3b-optimized.png&ehk=bouxfCgSG1JM%2F3sYvFxB%2BikGULDOP1%2Fvha2JwqNuSdo%3D&w=280&h=280&r=0",
    eventUrl: "https://www.start.gg/tournament/smash-camp-new-lands-2024/event/brawl-singles",
    date: "May 31 - June 2 2024",
    location: "Oregon",
    entrants: 62,
    first: "Dirtboy",
    second: "Pikmon",
    third: "Partyghoul",
    vodsUrl: "https://www.youtube.com/playlist?list=PLzS-yXSHqq9jqelHtoKJ-JqIPCLyXCS81",
    hideRankImage: false
  },
  {
    eventTitle: "Soul Showdown",
    imageUrl: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F666183%2Fimage-ebee1a8d2cb6ce2cc050fed8580769a2-optimized.jpg&ehk=8%2BM4zWeTJnVDqCcizmN3VspAdm7p6pNJmU1px2KyESk%3D&w=280&h=280&r=0",
    eventUrl: "https://www.start.gg/tournament/soul-showdown-a-best-in-texas-league-event/details",
    date: "May 25 2024",
    location: "Texas",
    entrants: 14,
    first: "Salt",
    second: "~CP9~",
    third: "Ntire",
    vodsUrl: "https://www.youtube.com/playlist?list=PLjsXbJ48MWJXf5iqVmD6vYP9L4tWKCoum",
    hideRankImage: true
  },
  {
    eventTitle: "Super TPS III",
    imageUrl: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F645334%2Fimage-4060881a6adb2f03c420d83e3cca0111-optimized.png&ehk=Rvf7eAJXx4e6TZdpG%2FbUoAleCnIZVzi54lyGPwfStNY%3D&w=280&h=280&r=0",
    eventUrl: "https://www.start.gg/tournament/tripoint-smash-presents-super-tps-iii/event/project-singles",
    date: "May 24 2024",
    location: "Illinois",
    entrants: 41,
    first: "Hyperflame",
    second: "Dirtboy",
    third: "Chaloopy",
    vodsUrl: "https://www.youtube.com/playlist?list=PL28nRWo732KVGZmKwZZee5cUNeorPopTt",
    hideRankImage: false
  },
{
  eventTitle: "Get Out of My Venue",
  imageUrl: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F653520%2Fimage-26823721265eaac67b492375dd61d58c-optimized.png&ehk=wPnJ7gk4QYPmNh4K607NYyXo4pJfEwRcPlzUymJMUVU%3D&w=280&h=280&r=0",
  eventUrl: "https://www.start.gg/tournament/get-out-of-my-venue/event/p-singles/standings",
  date: "May 17-18 2024",
  location: "Ontario",
  entrants: 68,
  first: "Morsecode762",
  second: "Rongunshu",
  third: "Blitz",
  vodsUrl: "https://www.youtube.com/live/PefBJNakzf4?si=Y9Bxt5FFdWv6SmfW",
  hideRankImage: false
},
{
  eventTitle: "Game 5 In The D #3",
  imageUrl: "https://raw.githubusercontent.com/pkzstar/plus-side/main/images/past-events/game5In.png",
  eventUrl: "https://www.start.gg/tournament/game-5-in-the-d-3-1/event/project-singles/standings",
  date: "May 18 2024",
  location: "Michigan",
  entrants: 16,
  first: "Trai",
  second: "Lordy",
  third: "Yuko",
  vodsUrl: "https://www.youtube.com/playlist?list=PLp0mqricKIh142azt6vnawXZbaPBqtwhC",
  hideRankImage: true
},
{
  eventTitle: "Creed 3",
  imageUrl: "https://github.com/pkzstar/plus-side/blob/main/images/upcoming%20events/creed.png?raw=true",
  eventUrl: "https://www.start.gg/tournament/creed-iii/event/p-singles/standings",
  date: "May 11 2024",
  location: "Pennsylvania",
  entrants: 29,
  first: "Switch",
  second: "Gclem",
  third: "Hyperflame",
  vodsUrl: "",
  hideRankImage: false
},
{
  eventTitle: "Ghost Town 2",
  imageUrl: "https://github.com/pkzstar/plus-side/blob/main/images/past-events/ghost-town.png?raw=true",
  eventUrl: "https://www.start.gg/tournament/ghost-town-2-call-of-the-lloyd-ft-zamu-spark/details",
  date: "May 11 2024",
  location: "Oregon",
  entrants: 32,
  first: "PartyGhoul",
  second: "Catosat",
  third: "Spark",
  vodsUrl: "",
  hideRankImage: false
},
{
  eventTitle: "Rainbow Rodeo",
  imageUrl: "https://github.com/pkzstar/plus-side/blob/main/images/upcoming%20events/rainbow.png?raw=true",
  eventUrl: "https://www.start.gg/tournament/rainbow-rodeo-a-best-in-texas-league-event/event/p-singles",
  date: "May 4 2024",
  location: "Texas",
  entrants: 27,
  first: "~CP9~",
  second: "Captain Birdman",
  third: "Ntire",
  vodsUrl: "https://www.youtube.com/playlist?list=PLjsXbJ48MWJV8OlZj5OTtlUJef-dvl48H",
  hideRankImage: true
},
{
  eventTitle: "Who's on Ledge? 6",
  imageUrl: "https://github.com/pkzstar/plus-side/blob/main/images/past-events/ledge6.png?raw=true",
  eventUrl: "https://www.start.gg/tournament/who-s-on-ledge-6-melee-and-p-edition/details",
  date: "April 27 2024",
  location: "Iowa",
  entrants: 32,
  first: "Chaloopy",
  second: "metroid",
  third: "ORLY",
  vodsUrl: "https://www.youtube.com/playlist?list=PLJIkd-7ajnoWhn4-sszntqcIULs4HCGPF",
  hideRankImage: false
},
{
  eventTitle: "The Bigger Mile High Club!",
  imageUrl: "https://github.com/pkzstar/plus-side/blob/main/images/past-events/milehigh.jpg?raw=true",
  eventUrl: "https://www.start.gg/tournament/the-bigger-mile-high-club/details",
  date: "April 20-21 2024",
  location: "Colorado",
  entrants: 134,
  first: "SipMastah",
  second: "Sneez",
  third: "Shiny Zubat",
  vodsUrl: "https://www.youtube.com/playlist?list=PLOXE2HcT1t5fHPDuxZdlpsNXx6bVmQ1e4",
  hideRankImage: false
},
{
  eventTitle: "Scarlet Classic IX+",
  imageUrl: "https://github.com/pkzstar/plus-side/blob/main/images/past-events/scarletix.png?raw=true",
  eventUrl: "https://www.start.gg/tournament/scarlet-classic-ix-1/details",
  date: "April 20 2024",
  location: "New Jersey",
  entrants: 20,
  first: "Gclem",
  second: "russ",
  third: "Montblanc",
  vodsUrl: "",
  hideRankImage: true
},
{
  eventTitle: "Thunder Throwdown",
  imageUrl: "https://github.com/pkzstar/plus-side/blob/main/images/past-events/thunder.png?raw=true",
  eventUrl: "https://www.start.gg/tournament/thunder-throwdown-a-best-in-texas-league-event/details",
  date: "April 13-14 2024",
  location: "Texas",
  entrants: 21,
  first: "Salt",
  second: "Fury",
  third: "Captain Birdman",
  vodsUrl: "https://www.youtube.com/playlist?list=PLjsXbJ48MWJUM9KqKI0qNydWCFipO1xtn",
  hideRankImage: true
},
{
  eventTitle: "Somnio 5",
  imageUrl: "https://github.com/pkzstar/plus-side/blob/main/images/past-events/somniov.png?raw=true",
  eventUrl: "https://www.start.gg/tournament/somnio-5/event/brawl-singles-somnio-5",
  date: "April 6 2024",
  location: "Eindhoven",
  entrants: 27,
  first: "Smash_Falco3",
  second: "Melody",
  third: "Ace",
  vodsUrl: "https://www.youtube.com/playlist?list=PLXuSSlxxWDDocvJs5SkF29chHQz-wUvn6",
  hideRankImage: true
},
{
  eventTitle: "The Action 2: Action Replay",
  imageUrl: "https://github.com/pkzstar/plus-side/blob/main/images/past-events/replay.png?raw=true",
  eventUrl: "https://www.start.gg/tournament/the-action-2-action-replay/event/project-singles",
  date: "April 5-6 2024",
  location: "Canberra",
  entrants: 32,
  first: "Ryzuul",
  second: "RNGReallyNotGood",
  third: "Tyler",
  vodsUrl: "https://youtube.com/playlist?list=PL4cUURZHmnRgCn_zVSPJEc4RGZi25iB73&si=iGysxKv0BG0ulpf8",
  hideRankImage: true
},
{
  eventTitle: "Metal Tavern",
  imageUrl: "https://github.com/pkzstar/plus-side/blob/main/images/past-events/metal-tavern.png?raw=true",
  eventUrl: "https://www.start.gg/tournament/metal-tavern/event/joust-project-singles",
  date: "March 30 2024",
  location: "Arizona",
  entrants: 37,
  first: "Jonny Sosa",
  second: "Av",
  third: "Cloudburst",
  vodsUrl: "https://www.youtube.com/playlist?list=PLUlQZqWo6xoRBr-_93qfQn_ZlzdijLgGq",
  hideRankImage: false
},
{
  eventTitle: "Sakura-Con",
  imageUrl: "https://github.com/pkzstar/plus-side/blob/main/images/past-events/sakura.png?raw=true",
  eventUrl: "https://www.start.gg/tournament/sakura-con-2024/events/project/brackets/1582567/2370758/standings",
  date: "March 29-31 2024",
  location: "Washington",
  entrants: 32,
  first: "PwrUp!",
  second: "PartyGhoul",
  third: "JC0nyx",
  vodsUrl: "",
  hideRankImage: true
},
{
  eventTitle: "ETSU-Con 2024",
  imageUrl: "https://github.com/pkzstar/plus-side/blob/main/images/past-events/etsu.png?raw=true",
  eventUrl: "https://www.start.gg/tournament/etsu-con-2024/event/p-singles",
  date: "March 23 2024",
  location: "Tennessee",
  entrants: "21",
  first: "Moist",
  second: "Shenanigans",
  third: "Mr. Brandandorf",
  vodsUrl: "https://youtu.be/Hm23MrFl12E?si=rVweE0VK1lL6ICGU",
  hideRankImage: true
},
{
  eventTitle: "Smash of the Titans 8",
  imageUrl: "https://github.com/pkzstar/plus-side/blob/main/images/past-events/titans.png?raw=true",
  eventUrl: "https://www.start.gg/tournament/smash-of-the-titans-8-1/event/p-singles",
  date: "March 23 2024",
  location: "Illinois",
  entrants: "22",
  first: "Chaloopy",
  second: "ORLY",
  third: "Star",
  vodsUrl: "https://youtube.com/playlist?list=PLJIkd-7ajnoVagmYPeSwB6HZ0yrNxnwsG&si=rGg_L2m1ZUXh8Lbj",
  hideRankImage: false
},
{
  eventTitle: "Game 5 In The D #2",
  imageUrl: "https://github.com/pkzstar/plus-side/blob/main/images/past-events/game5In.png?raw=true",
  eventUrl: "https://www.start.gg/tournament/game-5-in-the-d-2-yuko-s-bday-edition/event/project-singles",
  date: "March 23 2024",
  location: "Michigan",
  entrants: "18",
  first: "Dirtboy",
  second: "Anther",
  third: "techboy",
  vodsUrl: "https://www.youtube.com/playlist?list=PLp0mqricKIh1JTJG2dp7GdUt0opZwKrrI",
  hideRankImage: true
},
{
  eventTitle: "Cascade Clash",
  imageUrl: "https://github.com/pkzstar/plus-side/blob/main/images/past-events/cascade.png?raw=true",
  eventUrl: "https://www.start.gg/tournament/cascade-clash-a-best-in-texas-league-event-1/event/p-singles",
  date: "March 23 2024",
  location: "Texas",
  entrants: "28",
  first: "Salt",
  second: "Apathy",
  third: "SDJ",
  vodsUrl: "https://www.youtube.com/playlist?list=PLjsXbJ48MWJUOoGnQw0-ma0rHNQKkVyek",
  hideRankImage: true
},
{
  eventTitle: "Storm VIII",
  imageUrl: "https://github.com/pkzstar/plus-side/blob/main/images/past-events/storm.png?raw=true",
  eventUrl: "https://www.start.gg/tournament/storm-viii-1/event/pm-singles",
  date: "March 16 2024",
  location: "Newcastle",
  entrants: "24",
  first: "Eon",
  second: "maXy",
  third: "squeachu",
  vodsUrl: "",
  hideRankImage: true
},
{
  eventTitle: "Aftershock P+ & HDR",
  imageUrl: "https://github.com/pkzstar/plus-side/blob/main/images/past-events/aftershock.png?raw=true",
  eventUrl: "https://www.start.gg/tournament/aftershock-p-hdr-2/details",
  date: "March 15 2024",
  location: "New Jersey",
  entrants: "39",
  first: "Shiny Zubat",
  second: "Jodeci Joestar",
  third: "Vaporeon",
  vodsUrl: "",
  hideRankImage: false
},
{
  eventTitle: "Northstar II",
  imageUrl: "https://raw.githubusercontent.com/pkzstar/plus-side/main/images/past-events/northstar.png",
  eventUrl: "https://www.start.gg/tournament/northstar-ii-at-cloud-con/events/project-singles/brackets/1585325/2374365/standings",
  date: "March 10 2024",
  location: "Minnesota",
  entrants: "10",
  first: "Ben",
  second: "Perfect Sunset",
  third: "Cranky",
  vodsUrl: "",
  hideRankImage: true
},
{
  eventTitle: "College Park Mutiny: Blossom",
  imageUrl: "https://github.com/pkzstar/plus-side/blob/main/images/past-events/mutiny.png?raw=true",
  eventUrl: "https://www.start.gg/tournament/college-park-mutiny-blossom-feat-eve-kevin-maples-mvlvchi-200/event/project-singles/brackets/1564756/2347891",
  date: "March 2 2024",
  location: "Maryland",
  entrants: "10",
  first: "Hyperflame",
  second: "Mo $",
  third: "Bluuest",
  vodsUrl: "https://www.twitch.tv/videos/2114594529",
  hideRankImage: true
},
{
  eventTitle: "Full Bloom 2024",
  imageUrl: "https://github.com/pkzstar/plus-side/blob/main/images/past-events/fullbloom.png?raw=true",
  eventUrl: "https://www.start.gg/tournament/full-bloom-2024/event/project-singles",
  date: "February 24-25, 2024",
  location: "Indiana",
  entrants: "84",
  first: "Dirtboy",
  second: "Anther",
  third: "Chaloopy",
  vodsUrl: "https://www.youtube.com/playlist?list=PL28nRWo732KWJjJ5ujIrH_34dLYDxqwJd",
  hideRankImage: false
},
{
  eventTitle: "Perfect Pivot",
  imageUrl: "https://github.com/pkzstar/plus-side/blob/main/images/past-events/pp.png?raw=true",
  eventUrl: "https://www.start.gg/tournament/perfect-pivot/details",
  date: "February 24-25, 2024",
  location: "Winnipeg",
  entrants: "27",
  first: "Blitz",
  second: "2665",
  third: "Jams",
  vodsUrl: "",
  hideRankImage: true
},
{
  eventTitle: "The Truce",
  imageUrl: "https://github.com/pkzstar/plus-side/blob/main/images/past-events/truce.png?raw=true",
  eventUrl: "https://www.start.gg/tournament/the-truce/details",
  date: "February 24-25, 2024",
  location: "Le Kremlin-Bicêtre",
  entrants: "40",
  first: "Smash_Falco3",
  second: "Melody",
  third: "iPunch",
  vodsUrl: "https://www.youtube.com/playlist?list=PLKRfQKsyLmMa-134SQQmSRVh_QHmI69fW",
  hideRankImage: true
},
{
  eventTitle: "Beantown Lean House I",
  imageUrl: "https://github.com/pkzstar/plus-side/blob/main/images/past-events/beantown.png?raw=true",
  eventUrl: "https://www.start.gg/tournament/beantown-lean-house-i/event/project-singles",
  date: "February 24 2024",
  location: "Massachusetts",
  entrants: "8",
  first: "Serb",
  second: "Foxy Grandpa",
  third: "sfy bees",
  vodsUrl: "https://www.youtube.com/watch?v=2DsDtuoZIN4",
  hideRankImage: true
},
{
  eventTitle: "Exodus 2024",
  imageUrl: "https://github.com/pkzstar/plus-side/blob/main/images/past-events/exodus.png?raw=true",
  eventUrl: "https://www.start.gg/tournament/exodus-2024/details",
  date: "February 17 2024",
  location: "California",
  entrants: "51",
  first: "SipMastah",
  second: "Sneez",
  third: "Darc",
  vodsUrl: "https://www.youtube.com/playlist?list=PLK6QY5XQ-uu1tUnqdIf51uxtC4l_sPUVI",
  hideRankImage: false
},
{
  eventTitle: "Smashing Grounds 10th Anniversary Celebration",
  imageUrl: "https://github.com/pkzstar/plus-side/blob/main/images/past-events/10th%20aniv.png?raw=true",
  eventUrl: "https://www.start.gg/tournament/smashing-grounds-10th-anniversary-celebration-a-melee-and-project-regional/events/project-singles/brackets/1545109/2321524/overview",
  date: "February 10 2024",
  location: "Massachusetts",
  entrants: "34",
  first: "wren",
  second: "Shadowhawke",
  third: "~CP9~",
  vodsUrl: "https://www.youtube.com/playlist?list=PLAIIMiVssmgoLW_ael9HgTWKG5L3SIyUq",
  hideRankImage: false
},
{
  eventTitle: "The Cure",
  imageUrl: "https://github.com/pkzstar/plus-side/blob/main/images/past-events/the%20cure.png?raw=true",
  eventUrl: "https://www.start.gg/tournament/the-cure-100-pot-bonus-p-invitational/event/singles/brackets/1533162/2305744",
  date: "February 9 2024",
  location: "Colorado",
  entrants: "14",
  first: "Whoratio",
  second: "shwang",
  third: "meecrobs",
  vodsUrl: "https://www.youtube.com/playlist?list=PLjAjRxkFDTqOIcs4xm5tbfH_KuO0FvY4S",
  hideRankImage: true
},
{
  eventTitle: "Vortex Gallery at Frosty Faustings XVI",
  imageUrl: "https://github.com/pkzstar/plus-side/blob/main/images/past-events/vortex.png?raw=true",
  eventUrl: "https://www.start.gg/tournament/vortex-gallery-at-frosty-faustings-xvi/event/project-wii/standings",
  date: "January 28 2024",
  location: "Illinois",
  entrants: "34",
  first: "Rise",
  second: "yung Quaff",
  third: "Twisty",
  vodsUrl: "https://www.youtube.com/playlist?list=PLov8ro2MZrJKniuhKgF_Qp5swkhIroZlW",
  hideRankImage: false
},
{
  eventTitle: "Game 5 In The D",
  imageUrl: "https://github.com/pkzstar/plus-side/blob/main/images/past-events/game5In.png?raw=true",
  eventUrl: "https://www.start.gg/tournament/game-5-in-the-d/details",
  date: "January 20 2024",
  location: "Michigan",
  entrants: "44",
  first: "Morsecode762",
  second: "Techboy",
  third: "Star",
  vodsUrl: "https://www.youtube.com/playlist?list=PLp0mqricKIh0expHS97UELiUGIHBrgxX5",
  hideRankImage: false
},
];

// Create past event element
const pastEventElement = createPastEventElement(eventData);

// Append the past event element to a container (e.g., a div with id 'pastListContainer')
const pastListContainer = document.getElementById('pastListContainer');
pastListContainer.appendChild(pastEventElement);



// below is a wip for making the past events format to the left when added

// // Create past event element
// const pastEventElement = createPastEventElement(eventData);

// // Loop through each set of four events
// for (let i = 0; i < eventsData.length; i += 4) {
//     // Create a new ul for each set of four events
//     const eventList = document.createElement('ul');
//     eventList.classList.add('pastList');
//     eventList.id = 'pastList' + i; // Unique ID for each list

//     // Create and append the li elements for each event in the set
//     for (let j = i; j < i + 4 && j < eventsData.length; j++) {
//         const eventData = eventsData[j];
//         const eventComponent = createEventComponent(eventData);
//         // Append the event component directly to the ul
//         eventList.appendChild(eventComponent);
//     }

//     // Check if there's only one li element in the ul and it's not on a screen less than 600px wide
//     const lis = eventList.querySelectorAll('li');
//     const screenWidthLessThan600 = window.matchMedia("(max-width: 600px)").matches;
//     if (lis.length === 1 && !screenWidthLessThan600) {
//         // Apply max-width: 100% to the single li element
//         lis[0].style.marginLeft = '25%';
//     }

//     // Append the ul (with li inside) to the past event element
//     pastEventElement.appendChild(eventList);
// }

// // Append the past event element to the container with id 'pastListContainer'
// const pastListContainer = document.getElementById('pastListContainer');
// pastListContainer.appendChild(pastEventElement);

