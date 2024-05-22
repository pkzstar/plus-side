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
        // rankImage.id = "yourContainerElementId";
        rankImage.src = 'https://github.com/pkzstar/plus-side/blob/main/images/pmrank.png?raw=true';
        rankImage.alt = '';
        rankImageDiv.appendChild(rankImage);
        eventDiv.appendChild(rankImageDiv);
      } else {
        const rankImageDiv = document.createElement('div');
        const rankImage = document.createElement('img');
        rankImage.classList.add('pm-rank-centered-invis');
        // rankImage.id = "yourContainerElementId";
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
        vodsLink.classList.add('vods-past');
        vodsLink.href = event.vodsUrl;
        vodsLink.target = '_blank';
        vodsLink.textContent = 'Vods';
        eventDiv.appendChild(vodsLink);
      }
  
      const startGGLink = document.createElement('a');
      startGGLink.classList.add('start-gg');
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
    eventTitle: 'Honeypot 6',
    eventUrl: 'https://www.start.gg/tournament/honeypot-6-winter-is-coming/event/project-singles/brackets',
    imageUrl: 'https://github.com/pkzstar/plus-side/blob/main/images/past-events/honeypot6.png?raw=true',
    vodsUrl: 'https://www.youtube.com/watch?v=Lpl5r891rFg&t=1s',
    date: 'December 2-3 2023',
    location: 'Iowa',
    entrants: '80',
    first: 'Techboy',
    second: 'SipMastah',
    third: 'Rongunshu',
    hideRankImage: false
  },
  {
    eventTitle: 'Arcamelee #4',
    eventUrl: 'https://www.start.gg/tournament/arcamelee-4/event/project-singles',
    imageUrl: 'https://github.com/pkzstar/plus-side/blob/main/images/past-events/arcamelee.png?raw=true',
    date: 'November 18-19 2023',
    location: 'France',
    entrants: '60',
    first: 'Smash_Falco3',
    second: 'Professor Pro',
    third: 'NyxTheShield',
    hideRankImage: true
  },
  {
    eventTitle: 'Against All Odds',
    eventUrl: 'https://www.start.gg/tournament/against-all-odds-3/event/project-singles',
    imageUrl: 'https://github.com/pkzstar/plus-side/blob/main/images/past-events/aao.png?raw=true',
    date: 'November 18-19 2023',
    location: 'Washington',
    entrants: '88',
    first: 'SipMastah',
    second: 'Pikmon',
    third: 'WouldSmokeCraq',
    hideRankImage: false
  },
  {
    eventTitle: 'Super Charged Shots',
    eventUrl: 'https://www.start.gg/tournament/super-charged-shots/event/project-singles-1v1',
    imageUrl: 'https://github.com/pkzstar/plus-side/blob/main/images/past-events/super-charged.png?raw=true',
    date: 'November 11 2023',
    location: 'Ontario',
    entrants: '19',
    first: 'Rongunshu',
    second: 'Zaza',
    third: 'Erg',
    hideRankImage: true
  },
  {
    eventTitle: 'Show Me Your Moves 23',
    eventUrl: 'https://www.start.gg/tournament/show-me-your-moves-23-1/event/project-singles',
    imageUrl: 'https://github.com/pkzstar/plus-side/blob/main/images/past-events/hop.png?raw=true',
    date: 'November 11 2023',
    location: 'Illinois',
    entrants: '25',
    first: 'Chaloopy',
    second: 'Orly',
    third: 'Mekk',
    hideRankImage: false
  },
  {
    eventTitle: 'Cream of the Crop: November',
    eventUrl: 'https://www.start.gg/tournament/cream-of-the-crop-november-edition-new-york-s-project/event/singles',
    imageUrl: 'https://github.com/pkzstar/plus-side/blob/main/images/past-events/cream.png?raw=true',
    date: 'November 11 2023',
    location: 'New York',
    entrants: '34',
    first: 'Stango',
    second: 'Boiko',
    third: 'Shiny Zubat',
    hideRankImage: false
  },
  {
    eventTitle: 'Ghost Town',
    eventUrl: 'https://www.start.gg/tournament/ghost-town/details',
    imageUrl: 'https://github.com/pkzstar/plus-side/blob/main/images/past-events/ghost-town.png?raw=true',
    date: 'November 4-5 2023',
    location: 'Oregon',
    entrants: '24',
    first: 'Sabre',
    second: 'PartyGhoul',
    third: 'Nerfy',
    hideRankImage: false
  },
  {
    eventTitle: 'The Bird House XII',
    eventUrl: 'https://www.start.gg/tournament/the-bird-house-xii/event/p-singles/brackets',
    imageUrl: 'https://github.com/pkzstar/plus-side/blob/main/images/past-events/bird-house.jpg?raw=true',
    date: 'November 4 2023',
    location: 'Illinois',
    entrants: '40',
    first: 'Comb',
    second: 'Chaloopy',
    third: 'Metroid',
    hideRankImage: false
  },
  {
    eventTitle: 'Blacklisted 8',
    eventUrl: 'https://www.start.gg/tournament/blacklisted-8/event/project-singles/standings',
    imageUrl: 'https://github.com/pkzstar/plus-side/blob/main/images/past-events/bl8.jpg?raw=true',
    vodsUrl: 'https://www.youtube.com/playlist?list=PLAIIMiVssmgos-2_c6l4hbBDy8uNDdqAn',
    date: 'October 28-29 2023',
    location: 'Massachusetts',
    entrants: '77',
    first: 'Malachi',
    second: 'Phresh',
    third: 'dvd',
    hideRankImage: false
  },
  {
    eventTitle: 'On The House 2',
    eventUrl: 'https://www.start.gg/tournament/on-the-house-2/event/project-singles/brackets/1484823/2242434',
    imageUrl: 'https://github.com/pkzstar/plus-side/blob/main/images/past-events/oth.png?raw=true',
    vodsUrl: 'https://www.youtube.com/watch?v=x8hbrjj4USM',
    date: 'October 16 2023',
    location: 'Michigan',
    entrants: '16',
    first: 'Morsecode762',
    second: 'Techboy',
    third: 'Ellipsis',
    hideRankImage: false
  },
  {
    eventTitle: 'Five Nights at Fingy\'s',
    eventUrl: 'https://www.start.gg/tournament/five-nights-at-fingy-s/events/project-singles/brackets/1459177/2208583/standings',
    imageUrl: 'https://github.com/pkzstar/plus-side/blob/main/images/past-events/th%20(8).png?raw=true',
    vodsUrl: '', // No VODs URL provided in the HTML
    date: 'October 13 2023',
    location: 'Arizona',
    entrants: '24',
    first: 'Sneez',
    second: 'Trai',
    third: 'AZ_r0cky',
    hideRankImage: false
  },
  {
    eventTitle: 'Cream City Convergence',
    eventUrl: 'https://www.start.gg/tournament/c3-community-coordinated-competitions-side-tournaments/event/project/brackets/1474345/2228587',
    imageUrl: 'https://github.com/pkzstar/plus-side/blob/main/images/past-events/th%20(6).png?raw=true',
    vodsUrl: '', // No VODs URL provided in the HTML
    date: 'September 30 2023',
    location: 'Wisconsin',
    entrants: '22',
    first: 'Orly',
    second: 'Chaloopy',
    third: 'Kendrick',
    hideRankImage: false
  },
  {
    eventTitle: 'Undertow 2023',
    eventUrl: 'https://www.start.gg/tournament/undertow-2023/events',
    imageUrl: 'https://github.com/pkzstar/plus-side/blob/main/images/past-events/utowicon.png?raw=true',
    vodsUrl: 'https://www.youtube.com/watch?v=ai4zS3aLc78',
    date: 'September 8-9 2023',
    location: 'Ohio',
    entrants: '76',
    first: 'Techboy',
    second: 'Jagz$',
    third: 'Ellipsis',
    hideRankImage: false
  },
  {
    eventTitle: 'Construct X: 2023',
    eventUrl: 'https://www.start.gg/tournament/construct-x-2023/events',
    imageUrl: 'https://github.com/pkzstar/plus-side/blob/main/images/past-events/construct.png?raw=true',
    vodsUrl: 'https://www.youtube.com/playlist?list=PLkZ-2v0APBi77S2-fxmpTENudrX3IBbmL',
    date: 'August 27 2023',
    location: 'Wisconsin',
    entrants: '30',
    first: 'Chaloopy',
    second: 'Metroid',
    third: 'Kendrick',
    hideRankImage: true // Assuming "pm-rank-centered-invis" class means hiding the rank image
  },
  {
    eventTitle: 'Shine out of Shield',
    eventUrl: 'https://www.start.gg/tournament/shine-out-of-shield/events',
    imageUrl: 'https://github.com/pkzstar/plus-side/blob/main/images/past-events/shine.png?raw=true',
    vodsUrl: 'https://www.youtube.com/watch?v=m_1bJBz0-u0',
    date: 'August 25 2023',
    location: 'Massachusetts',
    entrants: '81',
    first: 'Shadowhawke',
    second: 'Aklo',
    third: 'Grealy',
    hideRankImage: false
  },
  {
    eventTitle: 'Sunset in Sapulpa',
    eventUrl: 'https://www.start.gg/tournament/sunset-in-sapulpa/event/p-singles',
    imageUrl: 'https://github.com/pkzstar/plus-side/blob/main/images/past-events/sapulpa.png?raw=true',
    vodsUrl: '', // No VODs URL provided in the HTML
    date: 'August 19-20 2023',
    location: 'Oklahoma',
    entrants: '25',
    first: 'Blue',
    second: 'CP9',
    third: 'Studebacher Hoch',
    hideRankImage: false
  },
  {
    eventTitle: 'Tripoint Smash 200',
    eventUrl: 'https://www.start.gg/tournament/tripoint-smash-200/event/p-singles',
    imageUrl: 'https://github.com/pkzstar/plus-side/blob/main/images/past-events/tps200.png?raw=true',
    vodsUrl: 'https://www.youtube.com/watch?v=fRuS5KlqPA4',
    date: 'August 18 2023',
    location: 'Illinois',
    entrants: '36',
    first: 'Dirtboy',
    second: 'Chaloopy',
    third: 'Comb',
    hideRankImage: false
  },
  {
    eventTitle: 'PM Concert Symphony',
    eventUrl: 'https://www.start.gg/tournament/pm-concert-symphony-a-midwest-p-invitational/events',
    imageUrl: 'https://github.com/pkzstar/plus-side/blob/main/images/past-events/concert.png?raw=true',
    vodsUrl: 'https://www.youtube.com/watch?v=IqK4IA-CFjA',
    date: 'August 12-13 2023',
    location: 'Illinois',
    entrants: '12',
    first: 'Techboy',
    second: 'Lunchables',
    third: 'Comb',
    hideRankImage: false
  },
  {
    eventTitle: 'Warehouse War 3',
    eventUrl: 'https://www.start.gg/tournament/warehouse-war-3-w-900-in-pot-bonuses/event/p-singles/overview',
    imageUrl: 'https://github.com/pkzstar/plus-side/blob/main/images/past-events/th.png?raw=true',
    vodsUrl: 'https://www.youtube.com/playlist?list=PLL2RqAT-Fg9au7APd3NJYTGZ8yIXfaBUW',
    date: 'July 29 2023',
    location: 'Tennessee',
    entrants: '81',
    first: 'Dingo',
    second: 'Xtreme',
    third: 'Magi',
    hideRankImage: true // Assuming "pm-rank-centered-invis" class means hiding the rank image
  },
  {
    eventTitle: 'Warp Zone 2',
    eventUrl: 'https://www.start.gg/tournament/warp-zone-2/details',
    imageUrl: 'https://github.com/pkzstar/plus-side/blob/main/images/past-events/article-wz.png?raw=true',
    vodsUrl: 'https://www.youtube.com/watch?v=P7A8_XUE_7s',
    date: 'July 29-30 2023',
    location: 'Illinois',
    entrants: '102',
    first: 'Lunchables',
    second: 'Techboy',
    third: 'SipMastah',
    hideRankImage: false
  },
  {
    eventTitle: 'Mega Metal Cavern 4',
    eventUrl: 'https://www.start.gg/tournament/mega-metal-cavern-4/event/project-singles',
    imageUrl: 'https://github.com/pkzstar/plus-side/blob/main/images/past-events/th%20(1).png?raw=true',
    vodsUrl: 'https://www.youtube.com/playlist?list=PL0aGqojhLGj0qWkz4jp8slP-ANsgP6GhN',
    date: 'July 28-30 2023',
    location: 'Australia',
    entrants: '38',
    first: 'Ryzuul',
    second: 'Motobug',
    third: 'Tyler',
    hideRankImage: true // Assuming "pm-rank-centered-invis" class means hiding the rank image
  },
  {
    eventTitle: 'Not Fete: International Waters',
    eventUrl: 'https://www.start.gg/tournament/not-f-te-international-waters/details',
    imageUrl: 'https://github.com/pkzstar/plus-side/blob/main/images/past-events/fete.png?raw=true',
    date: 'July 16 2023',
    location: 'UK',
    entrants: '67',
    first: 'Aklo',
    second: 'Smash_Falco3',
    third: 'Foxy Grandpa',
    hideRankImage: true
  },
  {
    eventTitle: 'Invincible VII',
    eventUrl: 'https://www.start.gg/tournament/invincible-vii/details',
    imageUrl: 'https://github.com/pkzstar/plus-side/blob/main/images/past-events/yunTyUYP_400x400.jpg?raw=true',
    vodsUrl: 'https://www.youtube.com/watch?v=9x7Z6ltiFZw',
    date: 'July 15-16 2023',
    location: 'Wisconsin',
    entrants: '84',
    first: 'Lunchables',
    second: 'Sothe',
    third: 'Chaloopy',
    hideRankImage: false
  },
  {
    eventTitle: 'Project Friendship 2',
    eventUrl: 'https://www.start.gg/tournament/project-friendship-2/event/pm-singles',
    imageUrl: 'https://github.com/pkzstar/plus-side/blob/main/images/past-events/th%20(5).png?raw=true',
    date: 'July 8-9 2023',
    location: 'Spain',
    entrants: '35',
    first: 'Dirtboy',
    second: 'Melody',
    third: 'Lafungo',
    hideRankImage: true
  },
  {
    eventTitle: 'Carnival Clash',
    eventUrl: 'https://www.start.gg/tournament/carnival-clash-ft-spark-aura-nut-jaredisking1-x-avier-cloudburst/event/project-singles',
    imageUrl: 'https://github.com/pkzstar/plus-side/blob/main/images/past-events/carn.png?raw=true',
    vodsUrl: 'https://www.youtube.com/playlist?list=PLzS-yXSHqq9i74Q8dUzQjUAPD28e2nSKr',
    date: 'June 25 2023',
    location: 'Oregon',
    entrants: '51',
    first: 'Cloudburst',
    second: 'Pikmon',
    third: 'PwrUp!',
    hideRankImage: false
  },
  {
    eventTitle: 'Cream of the Crop: June',
    eventUrl: 'https://www.start.gg/tournament/cream-of-the-crop-june-edition-new-york-s-project/events',
    imageUrl: 'https://github.com/pkzstar/plus-side/blob/main/images/past-events/cream.png?raw=true',
    vodsUrl: 'https://www.youtube.com/watch?v=yk5gDOg-A94',
    date: 'June 17 2023',
    location: 'New York',
    entrants: '31',
    first: 'Malachi',
    second: 'Shiny Zubat',
    third: 'AssTAStic',
    hideRankImage: false
  },
  {
    eventTitle: 'Tipped Off 14: Resurgence',
    eventUrl: 'https://www.start.gg/tournament/tipped-off-14-resurgence/event/p-singles',
    imageUrl: 'https://github.com/pkzstar/plus-side/blob/main/images/past-events/th%20(4).png?raw=true',
    date: 'June 3-4 2023',
    location: 'Georgia',
    entrants: '65',
    first: 'Aklo',
    second: 'Dirtboy',
    third: 'Dank',
    hideRankImage: false
  },
  {
    eventTitle: 'Combo Breaker 2023',
    eventUrl: 'https://www.start.gg/tournament/all-in-together-community-tournaments-at-cb2023/event/project/overview',
    imageUrl: 'https://github.com/pkzstar/plus-side/blob/main/images/past-events/thcb.png?raw=true',
    vodsUrl: 'https://www.youtube.com/playlist?list=PLqHTZ5qsD2QFap6SKZFl4zuFVLSGmgL9m',
    date: 'May 28 2023',
    location: 'Illinois',
    entrants: '50',
    first: 'Boat',
    second: 'Olivia',
    third: 'Gunther',
    hideRankImage: true
  },
  {
    eventTitle: 'Honeypot 5',
    eventUrl: 'https://www.start.gg/tournament/honeypot-5-the-honey-heist-1/events',
    imageUrl: 'https://github.com/pkzstar/plus-side/blob/main/images/past-events/hp5.png?raw=true',
    date: 'April 29 2023',
    location: 'Iowa',
    entrants: '48',
    first: 'Lunchables',
    second: 'Metroid',
    third: 'Chaloopy',
    hideRankImage: false
  },
  {
    eventTitle: 'Scarlet Classic VIII',
    eventUrl: 'https://www.start.gg/tournament/scarlet-classic-viii-1200-singles-pot-bonus/event/p-singles/standings',
    imageUrl: 'https://github.com/pkzstar/plus-side/blob/main/images/past-events/Scarlet.png?raw=true',
    date: 'April 22 2023',
    location: 'New Jersey',
    entrants: '27',
    first: 'Stango',
    second: 'Switch',
    third: 'Phresh',
    hideRankImage: false
  },
  {
    eventTitle: 'Smash Camp 2023',
    eventUrl: 'https://www.start.gg/tournament/smash-camp-2023/event/p-singles',
    imageUrl: 'https://github.com/pkzstar/plus-side/blob/main/images/past-events/th%20(2).png?raw=true',
    date: 'April 15-16 2023',
    location: 'Arizona',
    entrants: '50',
    first: 'Cloudburst',
    second: 'Studebacher Hoch',
    third: 'ilovebagelz',
    hideRankImage: false
  },
  {
    eventTitle: 'The Grand Line 2',
    eventUrl: 'https://www.start.gg/tournament/the-grand-line-2/details',
    imageUrl: 'https://github.com/pkzstar/plus-side/blob/main/images/past-events/grandline.png?raw=true',
    date: 'April 15-16 2023',
    location: 'California',
    entrants: '58',
    first: 'dvd',
    second: 'The Doctor',
    third: 'Rongunshu',
    hideRankImage: false
  },
  {
    eventTitle: 'House of Paign 23: The Lab',
    eventUrl: 'https://www.start.gg/tournament/house-of-paign-23-the-lab/event/p',
    imageUrl: 'https://github.com/pkzstar/plus-side/blob/main/images/past-events/hop.png?raw=true',
    date: 'April 8 2023',
    location: 'Illinois',
    entrants: '47',
    first: 'Dirtboy',
    second: 'Metroid',
    third: 'Chaloopy',
    hideRankImage: false
  },
  {
    eventTitle: 'The Back Hit',
    eventUrl: 'https://www.start.gg/tournament/the-back-hit-a-texas-p-tournament-now-with-1/events',
    imageUrl: 'https://github.com/pkzstar/plus-side/blob/main/images/past-events/tbh.png?raw=true',
    date: 'March 18 2023',
    location: 'Texas',
    entrants: '97',
    first: 'Jonny Sosa',
    second: 'dvd',
    third: 'Lunchables',
    hideRankImage: false
  },
  {
    eventTitle: 'Mile High Club',
    eventUrl: 'https://www.start.gg/tournament/mile-high-club/details',
    imageUrl: 'https://github.com/pkzstar/plus-side/blob/main/images/past-events/mhc.png?raw=true',
    date: 'February 25 2023',
    location: 'Colorado',
    entrants: '113',
    first: 'Rongunshu',
    second: 'The Doctor',
    third: 'SipMastah',
    hideRankImage: false
  },
  {
    eventTitle: 'Cream of the Crop : February',
    eventUrl: 'https://www.start.gg/tournament/cream-of-the-crop-new-york-s-project-regional-200/details',
    imageUrl: 'https://github.com/pkzstar/plus-side/blob/main/images/past-events/cream.png?raw=true',
    date: 'February 18 2023',
    location: 'New York',
    entrants: '44',
    first: 'dvd',
    second: 'Kycse',
    third: 'Envy',
    hideRankImage: false
  },
    {
      eventTitle: 'Lake George Snowdown',
      eventUrl: 'https://www.start.gg/tournament/the-action/event/project-singles',
      imageUrl: 'https://github.com/pkzstar/plus-side/blob/main/images/past-events/lgs.png?raw=true',
      date: 'February 5 2023',
      location: 'New York',
      entrants: '41',
      first: 'Phresh',
      second: 'dvd',
      third: 'Kycse',
      hideRankImage: false
    },
    {
      eventTitle: "Joey's Birthday Bash 2",
      eventUrl: 'https://www.start.gg/tournament/joey-s-birthday-bash-2/details',
      imageUrl: 'https://github.com/pkzstar/plus-side/blob/main/images/past-events/jbb2.png?raw=true',
      date: 'January 27-28 2023',
      location: 'Illinois',
      entrants: '110',
      first: 'dvd',
      second: 'Lunchables',
      third: 'Orly',
      hideRankImage: false
    },
    {
      eventTitle: 'Exodus 2023',
      eventUrl: 'https://www.start.gg/tournament/exodus-2023/details',
      imageUrl: 'https://github.com/pkzstar/plus-side/blob/main/images/past-events/exodus.png?raw=true',
      date: 'January 21 2023',
      location: 'California',
      entrants: '76',
      first: 'The Doctor',
      second: 'Stango',
      third: 'SipMastah',
      hideRankImage: false
    },
    {
      eventTitle: 'The Action',
      eventUrl: 'https://www.start.gg/tournament/the-action/event/project-singles',
      imageUrl: 'https://github.com/pkzstar/plus-side/blob/main/images/past-events/th%20(3).png?raw=true',
      date: 'January 20-22 2023',
      location: 'Australia',
      entrants: '36',
      first: 'Ryzuul',
      second: 'Joshman',
      third: 'Tyler',
      hideRankImage: true
    },
];
  
// Create past event element
const pastEventElement = createPastEventElement(eventData);

// Append the past event element to a container (e.g., a div with id 'pastListContainer')
const pastListContainer = document.getElementById('pastListContainer');
pastListContainer.appendChild(pastEventElement);