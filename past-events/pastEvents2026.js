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

  {
    eventTitle: "Evergreen 2026",
    imageUrl: "https://images.start.gg/images/tournament/895362/image-478eeccd61f890c6edd38a4ca4562b8f.png",
    eventUrl: "https://www.start.gg/tournament/evergreen-2026/details",
    date: "July 11 2026",
    location: "Ridgewood, New Jersey, USA",
    entrants: 38,
    first: "Sebas",
    second: "Imogen Heat",
    third: "Soully",
    vodsUrl: "https://www.youtube.com/watch?v=4EFIkEZGqVQ&list=PLN0mwBtWkZOE",
    hideRankImage: false
  },
  {
    eventTitle: "KREWE 2",
    imageUrl: "https://images.start.gg/images/tournament/882658/image-56a1f3782f7809b3c5045175d138d31d.png",
    eventUrl: "https://www.start.gg/tournament/krewe-2/details",
    date: "July 11 2026",
    location: "Mobile, Alabama, USA",
    entrants: 46,
    first: "RapMonster",
    second: "Xtreme",
    third: "SDJ",
    vodsUrl: "https://www.youtube.com/watch?v=dvMb0IJRIOw&list=PLcln_COjPKkk",
    hideRankImage: false
  },
  {
    eventTitle: "Second Wind",
    imageUrl: "https://images.start.gg/images/tournament/887941/image-10a83b8764db886fe5fd3f0c7be1de60.png",
    eventUrl: "https://www.start.gg/tournament/second-wind-2026/details",
    date: "July 11-12 2026",
    location: "Wellington, New Zealand",
    entrants: 41,
    first: "Ryzuul",
    second: "RNGReallyNotGood",
    third: "Goodie",
    vodsUrl: "https://www.youtube.com/watch?v=NWWvfgPS6gs&list=PLCZ5wvtCAIX4",
    hideRankImage: true
  },
  {
    eventTitle: "Plus World",
    imageUrl: "https://images.start.gg/images/tournament/923762/image-5aa27b5a6c46ac0c74eab6382b2944e8.png",
    eventUrl: "https://www.start.gg/tournament/plus-world/details",
    date: "June 30 2026",
    location: "Minneapolis, Minnesota, USA",
    entrants: 27,
    first: "Veka",
    second: "Preeminent",
    third: "Kaditrix",
    vodsUrl: "",
    hideRankImage: true
  },
  {
    eventTitle: "Unc Frozen's Icebox 14",
    imageUrl: "https://images.start.gg/images/tournament/916279/image-2486a0c6278f0dfd2f1f174a78a3f391.jpg",
    eventUrl: "https://www.start.gg/tournament/unc-frozen-s-icebox-14/events",
    date: "June 27 2026",
    location: "Burwood, NSW, Australia",
    entrants: 7,
    first: "Apathy",
    second: "J-am",
    third: "AshleyAtari",
    vodsUrl: "https://www.youtube.com/watch?v=0pOGSmFVsZM",
    hideRankImage: true
  },
  {
    eventTitle: "Plus House 5",
    imageUrl: "https://images.start.gg/images/tournament/915546/image-8d8c525896bcea9df818bf5d7b57842d.png",
    eventUrl: "https://www.start.gg/tournament/plus-house-5/details",
    date: "June 27 2026",
    location: "Springfield, Missouri, USA",
    entrants: 12,
    first: "Montague",
    second: "Boodabam",
    third: "iBeTakingEstrogen",
    vodsUrl: "https://youtu.be/Yjc3u1Q4X_M?si=bWCporvNahEGmxtn",
    hideRankImage: true
  },
  {
    eventTitle: "Pico Plus #20",
    imageUrl: "https://images.start.gg/images/tournament/916015/image-fa38eded5089a4ae847fb9130a617c1c.png",
    eventUrl: "https://www.start.gg/tournament/pico-plus-20/details",
    date: "June 27 2026",
    location: "Pico Rivera, California, USA",
    entrants: 22,
    first: "Nezergy",
    second: "Dr.",
    third: "Zenokids",
    vodsUrl: "https://www.twitch.tv/videos/2812079063",
    hideRankImage: true
  },
  {
    eventTitle: "Project +1: Holy Smashtrimony",
    imageUrl: "https://images.start.gg/images/tournament/883226/image-3e72fc26c7d8bc2c68ffad045b822526.png",
    eventUrl: "https://challonge.com/v52sqako",
    date: "June 27 2026",
    location: "Mississauga, Ontario, Canada",
    entrants: 54,
    first: "Dirtboy",
    second: "Blitz",
    third: "Metroid",
    vodsUrl: "https://www.youtube.com/watch?v=MAX9jfyScqQ",
    hideRankImage: false
  },
  {
    eventTitle: "Scrapyard 2026",
    imageUrl: "https://images.start.gg/images/tournament/898791/image-e6e7b4ea6b3aa8dc9abd77dfa055cfec.png",
    eventUrl: "https://www.start.gg/tournament/scrapyard-2026/details",
    date: "June 20 2026 - June 21 2026",
    location: "North Carolina",
    entrants: 48,
    first: "Salt",
    second: "RapMonster",
    third: "Dingo",
    vodsUrl: "https://youtu.be/tHhef_RjQIY?si=Ux43EvuICDKJm31q",
    hideRankImage: false
  },
  {
    eventTitle: "Run, Don't Walk 2026",
    imageUrl: "https://images.start.gg/images/tournament/892196/image-05d59659fc7aac0199415667f12b01a6.png",
    eventUrl: "https://www.start.gg/tournament/run-don-t-walk-2026/details",
    date: "June 20 2026",
    location: "Iowa",
    entrants: 48,
    first: "Veka",
    second: "SoulOfficer",
    third: "Kendrick",
    vodsUrl: "https://www.youtube.com/watch?v=6Q0Oh5mxbFo",
    hideRankImage: false
  },
  {
    eventTitle: "I Agree: Let's Go Surfboarding",
    imageUrl: "https://images.start.gg/images/tournament/891386/image-687607c001072ca55cb128d1edb28b7c.png",
    eventUrl: "https://www.start.gg/tournament/i-agree-let-s-go-surfboarding/details",
    date: "June 20 2026",
    location: "Massachussetts",
    entrants: 26,
    first: "essy",
    second: "Kumatora",
    third: "Imogen Heat",
    vodsUrl: "https://www.youtube.com/watch?v=ffl518NFPfk&list=PLu8epBJfYiHsw5zRyV3bT9fKaNaccC1t8",
    hideRankImage: false
  },
  {
    eventTitle: "Gecko Cavern 20",
    imageUrl: "https://images.start.gg/images/tournament/912446/image-172bf771163c9b5d2b31b5a1b20445d3.png",
    eventUrl: "https://www.start.gg/tournament/gecko-cavern-20/details",
    date: "May 30 2026",
    location: "New South Wales",
    entrants: 7,
    first: "Pierce",
    second: "RNGReallyNotGood",
    third: "RoyinoZ",
    vodsUrl: "https://www.youtube.com/watch?v=znCsBs5pOHA",
    hideRankImage: true
  },
  {
    eventTitle: "Pico Plus 19",
    imageUrl: "https://images.start.gg/images/tournament/904457/image-205051fb624f5735b8799057233d02a8.png",
    eventUrl: "https://www.start.gg/tournament/pico-plus-19/details",
    date: "May 23 2026",
    location: "California",
    entrants: 36,
    first: "Jonny Sosa",
    second: "Nezergy",
    third: "Khalid",
    vodsUrl: "https://www.twitch.tv/videos/2779663125",
    hideRankImage: true
  },
  {
    eventTitle: "Plus House 4",
    imageUrl: "https://images.start.gg/images/tournament/907023/image-dafb3d2fe26153109670ebc33331de15.png",
    eventUrl: "https://www.start.gg/tournament/plus-house-4/details",
    date: "May 23 2026",
    location: "Missouri",
    entrants: 13,
    first: "Dru2",
    second: "Gaz!",
    third: "ACABrandon",
    vodsUrl: "https://youtu.be/_H4ydtWi9FU?si=9vbwBWh3ifl5TCLb",
    hideRankImage: true
  },
  {
    eventTitle: "Portland+ 2",
    imageUrl: "https://images.start.gg/images/tournament/887985/image-78599986bcc3d860e82a48a2a37fd325.jpg",
    eventUrl: "https://www.start.gg/tournament/portland-2/details",
    date: "May 17 2026",
    location: "Maine",
    entrants: 21,
    first: "Motobug",
    second: "wren",
    third: "sfy bees",
    vodsUrl: "https://youtu.be/Y-S0ZnFU1-k?si=IfDjnkW1zNHSo3SH",
    hideRankImage: false
  },
  {
    eventTitle: "Perfect Pivot 2",
    imageUrl: "https://images.start.gg/images/tournament/865655/image-96fe290b2295df7a30ff0bdda4732318.png",
    eventUrl: "https://www.start.gg/tournament/perfect-pivot-2-1/details",
    date: "May 16 2026 - May 17 2026",
    location: "Manitoba",
    entrants: 33,
    first: "Blitz",
    second: "Zaza",
    third: "Krumpberry",
    vodsUrl: "",
    hideRankImage: true
  },
  {
    eventTitle: "The Boil",
    imageUrl: "https://images.start.gg/images/tournament/887556/image-280ceae2b183f4a95d8cb0f68293e7c8.png",
    eventUrl: "https://www.start.gg/tournament/the-boil-by-la-melee/details",
    date: "May 9 2026",
    location: "Louisiana",
    entrants: 25,
    first: "Apathy",
    second: "J-am",
    third: "JSalt",
    vodsUrl: "",
    hideRankImage: true
  },
  {
    eventTitle: "Plus House 3",
    imageUrl: "https://images.start.gg/images/tournament/894621/image-4d9e28e6c73e7a0840321cebd7955a7d.png",
    eventUrl: "https://www.start.gg/tournament/plus-house-3/details",
    date: "April 26 2026",
    location: "Missouri",
    entrants: 10,
    first: "Boodabam",
    second: "LandFish",
    third: "iBeTakingEstrogen",
    vodsUrl: "https://youtu.be/0U259vUhmxM?si=LHbPHcg7LywG3xE3",
    hideRankImage: true
  },
  {
    eventTitle: "Pure Fundies",
    imageUrl: "https://images.start.gg/images/tournament/814734/image-1a3a9e53df7bf2c8f74d2029a2665db7.png",
    eventUrl: "https://www.start.gg/tournament/pure-fundies/details",
    date: "April 25 2026",
    location: "Dublin",
    entrants: 20,
    first: "JohsyJam",
    second: "dyb",
    third: "NoahStar",
    vodsUrl: "",
    hideRankImage: true
  },
  {
    eventTitle: "Chase the Crown! 2",
    imageUrl: "https://images.start.gg/images/tournament/872891/image-407782ce47d4bc5e657952315a28ae28.png",
    eventUrl: "https://www.start.gg/tournament/chase-the-crown-2-1/details",
    date: "April 25 2026",
    location: "Tennessee",
    entrants: 19,
    first: "jankie",
    second: "Dank",
    third: "Moist",
    vodsUrl: "",
    hideRankImage: true
  },
  {
    eventTitle: "House of Paign 25",
    imageUrl: "https://images.start.gg/images/tournament/864395/image-d48ee13c8ec71aa4cd3a8b6da0e35c4a.png",
    eventUrl: "https://www.start.gg/tournament/house-of-paign-25/details",
    date: "April 25 2026",
    location: "Illinois",
    entrants: 57,
    first: "Dirtboy",
    second: "Rise",
    third: "Comb",
    vodsUrl: "https://youtu.be/rvOtQ33L2Lw?si=MoqpRPeW1INsygY4",
    hideRankImage: false
  },
  {
    eventTitle: "Gecko Cavern 19",
    imageUrl: "https://images.start.gg/images/tournament/898713/image-d2f74ae940ec5bc9fa24e2cacf0b25c6.png",
    eventUrl: "https://www.start.gg/tournament/gecko-cavern-19/details",
    date: "April 18 2026",
    location: "New South Wales",
    entrants: 9,
    first: "RNGReallyNotGood",
    second: "luxingo",
    third: "RoyinoZ",
    vodsUrl: "https://www.youtube.com/watch?v=E4VxCD-ogW0",
    hideRankImage: true
  },
  {
    eventTitle: "Element",
    imageUrl: "https://images.start.gg/images/tournament/839045/image-231e7c9fdd38b22d6e77688c8836cd22.jpg",
    eventUrl: "https://www.start.gg/tournament/element-1/details",
    date: "April 18 2026 - April 19 2026",
    location: "Minnesota",
    entrants: 77,
    first: "Veka",
    second: "sfy bees",
    third: "Kendrick",
    vodsUrl: "https://youtu.be/q5CE3_8Qdt8?si=7bniXxOFetsZryXM",
    hideRankImage: false
  },
  {
    eventTitle: "Volan 2026",
    imageUrl: "https://images.start.gg/images/tournament/841158/image-2cc3597d9d558d105a4406a7ed422903.png",
    eventUrl: "https://www.start.gg/tournament/volan-2026/details",
    date: "April 10 2026 - April 12 2026",
    location: "Tennessee",
    entrants: 11,
    first: "jankie",
    second: "Mewwy",
    third: "Eli",
    vodsUrl: "",
    hideRankImage: true
  },
  {
    eventTitle: "Pico Plus #18",
    imageUrl: "https://images.start.gg/images/tournament/894890/image-2a841d9b6424a80a9f21184e5409f7a2.png",
    eventUrl: "https://www.start.gg/tournament/pico-plus-18/details",
    date: "April 4 2026",
    location: "California",
    entrants: 22,
    first: "Nezergy",
    second: "Blub",
    third: "Dumshiny",
    vodsUrl: "https://www.youtube.com/watch?v=JDI1bKZlwbY&list=PL1jiLVSnaIHPGGbUzL9cAlmGBCdmkpcIy",
    hideRankImage: true
  },
  {
    eventTitle: "The Bird House 15: Graduation",
    imageUrl: "https://images.start.gg/images/tournament/877959/image-7e1a3c3b3bc33d26fb5f4ec0643a9d9d.png",
    eventUrl: "https://www.start.gg/tournament/the-bird-house-15-graduation/details",
    date: "April 4 2026",
    location: "Illinois",
    entrants: 13,
    first: "ORLY",
    second: "Chaloopy",
    third: "ACABrandon",
    vodsUrl: "",
    hideRankImage: true
  },
  {
    eventTitle: "DEAD ZONE #3",
    imageUrl: "https://images.start.gg/images/tournament/862296/image-d781404055a8253cb034cdc35e0d9892.png",
    eventUrl: "https://www.start.gg/tournament/dead-zone-3-1/details",
    date: "April 4 2026 - April 5 2026",
    location: "Le Kremlin-Bicêtre",
    entrants: 16,
    first: "Kazeol",
    second: "Miniboulet",
    third: "Kine.",
    vodsUrl: "",
    hideRankImage: true
  },
  {
    eventTitle: "Bustered Out 2",
    imageUrl: "https://images.start.gg/images/tournament/859269/image-4c4804477550479932e7df06bcd73fbb.png",
    eventUrl: "https://www.start.gg/tournament/bustered-out-2/details",
    date: "April 4 2026",
    location: "Tennessee",
    entrants: 28,
    first: "Xtreme",
    second: "Moist",
    third: "Shenanigans",
    vodsUrl: "",
    hideRankImage: false
  },
  {
    eventTitle: "Lucky Mountain",
    imageUrl: "https://images.start.gg/images/tournament/887983/image-548fe38b47c9e39e3538ab091e725029.png",
    eventUrl: "https://www.start.gg/tournament/lucky-mountain/details",
    date: "March 29 2026",
    location: "Colorado",
    entrants: 15,
    first: "hamyojo",
    second: "Triforce Trampstamp",
    third: "aphex twink",
    vodsUrl: "",
    hideRankImage: true
  },
  {
    eventTitle: "Gecko Cavern 18 The Return",
    imageUrl: "https://images.start.gg/images/tournament/890996/image-69f2acc3529b123f5b470a0fb7f8ac77.png",
    eventUrl: "https://www.start.gg/tournament/gecko-cavern-18-the-return/details",
    date: "March 28 2026",
    location: "New South Wales",
    entrants: 10 ,
    first: "RNGReallyNotGood",
    second: "RoyinoZ",
    third: "WolfRagnell",
    vodsUrl: "https://youtu.be/hFHWmU9nmaw",
    hideRankImage: true
  },
  {
    eventTitle: "Night of the living DED #10 (Melee & P+) 1 Year Anniversary Party",
    imageUrl: "https://images.start.gg/images/tournament/886263/image-f10b026f38ac116f5d2699db3ba926ab.png",
    eventUrl: "https://www.start.gg/tournament/night-of-the-living-ded-10-melee-p-1-year-anniversary-party/details",
    date: "March 28 2026",
    location: "New York",
    entrants: 22,
    first: "Sebas",
    second: "Mulldrifter",
    third: "Epoodle",
    vodsUrl: "",
    hideRankImage: false
  },
  {
    eventTitle: "Lumber Smash 9: Tournament of Power",
    imageUrl: "https://images.start.gg/images/tournament/884642/image-045068a83a27a9f5435dc2b9030fefba.png",
    eventUrl: "https://www.start.gg/tournament/lumber-smash-9-tournament-of-power/details",
    date: "March 28 2026",
    location: "Arizona",
    entrants: 6,
    first: "HuskyBananas",
    second: "Bachelor",
    third: "sunflower",
    vodsUrl: "",
    hideRankImage: true
  },
  {
    eventTitle: "Knock Out 11",
    imageUrl: "https://images.start.gg/images/tournament/879647/image-7885175c52adcfd76b131ec1a54230eb.png",
    eventUrl: "https://www.start.gg/tournament/knock-out-11/details",
    date: "March 28 2026",
    location: "Middlesbrough",
    entrants: 7,
    first: "MTF DOOM",
    second: "HELL KAISER",
    third: "SkillZ",
    vodsUrl: "",
    hideRankImage: true
  },
  {
    eventTitle: "Main Event - 2",
    imageUrl: "https://images.start.gg/images/tournament/860982/image-f7116ff2a6a425b54362412cff28cadc.png",
    eventUrl: "https://www.start.gg/tournament/main-event-2/details",
    date: "March 22 2026",
    location: "Birmingham",
    entrants: 15,
    first: "Eon",
    second: "Lucretio",
    third: "SkillZ",
    vodsUrl: "",
    hideRankImage: true
  },
  {
    eventTitle: "Plus House 2",
    imageUrl: "https://images.start.gg/images/tournament/886460/image-9d7be6905489dd54a2d7bc43056a36d2.png",
    eventUrl: "https://www.start.gg/tournament/plus-house-2/details",
    date: "March 21 2026",
    location: "Missouri",
    entrants: 15,
    first: "Gaz!",
    second: "Dru2",
    third: "ACABrandon",
    vodsUrl: "https://youtu.be/ILQxURnzX5Q?si=uhPZIi4X-c4ElvLD",
    hideRankImage: true
  },
  {
    eventTitle: "Minnesota Monthly Melee #31: Arcadian Assembly",
    imageUrl: "https://images.start.gg/images/tournament/873538/image-03e6ca7cf426677a258555fb07d61483.png",
    eventUrl: "https://www.start.gg/tournament/minnesota-monthly-melee-31-arcadian-assembly/details",
    date: "March 21 2026",
    location: "Minnesota",
    entrants: 14,
    first: "Veka",
    second: "McNutty",
    third: "Preeminent",
    vodsUrl: "",
    hideRankImage: true
  },
  {
    eventTitle: "Pico Plus #17",
    imageUrl: "https://images.start.gg/images/tournament/882103/image-6ec87fd29601aa63ffe308c00a05161b.png",
    eventUrl: "https://www.start.gg/tournament/pico-plus-17/details",
    date: "March 21 2026",
    location: "California",
    entrants: 31,
    first: "Jonny Sosa",
    second: "Blank",
    third: "Narq",
    vodsUrl: "https://www.youtube.com/watch?v=kTrUx42WX1Q&list=PL1jiLVSnaIHM5KCJFTZrQFTmGVpxfbTBD",
    hideRankImage: false
  },
  {
    eventTitle: "Game 5 In The D #11 Yuko's Bday Edition!",
    imageUrl: "https://images.start.gg/images/tournament/873498/image-7ce940d1c981a6095a431b24fa230713.jpg",
    eventUrl: "https://www.start.gg/tournament/game-5-in-the-d-11-yuko-s-bday-edition/details",
    date: "March 21 2026",
    location: "Michigan",
    entrants: 10,
    first: "Dirtboy",
    second: "Lordy",
    third: "LIVE",
    vodsUrl: "",
    hideRankImage: true
  },
  {
    eventTitle: "House of Nimbus 8",
    imageUrl: "https://images.start.gg/images/tournament/889472/image-e6b010b0981bba8636fc8b3b1e4cef61.jpg",
    eventUrl: "https://www.start.gg/tournament/house-of-nimbus-8/details",
    date: "March 14 2026",
    location: "California",
    entrants: 10,
    first: "SipMastah",
    second: "The Doctor",
    third: "Ivayne",
    vodsUrl: "",
    hideRankImage: true
  },
  {
    eventTitle: "Take Flight '26",
    imageUrl: "https://images.start.gg/images/tournament/864665/image-9551083e30bca6b48e9a64d778db43a2.jpg",
    eventUrl: "https://www.start.gg/tournament/take-flight-26/details",
    date: "March 14 2026",
    location: "Ohio",
    entrants: 15,
    first: "Peppy",
    second: "Iceking",
    third: "UP Sanji Player",
    vodsUrl: "",
    hideRankImage: true
  },
  {
    eventTitle: "Unc Frozen's Icebox 12",
    imageUrl: "https://images.start.gg/images/tournament/881750/image-b0569faa89f66f8f4ffbd5889d533aaf.jpg",
    eventUrl: "https://www.start.gg/tournament/unc-frozen-s-icebox-12/details",
    date: "March 7 2026",
    location: "Texas",
    entrants: 15,
    first: "Apathy",
    second: "J-am",
    third: "AshleyAtari",
    vodsUrl: "",
    hideRankImage: true
  },
  {
    eventTitle: "Get Reel: Take 9",
    imageUrl: "https://images.start.gg/images/tournament/875187/image-2f6194fe31105baffc863a3877f3fa07.png",
    eventUrl: "https://www.start.gg/tournament/get-reel-take-9/details",
    date: "February 28 2026",
    location: "British Columbia",
    entrants: 17,
    first: "Espi",
    second: "White Lightning",
    third: "SpiritGun",
    vodsUrl: "",
    hideRankImage: true
  },
  {
    eventTitle: "Cheba Hut Masons Bday Bash: P+ Takeover",
    imageUrl: "https://images.start.gg/images/tournament/877960/image-078d0d2068fbee20f9fefe03f390c99b.png",
    eventUrl: "https://www.start.gg/tournament/cheba-hut-masons-bday-bash-p-takeover/details",
    date: "February 28 2026",
    location: "Washington",
    entrants: 26,
    first: "Mason",
    second: "Helix",
    third: "Sputo",
    vodsUrl: "",
    hideRankImage: true
  },
  {
    eventTitle: "CG House Tournament",
    imageUrl: "https://images.start.gg/images/tournament/871850/image-c3f2c9a593794b64de9097c07958510d.png",
    eventUrl: "https://www.start.gg/tournament/cg-house-tournament/details",
    date: "February 28 2026",
    location: "Mexicali",
    entrants: 7,
    first: "Yoru",
    second: "Panda β",
    third: "JamieHR",
    vodsUrl: "",
    hideRankImage: true
  },
  {
    eventTitle: "Get Spiked On! Winter 2026",
    imageUrl: "https://images.start.gg/images/tournament/873210/image-b696f37f8da7f1792ac254272affd644.png",
    eventUrl: "https://www.start.gg/tournament/get-spiked-on-winter-2026/details",
    date: "February 28 2026",
    location: "Wageningen",
    entrants: 13,
    first: "Xin",
    second: "Kemphaan",
    third: "Freekleef",
    vodsUrl: "",
    hideRankImage: true
  },
  {
    eventTitle: "Allston Allstars VI",
    imageUrl: "https://images.start.gg/images/tournament/870470/image-68fc4cb16635b6b20429bbb69a4565a1.png",
    eventUrl: "https://www.start.gg/tournament/allston-allstars-vi-1/details",
    date: "February 28 2026",
    location: "Massachussetts",
    entrants: 14,
    first: "Imogen Heat",
    second: "sfy bees",
    third: "Tarchwood",
    vodsUrl: "https://youtu.be/4hd9CQjFEpM?si=GfdLjwokdnFjuOuf",
    hideRankImage: true
  },
  {
    eventTitle: "Plus House 1",
    imageUrl: "https://images.start.gg/images/tournament/874264/image-0269f85a2b42ff0f5fb1afb0df394e6b.png",
    eventUrl: "https://www.start.gg/tournament/plus-house-1/details",
    date: "February 28 2026",
    location: "Missouri",
    entrants: 16,
    first: "rake",
    second: "Gaz!",
    third: "max",
    vodsUrl: "https://youtu.be/E_G7G1OHCPs?si=gNNd8KXJ0ighCoPS",
    hideRankImage: true
  },
  {
    eventTitle: "Flash Flood",
    imageUrl: "https://images.start.gg/images/tournament/813787/image-12969cc9155ec8f9247a30aefe8d1120.png",
    eventUrl: "https://www.start.gg/tournament/flash-flood/details",
    date: "February 28 2026",
    location: "Illinois",
    entrants: 49,
    first: "Chaloopy",
    second: "LIVE",
    third: "Ripple",
    vodsUrl: "https://www.youtube.com/playlist?list=PL_OBsvMFKQ5Q2VLAaElL1v1muH7Lql-q7",
    hideRankImage: false
  },
  {
    eventTitle: "Bristol's Basement: Echoes of the Eye",
    imageUrl: "https://images.start.gg/images/tournament/876302/image-b89cee1fa577271d432f968cdcbd2b10.jpg",
    eventUrl: "https://www.start.gg/tournament/bristol-s-basement-echoes-of-the-eye/details",
    date: "February 22 2026",
    location: "Bristol",
    entrants: 20,
    first: "SkillZ",
    second: "Aiika",
    third: "VERD",
    vodsUrl: "",
    hideRankImage: true
  },
  {
    eventTitle: "Northstar IV (4th-Star) at St. Cloud State University",
    imageUrl: "https://images.start.gg/images/tournament/846246/image-a72b87e4ba315c212ba95cab96635833.png",
    eventUrl: "https://www.start.gg/tournament/northstar-iv-4th-star-at-st-cloud-state-university/details",
    date: "February 21 2026 - February 22 2026",
    location: "Minnesota",
    entrants: 15,
    first: "Veka",
    second: "Preeminent",
    third: "Ben",
    vodsUrl: "",
    hideRankImage: true
  },
  {
    eventTitle: "Chamberi Champions #5: La Enfermedad del Lomo",
    imageUrl: "https://images.start.gg/images/tournament/866192/image-3f3e6a563981bd53b7818ef7dd6e9a67.png",
    eventUrl: "https://www.start.gg/tournament/chamberi-champions-5-la-enfermedad-del-lomo/details",
    date: "February 21 2026",
    location: "Spain",
    entrants: 15,
    first: "Glenco Mastantuono",
    second: "Verdal",
    third: "IuDKing",
    vodsUrl: "",
    hideRankImage: true
  },
  {
    eventTitle: "Condo of Love: Ares x Blitz",
    imageUrl: "https://images.start.gg/images/tournament/876164/image-973ccad4af779392912d3820ca7efb14.jpg",
    eventUrl: "https://www.start.gg/tournament/condo-of-love-ares-x-blitz/details",
    date: "February 21 2026",
    location: "Ontario",
    entrants: 28,
    first: "Dirtboy",
    second: "Krumpberry",
    third: "Blitz",
    vodsUrl: "",
    hideRankImage: false
  },
  {
    eventTitle: "Smash of the Titans 11",
    imageUrl: "https://images.start.gg/images/tournament/841162/image-725756f044cd841d6402cb75cff7c2c3.jpg",
    eventUrl: "https://www.start.gg/tournament/smash-of-the-titans-11-1/details",
    date: "February 21 2026",
    location: "Illinois",
    entrants: 45,
    first: "Ryzuul",
    second: "Comb",
    third: "SoulOfficer",
    vodsUrl: "https://youtu.be/7q1D-9yAyzs?si=HJi8AbTeGnkZHs3B",
    hideRankImage: false
  },
  {
    eventTitle: "Docked And Loaded 4",
    imageUrl: "https://images.start.gg/images/tournament/837439/image-df48365313d01a791dca3b6ed8c9ec17.png",
    eventUrl: "https://www.start.gg/tournament/docked-and-loaded-4/details",
    date: "February 21 2026",
    location: "Auckland",
    entrants: 15,
    first: "IcyK",
    second: "PoeFire",
    third: "Hydrocephalus",
    vodsUrl: "",
    hideRankImage: true
  },
  {
    eventTitle: "Dash Dance: The Sequel",
    imageUrl: "https://images.start.gg/images/tournament/878421/image-b53fca5b793660a225a60f2924f80633.jpg",
    eventUrl: "https://www.start.gg/tournament/dash-dance-the-sequel/details",
    date: "February 15 2026",
    location: "New York",
    entrants: 10,
    first: "Bassyxx",
    second: "firestarW",
    third: "John",
    vodsUrl: "",
    hideRankImage: true
  },
  {
    eventTitle: "Exodus 2026",
    imageUrl: "https://images.start.gg/images/tournament/873548/image-4d1423b87f343c812d7b54bf5b9b62c6.png",
    eventUrl: "https://www.start.gg/tournament/exodus-2026/details",
    date: "February 15 2026",
    location: "California",
    entrants: 84,
    first: "The Doctor",
    second: "SipMastah",
    third: "RapMonster",
    vodsUrl: "https://www.youtube.com/watch?v=l66JFgwh0AM",
    hideRankImage: false
  },
  {
    eventTitle: "Unc Frozen's Icebox 11: Lovey Dubby Edition",
    imageUrl: "https://images.start.gg/images/tournament/872259/image-697d83b9de5bb9f9afd9c4d52d2f48cb.jpg",
    eventUrl: "https://www.start.gg/tournament/unc-frozen-s-icebox-11-lovey-dubby-edition/details",
    date: "February 14 2026",
    location: "Texas",
    entrants: 8,
    first: "J-am",
    second: "AshleyAtari",
    third: "Sente",
    vodsUrl: "",
    hideRankImage: true
  },
  {
    eventTitle: "King’s Ransom 2",
    imageUrl: "https://images.start.gg/images/tournament/807112/image-629ebbd7c0afcc7f7993a88b00c12cc0.png",
    eventUrl: "https://www.start.gg/tournament/king-s-ransom-2/details",
    date: "February 7 2026",
    location: "Tennessee",
    entrants: 27,
    first: "Moist",
    second: "knight",
    third: "jankie",
    vodsUrl: "https://www.youtube.com/playlist?list=PLL2RqAT-Fg9YeYpwRhPSDm-KAWtPaZG5l",
    hideRankImage: false
  },
  {
    eventTitle: "Pico Plus #16",
    imageUrl: "https://images.start.gg/images/tournament/874014/image-4b8b29a313fa02abe178bc7edbda0922.png",
    eventUrl: "https://www.start.gg/tournament/pico-plus-16/details",
    date: "February 7 2026",
    location: "California",
    entrants: 27,
    first: "Ryzuul",
    second: "Jonny Sosa",
    third: "Nezergy",
    vodsUrl: "https://www.youtube.com/watch?v=orT-cUkd7hU&list=PL1jiLVSnaIHMI_7Hn7pYw-ISpAQAazB_M",
    hideRankImage: false
  },
  {
    eventTitle: "Pope's Sunday Mass IV",
    imageUrl: "https://images.start.gg/images/tournament/847360/image-d9bf248b1dbeca6ecc7cca0a8ac107b3.png",
    eventUrl: "https://www.start.gg/tournament/pope-s-sunday-mass-iv/details",
    date: "February 1 2026",
    location: "Victoria",
    entrants: 16,
    first: "Ryzuul",
    second: "Tyler",
    third: "DD",
    vodsUrl: "",
    hideRankImage: true
  },
  {
    eventTitle: "Mahtay Melee - Winter '26 Edition",
    imageUrl: "https://images.start.gg/images/tournament/863499/image-45acb75418444796356138f20b59b114.png",
    eventUrl: "https://www.start.gg/tournament/mahtay-melee-winter-26-edition/details",
    date: "January 31 2026",
    location: "Ontario",
    entrants: 21,
    first: "BING",
    second: "Zaza",
    third: "Erg",
    vodsUrl: "",
    hideRankImage: true
  },
  {
    eventTitle: "Get Outplayed 9",
    imageUrl: "https://images.start.gg/images/tournament/864902/image-68b7df2019e573705b541192fad00a3b.png",
    eventUrl: "https://www.start.gg/tournament/get-outplayed-9/details",
    date: "January 31 2026",
    location: "Illinois",
    entrants: 7,
    first: "PokePoke",
    second: "Kief",
    third: "Nano",
    vodsUrl: "",
    hideRankImage: true
  },
  {
    eventTitle: "Pico Plus #15",
    imageUrl: "https://images.start.gg/images/tournament/860989/image-d18a4bd977c91b9e83aab35faed2226b.png",
    eventUrl: "https://www.start.gg/tournament/pico-plus-15/details",
    date: "January 24 2026",
    location: "California",
    entrants: 38,
    first: "Jonny Sosa",
    second: "Blank",
    third: "Sneez",
    vodsUrl: "https://www.youtube.com/watch?v=kcVMNdr2Jqs&list=PL1jiLVSnaIHP5Xw2_Z7H1QZ9YeC6i0nNr",
    hideRankImage: false
  },
  {
    eventTitle: "SOLARPOWERED: BLACKOUT",
    imageUrl: "https://images.start.gg/images/tournament/863219/image-d4257a618b9f740a0407de02fea07eb9.jpg",
    eventUrl: "https://www.start.gg/tournament/solarpowered-blackout/details",
    date: "January 17 2026",
    location: "Texas",
    entrants: 4,
    first: "J-am",
    second: "Mason?",
    third: "Peston",
    vodsUrl: "",
    hideRankImage: true
  },
  {
    eventTitle: "Blacklisted 9: Blacklisted Forever",
    imageUrl: "https://images.start.gg/images/tournament/681909/image-c043212981c638b1eaf4cef1bb2c5363.png",
    eventUrl: "https://www.start.gg/tournament/blacklisted-9-blacklisted-forever/details",
    date: "January 10-11 2026",
    location: "Massachussetts",
    entrants: 111,
    first: "RapMonster",
    second: "Comb",
    third: "Sebas",
    vodsUrl: "https://www.youtube.com/playlist?list=PLov8ro2MZrJL2n1puraMz0NdojK-MB2aG",
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

document.addEventListener('DOMContentLoaded', () => {
  let calPosition = document.querySelector('.calPosition');

  let pmrFilter = document.createElement('a');
  calPosition.appendChild(pmrFilter);
  pmrFilter.classList.add('navCalPast');

  let pmrFilterBtn = document.createElement('button');
  pmrFilter.appendChild(pmrFilterBtn);
  pmrFilterBtn.classList.add('calView');
  pmrFilterBtn.innerHTML = 'PM Rank';

  let pmrHidden = false; // toggle flag

  pmrFilterBtn.addEventListener('click', function () {
    console.log('Button clicked!');

    if (Array.isArray(eventData)) {
      const allPastEvents = document.querySelectorAll('.past-events');

      eventData.forEach((event, index) => {
        if (event.hideRankImage === true) {
          const targetEvent = allPastEvents[index];
          if (targetEvent) {
            if (!pmrHidden) {
              targetEvent.classList.add('hidden');
              console.log(`Hid past-event at index ${index}`);
            } else {
              targetEvent.classList.remove('hidden');
              console.log(`Re-shown past-event at index ${index}`);
            }
          }
        }
      });

      pmrHidden = !pmrHidden;

    } else {
      console.error('eventData is not an array');
    }
  });
});
