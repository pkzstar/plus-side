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
    eventTitle: "Bristol's Basement: Night of 100 Frights",
    imageUrl: "https://images.start.gg/images/tournament/833921/image-780221283eff8062caca216c7e8ca4d3.jpg",
    eventUrl: "https://www.start.gg/tournament/bristol-s-basement-night-of-100-frights/details",
    date: "October 26 2025",
    location: "Bristol",
    entrants: 18,
    first: "Frenzy",
    second: "SkillZ",
    third: "Pi",
    vodsUrl: "",
    hideRankImage: true
  },
  {
    eventTitle: "Pico Plus #12",
    imageUrl: "https://images.start.gg/images/tournament/837412/image-26941b8c04d97120ef6bc1f9e5527cf9.png",
    eventUrl: "https://www.start.gg/tournament/pico-plus-12-1/details",
    date: "October 25 2025",
    location: "California",
    entrants: 23,
    first: "The Doctor",
    second: "Jonny Sosa",
    third: "Suvir",
    vodsUrl: "",
    hideRankImage: false
  },
  {
    eventTitle: "FIGHTING GHOSTS: CARRIED",
    imageUrl: "https://images.start.gg/images/tournament/821399/image-be7efee5a380a0bef6aa896276d88d20.png",
    eventUrl: "https://www.start.gg/tournament/fighting-ghosts-carried/details",
    date: "October 25 2025",
    location: "Missouri",
    entrants: 10,
    first: "Travioli",
    second: "Dru2",
    third: "BBMD",
    vodsUrl: "",
    hideRankImage: true
  },
  {
    eventTitle: "Rat Kings 2",
    imageUrl: "https://images.start.gg/images/tournament/817217/image-c97bbc06a38a79c032e6369d519f565c.png",
    eventUrl: "https://www.start.gg/tournament/rat-kings-2/details",
    date: "October 25 2025",
    location: "Tennessee",
    entrants: 14,
    first: "jankie",
    second: "12YOweaboo",
    third: "KitteSE",
    vodsUrl: "",
    hideRankImage: true
  },
  {
    eventTitle: "Deep Space Tussle",
    imageUrl: "https://images.start.gg/images/tournament/815936/image-ad01466e083a7c957ab5113a42b5d00f.png",
    eventUrl: "https://www.start.gg/tournament/deep-space-tussle/details",
    date: "October 25 2025",
    location: "Illinois",
    entrants: 103,
    first: "SipMastah",
    second: "Ryzuul",
    third: "RapMonster",
    vodsUrl: "https://www.youtube.com/playlist?list=PL_OBsvMFKQ5RN0esWp-VJoUpkYgkxCMn3",
    hideRankImage: false
  },
  {
    eventTitle: "Stock-tober: Melee Edition",
    imageUrl: "https://images.start.gg/images/tournament/834350/image-dfb7188d197f8f719d1d07b3e2dea5b3.jpg",
    eventUrl: "https://www.start.gg/tournament/stock-tober-melee-edition/details",
    date: "October 24 2025",
    location: "Ohio",
    entrants: 10,
    first: "Suidt",
    second: "Peppy",
    third: "Botodo",
    vodsUrl: "",
    hideRankImage: true
  },
  {
    eventTitle: "Into The Depths",
    imageUrl: "https://images.start.gg/images/tournament/804286/image-4ec5e7679af683144500ead153e819a8.png",
    eventUrl: "https://www.start.gg/tournament/into-the-depths-1/details",
    date: "October 24-26 2025",
    location: "Oklahoma",
    entrants: 10,
    first: "DMG",
    second: "cadenville",
    third: "Vince",
    vodsUrl: "",
    hideRankImage: true
  },
  {
    eventTitle: "Peak Skill 13",
    imageUrl: "https://images.start.gg/images/tournament/836375/image-b5112bc0aed40565efd46f675ac2f284.png",
    eventUrl: "https://www.start.gg/tournament/peak-skill-13-1/details",
    date: "October 18 2025",
    location: "New York",
    entrants: 6,
    first: "Mrs. Ledge Dash",
    second: "Flats",
    third: "Apollo",
    vodsUrl: "",
    hideRankImage: true
  },
  {
    eventTitle: "Chase the Crown! @ Knox eSports",
    imageUrl: "https://images.start.gg/images/tournament/811395/image-864709aea60a570f3f39302a39f7b83b.png",
    eventUrl: "https://www.start.gg/tournament/chase-the-crown-knox-esports-5/details",
    date: "October 18 2025",
    location: "Tennessee",
    entrants: 22,
    first: "Moist",
    second: "Den",
    third: "Shenanigans",
    vodsUrl: "",
    hideRankImage: true
  },
  {
    eventTitle: "Unc Frozen's Icebox 9: Extra Spooky Edition",
    imageUrl: "https://images.start.gg/images/tournament/812447/image-9223a0a2f72e5eaef276653f179af67f.jpg",
    eventUrl: "https://www.start.gg/tournament/unc-frozen-s-icebox-9-extra-spooky-edition/details",
    date: "October 18 2025",
    location: "Texas",
    entrants: 13,
    first: "Fury",
    second: "Apathy",
    third: "J-am",
    vodsUrl: "",
    hideRankImage: true
  },
  {
    eventTitle: "ASCENSION 2",
    imageUrl: "https://images.start.gg/images/tournament/812007/image-c129195c1c32f585af14b10d0ecd3dcc.png",
    eventUrl: "https://www.start.gg/tournament/ascension-2-5/details",
    date: "October 4 2025",
    location: "Louisiana",
    entrants: 40,
    first: "JSalt",
    second: "SeariousScar",
    third: "Cyphr",
    vodsUrl: "https://www.youtube.com/playlist?list=PLSM8VDvyf2kPpWourt8T7lqHAbcJ_JItd",
    hideRankImage: true
  },
  {
    eventTitle: "The Big Money Monthly #2",
    imageUrl: "https://images.start.gg/images/tournament/807108/image-0595a918d6b8ca84ec4b24e944867117.png",
    eventUrl: "https://www.start.gg/tournament/the-big-money-monthly-2-400-pot-bonus/details",
    date: "October 4 2025",
    location: "Texas",
    entrants: 26,
    first: "J-am",
    second: "Apathy",
    third: "~CP9~",
    vodsUrl: "",
    hideRankImage: true
  },
  {
    eventTitle: "Québecup 2025",
    imageUrl: "https://images.start.gg/images/tournament/798250/image-9559b71c9580d8937051eddb2aaa0917.png",
    eventUrl: "https://www.start.gg/tournament/qu-becup-2025/details",
    date: "October 4 2025",
    location: "Montréal",
    entrants: 31,
    first: "Blitz",
    second: "Krumpberry",
    third: "MorKs",
    vodsUrl: "https://www.twitch.tv/videos/2583196632",
    hideRankImage: false
  },
  {
    eventTitle: "Game 5 In The Woods!",
    imageUrl: "https://images.start.gg/images/tournament/812714/image-100a76ebb3235581eb4147e4b1af4ffe.png",
    eventUrl: "https://www.start.gg/tournament/game-5-in-the-woods-1/details",
    date: "October 3-5 2025",
    location: "Michigan",
    entrants: 22,
    first: "Dirtboy",
    second: "Lordy",
    third: "Yuko",
    vodsUrl: "",
    hideRankImage: true
  },
  {
    eventTitle: "Knockout Series September 2025 Monthly",
    imageUrl: "https://images.start.gg/images/tournament/832586/image-5b2aa7e1a9b8cdb16903edd0bab2221c.png",
    eventUrl: "https://www.start.gg/tournament/knockout-series-september-2025-monthly/details",
    date: "September 28 2025",
    location: "Western Australia",
    entrants: 5,
    first: "Lynkle",
    second: "RhysCat",
    third: "* ari *; x3 ^~^ ",
    vodsUrl: "",
    hideRankImage: true
  },
  {
    eventTitle: "Pico Plus #11",
    imageUrl: "https://images.start.gg/images/tournament/825404/image-85414f173df05dafd8c4f3aabd1f645a.png",
    eventUrl: "https://www.start.gg/tournament/pico-plus-11/details",
    date: "September 27 2025",
    location: "California",
    entrants: 16,
    first: "Jonny Sosa",
    second: "Nezergy",
    third: "Ducky",
    vodsUrl: "",
    hideRankImage: true
  },
  {
    eventTitle: "Night of the living DED #6",
    imageUrl: "https://images.start.gg/images/tournament/821585/image-dfa691353747d79e2d4964fdbe2c8182.png",
    eventUrl: "https://www.start.gg/tournament/night-of-the-living-ded-6-melee-p/details",
    date: "September 27 2025",
    location: "New York",
    entrants: 5,
    first: "Sebas",
    second: "Elite_DRIFT",
    third: "Mrs. Ledge Dash",
    vodsUrl: "",
    hideRankImage: true
  },
  {
    eventTitle: "Unc Frozen's 8",
    imageUrl: "https://images.start.gg/images/tournament/812456/image-4167347f6a5141a897344ee39c4e94f6.jpg",
    eventUrl: "https://www.start.gg/tournament/unc-frozen-s-icebox-8-1/details",
    date: "September 27 2025",
    location: "Texas",
    entrants: 16,
    first: "Fury",
    second: "Apathy",
    third: "J-am",
    vodsUrl: "",
    hideRankImage: true
  },
  {
    eventTitle: "Get Outplayed 8",
    imageUrl: "https://images.start.gg/images/tournament/793044/image-4ba9fc219c496585c775ea3edc9d0ed5.png",
    eventUrl: "https://www.start.gg/tournament/get-outplayed-8/details",
    date: "September 27 2025",
    location: "Illinois",
    entrants: 32,
    first: "Not Chris",
    second: "Star",
    third: "Chaloopy",
    vodsUrl: "",
    hideRankImage: false
  },
  {
    eventTitle: "UMD Unity: Re-Enrollment",
    imageUrl: "https://images.start.gg/images/tournament/825411/image-4bfbc5a75be6e616f8134f29be56cc09.png",
    eventUrl: "https://www.start.gg/tournament/umd-unity-re-enrollment/details",
    date: "September 20 2025",
    location: "Maryland",
    entrants: 18,
    first: "RapMonster",
    second: "malk",
    third: "Noise",
    vodsUrl: "",
    hideRankImage: true
  },
  {
    eventTitle: "Mass Madness 53 - Fleeting Joy",
    imageUrl: "https://images.start.gg/images/tournament/819943/image-46188b97d89ea521645ca2e3d54065e3.png",
    eventUrl: "https://www.start.gg/tournament/mass-madness-53-fleeting-joy/details",
    date: "September 20 2025",
    location: "Massachusetts",
    entrants: 6,
    first: "Golden",
    second: "Future Shock",
    third: "The Cannamancer",
    vodsUrl: "",
    hideRankImage: true
  },
  {
    eventTitle: "Gecko Cavern 14",
    imageUrl: "https://images.start.gg/images/tournament/826307/image-a030a32e1e230b7bb79568254756001c.png",
    eventUrl: "https://www.start.gg/tournament/gecko-cavern-14/details",
    date: "September 20 2025",
    location: "NSW",
    entrants: 15,
    first: "Ryzuul",
    second: "RNGReallyNotGood",
    third: "Keenansaur",
    vodsUrl: "https://www.youtube.com/watch?v=A4ApKqj5zGo",
    hideRankImage: true
  },
  {
    eventTitle: "Mahtay Melee - Summer '25 Edition",
    imageUrl: "https://images.start.gg/images/tournament/810534/image-b0813696d50fa0323c0c80c5f16b25bf.jpg",
    eventUrl: "https://www.start.gg/tournament/mahtay-melee-summer-25-edition/details",
    date: "September 20 2025",
    location: "Ontario",
    entrants: 24,
    first: "BING",
    second: "Graapefruit",
    third: "Erg",
    vodsUrl: "",
    hideRankImage: true
  },
  {
    eventTitle: "Dream Rotation #2 - Winner Stays",
    imageUrl: "https://images.start.gg/images/tournament/801105/image-99439f35d3d1c5d1bc6c7a2bd7904487.png",
    eventUrl: "https://www.start.gg/tournament/dream-rotation-2-winner-stays/details",
    date: "September 13 2025",
    location: "Pennsylvania",
    entrants: 10,
    first: "Aluminis",
    second: "Yuko",
    third: "Vaporeon",
    vodsUrl: "",
    hideRankImage: true
  },
  {
    eventTitle: "Big Ohio Tournament",
    imageUrl: "../images/past-events/BOT.png",
    eventUrl: "https://www.start.gg/tournament/big-ohio-tournament/events",
    date: "September 7 2025",
    location: "Ohio",
    entrants: 79,
    first: "RapMonster",
    second: "Morsecode762",
    third: "Not Chris",
    vodsUrl: "https://www.youtube.com/playlist?list=PLXuSSlxxWDDq3rwRDZ2mpOpyh2jFTy42n",
    hideRankImage: false
  },
  {
    eventTitle: "House of Numbus 4",
    imageUrl: "https://images.start.gg/images/tournament/818519/image-0729d0e2842572c0f2abfbf1782487b2.jpg",
    eventUrl: "https://www.start.gg/tournament/house-of-nimbus-4/details",
    date: "August 31 2025",
    location: "California",
    entrants: 11,
    first: "The Doctor",
    second: "SipMastah",
    third: "I0N",
    vodsUrl: "",
    hideRankImage: true
  },
  {
    eventTitle: "DO NOT SKATE",
    imageUrl: "https://images.start.gg/images/tournament/811431/image-b160a9181846ac1c8d5d7491df46670a.png",
    eventUrl: "https://www.start.gg/tournament/do-not-skate/details",
    date: "August 23 2025",
    location: "New Jersey",
    entrants: 21,
    first: "Shiny Zubat",
    second: "essy",
    third: "Shadowhawke",
    vodsUrl: "https://www.youtube.com/watch?v=BsUn7qQvtOM",
    hideRankImage: false
  },
  {
    eventTitle: "Pico Plus #10 - Super Pico or something",
    imageUrl: "https://images.start.gg/images/tournament/812842/image-42847d3266ce122c517df1e71c1dd7e0.png",
    eventUrl: "https://www.start.gg/tournament/pico-plus-10-super-pico-or-something/details",
    date: "August 23 2025",
    location: "California",
    entrants: 39,
    first: "Nezergy",
    second: "Suvir",
    third: "Saaxir",
    vodsUrl: "https://youtube.com/playlist?list=PL1jiLVSnaIHPsbIKyuXchBDWXOMRjHPpU&si=nTRV1MjnPknXKpCR",
    hideRankImage: false
  },
  {
    eventTitle: "Unc Frozen's Icebox 7",
    imageUrl: "https://images.start.gg/images/tournament/812447/image-9223a0a2f72e5eaef276653f179af67f.jpg",
    eventUrl: "https://www.start.gg/tournament/unc-frozen-s-icebox-7/details",
    date: "August 23 2025",
    location: "Texas",
    entrants: 12,
    first: "Apathy",
    second: "J-am",
    third: "Wish",
    vodsUrl: "https://www.youtube.com/playlist?list=PL4kFPlSUbi30VjJWScVkRUV5VqjrWnynB",
    hideRankImage: true
  },
  {
    eventTitle: "Gecko Cavern 13",
    imageUrl: "https://images.start.gg/images/tournament/814443/image-5e8666e13c4e2f79edf2bd6768b9a689.png",
    eventUrl: "https://www.start.gg/tournament/gecko-cavern-13/details",
    date: "August 16 2025",
    location: "NSW",
    entrants: 23,
    first: "Ryzuul",
    second: "Star",
    third: "RNGReallyNotGood",
    vodsUrl: "https://youtu.be/TbseUza4ZSg?si=ZztAi-715Om8foGS",
    hideRankImage: true
  },
  {
    eventTitle: "Mass Madness 52 - Endless Summer",
    imageUrl: "https://images.start.gg/images/tournament/809255/image-fbc5cb39766a17395349c4e8834c4d34.png",
    eventUrl: "https://www.start.gg/tournament/mass-madness-52-endless-summer/details",
    date: "August 16 2025",
    location: "Massachussets",
    entrants: 6,
    first: "Motobug",
    second: "essy",
    third: "Golden",
    vodsUrl: "",
    hideRankImage: true
  },
  {
    eventTitle: "Night of the living DED #5",
    imageUrl: "https://images.start.gg/images/tournament/810567/image-57519baa7115494776be96b98e3da25a.png",
    eventUrl: "https://www.start.gg/tournament/night-of-the-living-ded-5-melee-p/details",
    date: "August 16 2025",
    location: "New York",
    entrants: 15,
    first: "Aklo",
    second: "Mulldrifter",
    third: "Epoodle",
    vodsUrl: "https://www.twitch.tv/videos/2577395547",
    hideRankImage: true
  },
  {
    eventTitle: "Gold Rush",
    imageUrl: "https://images.start.gg/images/tournament/800623/image-8b92e2a8e28481295ea4e27c9def6993.png",
    eventUrl: "https://www.start.gg/tournament/gold-rush-10/details",
    date: "August 16 2025",
    location: "Colorado",
    entrants: 34,
    first: "polear",
    second: "Triforce Trampstamp",
    third: "Tuck",
    vodsUrl: "https://www.youtube.com/playlist?list=PL_OBsvMFKQ5TtrTzhyz76xeCMvIOlODSj",
    hideRankImage: false
  },
  {
    eventTitle: "Construct X: 2025",
    imageUrl: "https://images.start.gg/images/tournament/794501/image-8794fe27cd441ebf73297992d28f01b8.png",
    eventUrl: "https://www.start.gg/tournament/construct-x-2025/details",
    date: "August 10 2025",
    location: "Wisconsin",
    entrants: 25,
    first: "SoulOfficer",
    second: "Kendrick",
    third: "Jackie",
    vodsUrl: "https://www.youtube.com/playlist?list=PLkZ-2v0APBi5ubDOPXz0N34dago_CG6gw",
    hideRankImage: false
  },
  {
    eventTitle: "˅⁰𝚒Ꮷ 𝘕𝖊Ⱃʯ𝗹𝜶 2: Eternity",
    imageUrl: "https://images.start.gg/images/tournament/808583/image-57f90de8d46034f1db69dac305f20b3a.jpg",
    eventUrl: "https://www.start.gg/tournament/2-eternity/details",
    date: "August 9 2025",
    location: "Virginia",
    entrants: 49,
    first: "Morsecode762",
    second: "essy",
    third: "reslived",
    vodsUrl: "https://www.youtube.com/playlist?list=PLXuSSlxxWDDqFjP6VFgc-c9z5Gn8RWFrH",
    hideRankImage: false
  },
  {
    eventTitle: "St. No John's 11",
    imageUrl: "https://images.start.gg/images/tournament/762867/image-5186c03397ad9db4b9df2f145a778d81.png",
    eventUrl: "https://www.start.gg/tournament/st-no-john-s-11/details",
    date: "August 8-10 2025",
    location: "Newfoundland",
    entrants: 34,
    first: "slickNL",
    second: "nunavut kaiju",
    third: "Josh MagBrag",
    vodsUrl: "",
    hideRankImage: true
  },
  {
    eventTitle: "Rev It Up for Charity!",
    imageUrl: "https://images.start.gg/images/tournament/799668/image-02c7c381abb660e94bdfd60ff9265070.png",
    eventUrl: "https://www.start.gg/tournament/rev-it-up-for-charity/details",
    date: "August 6 2025",
    location: "Illinois",
    entrants: 32,
    first: "Chaloopy",
    second: "Comb",
    third: "ORLY",
    vodsUrl: "https://youtube.com/watch?v=3Z_L3yh_bec",
    hideRankImage: false
  },
  {
    eventTitle: "Allston Allstars V - Tom's Birthday Bash!",
    imageUrl: "https://images.start.gg/images/tournament/804685/image-95c4ad4dc1960e3d8efe1666db6a042a.png",
    eventUrl: "https://www.start.gg/tournament/allston-allstars-v-tom-s-birthday-bash/details",
    date: "August 2 2025",
    location: "Massachussets",
    entrants: 25,
    first: "Twisty",
    second: "EduPorp",
    third: "Kumatora",
    vodsUrl: "https://www.twitch.tv/puunk_live/v/2529342055?sr=a",
    hideRankImage: false
  },
  {
    eventTitle: "Bristol's Basement: Wrath of the Lich King Classic",
    imageUrl: "https://images.start.gg/images/tournament/804165/image-5a87cbe427ec6c49c4065b5702d6d4e0.jpg",
    eventUrl: "https://www.start.gg/tournament/bristol-s-basement-wrath-of-the-lich-king-classic/details",
    date: "July 27 2025",
    location: "Bristol",
    entrants: 16,
    first: "CanD",
    second: "Pi",
    third: "Frenzy",
    vodsUrl: "",
    hideRankImage: true
  },
  {
    eventTitle: "Pico Plus #9",
    imageUrl: "https://images.start.gg/images/tournament/805139/image-89fda7ff1d4e6aeebd759d5f2a55c5e5.png",
    eventUrl: "https://www.start.gg/tournament/pico-plus-9/details",
    date: "July 26 2025",
    location: "California",
    entrants: 14,
    first: "Nezergy",
    second: "Dumshiny",
    third: "Ducky",
    vodsUrl: "",
    hideRankImage: true
  },
  {
    eventTitle: "Filler Fest",
    imageUrl: "https://images.start.gg/images/tournament/782711/image-0b6b921cf69f427ea3807f0696b1105f.png",
    eventUrl: "https://www.start.gg/tournament/filler-fest/details",
    date: "July 26 2025",
    location: "Kansas",
    entrants: 66,
    first: "SoulOfficer",
    second: "Chaloopy",
    third: "essy",
    vodsUrl: "https://youtube.com/watch?v=t8XPe-U_siE",
    hideRankImage: false
  },
  {
    eventTitle: "Don't Mind The Cats!",
    imageUrl: "https://images.start.gg/images/tournament/804035/image-a58166aff500f5a101bde542a65b8832.jpg",
    eventUrl: "https://www.start.gg/tournament/don-t-mind-the-cats/details",
    date: "July 19 2025",
    location: "Pennsylvania",
    entrants: 3,
    first: "Travy",
    second: "Phoenix",
    third: "CBD Shawarma",
    vodsUrl: "",
    hideRankImage: true
  },
  {
    eventTitle: "Unc Frozen's Icebox 6",
    imageUrl: "https://images.start.gg/images/tournament/804218/image-b2c42efd0acb16f9626cddf51101c977.jpg",
    eventUrl: "https://www.start.gg/tournament/unc-frozen-s-icebox-6/details",
    date: "July 19 2025",
    location: "Texas",
    entrants: 9,
    first: "Apathy",
    second: "J-am",
    third: "fang",
    vodsUrl: "",
    hideRankImage: true
  },
  {
    eventTitle: "Night of the living DED #4",
    imageUrl: "https://images.start.gg/images/tournament/800374/image-82123d4127a93546884f1e01693b3629.png",
    eventUrl: "https://www.start.gg/tournament/night-of-the-living-ded-4-melee-p-with-potbonuses/details",
    date: "July 19 2025",
    location: "New York",
    entrants: 11,
    first: "Aklo",
    second: "SDJ",
    third: "Mulldrifter",
    vodsUrl: "",
    hideRankImage: true
  },
  {
    eventTitle: "Condo of Blood 5: The Summer Saga",
    imageUrl: "https://images.start.gg/images/tournament/792555/image-a2e915e0817da6f4b65571630446c010.png",
    eventUrl: "https://www.start.gg/tournament/condo-of-blood-5-the-summer-saga/details",
    date: "July 19 2025",
    location: "Ontario",
    entrants: 35,
    first: "Blitz",
    second: "Krumpberry",
    third: "Titanium",
    vodsUrl: "https://www.youtube.com/watch?v=ipUJiI9G73s",
    hideRankImage: false
  },
  {
    eventTitle: "Phantom 2025",
    imageUrl: "https://images.start.gg/images/tournament/762524/image-bd71887f81c5ae41ec8ad09ad0c4cda5.png",
    eventUrl: "https://www.start.gg/tournament/phantom-2025/details",
    date: "July 18-20 2025",
    location: "VIC",
    entrants: 52,
    first: "Joshman",
    second: "Tyler",
    third: "Rayquazaman812",
    vodsUrl: "https://www.twitch.tv/videos/2523606926",
    hideRankImage: true
  },
  {
    eventTitle: "PROJECT PLUS ULTRA 2",
    imageUrl: "https://images.start.gg/images/tournament/802444/image-3298b950de63d750209fd9754c084884.jpg",
    eventUrl: "https://www.start.gg/tournament/project-plus-ultra-2/details",
    date: "July 12 2025",
    location: "Louisiana",
    entrants: 14,
    first: "rabit!",
    second: "SeariousScar",
    third: "Sneakh",
    vodsUrl: "",
    hideRankImage: true
  },
  {
    eventTitle: "Platform Paradise",
    imageUrl: "https://images.start.gg/images/tournament/797484/image-4180a11dbf066a5132c9a87b992dd6a1.png",
    eventUrl: "https://www.start.gg/tournament/platform-paradise/details",
    date: "July 12 2025",
    location: "North Carolina",
    entrants: 9,
    first: "Mr. Watch & Learn",
    second: "Pure",
    third: "Milky Way",
    vodsUrl: "",
    hideRankImage: true
  },
  {
    eventTitle: "Game 5 In The D #10: Take Me Out To The Ball Game!",
    imageUrl: "https://images.start.gg/images/tournament/797472/image-6120b0c3f5bd518470ae9f3d3a1f6957.jpg",
    eventUrl: "https://www.start.gg/tournament/game-5-in-the-d-10-take-me-out-to/details",
    date: "July 12 2025",
    location: "Michigan",
    entrants: 39,
    first: "Dirtboy",
    second: "SoulOfficer",
    third: "Ellipsis",
    vodsUrl: "https://youtu.be/EW15FyiWwls",
    hideRankImage: false
  },
  {
    eventTitle: "Second Wind 2025",
    imageUrl: "https://images.start.gg/images/tournament/773119/image-97ff7dec6fd4919e6095a828419d0fd9.png",
    eventUrl: "https://www.start.gg/tournament/second-wind-2025/details",
    date: "July 11-13 2025",
    location: "Wellington",
    entrants: 24,
    first: "Ryzuul",
    second: "Goodie",
    third: "IcyK",
    vodsUrl: "https://youtu.be/OmrFMKG42wI",
    hideRankImage: true
  },
  {
    eventTitle: "Star Spangled Shine Spike",
    imageUrl: "https://images.start.gg/images/tournament/794977/image-60e10ad56569de5337bfe807879178fa.png",
    eventUrl: "https://www.start.gg/tournament/star-spangled-shine-spike/details",
    date: "July 5 2025",
    location: "Mississippi",
    entrants: 9,
    first: "rabit!",
    second: "GARY NEVER GARY AGAIN",
    third: "Luch",
    vodsUrl: "",
    hideRankImage: true
  },
  {
    eventTitle: "Get Out Of My Venue: Certificate of Disapproval",
    imageUrl: "https://images.start.gg/images/tournament/791339/image-b07eff3cbe0f9470ff1a8dbcd88eae32.png",
    eventUrl: "https://www.start.gg/tournament/get-out-of-my-venue-certificate-of-disapproval-1/details",
    date: "July 4-6 2025",
    location: "Ontario",
    entrants: 63,
    first: "Morsecode762",
    second: "Blitz",
    third: "RapMonster",
    vodsUrl: "https://www.youtube.com/watch?v=o-LcVhSQ9gM",
    hideRankImage: false
  },
  {
    eventTitle: "Pope's Sunday Mass: Conclave",
    imageUrl: "https://images.start.gg/images/tournament/784333/image-dea410335ee8f381ae4e74b977bcddf5.png",
    eventUrl: "https://www.start.gg/tournament/pope-s-sunday-mass-conclave/details",
    date: "June 29 2025",
    location: "VIC",
    entrants: 8,
    first: "Ryzuul",
    second: "Tyler",
    third: "Goodie",
    vodsUrl: "",
    hideRankImage: true
  },
  {
    eventTitle: "The Good Ol' Days",
    imageUrl: "https://images.start.gg/images/tournament/798041/image-84ddb6856b036519959d9a664f9ceef8.jpg",
    eventUrl: "https://www.start.gg/tournament/the-good-ol-days/details",
    date: "June 28 2025",
    location: "Michigan",
    entrants: 14,
    first: "Dirtboy",
    second: "Lordy",
    third: "Yuko",
    vodsUrl: "",
    hideRankImage: true
  },
  {
    eventTitle: "Scrapyard 2025: P+ & HDR",
    imageUrl: "https://images.start.gg/images/tournament/790722/image-8d41b2e5b384a247217d427b2a940b39.png",
    eventUrl: "https://www.start.gg/tournament/scrapyard-2025-p-hdr/details",
    date: "June 28 2025",
    location: "North Carolina",
    entrants: 29,
    first: "knight",
    second: "max",
    third: "Timebones",
    vodsUrl: "",
    hideRankImage: true
  },
  {
    eventTitle: "Rat Kings",
    imageUrl: "https://images.start.gg/images/tournament/784324/image-935d6151259b9029a58dae06ac476c49.png",
    eventUrl: "https://www.start.gg/tournament/rat-kings/details",
    date: "June 28 2025",
    location: "Tennessee",
    entrants: 32,
    first: "Chaloopy",
    second: "Xtreme",
    third: "Shenanigans",
    vodsUrl: "https://www.youtube.com/playlist?list=PLL2RqAT-Fg9ZTvirLWU8bPUYOrtqmIort",
    hideRankImage: false
  },
  {
    eventTitle: "Mass Madness 51",
    imageUrl: "https://images.start.gg/images/tournament/789104/image-4e2ac504b6084d500c64c434c9776892.png",
    eventUrl: "https://www.start.gg/tournament/mass-madness-51-the-fine-art-of-interaction/details",
    date: "June 21 2025",
    location: "Massachusetts",
    entrants: 8,
    first: "Imogen Heat",
    second: "sfy bees",
    third: "jankie",
    vodsUrl: "",
    hideRankImage: true
  },
  {
    eventTitle: "House of Nimbus 3",
    imageUrl: "https://images.start.gg/images/tournament/797254/image-269f8df508ef2e1df0862bef405f16fc.jpg",
    eventUrl: "https://www.start.gg/tournament/house-of-nimbus-3/details",
    date: "June 21 2025",
    location: "California",
    entrants: 7,
    first: "SipMastah",
    second: "The Doctor",
    third: "Ivayne",
    vodsUrl: "",
    hideRankImage: true
  },
  {
    eventTitle: "Unc Frozen's Icebox 5: Melee Edition",
    imageUrl: "https://images.start.gg/images/tournament/794197/image-2363f4f700d4126a4b5a105a6d4ab208.jpg",
    eventUrl: "https://www.start.gg/tournament/unc-frozen-s-icebox-5-melee-edition/details",
    date: "June 21 2025",
    location: "Texas",
    entrants: 25,
    first: "Apathy",
    second: "J-am",
    third: "Salt",
    vodsUrl: "https://www.youtube.com/playlist?list=PL4kFPlSUbi30BKzZEOyfXEhdLR1lzTjo-",
    hideRankImage: false
  },
  {
    eventTitle: "Trading Stocks #15: Summer Tour",
    imageUrl: "https://images.start.gg/images/tournament/789151/image-c190cbe3ee6d9671442b6052d71c0803.png",
    eventUrl: "https://www.start.gg/tournament/trading-stocks-15-summer-tour/details",
    date: "June 21 2025",
    location: "South Carolina",
    entrants: 6,
    first: "fries",
    second: "Frumps",
    third: "Chord",
    vodsUrl: "",
    hideRankImage: true
  },
  {
    eventTitle: "The Truce 2:¡No Pasarán!",
    imageUrl: "https://images.start.gg/images/tournament/769345/image-3b234072f79221c181e6d499ef1f6daa.jpg",
    eventUrl: "https://www.start.gg/tournament/the-truce-2-no-pasar-n/details",
    date: "June 21-22 2025",
    location: "Le Kremlin-Bicêtre",
    entrants: 25,
    first: "Melody",
    second: "Kazeol",
    third: "Smash_Falco3",
    vodsUrl: "",
    hideRankImage: true
  },
  {
    eventTitle: "Gecko Cavern 12",
    imageUrl: "https://images.start.gg/images/tournament/796229/image-3407b6e466875bc7b4d0979895d021c2.png",
    eventUrl: "https://www.start.gg/tournament/gecko-cavern-12/event/project-singles",
    date: "June 14 2025",
    location: "NSW",
    entrants: 20,
    first: "Ryzuul",
    second: "RNGReallyNotGood",
    third: "Star",
    vodsUrl: "https://youtu.be/d1-hKeGwGdc?si=ZLWlotUw58iTKeLw",
    hideRankImage: true
  },
  {
    eventTitle: "Pico Plus #8",
    imageUrl: "https://images.start.gg/images/tournament/790582/image-16441ad7703911ed90f6f7a6191abf12.png",
    eventUrl: "https://www.start.gg/tournament/pico-plus-8/details",
    date: "June 14 2025",
    location: "California",
    entrants: 25,
    first: "Sneez",
    second: "Anday",
    third: "Zenokids",
    vodsUrl: "https://www.youtube.com/playlist?list=PL1jiLVSnaIHNxmHrM2xGK_It2keDZhbiS",
    hideRankImage: true
  },
  {
    eventTitle: "Schlocal Arcadian 2025",
    imageUrl: "https://images.start.gg/images/tournament/781625/image-28dde452f2dbbaf547c84bd62a25e8bf.png",
    eventUrl: "https://www.start.gg/tournament/schlocal-arcadian-2025/details",
    date: "June 14 2025",
    location: "VIC",
    entrants: 9,
    first: "Microsoft J",
    second: "Amph",
    third: "Rayquazaman812",
    vodsUrl: "",
    hideRankImage: true
  },
  {
    eventTitle: "King's Ransom",
    imageUrl: "https://images.start.gg/images/tournament/769414/image-e69ffb0c62ba05fd003d5d5c00e88218.png",
    eventUrl: "https://www.start.gg/tournament/king-s-ransom/details",
    date: "June 14 2025",
    location: "Tennessee",
    entrants: 25,
    first: "Moist",
    second: "knight",
    third: "Shenanigans",
    vodsUrl: "https://www.youtube.com/playlist?list=PLL2RqAT-Fg9Z2v2SbZgqLyYOr0NgrKAXk",
    hideRankImage: false
  },
  {
    eventTitle: "Evergreen 2025",
    imageUrl: "https://images.start.gg/images/tournament/750366/image-eafe71c5eb426044109a764ff4e509e6.png?ehk=9K7Fu4sI1p1c%2B46PJC1aUGNOkQMLidsxRtyFnmzPcDo%3D&ehkOptimized=RokVDvc%2FvsAXu1Ql9wytiQWCuVBQ7%2BqG018F1DGCfvQ%3D",
    eventUrl: "https://www.start.gg/tournament/evergreen-2025/details",
    date: "June 14 2025",
    location: "New Jersey",
    entrants: 31,
    first: "Shadowhawke",
    second: "Vaporeon",
    third: "Mulldrifter",
    vodsUrl: "",
    hideRankImage: false
  },
  {
    eventTitle: "Moonshine Monthly #5",
    imageUrl: "https://images.start.gg/images/tournament/788909/image-81e9bf8b23004bd63a1d9693d9881351.png",
    eventUrl: "https://www.start.gg/tournament/moonshine-monthly-5/details",
    date: "June 1 2025",
    location: "South Carolina",
    entrants: 9,
    first: "knight",
    second: "fries",
    third: "Cybil",
    vodsUrl: "",
    hideRankImage: true
  },
  {
    eventTitle: "Fight at the Museum",
    imageUrl: "https://images.start.gg/images/tournament/742717/image-03e5cfa0072bf8a26da43d845c6cfd05.png",
    eventUrl: "https://www.start.gg/tournament/fight-at-the-museum/details",
    date: "May 31 2025",
    location: "Oregon",
    entrants: 47,
    first: "Av",
    second: "Sneez",
    third: "PartyGhoul",
    vodsUrl: "https://www.youtube.com/playlist?list=PLzS-yXSHqq9h62O1oGz0K7znyxfUgplOj",
    hideRankImage: false
  },
  {
    eventTitle: "House of Nimbus 2",
    imageUrl: "https://images.start.gg/images/tournament/788261/image-846f651e218eaf6f4fcda9b23f070246.jpg",
    eventUrl: "https://www.start.gg/tournament/house-of-nimbus-2/details",
    date: "May 24 2025",
    location: "California",
    entrants: 14,
    first: "The Doctor",
    second: "Ivayne",
    third: "Av",
    vodsUrl: "",
    hideRankImage: true
  },
  {
    eventTitle: "Allston Allstars IV",
    imageUrl: "https://images.start.gg/images/tournament/778092/image-95dcee666f43c5665d9559d1be5c6dfc.png",
    eventUrl: "https://www.start.gg/tournament/allston-allstars-iv/details",
    date: "May 24 2025",
    location: "Massachussetts",
    entrants: 11,
    first: "Imogen Heat",
    second: "Motobug",
    third: "Eden",
    vodsUrl: "",
    hideRankImage: true
  },
  {
    eventTitle: "Gecko Cavern 11",
    imageUrl: "https://images.start.gg/images/tournament/790632/image-6b06a2f054f1b49b92915dfe682b4f2a.png",
    eventUrl: "https://www.start.gg/tournament/gecko-cavern11/details",
    date: "May 24 2025",
    location: "NSW",
    entrants: 15,
    first: "RNGReallyNotGood",
    second: "Michael",
    third: "WolfRagnell",
    vodsUrl: "",
    hideRankImage: true
  },
  {
    eventTitle: "Dream Rotation #1 - Pass the Controller!",
    imageUrl: "https://images.start.gg/images/tournament/788255/image-eb1760b243e2d58e33dba82b860a5e9a.png",
    eventUrl: "https://www.start.gg/tournament/dream-rotation-1-pass-the-controller/details",
    date: "May 24 2025",
    location: "Philadelphia",
    entrants: 23,
    first: "Vv",
    second: "Vaporeon",
    third: "Laska",
    vodsUrl: "https://youtube.com/playlist?list=PLc8hdARsZiMlfY4AetKeIXQwzau-NuWdN&si=reKQwg89bJwtwPHt",
    hideRankImage: true
  },
  {
    eventTitle: "Game 5 in the D #9",
    imageUrl: "https://images.start.gg/images/tournament/786534/image-5587e14194f46331fd2a5c0919905cac.jpg",
    eventUrl: "https://www.start.gg/tournament/game-5-in-the-d-9/details",
    date: "May 24 2025",
    location: "Michigan",
    entrants: 14,
    first: "Yuko",
    second: "Daddiest",
    third: "Lord Wavy",
    vodsUrl: "",
    hideRankImage: true
  },
  {
    eventTitle: "Who's on Ledge? 12",
    imageUrl: "https://images.start.gg/images/tournament/786126/image-a1d57cc11cc587883ff617c3d5450671.png",
    eventUrl: "https://www.start.gg/tournament/who-s-on-ledge-12/details",
    date: "May 24 2025",
    location: "Iowa",
    entrants: 5,
    first: "Jank",
    second: "Slowking",
    third: "Tienda",
    vodsUrl: "",
    hideRankImage: true
  },
  {
    eventTitle: "Super TPS V",
    imageUrl: "https://images.start.gg/images/tournament/759108/image-a789036f8d8bd8b3f9d3d4f64691be2f.png",
    eventUrl: "https://www.start.gg/tournament/super-tps-v/details",
    date: "May 23 2025",
    location: "Illinois",
    entrants: 46,
    first: "SipMastah",
    second: "Sneez",
    third: "Chaloopy",
    vodsUrl: "https://www.youtube.com/playlist?list=PL_OBsvMFKQ5SnNwyYBaHG1x0GR-LsJbeY",
    hideRankImage: false
  },
  {
    eventTitle: "Somnio 7",
    imageUrl: "https://images.start.gg/images/tournament/751000/image-ed26f48afad2877aba57f1490bb6f714.png?ehk=6y%2FyE%2BucwtxN5FHMui%2FrMuvo4VgUICio6mgUEdCk4eE%3D&ehkOptimized=0sZkKNeR5pDkTDdlWAu53aBCDIMVsLokiPOWWWvzLJI%3D",
    eventUrl: "https://www.start.gg/tournament/somnio-7/details",
    date: "May 17-18 2025",
    location: "Netherlands",
    entrants: 26,
    first: "Freekleef",
    second: "Commander Koen",
    third: "Jules",
    vodsUrl: "",
    hideRankImage: true
  },
  {
    eventTitle: "Mudbug Melee '25",
    imageUrl: "https://images.start.gg/images/tournament/783023/image-f8f7c20c5de6f86d7abb494e727f11aa.png",
    eventUrl: "https://www.start.gg/tournament/mudbug-melee-25/details",
    date: "May 17 2025",
    location: "Mississippi",
    entrants: 21,
    first: "Spark",
    second: "rabit!",
    third: "Magi",
    vodsUrl: "",
    hideRankImage: true
  },
  {
    eventTitle: "Project D",
    imageUrl: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F734216%2Fimage-ee3ee05c35dba007a95866d0be0d48da-optimized.png&ehk=yWRBbth3w%2BRzWsSxGEGuUudXJ15ui28vMkBOBEMevio%3D&w=280&h=280&r=0",
    eventUrl: "https://www.start.gg/tournament/project-d/details",
    date: "May 17 2025",
    location: "Birmingham",
    entrants: 37,
    first: "Smash_Falco3",
    second: "Frenzy",
    third: "Kine.",
    vodsUrl: "https://youtu.be/D8zg4qwzUbU?si=RopEYA0jqwxekBlq",
    hideRankImage: true
  },
  {
    eventTitle: "Untitled Colorado Project Plus Tournament",
    imageUrl: "https://images.start.gg/images/tournament/757771/image-8310886c0466b603a684f568a135a115.png?ehk=20Doph1xkV9g6apsC%2BYIyLvlSIDaAR1CWumo4HsGOOI%3D&ehkOptimized=9HUJfmE%2FUw%2BFO4OKnGpRkl1ElZEx5E0ocEAPk8FV3Fk%3D",
    eventUrl: "https://www.start.gg/tournament/untitled-colorado-project-plus-tournament/details",
    date: "May 16 2025",
    location: "Colorado",
    entrants: 36,
    first: "polear",
    second: "Strat",
    third: "Triforce Trampstamp",
    vodsUrl: "https://youtube.com/playlist?list=PLjAjRxkFDTqOZh4zh4Rp3GzXbhh0Xnd-B&si=HcknURVJOKQ57p5I",
    hideRankImage: true
  },
  {
    eventTitle: "swaggerbeebumbler spring-fling bash #shoutoutmoms",
    imageUrl: "https://images.start.gg/images/tournament/774539/image-cdaad655ab58537f66fb9d518480b359.png",
    eventUrl: "https://www.start.gg/tournament/swaggerbeebumbler-spring-fling-bash-shoutoutmoms/details",
    date: "May 11 2025",
    location: "North Carolina",
    entrants: 23,
    first: "grealy",
    second: "knight",
    third: "Karma",
    vodsUrl: "https://www.twitch.tv/videos/2475910732",
    hideRankImage: true
  },
  {
    eventTitle: "Trading Stocks #14: Summer Tour",
    imageUrl: "https://images.start.gg/images/tournament/786320/image-28defc849a03e7c455154e7c517441a1.png",
    eventUrl: "https://www.start.gg/tournament/trading-stocks-14-summer-tour/details",
    date: "May 10 2025",
    location: "South Carolina",
    entrants: 7,
    first: "Supersponge",
    second: "Nera",
    third: "knight",
    vodsUrl: "",
    hideRankImage: true
  },
  {
    eventTitle: "Gecko Cavern 10",
    imageUrl: "https://images.start.gg/images/tournament/784340/image-dbadece0f8a6841bbb93fe5c2f7d569f.png",
    eventUrl: "https://www.start.gg/tournament/gecko-cavern-10/details",
    date: "May 10 2025",
    location: "NSW",
    entrants: 23,
    first: "RNGReallyNotGood",
    second: "Michael",
    third: "Star",
    vodsUrl: "",
    hideRankImage: true
  },
  {
    eventTitle: "Pico Plus 7",
    imageUrl: "https://images.start.gg/images/tournament/781584/image-ee03eac14f648dbe120789cc990369fc.png",
    eventUrl: "https://www.start.gg/tournament/pico-plus-7/details",
    date: "May 3 2025",
    location: "California",
    entrants: 22,
    first: "Nezergy",
    second: "Sneez",
    third: "Aion",
    vodsUrl: "",
    hideRankImage: true
  },
  {
    eventTitle: "Mass Madness 50 - 10th Anniversary Edition! $250 Pot Bonus!",
    imageUrl: "https://images.start.gg/images/tournament/771392/image-0484d0a23129cae08d0baad5257c7d5f.png",
    eventUrl: "https://www.start.gg/tournament/mass-madness-50-10th-anniversary-edition-250-pot-bonus/details",
    date: "May 3 2025",
    location: "Massachussetts",
    entrants: 20,
    first: "Flarp",
    second: "Kumatora",
    third: "Twisty",
    vodsUrl: "",
    hideRankImage: true
  },
  {
    eventTitle: "Outrivaled: Max's Birthday Bash!",
    imageUrl: "https://images.start.gg/images/tournament/753093/image-9b2bf5f982e081df3b24026678ec7647.jpg?ehk=TgYJr37NhsI44adFcBcfkbT7iXgebyVmgGAz8dutibg%3D&ehkOptimized=XXsx6z6UOd7LkTqWzFfC8v87P6TNOfPQzq6hE7hxd%2BU%3D",
    eventUrl: "https://www.start.gg/tournament/outrivaled-max-s-birthday-bash/details",
    date: "May 3 2025",
    location: "Illinois",
    entrants: 24,
    first: "Not Chris",
    second: "metroid",
    third: "SoulOfficer",
    vodsUrl: "https://www.youtube.com/playlist?list=PL_OBsvMFKQ5ThaNl9g6S9JnTZLL9aIzJU",
    hideRankImage: true
  },
  {
    eventTitle: "Moonshine Monthly #4",
    imageUrl: "https://images.start.gg/images/tournament/775552/image-dedd62c0b4e9387b14fce91ac01228fd.png",
    eventUrl: "https://www.start.gg/tournament/moonshine-monthly-4/details",
    date: "April 27 2025",
    location: "South Carolina",
    entrants: 12,
    first: "fries",
    second: "Supersponge",
    third: "knight",
    vodsUrl: "",
    hideRankImage: true
  },
  {
    eventTitle: "Unc Frozen's Icebox 3",
    imageUrl: "https://images.start.gg/images/tournament/767296/image-3ac7d583902781432c42ac79bb3afd7d.jpg",
    eventUrl: "https://www.start.gg/tournament/unc-frozen-s-icebox-3/details",
    date: "April 26 2025",
    location: "Texas",
    entrants: 29,
    first: "Salt",
    second: "Fury",
    third: "J-am",
    vodsUrl: "https://www.youtube.com/playlist?list=PL4kFPlSUbi30LhrHarPXiBR_n3Xm4ZbIh",
    hideRankImage: false
  },
  {
    eventTitle: "Condo of Blood 4",
    imageUrl: "https://images.start.gg/images/tournament/764336/image-1d3813665a5f0e259657983a49f1d8cd.png",
    eventUrl: "https://www.start.gg/tournament/condo-of-blood-4-500-pot-bonus/details",
    date: "April 26 2025",
    location: "Ontario",
    entrants: 34,
    first: "Dirtboy",
    second: "MorKs",
    third: "Erg",
    vodsUrl: "https://www.youtube.com/watch?v=yAdKe-iql8Y",
    hideRankImage: false
  },
  {
    eventTitle: "Smash Camp 2025",
    imageUrl: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F745405%2Fimage-6327114b0866259802cb7cc27961a65e-optimized.png&ehk=ePMjyKUnayBCiQbvVO%2BLL54RPPXoPK6Xr6USxXDQcXc%3D&w=280&h=280&r=0",
    eventUrl: "https://www.start.gg/tournament/smash-camp-2025/details",
    date: "April 19-20 2025",
    location: "Arizona",
    entrants: 56,
    first: "Nezergy",
    second: "Kendrick",
    third: "Dirtboy",
    vodsUrl: "https://www.youtube.com/playlist?list=PLXuSSlxxWDDqyN7Ite4szukuedBBCZSF6",
    hideRankImage: false
  },
  {
    eventTitle: "Final Warning: The Golden Age - Chapter III",
    imageUrl: "https://images.start.gg/images/tournament/751437/image-5784957f37c78c1820e470a902bd4a89.jpg?ehk=2wlwYFMVBPyM6EcDOyCubl0iMeXnkQm7IjDDcZMuBS4%3D&ehkOptimized=AagQXEguoKOW8fn0fs43%2FUWXuBm9wg3hBgj%2B9nCrpkE%3D",
    eventUrl: "https://www.start.gg/tournament/final-warning-the-golden-age-chapter-iii/details",
    date: "April 19 2025",
    location: "Maine",
    entrants: 23,
    first: "essy",
    second: "Kumatora",
    third: "Motobug",
    vodsUrl: "https://youtu.be/7u45Uz7qNPc?si=atd-HmaRFNd64PTq",
    hideRankImage: false
  },
  {
    eventTitle: "Uprooted 2025",
    imageUrl: "https://images.start.gg/images/tournament/753942/image-d812f4ac06a850b6359539ba42745ac3.png?ehk=QQrS5oYsBj5eUvzhuNpGdmst4d5iOChvCwNGcd%2B0XNU%3D&ehkOptimized=d31bUmnIMX0jB1K26xIVl67Z8OIs1i5bus%2FDQ8%2FtSd8%3D",
    eventUrl: "https://www.start.gg/tournament/uprooted-2025/details",
    date: "April 5-6 2025",
    location: "Indiana",
    entrants: 91,
    first: "SipMastah",
    second: "Ryzuul",
    third: "Morsecode762",
    vodsUrl: "https://www.youtube.com/playlist?list=PLXuSSlxxWDDq4SaFfP4nyhC6wMTHli17F",
    hideRankImage: false
  },
  {
    eventTitle: "Moonshine Monthly #3",
    imageUrl: "https://images.start.gg/images/tournament/763623/image-ea708fffd7f70c4333e088f67d12385f.png",
    eventUrl: "https://www.start.gg/tournament/moonshine-monthly-3/details",
    date: "March 30 2025",
    location: "South Carolina",
    entrants: 15,
    first: "Supersponge",
    second: "knight",
    third: "Bus",
    vodsUrl: "https://www.youtube.com/playlist?list=PLyvGfCZHbqHXDVow9dhLW2ajuuYSGF19p",
    hideRankImage: true
  },
  {
    eventTitle: "PaigN: Automata",
    imageUrl: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F750935%2Fimage-79efb03362dae6723a35a52cfe445e5f-optimized.png&ehk=66DgVrHs4eO3r92urF8FAIA0MAuF9imW4e9RYmun2uc%3D&w=280&h=280&r=0",
    eventUrl: "https://www.start.gg/tournament/paign-automata/details",
    date: "March 29 2025",
    location: "Illinois",
    entrants: 41,
    first: "essy",
    second: "Dirtboy",
    third: "SoulOfficer",
    vodsUrl: "https://www.youtube.com/playlist?list=PL_OBsvMFKQ5TZDHJ5OqQ48d6CB4FmR3zK",
    hideRankImage: false
  },
  {
    eventTitle: "ETSU-Con 2025",
    imageUrl: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F748686%2Fimage-1d923a682a2d077b81710449795913f1-optimized.png&ehk=dABwyUsN%2BoM%2BswuB0v9Nx7OuT2AMwb5ZXRqHF1Jp8oQ%3D&w=280&h=280&r=0",
    eventUrl: "https://www.start.gg/tournament/etsu-con-2025-1/details",
    date: "March 29 2025",
    location: "Tennessee",
    entrants: 36,
    first: "Salt",
    second: "Shenanigans",
    third: "Moist",
    vodsUrl: "https://www.youtube.com/playlist?list=PLL2RqAT-Fg9b29wi4rx-U0JMCZgCnWufR",
    hideRankImage: false
  },
  {
    eventTitle: "Smash of the Titans 10",
    imageUrl: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F733623%2Fimage-6a2f830b3ed2448c8cd4fdc5df2927dc-optimized.jpg&ehk=P6xRQjtL7NCBckUUb%2FvT03FR%2BA%2Bxwgf0XzQ8baE09kk%3D&w=280&h=280&r=0",
    eventUrl: "https://www.start.gg/tournament/smash-of-the-titans-10-1/details",
    date: "March 22 2025",
    location: "Illinois",
    entrants: 11,
    first: "ilikepizza107",
    second: "shad",
    third: "Scal",
    vodsUrl: "https://www.youtube.com/playlist?list=PLJIkd-7ajnoUV_sQuZw0MUBPhzHZWcgPp",
    hideRankImage: true
  },
  {
    eventTitle: "Game 5 In The D #8",
    imageUrl: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F753458%2Fimage-682f23c7c6853c9f14a932032d05ead0-optimized.jpg&ehk=A8Q7W63tKoq8g098URhncVeF0MzGbkVlA7hknPHAYZ0%3D&w=280&h=280&r=0",
    eventUrl: "https://www.start.gg/tournament/game-5-in-the-d-8-yuko-s-bday-edition/details",
    date: "March 22 2025",
    location: "Michigan",
    entrants: 33,
    first: "Dirtboy",
    second: "Yuko",
    third: "Lordy",
    vodsUrl: "https://www.youtube.com/playlist?list=PLAT5TuRwHTCJhi9YJY5lbsOJvpIzQrn3a",
    hideRankImage: true
  },
  {
    eventTitle: "Soul Read",
    imageUrl: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F760471%2Fimage-b0e173b66e73da389313bc1b3723e3a6-optimized.png&ehk=bdGnfFXasnoj5BeHQk0qtAZGs44IKNvsPJqYR5xVMDc%3D&w=280&h=280&r=0",
    eventUrl: "https://www.start.gg/tournament/soul-read/details",
    date: "March 15 2025",
    location: "Oklahoma",
    entrants: 39,
    first: "J-am",
    second: "cadenville",
    third: "FlashingFire",
    vodsUrl: "https://youtube.com/playlist?list=PLu8vDmkIWeMXimpsuU_eBwpeYEWSes0UL&si=AFW5KlcAf1bUJB7l",
    hideRankImage: true
  },
  {
    eventTitle: "Kame House: The Dark Tournament",
    imageUrl: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F740096%2Fimage-cb200c9d81bd09bf0a66d6994fe89bc5-optimized.png&ehk=0EWnOEIzKjh6VS8gO%2B7Tr4NtfojUQwjBahF%2BasiKOic%3D&w=280&h=280&r=0",
    eventUrl: "https://www.start.gg/tournament/kame-house-the-dark-tournament/details",
    date: "March 15 2025",
    location: "Georgia",
    entrants: 59,
    first: "Ryzuul",
    second: "Jagz$",
    third: "SoulOfficer",
    vodsUrl: "https://www.youtube.com/playlist?list=PLMO4jXfLteTd89_QA8cLEkQpzIkoN7OfJ",
    hideRankImage: false
  },
  {
    eventTitle: "Gecko Cavern 9",
    imageUrl: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F760612%2Fimage-a1871aaef05623d677238d8acd7ae91a-optimized.png&ehk=JGiHp1mQKM6Qvb052wzJQ1E2xwLpfryzRQrixQyc6vo%3D&w=280&h=280&r=0",
    eventUrl: "https://www.start.gg/tournament/gecko-cavern-9-1/details",
    date: "March 8 2025",
    location: "New South Wales",
    entrants: 21,
    first: "RNGReallyNotGood",
    second: "RoyinoZ",
    third: "Michael",
    vodsUrl: "",
    hideRankImage: true
  },
  {
    eventTitle: "Northstar III",
    imageUrl: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F726126%2Fimage-f943b48b4354f5f0aaab13ec7ebcb5e8-optimized.png&ehk=IZXQ%2Fh9W6UxS9mmlIX9aSENB1OiCrxPSyf%2FiKMIvKqo%3D&w=280&h=280&r=0",
    eventUrl: "https://www.start.gg/tournament/northstar-iii-at-st-cloud-state/details",
    date: "March 8 2025",
    location: "Minnesota",
    entrants: 12,
    first: "Veka",
    second: "Perfect Sunset",
    third: "Cranky",
    vodsUrl: "",
    hideRankImage: true
  },
  {
    eventTitle: "Take Flight 2025",
    imageUrl: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F745417%2Fimage-22e93b2763bc5ea28149c5b1943cc48c-optimized.jpg&ehk=QEWGcGNnjIx84ORNjbf%2BZdtBdueQemhfLhofbYKzTRM%3D&w=280&h=280&r=0",
    eventUrl: "https://www.start.gg/tournament/take-flight-2025/details",
    date: "March 8 2025",
    location: "Ohio",
    entrants: 9,
    first: "Iceking",
    second: "Peppy",
    third: "Thrive",
    vodsUrl: "",
    hideRankImage: true
  },
  {
    eventTitle: "Tennessee P+ Summit 2025",
    imageUrl: "https://images.start.gg/images/tournament/714654/image-9fcdb8b8b1acc8a88280304e3b010b63.jpg?ehk=%2BZSYRZfMVz1ynkjp5wxDxQfi2ITWd2NKn1EtXseZ528%3D&ehkOptimized=8mBzXSK23mbPNHjSmTQkpgvRRF9qYsJ5PfgQ4qo4BJw%3D",
    eventUrl: "https://www.start.gg/tournament/tennessee-p-summit-2025/details",
    date: "March 7-9 2025",
    location: "Tennessee",
    entrants: 20,
    first: "Moist",
    second: "Shenanigans",
    third: "Mr. Brandandorf",
    vodsUrl: "https://www.youtube.com/playlist?list=PLL2RqAT-Fg9aCmfXxiFqCd1C4OIZaq0u_",
    hideRankImage: true
  },
  {
    eventTitle: "Who's on Ledge? 11",
    imageUrl: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F760327%2Fimage-745ad5720dee6036abacf9a3286f76dc-optimized.png&ehk=BbimywF8jx4MKur88JheZMXqOKkl4jXKl3YXouqfsDE%3D&w=280&h=280&r=0",
    eventUrl: "https://www.start.gg/tournament/who-s-on-ledge-11/details",
    date: "March 1 2025",
    location: "Iowa",
    entrants: 8,
    first: "Tienda",
    second: "Spicy",
    third: "Landon",
    vodsUrl: "",
    hideRankImage: true
  },
  {
    eventTitle: "Unc Frozen's Icebox 2",
    imageUrl: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F757359%2Fimage-35b90170d69f07be24728b6f2def8830-optimized.jpg&ehk=XcsD59Kqh2AotjXpsr0pI0uu%2BuQX4zPCMzmjTnUPwf0%3D&w=280&h=280&r=0",
    eventUrl: "https://www.start.gg/tournament/unc-frozen-s-icebox-2/details",
    date: "March 1 2025",
    location: "Texas",
    entrants: 12,
    first: "J-am",
    second: "Apathy",
    third: "Entropy",
    vodsUrl: "https://www.youtube.com/playlist?list=PL4kFPlSUbi30zEhO-WHJ6k5LgC-G2NZbk",
    hideRankImage: true
  },
  {
    eventTitle: "Allston Allstars III",
    imageUrl: "https://images.start.gg/images/tournament/753089/image-6a3b85b79d910f06723b6e35b06563d7.png?ehk=Tq%2FW79yrcwS5%2B0G9s8Mvj4fajF%2F93zCD8rYHWrrXLiA%3D&ehkOptimized=EtvpTPcT3cPMb7ppUd9n%2BNKnUkhFeEBOUc5v3dc9Rko%3D",
    eventUrl: "https://www.start.gg/tournament/allston-allstars-iii/details",
    date: "March 1 2025",
    location: "Massachussetts",
    entrants: 12,
    first: "Imogen Heat",
    second: "Flarp",
    third: "sfy bees",
    vodsUrl: "",
    hideRankImage: true
  },
  {
    eventTitle: "Winter is Crouching",
    imageUrl: "https://images.start.gg/images/tournament/687306/image-5618485cca829ee70b7125791593c3e2.png?ehk=pLpsMcpMy%2B9l%2BVALN7FNkax%2FqlWKYC2wd3BY2gI44fU%3D&ehkOptimized=qQc4jLdbvBzwuFG7iw%2BIaofHMDeQPOdtUyGDqI7HPDE%3D",
    eventUrl: "https://www.start.gg/tournament/winter-is-crouching/details",
    date: "March 1-2 2025",
    location: "Le Kremlin-Bicêtre",
    entrants: 34,
    first: "Dirtboy",
    second: "Smash_Falco3",
    third: "Trif",
    vodsUrl: "https://www.youtube.com/playlist?list=PLKRfQKsyLmMazeUzqOqXinC9DZndGrrF-",
    hideRankImage: true
  },
  {
    eventTitle: "Moonshine Monthly #2",
    imageUrl: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F753025%2Fimage-d1d570002d763332029ed8cafa5d584a-optimized.png&ehk=8aMjwzJmP%2F0DXXICOPCB1u8gm8hs9O8Rv7Y7AbfGnRo%3D&w=280&h=280&r=0",
    eventUrl: "https://www.start.gg/tournament/moonshine-monthly-2/details",
    date: "Feburary 23 2025",
    location: "South Carolina",
    entrants: 19,
    first: "bass",
    second: "AngryPiratehat",
    third: "fries",
    vodsUrl: "",
    hideRankImage: true
  },
  {
    eventTitle: "KREWE",
    imageUrl: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F694915%2Fimage-4e2e751a32f9d8e2c9ed852592dff5c7-optimized.png&ehk=Sf%2FUMLvFp%2ByxB9yjxlljQV7vDCCXSm7q%2FykOBfT6aU8%3D&w=280&h=280&r=0",
    eventUrl: "https://www.start.gg/tournament/krewe-melee-mardi-gras-ball/details",
    date: "Feburary 22 2025",
    location: "Alabama",
    entrants: 28,
    first: "SDJ",
    second: "Sneakh",
    third: "Rooster",
    vodsUrl: "https://www.youtube.com/playlist?list=PLSM8VDvyf2kM25zc9_37NS35mXux-QXNN",
    hideRankImage: true
  },
  {
    eventTitle: "Condo of Blood 3",
    imageUrl: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F743233%2Fimage-6bcba47e76de47e7d7fca4ef74828624-optimized.png&ehk=9Q00a1ghM%2B07wEiqLP9Oj6uhVKpvVIBiZ8a89NJ%2BMcY%3D&w=280&h=280&r=0",
    eventUrl: "https://www.start.gg/tournament/condo-of-blood-3/details",
    date: "Feburary 22 2025",
    location: "Ontario",
    entrants: 27,
    first: "Zaza",
    second: "Krumpberry",
    third: "Erg",
    vodsUrl: "https://www.youtube.com/watch?v=XY2_0AajQUQ",
    hideRankImage: false
  },
  {
    eventTitle: "Journey to the West",
    imageUrl: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F731623%2Fimage-120c39ca0b9e548595ff1c4f88a45860-optimized.jpg&ehk=lsIwpkupKikujRh8VEMGEvMyMCytWXbF%2BCAGiF3N4ZQ%3D&w=280&h=280&r=0",
    eventUrl: "https://www.start.gg/tournament/journey-to-the-west/details",
    date: "Feburary 21-23 2025",
    location: "Western Australia",
    entrants: 27,
    first: "Tyler",
    second: "Luma",
    third: "Star",
    vodsUrl: "https://www.youtube.com/playlist?list=PL4cUURZHmnRho26wHuYNL0rad6Scu_5DZ",
    hideRankImage: true
  },
  {
    eventTitle: "Exodus 2025",
    imageUrl: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F749811%2Fimage-c4c1170601043bc749596397e0ce48d4-optimized.png&ehk=3amV9R1wU9Gdp328M%2FmCzXfqfY%2FeutcFXYaHS%2BT%2BVXQ%3D&w=280&h=280&r=0",
    eventUrl: "https://www.start.gg/tournament/exodus-2025/details",
    date: "Feburary 15 2025",
    location: "California",
    entrants: 43,
    first: "The Doctor",
    second: "Fury",
    third: "Ryzuul",
    vodsUrl: "https://www.youtube.com/playlist?list=PLK6QY5XQ-uu08g9VBmZnNgnNkaTkVTY3d",
    hideRankImage: false
  },
  {
    eventTitle: "Mass Madness 49",
    imageUrl: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F742227%2Fimage-fe9a3c15d98a4b0d6d4b6735c938e250-optimized.png&ehk=9aDHEGWPs7LQslYPnbvbHzvdyAErzYs7GmSF4hp6UT0%3D&w=280&h=280&r=0",
    eventUrl: "https://www.start.gg/tournament/mass-madness-49-a-new-england-melee-and-project-event/details",
    date: "Feburary 8 2025",
    location: "Massachusetts",
    entrants: 10,
    first: "Flarp",
    second: "Motobug",
    third: "sfy bees",
    vodsUrl: "",
    hideRankImage: true
  },
  {
    eventTitle: "Unc Frozen's Icebox 1",
    imageUrl: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F744542%2Fimage-4ea708dcb4e53c99a762359bb323cbcb-optimized.jpg&ehk=hMjL84EyvgKtS9QTg1n7e3ldsuZWs8Az2D4RPeb4p1Q%3D&w=280&h=280&r=0",
    eventUrl: "https://www.start.gg/tournament/unc-frozen-s-icebox-1/details",
    date: "Feburary 8 2025",
    location: "Texas",
    entrants: 12,
    first: "Apathy",
    second: "Bananas",
    third: "J-am",
    vodsUrl: "",
    hideRankImage: true
  },
  {
    eventTitle: "Big Louisiana Tournament",
    imageUrl: "../images/past-events/blt_logo_2.png",
    eventUrl: "https://www.start.gg/tournament/big-louisiana-tournament/details",
    date: "Feburary 1-2 2025",
    location: "Louisiana",
    entrants: 55,
    first: "metroid",
    second: "Jagz$",
    third: "Fury",
    vodsUrl: "https://www.youtube.com/playlist?list=PLSM8VDvyf2kM2XFnOda0Ehl5BtvtOaMOH",
    hideRankImage: false
  },
  {
    eventTitle: "Moonshine Monthly #1",
    imageUrl: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F744903%2Fimage-3377d302353799ca777fc9b7f741c464-optimized.png&ehk=XwIn6Z28Q4Iro1UcNE7Yd2DsfLCZ1rChK9J0eSGEgV8%3D&w=280&h=280&r=0",
    eventUrl: "https://www.start.gg/tournament/moonshine-monthly-1/details",
    date: "January 25 2025",
    location: "South Carolina",
    entrants: 31,
    first: "AngryPiratehat",
    second: "Phteven",
    third: "Supersponge",
    vodsUrl: "",
    hideRankImage: true
  },
  {
    eventTitle: "Somnio 6",
    imageUrl: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F704301%2Fimage-7860f2d53c5c19158a1af5bb595b62f2-optimized.png&ehk=Lvf0cBp42V7xFlwNJ8bxtOnyYKPG5AFv3lZxf8Pd1LQ%3D&w=280&h=280&r=0",
    eventUrl: "https://www.start.gg/tournament/somnio-6/details",
    date: "January 25 2025",
    location: "Netherlands",
    entrants: 32,
    first: "max",
    second: "Smash_Falco3",
    third: "Amida",
    vodsUrl: "https://www.youtube.com/live/RzkkrZSu7Ko",
    hideRankImage: true
  },
  {
    eventTitle: "Super TPS IV",
    imageUrl: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F729703%2Fimage-d446cc3ef2159967910369de4402faf2-optimized.png&ehk=2YmplV5dlaWOKoDKyTlPru50pwmweY6TWaxwtj7M0Fc%3D&w=280&h=280&r=0",
    eventUrl: "https://www.start.gg/tournament/super-tps-iv/details",
    date: "January 25 2025",
    location: "Illinois",
    entrants: 29,
    first: "Dirtboy",
    second: "metroid",
    third: "ORLY",
    vodsUrl: "https://www.youtube.com/playlist?list=PLXuSSlxxWDDpQ7MFjdKTsUzRAaUx56bFf",
    hideRankImage: false
  },
  {
    eventTitle: "Game 5 in the D #7",
    imageUrl: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F741982%2Fimage-06d3c983cce808794b6e3357614d9716-optimized.jpg&ehk=Mm%2BdADFo6UiO6w63CtfQqvkLv1qT%2BVUH3vGCQimwKA4%3D&w=280&h=280&r=0",
    eventUrl: "https://www.start.gg/tournament/game-5-in-the-d-7/details",
    date: "January 18 2025",
    location: "Michigan",
    entrants: 15,
    first: "Dirtboy",
    second: "Lordy",
    third: "Yuko",
    vodsUrl: "https://www.youtube.com/playlist?list=PLp0mqricKIh2KcY-IztlDuDoxFh_ClY27",
    hideRankImage: true
  },
  {
    eventTitle: "Who's On Ledge? 10",
    imageUrl: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F743740%2Fimage-3211f88c3d7eb4905079314b2df30240-optimized.png&ehk=JE%2FaG0hLO3Bii2Rq%2FmzIRCCssIvGhwbNE%2FpjnqBQJ4s%3D&w=280&h=280&r=0",
    eventUrl: "https://www.start.gg/tournament/who-s-on-ledge-10/details",
    date: "January 18 2025",
    location: "Iowa",
    entrants: 7,
    first: "Sothe",
    second: "Landon",
    third: "Hannah",
    vodsUrl: "",
    hideRankImage: true
  },
  {
    eventTitle: "TECH 2025",
    imageUrl: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F703812%2Fimage-621a3df3388b485f1c17bc39ef5043b4-optimized.png&ehk=fmJ2bU7fSCoK6ta%2FoMgERgnFVVH1449V1iaXyonXZPQ%3D&w=280&h=280&r=0",
    eventUrl: "https://www.start.gg/tournament/tech-2025/event/p-singles",
    date: "January 11 2025",
    location: "South Carolina",
    entrants: 11,
    first: "Cybil",
    second: "knight",
    third: "Travy",
    vodsUrl: "",
    hideRankImage: true
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



// filter
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
