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
    vodsUrl: "",
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
    vodsUrl: "",
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
    vodsUrl: "",
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

