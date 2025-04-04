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
    eventTitle: "Moonshine Monthly #3",
    imageUrl: "https://images.start.gg/images/tournament/763623/image-ea708fffd7f70c4333e088f67d12385f.png",
    eventUrl: "https://www.start.gg/tournament/moonshine-monthly-3/details",
    date: "March 30 2025",
    location: "South Carolina",
    entrants: 15,
    first: "Supersponge",
    second: "knight",
    third: "Bus",
    vodsUrl: "",
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
    vodsUrl: "https://www.twitch.tv/videos/2418569586",
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

