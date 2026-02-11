// Calendar Start
today = new Date();
currentMonth = today.getMonth();
currentYear = today.getFullYear();
selectYear = document.getElementById("year");
selectMonth = document.getElementById("month");

months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

monthAndYear = document.getElementById("monthAndYear");
document.getElementById("monthAndYear").innerHTML = 20;
showCalendar(currentMonth, currentYear);


function next() {
    currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
    currentMonth = (currentMonth + 1) % 12;
    showCalendar(currentMonth, currentYear);
}

function previous() {
    currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
    currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
    showCalendar(currentMonth, currentYear);
}

function jump() {
    currentYear = parseInt(selectYear.value);
    currentMonth = parseInt(selectMonth.value);
    showCalendar(currentMonth, currentYear);
}

function showCalendar(month, year) {
    let firstDay = (new Date(year, month)).getDay();
    tbl = document.getElementById("calendar-body"); // body of the calendar

    // clearing all previous cells
    tbl.innerHTML = "";

    // filing data about month and in the page via DOM.
    monthAndYear.innerHTML = months[month] + " " + year;
    selectYear.value = year;
    selectMonth.value = month;

    // creating all cells
    let date = 1;
    for (let i = 0; i < 6; i++) {
        // creates a table row
        let row = document.createElement("tr");

        //creating individual cells, filing them up with data.
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay) {
                cell = document.createElement("td");
                cellText = document.createTextNode("");
                cell.appendChild(cellText);
                row.appendChild(cell);
            } else if (date > daysInMonth(month, year)) {
                break;
            } else {
                cell = document.createElement("td");

                if (month === 0 && year === 2024) {
                    document.getElementById("previous").style.display = "none";
                } else {
                    document.getElementById("previous").style.display = "block";
                }
                //Game 5 in the D
            if(month === 0 && date === 20 && year === 2024) {
                // Example link with image
                let link = document.createElement("a");
                link.href = "https://www.start.gg/tournament/game-5-in-the-d/details";
                link.target = "_blank";

                let image = document.createElement("img");
                image.src = "https://github.com/pkzstar/plus-side/blob/main/images/past-events/game5In.png?raw=true";

                image.classList.add("calendarImg");


                link.appendChild(image);
                cell.appendChild(link);

                //Vortex
            } else if (month === 0 && date === 28 && year === 2024) {
                    // Example link with image
                    let link = document.createElement("a");
                    link.href = "https://www.start.gg/tournament/vortex-gallery-at-frosty-faustings-xvi/event/project-wii/standings";
                    link.target = "_blank";

                    let image = document.createElement("img");
                    image.src = "https://github.com/pkzstar/plus-side/blob/main/images/past-events/vortex.png?raw=true";

                    image.classList.add("calendarImg");


                    link.appendChild(image);
                    cell.appendChild(link);
                    
                // The Cure
                 } else if(month === 1 && date === 9 && year === 2024) {
                    // Example link with image
                    let link = document.createElement("a");
                    link.href = "https://www.start.gg/tournament/the-cure-100-pot-bonus-p-invitational/details";
                    link.target = "_blank";

                    let image = document.createElement("img");
                    image.src = "https://github.com/pkzstar/plus-side/blob/main/images/past-events/the%20cure.png?raw=true";

                    image.classList.add("calendarImg");


                    link.appendChild(image);
                    cell.appendChild(link);
                    
                    // Smashing Grounds
                } else if (month === 1 && date === 10 && year === 2024) {

                    let link = document.createElement("a");
                    link.href = "https://www.start.gg/tournament/smashing-grounds-10th-anniversary-celebration-a-melee-and-project-regional/details";
                    link.target = "_blank";
                
                    let image = document.createElement("img");
                    image.src = "https://github.com/pkzstar/plus-side/blob/main/images/past-events/10th%20aniv.png?raw=true";
                    image.classList.add("calendarImg");
                
                    link.appendChild(image);
                    cell.appendChild(link);

                    // Exodus
                } else if (month === 1 && date === 17 && year === 2024) {
                    let link = document.createElement("a");
                    link.href = "https://www.start.gg/tournament/exodus-2024/details";
                    link.target = "_blank";
                
                    let image = document.createElement("img");
                    image.src = "https://github.com/pkzstar/plus-side/blob/main/images/past-events/exodus.png?raw=true";
                
                    image.classList.add("calendarImg");
                
                    // Assigning an ID to the image
                    image.setAttribute('id', 'newImageId');
                
                    // Adding hover event listener
                    image.addEventListener('mouseenter', function() {
                        // Function to run when hovered
                        console.log('Image hovered!');
                        // Call your function here
                        addElement();
                    });
                
                    link.appendChild(image);
                    cell.appendChild(link);
                
                
                function addElement() {

                    // Create a new element
                    let sideCalendarDiv = document.createElement("div");
                    let paragraph = document.createElement("p");

                    sideCalendarDiv.setAttribute('id', 'sideCalendarDiv');
                                
                    // Append the new element to the document body
                    document.body.appendChild(sideCalendarDiv);
                    sideCalendarDiv.appendChild(paragraph);
                    
                    paragraph.classList.add("article-head");
                    let articleHead = "Exodus 2024";

                    paragraph.document.innerHTML("");
                }
                
            
                    //Full Bloom, Perfect pivot, The Truce
                } else if (month === 1 && (date === 24 || date === 25) && year === 2024) {

                    const events = [
                        {   
                            link: "https://www.start.gg/tournament/full-bloom-2024/details",
                            imageSrc: "https://github.com/pkzstar/plus-side/blob/main/images/past-events/fullbloom.png?raw=true"
                            
                        },
                        {
                            link: "https://www.start.gg/tournament/perfect-pivot/details",
                            imageSrc: "https://github.com/pkzstar/plus-side/blob/main/images/past-events/pp.png?raw=true"
                        }, 
                        {
                            link: "https://www.start.gg/tournament/the-truce/details",
                            imageSrc: "https://github.com/pkzstar/plus-side/blob/main/images/past-events/truce.png?raw=true"
                        }
                    ];
                    let currentIndex = 0; // Initialize current index

                    let link = document.createElement("a");
                    link.target = "_blank";

                    let image = document.createElement("img");

                    image.classList.add("calendarImg");

                    link.appendChild(image);
                    cell.appendChild(link);

                    // Function to fade in/out the image and link
                    function fadeInOut(element) {
                        let opacity = 0;
                        let increasing = true;
                        let interval = setInterval(function() {
                            if (increasing) {
                                opacity += 0.05;
                            } else {
                                opacity -= 0.05;
                            }
                            element.style.opacity = opacity;
                            if (opacity >= 1) {
                                increasing = false;
                                setTimeout(() => {
                                    increasing = true;
                                    updateLinkAndImage(); // Update link and image after fully visible
                                }, 2000); // Image and link will be fully visible for 2 seconds before fading out
                            } else if (opacity <= 0) {
                                clearInterval(interval);
                                fadeInOut(element); // Restart the fading animation
                            }
                        }, 100); // Adjust the timing as needed
                    }
                
                    // Function to update the link and image
                    function updateLinkAndImage() {
                        link.href = events[currentIndex].link;
                        image.src = events[currentIndex].imageSrc;
                        currentIndex = (currentIndex + 1) % events.length; // Move to the next event, looping back to the beginning if necessary
                    }
                
                    updateLinkAndImage(); // Initially update link and image
                    fadeInOut(image); // Start fade-in/out animation // Start cycling events


                    //mutiny
                } else if (month === 2 && date === 2 && year === 2024) {
                    let link = document.createElement("a");
                    link.href = "https://www.start.gg/tournament/college-park-mutiny-blossom-feat-eve-kevin-maples-mvlvchi-200/details";
                    link.target = "_blank";
                
                    let image = document.createElement("img");
                    image.src = "https://github.com/pkzstar/plus-side/blob/main/images/past-events/mutiny.png?raw=true";
                
                    image.classList.add("calendarImg");
                
                    // Assigning an ID to the image
                    image.setAttribute('id', 'newImageId');
                
                    // Adding hover event listener
                    image.addEventListener('mouseenter', function() {
                        // Function to run when hovered
                        console.log('Image hovered!');
                        // Call your function here
                        addElement();
                    });
                
                    link.appendChild(image);
                    cell.appendChild(link);
                
                
                    //Northstar
                } else if (month === 2 && date === 10 && year === 2024) {

                    let link = document.createElement("a");
                    link.href = "https://www.start.gg/tournament/northstar-ii-at-cloud-con/details";
                    link.target = "_blank";

                    let image = document.createElement("img");
                    image.src = "https://github.com/pkzstar/plus-side/blob/main/images/past-events/northstar.png?raw=true";

                    image.classList.add("calendarImg");


                    link.appendChild(image);
                    cell.appendChild(link);

                    //aftershock
                } else if (month === 2 && date === 15 && year === 2024) {

                    let link = document.createElement("a");
                    link.href = "https://www.start.gg/tournament/aftershock-p-hdr-2/details";
                    link.target = "_blank";

                    let image = document.createElement("img");
                    image.src = "https://github.com/pkzstar/plus-side/blob/main/images/past-events/aftershock.png?raw=true";

                    image.classList.add("calendarImg");


                    link.appendChild(image);
                    cell.appendChild(link);


                    //Storm
                } else if (month === 2 && date === 16 && year === 2024) {

                    let link = document.createElement("a");
                    link.href = "https://www.start.gg/tournament/storm-viii-1/details";
                    link.target = "_blank";

                    let image = document.createElement("img");
                    image.src = "https://github.com/pkzstar/plus-side/blob/main/images/past-events/storm.png?raw=true";

                    image.classList.add("calendarImg");


                    link.appendChild(image);
                    cell.appendChild(link);


                    //ETSU-Con, Titans, Game5in, cascade
                } else if (month === 2 && date === 23 && year === 2024) {

                    const events = [
                        {   
                            link: "https://www.start.gg/tournament/smash-of-the-titans-8-1/details",
                            imageSrc: "https://github.com/pkzstar/plus-side/blob/main/images/past-events/titans.png?raw=true"
                            
                        },
                        {
                            link: "https://www.start.gg/tournament/game-5-in-the-d-2-yuko-s-bday-edition/details",
                            imageSrc: "https://github.com/pkzstar/plus-side/blob/main/images/past-events/game5In.png?raw=true"
                        }, 
                        {
                            link: "https://www.start.gg/tournament/etsu-con-2024/details",
                            imageSrc: "https://github.com/pkzstar/plus-side/blob/main/images/past-events/etsu.png?raw=true"
                        },
                        {
                            link: "https://www.start.gg/tournament/cascade-clash-a-best-in-texas-league-event-1/details",
                            imageSrc: "https://github.com/pkzstar/plus-side/blob/main/images/past-events/cascade.png?raw=true"
                        }
                    ];


                    let currentIndex = 0; // Initialize current index
                    let link = document.createElement("a");
                    link.target = "_blank";

                    let image = document.createElement("img");

                    image.classList.add("calendarImg");


                    link.appendChild(image);
                    cell.appendChild(link);

                    // Function to fade in/out the image and link
                    function fadeInOut(element) {
                        let opacity = 0;
                        let increasing = true;
                        let interval = setInterval(function() {
                            if (increasing) {
                                opacity += 0.05;
                            } else {
                                opacity -= 0.05;
                            }
                            element.style.opacity = opacity;
                            if (opacity >= 1) {
                                increasing = false;
                                setTimeout(() => {
                                    increasing = true;
                                    updateLinkAndImage(); // Update link and image after fully visible
                                }, 2000); // Image and link will be fully visible for 2 seconds before fading out
                            } else if (opacity <= 0) {
                                clearInterval(interval);
                                fadeInOut(element); // Restart the fading animation
                            }
                        }, 100); // Adjust the timing as needed
                    }
                
                    // Function to update the link and image
                    function updateLinkAndImage() {
                        link.href = events[currentIndex].link;
                        image.src = events[currentIndex].imageSrc;
                        currentIndex = (currentIndex + 1) % events.length; // Move to the next event, looping back to the beginning if necessary
                    }
                
                    updateLinkAndImage(); // Initially update link and image
                    fadeInOut(image); // Start fade-in/out animation // Start cycling events




                       //sakura-con
                } else if (month === 2 && (date === 29 || date === 31) && year === 2024) {

                    let link = document.createElement("a");
                    link.href = "https://www.start.gg/tournament/sakura-con-2024/details";
                    link.target = "_blank";

                    let image = document.createElement("img");
                    image.src = "https://github.com/pkzstar/plus-side/blob/main/images/past-events/sakura.png?raw=true";

                    image.classList.add("calendarImg");


                    link.appendChild(image);
                    cell.appendChild(link);
                    
                    //Metal Tavern, Sakura-con
                } else if (month === 2 && date === 30 && year === 2024) {

                    const events = [
                        {   
                            link: "https://www.start.gg/tournament/sakura-con-2024/details",
                            imageSrc: "https://github.com/pkzstar/plus-side/blob/main/images/past-events/sakura.png?raw=true"
                            
                        },
                        {
                            link: "https://www.start.gg/tournament/metal-tavern/details",
                            imageSrc: "https://github.com/pkzstar/plus-side/blob/main/images/past-events/metal-tavern.png?raw=true"
                        }
                    ];


                    let currentIndex = 0; // Initialize current index
                    let link = document.createElement("a");
                    link.target = "_blank";

                    let image = document.createElement("img");

                    image.classList.add("calendarImg");


                    link.appendChild(image);
                    cell.appendChild(link);

                    // Function to fade in/out the image and link
                    function fadeInOut(element) {
                        let opacity = 0;
                        let increasing = true;
                        let interval = setInterval(function() {
                            if (increasing) {
                                opacity += 0.05;
                            } else {
                                opacity -= 0.05;
                            }
                            element.style.opacity = opacity;
                            if (opacity >= 1) {
                                increasing = false;
                                setTimeout(() => {
                                    increasing = true;
                                    updateLinkAndImage(); // Update link and image after fully visible
                                }, 2000); // Image and link will be fully visible for 2 seconds before fading out
                            } else if (opacity <= 0) {
                                clearInterval(interval);
                                fadeInOut(element); // Restart the fading animation
                            }
                        }, 100); // Adjust the timing as needed
                    }
                
                    // Function to update the link and image
                    function updateLinkAndImage() {
                        link.href = events[currentIndex].link;
                        image.src = events[currentIndex].imageSrc;
                        currentIndex = (currentIndex + 1) % events.length; // Move to the next event, looping back to the beginning if necessary
                    }
                
                    updateLinkAndImage(); // Initially update link and image
                    fadeInOut(image); // Start fade-in/out animation // Start cycling events

                    //action 2,  somniov
                } else if (month === 3 && date === 6 && year === 2024) {

                    const events = [
                        {   
                            link: "https://www.start.gg/tournament/the-action-2-action-replay/details",
                            imageSrc: "https://github.com/pkzstar/plus-side/blob/main/images/past-events/replay.png?raw=true"
                            
                        },
                        {
                            link: "https://www.start.gg/tournament/somnio-5/details",
                            imageSrc: "https://github.com/pkzstar/plus-side/blob/main/images/past-events/somniov.png?raw=true"
                        }
                    ];


                    let currentIndex = 0; // Initialize current index
                    let link = document.createElement("a");
                    link.target = "_blank";

                    let image = document.createElement("img");

                    image.classList.add("calendarImg");


                    link.appendChild(image);
                    cell.appendChild(link);

                    // Function to fade in/out the image and link
                    function fadeInOut(element) {
                        let opacity = 0;
                        let increasing = true;
                        let interval = setInterval(function() {
                            if (increasing) {
                                opacity += 0.05;
                            } else {
                                opacity -= 0.05;
                            }
                            element.style.opacity = opacity;
                            if (opacity >= 1) {
                                increasing = false;
                                setTimeout(() => {
                                    increasing = true;
                                    updateLinkAndImage(); // Update link and image after fully visible
                                }, 2000); // Image and link will be fully visible for 2 seconds before fading out
                            } else if (opacity <= 0) {
                                clearInterval(interval);
                                fadeInOut(element); // Restart the fading animation
                            }
                        }, 100); // Adjust the timing as needed
                    }
                
                    // Function to update the link and image
                    function updateLinkAndImage() {
                        link.href = events[currentIndex].link;
                        image.src = events[currentIndex].imageSrc;
                        currentIndex = (currentIndex + 1) % events.length; // Move to the next event, looping back to the beginning if necessary
                    }
                
                    updateLinkAndImage(); // Initially update link and image
                    fadeInOut(image); // Start fade-in/out animation // Start cycling events

                    
                    //The Action 2
                } else if (month === 3 && (date === 5 || date === 7) && year === 2024) {

                    let link = document.createElement("a");
                    link.href = "https://www.start.gg/tournament/the-action-2-action-replay/details";
                    link.target = "_blank";

                    let image = document.createElement("img");
                    image.src = "https://github.com/pkzstar/plus-side/blob/main/images/past-events/replay.png?raw=true";

                    image.classList.add("calendarImg");


                    link.appendChild(image);
                    cell.appendChild(link);

                    //Thunder
                } else if (month === 3 && (date === 13 || date === 14) && year === 2024) {

                    let link = document.createElement("a");
                    link.href = "https://www.start.gg/tournament/thunder-throwdown-a-best-in-texas-league-event/details";
                    link.target = "_blank";

                    let image = document.createElement("img");
                    image.src = "https://github.com/pkzstar/plus-side/blob/main/images/past-events/thunder.png?raw=true";

                    image.classList.add("calendarImg");


                    link.appendChild(image);
                    cell.appendChild(link);


                    //THE BIGGER MILE HIGH CLUB
                } else if (month === 3 && (date === 21) && year === 2024) {

                    let link = document.createElement("a");
                    link.href = "https://www.start.gg/tournament/the-bigger-mile-high-club/details";
                    link.target = "_blank";

                    let image = document.createElement("img");
                    image.src = "https://github.com/pkzstar/plus-side/blob/main/images/past-events/milehigh.jpg?raw=true";

                    image.classList.add("calendarImg");


                    link.appendChild(image);
                    cell.appendChild(link);

          //THE BIGGER MILE HIGH CLUB & scarlet
                } else if (month === 3 && (date === 20) && year === 2024) {

                    const events = [

                        {   
                            link: "https://www.start.gg/tournament/the-bigger-mile-high-club/details",
                            imageSrc: "https://github.com/pkzstar/plus-side/blob/main/images/past-events/milehigh.jpg?raw=true"
                            
                        },
                        {
                            link: "https://www.start.gg/tournament/scarlet-classic-ix-1/details",
                            imageSrc: "https://github.com/pkzstar/plus-side/blob/main/images/past-events/scarletix.png?raw=true"
                        }
                    ];

              
                    let currentIndex = 0; // Initialize current index
                    let link = document.createElement("a");
                    link.target = "_blank";
    
                    let image = document.createElement("img");
    
                    image.classList.add("calendarImg");
    
    
                    link.appendChild(image);
                    cell.appendChild(link);
    
                    // Function to fade in/out the image and link
                    function fadeInOut(element) {
                        let opacity = 0;
                        let increasing = true;
                        let interval = setInterval(function() {
                            if (increasing) {
                                opacity += 0.05;
                            } else {
                                opacity -= 0.05;
                            }
                            element.style.opacity = opacity;
                            if (opacity >= 1) {
                                increasing = false;
                                setTimeout(() => {
                                    increasing = true;
                                    updateLinkAndImage(); // Update link and image after fully visible
                                }, 2000); // Image and link will be fully visible for 2 seconds before fading out
                            } else if (opacity <= 0) {
                                clearInterval(interval);
                                fadeInOut(element); // Restart the fading animation
                            }
                        }, 100); // Adjust the timing as needed
                    }
                
                    // Function to update the link and image
                    function updateLinkAndImage() {
                        link.href = events[currentIndex].link;
                        image.src = events[currentIndex].imageSrc;
                        currentIndex = (currentIndex + 1) % events.length; // Move to the next event, looping back to the beginning if necessary
                    }
                
                    updateLinkAndImage(); // Initially update link and image
                    fadeInOut(image); // Start fade-in/out animation // Start cycling events

                    //Ledge 6
                } else if (month === 3 && date === 27 && year === 2024) {

                    let link = document.createElement("a");
                    link.href = "https://www.start.gg/tournament/who-s-on-ledge-6-melee-and-p-edition/details";
                    link.target = "_blank";

                    let image = document.createElement("img");
                    image.src = "https://github.com/pkzstar/plus-side/blob/main/images/past-events/ledge6.png?raw=true";

                    image.classList.add("calendarImg");


                    link.appendChild(image);
                    cell.appendChild(link);



                    //Rainbow Rodeo
                } else if (month === 4 && (date === 4) && year === 2024) {


                    let link = document.createElement("a");
                    link.href = "https://www.start.gg/tournament/rainbow-rodeo-a-best-in-texas-league-event/details";
                    link.target = "_blank";

                    let image = document.createElement("img");
                    image.src = "https://github.com/pkzstar/plus-side/blob/main/images/upcoming%20events/rainbow.png?raw=true";

                    image.classList.add("calendarImg");


                    link.appendChild(image);
                    cell.appendChild(link);


                    //Ghost Town and creed
                } else if (month === 4 && (date === 11) && year === 2024) { 
                    
                    const events = [

                    {   
                        link: "https://www.start.gg/tournament/ghost-town-2-call-of-the-lloyd-ft-zamu-spark/details",
                        imageSrc: "https://raw.githubusercontent.com/pkzstar/plus-side/main/images/past-events/ghost-town.png"
                        
                    },
                    {
                        link: "https://www.start.gg/tournament/creed-iii/details",
                        imageSrc: "https://github.com/pkzstar/plus-side/blob/main/images/upcoming%20events/creed.png?raw=true"
                    }
                ];


                let currentIndex = 0; // Initialize current index
                let link = document.createElement("a");
                link.target = "_blank";

                let image = document.createElement("img");

                image.classList.add("calendarImg");


                link.appendChild(image);
                cell.appendChild(link);

                // Function to fade in/out the image and link
                function fadeInOut(element) {
                    let opacity = 0;
                    let increasing = true;
                    let interval = setInterval(function() {
                        if (increasing) {
                            opacity += 0.05;
                        } else {
                            opacity -= 0.05;
                        }
                        element.style.opacity = opacity;
                        if (opacity >= 1) {
                            increasing = false;
                            setTimeout(() => {
                                increasing = true;
                                updateLinkAndImage(); // Update link and image after fully visible
                            }, 2000); // Image and link will be fully visible for 2 seconds before fading out
                        } else if (opacity <= 0) {
                            clearInterval(interval);
                            fadeInOut(element); // Restart the fading animation
                        }
                    }, 100); // Adjust the timing as needed
                }
            
                // Function to update the link and image
                function updateLinkAndImage() {
                    link.href = events[currentIndex].link;
                    image.src = events[currentIndex].imageSrc;
                    currentIndex = (currentIndex + 1) % events.length; // Move to the next event, looping back to the beginning if necessary
                }
            
                updateLinkAndImage(); // Initially update link and image
                fadeInOut(image); // Start fade-in/out animation // Start cycling events

   //Get Out of My Venue & Game 5 in the D
} else if (month === 4 && (date === 18) && year === 2024) {

    const events = [
        {   
            link: "https://www.start.gg/tournament/game-5-in-the-d/details",
            imageSrc: "https://raw.githubusercontent.com/pkzstar/plus-side/main/images/past-events/game5In.png"
            
        },
        {
            link: "https://www.start.gg/tournament/get-out-of-my-venue/details",
            imageSrc: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F653520%2Fimage-26823721265eaac67b492375dd61d58c-optimized.png&ehk=wPnJ7gk4QYPmNh4K607NYyXo4pJfEwRcPlzUymJMUVU%3D&w=280&h=280&r=0"
        }
    ];
    let currentIndex = 0; // Initialize current index

    let link = document.createElement("a");
    link.target = "_blank";

    let image = document.createElement("img");

    image.classList.add("calendarImg");

    link.appendChild(image);
    cell.appendChild(link);

    // Function to fade in/out the image and link
    function fadeInOut(element) {
        let opacity = 0;
        let increasing = true;
        let interval = setInterval(function() {
            if (increasing) {
                opacity += 0.05;
            } else {
                opacity -= 0.05;
            }
            element.style.opacity = opacity;
            if (opacity >= 1) {
                increasing = false;
                setTimeout(() => {
                    increasing = true;
                    updateLinkAndImage(); // Update link and image after fully visible
                }, 2000); // Image and link will be fully visible for 2 seconds before fading out
            } else if (opacity <= 0) {
                clearInterval(interval);
                fadeInOut(element); // Restart the fading animation
            }
        }, 100); // Adjust the timing as needed
    }

    // Function to update the link and image
    function updateLinkAndImage() {
        link.href = events[currentIndex].link;
        image.src = events[currentIndex].imageSrc;
        currentIndex = (currentIndex + 1) % events.length; // Move to the next event, looping back to the beginning if necessary
    }

    updateLinkAndImage(); // Initially update link and image
    fadeInOut(image); // Start fade-in/out animation // Start cycling events


                    //SuperTps
                } else if (month === 4 && (date === 24) && year === 2024) {


                    let link = document.createElement("a");
                    link.href = "https://www.start.gg/tournament/tripoint-smash-presents-super-tps-iii/details";
                    link.target = "_blank";

                    let image = document.createElement("img");
                    image.src = "https://github.com/pkzstar/plus-side/blob/main/images/past-events/supertps.png?raw=true";

                    image.classList.add("calendarImg");


                    link.appendChild(image);
                    cell.appendChild(link);

                    
                    //Soul Showdown
                } else if (month === 4 && (date === 25) && year === 2024) {


                    let link = document.createElement("a");
                    link.href = "https://www.start.gg/tournament/soul-showdown-a-best-in-texas-league-event/details";
                    link.target = "_blank";

                    let image = document.createElement("img");
                    image.src = "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F666183%2Fimage-ebee1a8d2cb6ce2cc050fed8580769a2-optimized.jpg&ehk=8%2BM4zWeTJnVDqCcizmN3VspAdm7p6pNJmU1px2KyESk%3D&w=280&h=280&r=0";

                    image.classList.add("calendarImg");


                    link.appendChild(image);
                    cell.appendChild(link);

                    //Smash Camp
                } else if ( (month === 4 && date === 31 && year === 2024) ) {
                    
                    let link = document.createElement("a");
                    link.href = "https://www.start.gg/tournament/smash-camp-new-lands-2024/details";
                    link.target = "_blank";

                    let image = document.createElement("img");
                    image.src = "https://github.com/pkzstar/plus-side/blob/main/images/upcoming%20events/smashcamp.png?raw=true";

                    image.classList.add("calendarImg");


                    link.appendChild(image);
                    cell.appendChild(link);


                    //invincible and smashcamp crossover
                } else if (month === 5 && (date === 1) && year === 2024) {
                    const events = [
                        {   
                            link: "https://www.start.gg/tournament/smash-camp-new-lands-2024/details",
                            imageSrc: "https://github.com/pkzstar/plus-side/blob/main/images/upcoming%20events/smashcamp.png?raw=true"
                            
                        },
                        {
                            link: "https://www.start.gg/tournament/invincible-viii/details",
                            imageSrc: "https://github.com/pkzstar/plus-side/blob/main/images/upcoming%20events/invincible8.png?raw=true"
                        }
                    ];


                    let currentIndex = 0; // Initialize current index
                    let link = document.createElement("a");
                    link.target = "_blank";

                    let image = document.createElement("img");

                    image.classList.add("calendarImg");


                    link.appendChild(image);
                    cell.appendChild(link);

                    // Function to fade in/out the image and link
                    function fadeInOut(element) {
                        let opacity = 0;
                        let increasing = true;
                        let interval = setInterval(function() {
                            if (increasing) {
                                opacity += 0.05;
                            } else {
                                opacity -= 0.05;
                            }
                            element.style.opacity = opacity;
                            if (opacity >= 1) {
                                increasing = false;
                                setTimeout(() => {
                                    increasing = true;
                                    updateLinkAndImage(); // Update link and image after fully visible
                                }, 2000); // Image and link will be fully visible for 2 seconds before fading out
                            } else if (opacity <= 0) {
                                clearInterval(interval);
                                fadeInOut(element); // Restart the fading animation
                            }
                        }, 100); // Adjust the timing as needed
                    }
                
                    // Function to update the link and image
                    function updateLinkAndImage() {
                        link.href = events[currentIndex].link;
                        image.src = events[currentIndex].imageSrc;
                        currentIndex = (currentIndex + 1) % events.length; // Move to the next event, looping back to the beginning if necessary
                    }
                
                    updateLinkAndImage(); // Initially update link and image
                    fadeInOut(image); // Start fade-in/out animation // Start cycling events


                } else if (month === 5 && (date === 2) && year === 2024) {

                    let link = document.createElement("a");
                    link.href = "https://www.start.gg/tournament/invincible-viii/details";
                    link.target = "_blank";

                    let image = document.createElement("img");
                    image.src = "https://github.com/pkzstar/plus-side/blob/main/images/upcoming%20events/invincible8.png?raw=true";

                    image.classList.add("calendarImg");


                    link.appendChild(image);
                    cell.appendChild(link);

                    //Mass Madness 47
                } else if (month === 5 && (date === 8) && year === 2024) {

                    let link = document.createElement("a");
                    link.href = "https://www.start.gg/tournament/mass-madness-47-a-new-england-melee-and-project-event/details";
                    link.target = "_blank";

                    let image = document.createElement("img");
                    image.src = "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F668782%2Fimage-f46841adb07e246ca977f2ebb36cdf7d-optimized.png&ehk=ktORfrKbxTMuLt%2FfCTZ5o32wj%2FgWtpvPfByFbDBAQOA%3D&w=280&h=280&r=0";

                    image.classList.add("calendarImg");


                    link.appendChild(image);
                    cell.appendChild(link);

                    //Ripped off
                } else if (month === 5 && (date === 14) && year === 2024) {

                    let link = document.createElement("a");
                    link.href = "https://www.start.gg/tournament/ripped-off-1/details";
                    link.target = "_blank";

                    let image = document.createElement("img");
                    image.src = "https://github.com/pkzstar/plus-side/blob/main/images/upcoming%20events/ripped.png?raw=true";

                    image.classList.add("calendarImg");


                    link.appendChild(image);
                    cell.appendChild(link);
                
                    //stoke
                } else if (month === 5 && (date === 16) && year === 2024) {

                    let link = document.createElement("a");
                    link.href = "https://www.start.gg/tournament/untitled-stoke-tournament/details";
                    link.target = "_blank";

                    let image = document.createElement("img");
                    image.src = "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F661701%2Fimage-fd4e28a68d3eef0eda541bef36e01a0f-optimized.png&ehk=1k8V3O4JFqIok2XJzcUdVsy4uG1NQMISoCxy%2Fg%2BnAxA%3D&w=280&h=280&r=0";

                    image.classList.add("calendarImg");


                    link.appendChild(image);
                    cell.appendChild(link);
                                    //SUPER CLOUDY SCUFFLE & Black Market & mineral melee & natufest
            } else if(month === 5 &&  date === 22 && year === 2024) {

                const events = [
                    {   
                        link: "https://www.start.gg/tournament/super-cloudy-scuffle-a-durham-regional/details",
                        imageSrc: "https://github.com/pkzstar/HDReport/blob/main/images/upcoming%20events/super%20cloudy%20scuffle.png?raw=true"
                        
                    },
                    {
                        link: "https://www.start.gg/tournament/the-black-market/details",
                        imageSrc: "https://github.com/pkzstar/plus-side/blob/main/images/upcoming%20events/blackmarket.png?raw=true"
                    },
                    {
                        link: "https://www.start.gg/tournament/mineral-melee-a-best-in-texas-league-event/details",
                        imageSrc: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F674411%2Fimage-a6eb8cdb1ecb9ff623700df120a6d0da-optimized.png&ehk=vC2efFJcqrX9OoFYOhe%2FewrublZOliZQgSSMSmH%2B33U%3D&w=280&h=280&r=0"
                    },
                    {
                        link: "https://www.start.gg/tournament/natufest-5-the-reawakening-no-venue-fee-melee-singles-p/details",
                        imageSrc: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F660623%2Fimage-bdb14521bb3d3ce57c4ffdd5793b3981-optimized.jpg&ehk=X19abGlB6SwZaY%2B9dMO0URVJQT3kafAP69Bni%2BfUM7s%3D&w=280&h=280&r=0"
                    }
                ];
                let currentIndex = 0; // Initialize current index

                let link = document.createElement("a");
                link.target = "_blank";

                let image = document.createElement("img");

                image.classList.add("calendarImg");

                link.appendChild(image);
                cell.appendChild(link);

                // Function to fade in/out the image and link
                function fadeInOut(element) {
                    let opacity = 0;
                    let increasing = true;
                    let interval = setInterval(function() {
                        if (increasing) {
                            opacity += 0.05;
                        } else {
                            opacity -= 0.05;
                        }
                        element.style.opacity = opacity;
                        if (opacity >= 1) {
                            increasing = false;
                            setTimeout(() => {
                                increasing = true;
                                updateLinkAndImage(); // Update link and image after fully visible
                            }, 2000); // Image and link will be fully visible for 2 seconds before fading out
                        } else if (opacity <= 0) {
                            clearInterval(interval);
                            fadeInOut(element); // Restart the fading animation
                        }
                    }, 100); // Adjust the timing as needed
                }
            
                // Function to update the link and image
                function updateLinkAndImage() {
                    link.href = events[currentIndex].link;
                    image.src = events[currentIndex].imageSrc;
                    currentIndex = (currentIndex + 1) % events.length; // Move to the next event, looping back to the beginning if necessary
                }
            
                updateLinkAndImage(); // Initially update link and image
                fadeInOut(image); // Start fade-in/out animation // Start cycling events

 

                    //Phantom 2024
                } else if (month === 6 && (date === 6 || date === 7) && year === 2024) {

                    let link = document.createElement("a");
                    link.href = "https://www.start.gg/tournament/phantom-2024/details";
                    link.target = "_blank";

                    let image = document.createElement("img");
                    image.src = "https://github.com/pkzstar/plus-side/blob/main/images/upcoming%20events/phantom.png?raw=true";

                    image.classList.add("calendarImg");


                    link.appendChild(image);
                    cell.appendChild(link);


                    //Glacier Gauntlet
                } else if (month === 6 && (date === 6 || date === 13) && year === 2024) {

                    let link = document.createElement("a");
                    link.href = "https://www.start.gg/tmgg";
                    link.target = "_blank";

                    let image = document.createElement("img");
                    image.src = "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F681727%2Fimage-d59c9aef0d5d77939939dbd970ef6c7d-optimized.png&ehk=AUUIFLk0Oiq1d3WhjesVORgtOMv3%2FhrahPeTbelbXa8%3D&w=280&h=280&r=0";

                    image.classList.add("calendarImg");


                    link.appendChild(image);
                    cell.appendChild(link);

       //Terminal Velocity & Sunset 2024
    } else if (month === 6 && (date === 14) && year === 2024) {
        const events = [
            {   
                link: "https://www.start.gg/tournament/terminal-velocity/details",
                imageSrc: "https://github.com/pkzstar/plus-side/blob/main/images/upcoming%20events/terminal.png?raw=true"
                
            },
            {
                link: "https://www.start.gg/tournament/sunset-2024/details",
                imageSrc: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F674387%2Fimage-bd67f6a27e634d0fa71050cf01605081-optimized.jpg&ehk=vdl14TFJAjqPpTQ9MaYEu7eid%2BvknHYwSI%2FfNal95aY%3D&w=280&h=280&r=0"
            }
        ];


        let currentIndex = 0; // Initialize current index
        let link = document.createElement("a");
        link.target = "_blank";

        let image = document.createElement("img");

        image.classList.add("calendarImg");


        link.appendChild(image);
        cell.appendChild(link);

        // Function to fade in/out the image and link
        function fadeInOut(element) {
            let opacity = 0;
            let increasing = true;
            let interval = setInterval(function() {
                if (increasing) {
                    opacity += 0.05;
                } else {
                    opacity -= 0.05;
                }
                element.style.opacity = opacity;
                if (opacity >= 1) {
                    increasing = false;
                    setTimeout(() => {
                        increasing = true;
                        updateLinkAndImage(); // Update link and image after fully visible
                    }, 2000); // Image and link will be fully visible for 2 seconds before fading out
                } else if (opacity <= 0) {
                    clearInterval(interval);
                    fadeInOut(element); // Restart the fading animation
                }
            }, 100); // Adjust the timing as needed
        }
    
        // Function to update the link and image
        function updateLinkAndImage() {
            link.href = events[currentIndex].link;
            image.src = events[currentIndex].imageSrc;
            currentIndex = (currentIndex + 1) % events.length; // Move to the next event, looping back to the beginning if necessary
        }
    
        updateLinkAndImage(); // Initially update link and image
        fadeInOut(image); // Start fade-in/out animation // Start cycling events


                //Game 5 in the D #4
    } else if(month === 6 && date === 20 && year === 2024) {
                    // Example link with image
                    let link = document.createElement("a");
                    link.href = "https://www.start.gg/tournament/game-5-in-the-d-4-the-canadian-invasion/details";
                    link.target = "_blank";
    
                    let image = document.createElement("img");
                    image.src = "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F675196%2Fimage-54ebffee07de2dd4d200af40c8df6987-optimized.jpg&ehk=6cxSKy3MqOJK%2FFkbqEGwYZdcBnEglYc1xpdIKB0zOBs%3D&w=280&h=280&r=0";
    
                    image.classList.add("calendarImg");
    
    
                    link.appendChild(image);
                    cell.appendChild(link);
    
                    //warehouse war
                } else if (month === 6 && (date === 26 || date === 27) && year === 2024) {

                    let link = document.createElement("a");
                    link.href = "https://www.start.gg/tournament/warehouse-war-4/details";
                    link.target = "_blank";

                    let image = document.createElement("img");
                    image.src = "https://github.com/pkzstar/plus-side/blob/main/images/upcoming%20events/ww4.png?raw=true";

                    image.classList.add("calendarImg");


                    link.appendChild(image);
                    cell.appendChild(link);

                 //Carnival-clash + Glacier Gauntlet
                } else if (month === 7 && (date === 3) && year === 2024) {

                        const events = [
                            {   
                                link: "https://www.start.gg/tournament/carnival-clash-2/details",
                                imageSrc: "https://github.com/pkzstar/plus-side/blob/main/images/upcoming%20events/carnivalclash2.png?raw=true"
                                
                            },
                            {
                                link: "https://www.start.gg/tmgg",
                                imageSrc: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F681727%2Fimage-d59c9aef0d5d77939939dbd970ef6c7d-optimized.png&ehk=AUUIFLk0Oiq1d3WhjesVORgtOMv3%2FhrahPeTbelbXa8%3D&w=280&h=280&r=0"
                            }
                        ];
                        let currentIndex = 0; // Initialize current index
                    
                        let link = document.createElement("a");
                        link.target = "_blank";
                    
                        let image = document.createElement("img");
                    
                        image.classList.add("calendarImg");
                    
                        link.appendChild(image);
                        cell.appendChild(link);
                    
                        // Function to fade in/out the image and link
                        function fadeInOut(element) {
                            let opacity = 0;
                            let increasing = true;
                            let interval = setInterval(function() {
                                if (increasing) {
                                    opacity += 0.05;
                                } else {
                                    opacity -= 0.05;
                                }
                                element.style.opacity = opacity;
                                if (opacity >= 1) {
                                    increasing = false;
                                    setTimeout(() => {
                                        increasing = true;
                                        updateLinkAndImage(); // Update link and image after fully visible
                                    }, 2000); // Image and link will be fully visible for 2 seconds before fading out
                                } else if (opacity <= 0) {
                                    clearInterval(interval);
                                    fadeInOut(element); // Restart the fading animation
                                }
                            }, 100); // Adjust the timing as needed
                        }
                    
                        // Function to update the link and image
                        function updateLinkAndImage() {
                            link.href = events[currentIndex].link;
                            image.src = events[currentIndex].imageSrc;
                            currentIndex = (currentIndex + 1) % events.length; // Move to the next event, looping back to the beginning if necessary
                        }
                    
                        updateLinkAndImage(); // Initially update link and image
                        fadeInOut(image); // Start fade-in/out animation // Start cycling events
  
                    // Storm IX + FW:TGA
                    } else if (month === 7 && (date === 17) && year === 2024) {

                        const events = [
                            {   
                                link: "https://www.start.gg/tournament/storm-ix/details",
                                imageSrc: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F685889%2Fimage-93aa902db1980d230e1408e73e570b32-optimized.png&ehk=k0xKVQvVRrSRjoIXPf4YN4aPmQXvWKjwYTpH2OKTo0E%3D&w=280&h=280&r=0"
                                
                            },
                            {
                                link: "https://start.gg/fw",
                                imageSrc: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F682493%2Fimage-3f77ea1166a44f5bb47bd76086aca4f0-optimized.png&ehk=Ihr%2FiITlMPIj3eGoJ8rx7jp8LU9d0zM47PLNNfo3S3E%3D&w=280&h=280&r=0"
                            }
                        ];
                        let currentIndex = 0; // Initialize current index
                    
                        let link = document.createElement("a");
                        link.target = "_blank";
                    
                        let image = document.createElement("img");
                    
                        image.classList.add("calendarImg");
                    
                        link.appendChild(image);
                        cell.appendChild(link);
                    
                        // Function to fade in/out the image and link
                        function fadeInOut(element) {
                            let opacity = 0;
                            let increasing = true;
                            let interval = setInterval(function() {
                                if (increasing) {
                                    opacity += 0.05;
                                } else {
                                    opacity -= 0.05;
                                }
                                element.style.opacity = opacity;
                                if (opacity >= 1) {
                                    increasing = false;
                                    setTimeout(() => {
                                        increasing = true;
                                        updateLinkAndImage(); // Update link and image after fully visible
                                    }, 2000); // Image and link will be fully visible for 2 seconds before fading out
                                } else if (opacity <= 0) {
                                    clearInterval(interval);
                                    fadeInOut(element); // Restart the fading animation
                                }
                            }, 100); // Adjust the timing as needed
                        }
                    
                        // Function to update the link and image
                        function updateLinkAndImage() {
                            link.href = events[currentIndex].link;
                            image.src = events[currentIndex].imageSrc;
                            currentIndex = (currentIndex + 1) % events.length; // Move to the next event, looping back to the beginning if necessary
                        }
                    
                        updateLinkAndImage(); // Initially update link and image
                        fadeInOut(image); // Start fade-in/out animation // Start cycling events


                    // Garden Brawl + Condo of Blood 1+1/2
                    } else if (month === 7 && (date === 24) && year === 2024) {

                        const events = [
                            {   
                                link: "https://www.start.gg/tournament/garden-brawl/details",
                                imageSrc: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F673156%2Fimage-0a6f4b065a1ae1c4d91d5756129d7bb8-optimized.png&ehk=ba6JikL4X%2Frf5t3o54c5h95%2BdgVUtm66bGi3H2jzZV8%3D&w=280&h=280&r=0"
                                
                            },
                            {
                                link: "https://www.start.gg/tournament/condo-of-blood/details",
                                imageSrc: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F695366%2Fimage-69b08d9c6872b4db4d2ffa1374652983-optimized.png&ehk=4bF4qUThMtweHMe%2ByEqvxnBepEhxvTi95m0CU5Lh5Q0%3D&w=280&h=280&r=0"
                            }
                        ];
                        let currentIndex = 0; // Initialize current index
                    
                        let link = document.createElement("a");
                        link.target = "_blank";
                    
                        let image = document.createElement("img");
                    
                        image.classList.add("calendarImg");
                    
                        link.appendChild(image);
                        cell.appendChild(link);
                    
                        // Function to fade in/out the image and link
                        function fadeInOut(element) {
                            let opacity = 0;
                            let increasing = true;
                            let interval = setInterval(function() {
                                if (increasing) {
                                    opacity += 0.05;
                                } else {
                                    opacity -= 0.05;
                                }
                                element.style.opacity = opacity;
                                if (opacity >= 1) {
                                    increasing = false;
                                    setTimeout(() => {
                                        increasing = true;
                                        updateLinkAndImage(); // Update link and image after fully visible
                                    }, 2000); // Image and link will be fully visible for 2 seconds before fading out
                                } else if (opacity <= 0) {
                                    clearInterval(interval);
                                    fadeInOut(element); // Restart the fading animation
                                }
                            }, 100); // Adjust the timing as needed
                        }
                    
                        // Function to update the link and image
                        function updateLinkAndImage() {
                            link.href = events[currentIndex].link;
                            image.src = events[currentIndex].imageSrc;
                            currentIndex = (currentIndex + 1) % events.length; // Move to the next event, looping back to the beginning if necessary
                        }
                    
                        updateLinkAndImage(); // Initially update link and image
                        fadeInOut(image); // Start fade-in/out animation // Start cycling events

                //Tech Zone 3 + DFW Fest Finale
                }  else if (month === 7 && (date === 31) && year === 2024) {

                    const events = [
                        {   
                            link: "https://www.start.gg/tournament/tech-zone-3/details",
                            imageSrc: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F685674%2Fimage-c4721066d975473bbb300c0cb9c6fba3-optimized.png&ehk=8hPucP15HYK%2BadyuKPEp36gjy6N9HFnZm5UZKxcINS8%3D&w=280&h=280&r=0"
                            
                        },
                        {
                            link: "https://www.start.gg/tournament/dfw-fest-finale/details",
                            imageSrc: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F694863%2Fimage-566e5e5f63a5f87f94a87375509f61c9-optimized.png&ehk=CaWmVw9oqVniui2UvyVvvcfkhfGIJ9rEMmwP9AdBz9A%3D&w=280&h=280&r=0"
                        }
                    ];
                    let currentIndex = 0; // Initialize current index
                
                    let link = document.createElement("a");
                    link.target = "_blank";
                
                    let image = document.createElement("img");
                
                    image.classList.add("calendarImg");
                
                    link.appendChild(image);
                    cell.appendChild(link);
                
                    // Function to fade in/out the image and link
                    function fadeInOut(element) {
                        let opacity = 0;
                        let increasing = true;
                        let interval = setInterval(function() {
                            if (increasing) {
                                opacity += 0.05;
                            } else {
                                opacity -= 0.05;
                            }
                            element.style.opacity = opacity;
                            if (opacity >= 1) {
                                increasing = false;
                                setTimeout(() => {
                                    increasing = true;
                                    updateLinkAndImage(); // Update link and image after fully visible
                                }, 2000); // Image and link will be fully visible for 2 seconds before fading out
                            } else if (opacity <= 0) {
                                clearInterval(interval);
                                fadeInOut(element); // Restart the fading animation
                            }
                        }, 100); // Adjust the timing as needed
                    }
                
                    // Function to update the link and image
                    function updateLinkAndImage() {
                        link.href = events[currentIndex].link;
                        image.src = events[currentIndex].imageSrc;
                        currentIndex = (currentIndex + 1) % events.length; // Move to the next event, looping back to the beginning if necessary
                    }
                
                    updateLinkAndImage(); // Initially update link and image
                    fadeInOut(image); // Start fade-in/out animation // Start cycling events

                //Undertow
                } else if (month === 8 && (date === 6 || date === 7 || date === 8) && year === 2024) {


                    let link = document.createElement("a");
                    link.href = "https://www.start.gg/tournament/undertow-2024/details";
                    link.target = "_blank";

                    let image = document.createElement("img");
                    image.src = "https://github.com/pkzstar/plus-side/blob/main/images/upcoming%20events/undertow2024.png?raw=true";

                    image.classList.add("calendarImg");


                    link.appendChild(image);
                    cell.appendChild(link);


                //Rising Rumble
                } else if (month === 8 && (date === 14) && year === 2024) {


                let link = document.createElement("a");
                link.href = "https://www.start.gg/tournament/rising-rumble-a-best-in-texas-league-event/details";
                link.target = "_blank";

                let image = document.createElement("img");
                image.src = "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F696391%2Fimage-7685a90fa93f882994733553bd877bdb-optimized.png&ehk=J4kX1Hmj1QYyaSM6lqGDfNRXKJsBVr%2BD0j7R%2ByW%2B1aY%3D&w=280&h=280&r=0";

                image.classList.add("calendarImg");


                link.appendChild(image);
                cell.appendChild(link);


                //Infrared 2024
                } else if (month === 9 && (date === 6) && year === 2024) {


                    let link = document.createElement("a");
                    link.href = "https://www.start.gg/tournament/infrared-2024/details";
                    link.target = "_blank";

                    let image = document.createElement("img");
                    image.src = "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F689857%2Fimage-beb293c506128370f03dbac8b3301b61-optimized.jpg&ehk=USndSOdl8bTgh1izawrAwxr2nxvNn%2FTpocJgAGqoDY0%3D&w=280&h=280&r=0";

                    image.classList.add("calendarImg");


                    link.appendChild(image);
                    cell.appendChild(link);


                //G5itD #5 & baseline & finalwarning
                } else if (month === 8 && (date === 21) && year === 2024) {

                    const events = [
                        {   
                            link: "https://www.start.gg/tournament/game-5-in-the-d-5-the-big-one/details",
                            imageSrc: "https://github.com/pkzstar/plus-side/blob/main/images/past-events/game5In.png?raw=true"
                            
                        },
                        {
                            link: "https://www.start.gg/tournament/baseline-2024/details",
                            imageSrc: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F696951%2Fimage-774bc33fc7d897565f38748cc29f7e83-optimized.png&ehk=fy1oedzzzd2gQFlAnQqL8YbDk8cGiuxWg2oGGup6CJc%3D&w=280&h=280&r=0"
                        },
                        {
                            link: "https://www.start.gg/tournament/final-warning-the-golden-age-chapter-ii/details",
                            imageSrc: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F701424%2Fimage-d681bf47d0ca7e37daf9b88631bea7c6-optimized.png&ehk=4%2FtFRi5qoGZRp6z7gv14YZMIgr%2BD171SAeuCN7Zxs90%3D&w=280&h=280&r=0"
                        }
                    ];
                    let currentIndex = 0; // Initialize current index
                
                    let link = document.createElement("a");
                    link.target = "_blank";
                
                    let image = document.createElement("img");
                
                    image.classList.add("calendarImg");
                
                    link.appendChild(image);
                    cell.appendChild(link);
                
                    // Function to fade in/out the image and link
                    function fadeInOut(element) {
                        let opacity = 0;
                        let increasing = true;
                        let interval = setInterval(function() {
                            if (increasing) {
                                opacity += 0.05;
                            } else {
                                opacity -= 0.05;
                            }
                            element.style.opacity = opacity;
                            if (opacity >= 1) {
                                increasing = false;
                                setTimeout(() => {
                                    increasing = true;
                                    updateLinkAndImage(); // Update link and image after fully visible
                                }, 2000); // Image and link will be fully visible for 2 seconds before fading out
                            } else if (opacity <= 0) {
                                clearInterval(interval);
                                fadeInOut(element); // Restart the fading animation
                            }
                        }, 100); // Adjust the timing as needed
                    }
                
                    // Function to update the link and image
                    function updateLinkAndImage() {
                        link.href = events[currentIndex].link;
                        image.src = events[currentIndex].imageSrc;
                        currentIndex = (currentIndex + 1) % events.length; // Move to the next event, looping back to the beginning if necessary
                    }
                
                    updateLinkAndImage(); // Initially update link and image
                    fadeInOut(image); // Start fade-in/out animation // Start cycling events


                //G5itD #5 & baseline
                } else if (month === 8 && (date === 22) && year === 2024) {

                    const events = [
                        {   
                            link: "https://www.start.gg/tournament/game-5-in-the-d-5-the-big-one/details",
                            imageSrc: "https://github.com/pkzstar/plus-side/blob/main/images/past-events/game5In.png?raw=true"
                            
                        },
                        {
                            link: "https://www.start.gg/tournament/baseline-2024/details",
                            imageSrc: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F696951%2Fimage-774bc33fc7d897565f38748cc29f7e83-optimized.png&ehk=fy1oedzzzd2gQFlAnQqL8YbDk8cGiuxWg2oGGup6CJc%3D&w=280&h=280&r=0"
                        }
                    ];
                    let currentIndex = 0; // Initialize current index
                
                    let link = document.createElement("a");
                    link.target = "_blank";
                
                    let image = document.createElement("img");
                
                    image.classList.add("calendarImg");
                
                    link.appendChild(image);
                    cell.appendChild(link);
                
                    // Function to fade in/out the image and link
                    function fadeInOut(element) {
                        let opacity = 0;
                        let increasing = true;
                        let interval = setInterval(function() {
                            if (increasing) {
                                opacity += 0.05;
                            } else {
                                opacity -= 0.05;
                            }
                            element.style.opacity = opacity;
                            if (opacity >= 1) {
                                increasing = false;
                                setTimeout(() => {
                                    increasing = true;
                                    updateLinkAndImage(); // Update link and image after fully visible
                                }, 2000); // Image and link will be fully visible for 2 seconds before fading out
                            } else if (opacity <= 0) {
                                clearInterval(interval);
                                fadeInOut(element); // Restart the fading animation
                            }
                        }, 100); // Adjust the timing as needed
                    }
                
                    // Function to update the link and image
                    function updateLinkAndImage() {
                        link.href = events[currentIndex].link;
                        image.src = events[currentIndex].imageSrc;
                        currentIndex = (currentIndex + 1) % events.length; // Move to the next event, looping back to the beginning if necessary
                    }
                
                    updateLinkAndImage(); // Initially update link and image
                    fadeInOut(image); // Start fade-in/out animation // Start cycling events

                      //Mock the Hill & Who's on Ledge 8
                } else if (month === 8 && (date === 28) && year === 2024) {

                    const events = [
                        {   
                            link: "https://www.start.gg/tournament/mock-the-hill/details",
                            imageSrc: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F697791%2Fimage-39545909a658026a858498ec68a98ebb-optimized.jpg&ehk=ptFX7jG0LIcnP8be9NZVzkVsjHxCT4RTEsPKL%2BloJbw%3D&w=280&h=280&r=0"
                            
                        },
                        {
                            link: "https://www.start.gg/tournament/who-s-on-ledge-8/details",
                            imageSrc: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F705574%2Fimage-001e0bb9ef6814d5ad9d0da9d15e20cc-optimized.png&ehk=nFigS1l1Ei6eXaxoKzSl2OM2Zxrzdl2PooqbqigXQ%2BE%3D&w=280&h=280&r=0"
                        }
                    ];
                    let currentIndex = 0; // Initialize current index
                
                    let link = document.createElement("a");
                    link.target = "_blank";
                
                    let image = document.createElement("img");
                
                    image.classList.add("calendarImg");
                
                    link.appendChild(image);
                    cell.appendChild(link);
                
                    // Function to fade in/out the image and link
                    function fadeInOut(element) {
                        let opacity = 0;
                        let increasing = true;
                        let interval = setInterval(function() {
                            if (increasing) {
                                opacity += 0.05;
                            } else {
                                opacity -= 0.05;
                            }
                            element.style.opacity = opacity;
                            if (opacity >= 1) {
                                increasing = false;
                                setTimeout(() => {
                                    increasing = true;
                                    updateLinkAndImage(); // Update link and image after fully visible
                                }, 2000); // Image and link will be fully visible for 2 seconds before fading out
                            } else if (opacity <= 0) {
                                clearInterval(interval);
                                fadeInOut(element); // Restart the fading animation
                            }
                        }, 100); // Adjust the timing as needed
                    }
                
                    // Function to update the link and image
                    function updateLinkAndImage() {
                        link.href = events[currentIndex].link;
                        image.src = events[currentIndex].imageSrc;
                        currentIndex = (currentIndex + 1) % events.length; // Move to the next event, looping back to the beginning if necessary
                    }
                
                    updateLinkAndImage(); // Initially update link and image
                    fadeInOut(image); // Start fade-in/out animation // Start cycling events

                      //Big Cheese 5
                } else if (month === 9 && (date === 11) && year === 2024) {


                    let link = document.createElement("a");
                    link.href = "https://www.start.gg/tournament/big-cheese-5-south-australia-smash-fgc-major/details";
                    link.target = "_blank";

                    let image = document.createElement("img");
                    image.src = "https://github.com/pkzstar/plus-side/blob/main/images/upcoming%20events/bigcheese5.png?raw=true";

                    image.classList.add("calendarImg");


                    link.appendChild(image);
                    cell.appendChild(link);

                //Big Cheese 5, FNAFingy's 2, & SOTT 9
                } else if(month === 9 &&  date === 12 && year === 2024) {

                const events = [
                    {   
                        link: "https://www.start.gg/tournament/big-cheese-5-south-australia-smash-fgc-major/details",
                        imageSrc: "https://github.com/pkzstar/plus-side/blob/main/images/upcoming%20events/bigcheese5.png?raw=true"
                        
                    },
                    {
                        link: "https://www.start.gg/tournament/five-nights-at-fingy-s-2/details",
                        imageSrc: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F668397%2Fimage-1e18220f83e877c6da334764a00977b5-optimized.png&ehk=JOwH0wB0RoMNi3UjTkR5NNXjF%2BtlvlE2aTwSJdeazF4%3D&w=280&h=280&r=0"
                    },
                    {
                        link: "https://www.start.gg/tournament/smash-of-the-titans-9-1/details",
                        imageSrc: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F694496%2Fimage-e7a587d3d9781f79439701caf9dfbdf0-optimized.jpg&ehk=kO51zDMS2lR0O%2F%2BqgHqs6PjfeA8k0H%2BD3Kd%2BfPrNMuY%3D&w=280&h=280&r=0"
                    }
                ];
                let currentIndex = 0; // Initialize current index

                let link = document.createElement("a");
                link.target = "_blank";

                let image = document.createElement("img");

                image.classList.add("calendarImg");

                link.appendChild(image);
                cell.appendChild(link);

                // Function to fade in/out the image and link
                function fadeInOut(element) {
                    let opacity = 0;
                    let increasing = true;
                    let interval = setInterval(function() {
                        if (increasing) {
                            opacity += 0.05;
                        } else {
                            opacity -= 0.05;
                        }
                        element.style.opacity = opacity;
                        if (opacity >= 1) {
                            increasing = false;
                            setTimeout(() => {
                                increasing = true;
                                updateLinkAndImage(); // Update link and image after fully visible
                            }, 2000); // Image and link will be fully visible for 2 seconds before fading out
                        } else if (opacity <= 0) {
                            clearInterval(interval);
                            fadeInOut(element); // Restart the fading animation
                        }
                    }, 100); // Adjust the timing as needed
                }
            
                // Function to update the link and image
                function updateLinkAndImage() {
                    link.href = events[currentIndex].link;
                    image.src = events[currentIndex].imageSrc;
                    currentIndex = (currentIndex + 1) % events.length; // Move to the next event, looping back to the beginning if necessary
                }
            
                updateLinkAndImage(); // Initially update link and image
                fadeInOut(image); // Start fade-in/out animation // Start cycling events

                //Big Cheese + Fnaf 2
                } else if (month === 9 && (date === 13) && year === 2024) {

                    const events = [
                        {   
                            link: "https://www.start.gg/tournament/big-cheese-5-south-australia-smash-fgc-major/details",
                            imageSrc: "https://github.com/pkzstar/plus-side/blob/main/images/upcoming%20events/bigcheese5.png?raw=true"
                            
                        },
                        {
                            link: "https://www.start.gg/tournament/five-nights-at-fingy-s-2/details",
                            imageSrc: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F668397%2Fimage-1e18220f83e877c6da334764a00977b5-optimized.png&ehk=JOwH0wB0RoMNi3UjTkR5NNXjF%2BtlvlE2aTwSJdeazF4%3D&w=280&h=280&r=0"
                        }
                    ];
                    let currentIndex = 0; // Initialize current index
                
                    let link = document.createElement("a");
                    link.target = "_blank";
                
                    let image = document.createElement("img");
                
                    image.classList.add("calendarImg");
                
                    link.appendChild(image);
                    cell.appendChild(link);
                
                    // Function to fade in/out the image and link
                    function fadeInOut(element) {
                        let opacity = 0;
                        let increasing = true;
                        let interval = setInterval(function() {
                            if (increasing) {
                                opacity += 0.05;
                            } else {
                                opacity -= 0.05;
                            }
                            element.style.opacity = opacity;
                            if (opacity >= 1) {
                                increasing = false;
                                setTimeout(() => {
                                    increasing = true;
                                    updateLinkAndImage(); // Update link and image after fully visible
                                }, 2000); // Image and link will be fully visible for 2 seconds before fading out
                            } else if (opacity <= 0) {
                                clearInterval(interval);
                                fadeInOut(element); // Restart the fading animation
                            }
                        }, 100); // Adjust the timing as needed
                    }
                
                    // Function to update the link and image
                    function updateLinkAndImage() {
                        link.href = events[currentIndex].link;
                        image.src = events[currentIndex].imageSrc;
                        currentIndex = (currentIndex + 1) % events.length; // Move to the next event, looping back to the beginning if necessary
                    }
                
                    updateLinkAndImage(); // Initially update link and image
                    fadeInOut(image); // Start fade-in/out animation // Start cycling events



                //Bustered Out + LA Super Nexus + condo of blood + Masters Eight
            } else if (month === 9 && (date === 19) && year === 2024) {

                const events = [
                    {   
                        link: "https://www.start.gg/tournament/bustered-out/details",
                        imageSrc: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F703739%2Fimage-37259456efe40fdef53a88c108f61736-optimized.png&ehk=BeB8DjJp5ZmXStsCqSKmFtIEfHIqDl7UUDZv2fdRuU4%3D&w=280&h=280&r=00"
                        
                    },
                    {
                        link: "https://www.start.gg/tournament/la-super-nexus-xvi/details",
                        imageSrc: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F702923%2Fimage-63104f6428f87cba5cc7db5a34d7e9a9-optimized.png&ehk=Gd2KsBZ6MpIu%2BN%2BtSrYDgTfvc6anIk%2B%2FNF72y1tiwVE%3D&w=280&h=280&r=0"
                    },
                    {
                        link: "https://www.start.gg/tournament/condo-of-blood-1-1-2-rumble-arena-of-lovers/details",
                        imageSrc: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F715099%2Fimage-663dbb431d19589ada53ac7ac9231f4f-optimized.png&ehk=DYbYVTiK0yQLi3ZT1kpljn6S%2FWG7iiBSd8fPVaa6%2B%2Bc%3D&w=280&h=280&r=0"
                    },
                    {
                        link: "https://www.start.gg/tournament/the-masters-eight-the-best-in-texas-finale/details",
                        imageSrc: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F710846%2Fimage-a280ba6e5ebd674f8e4cf5792f03daa6-optimized.png&ehk=AbKKao2cGi%2Fv2vHt%2FR%2FfCJOi1mLF45pFFOKlaL73Cl4%3D&w=280&h=280&r=0"
                    }
                ];
                let currentIndex = 0; // Initialize current index
            
                let link = document.createElement("a");
                link.target = "_blank";
            
                let image = document.createElement("img");
            
                image.classList.add("calendarImg");
            
                link.appendChild(image);
                cell.appendChild(link);
            
                // Function to fade in/out the image and link
                function fadeInOut(element) {
                    let opacity = 0;
                    let increasing = true;
                    let interval = setInterval(function() {
                        if (increasing) {
                            opacity += 0.05;
                        } else {
                            opacity -= 0.05;
                        }
                        element.style.opacity = opacity;
                        if (opacity >= 1) {
                            increasing = false;
                            setTimeout(() => {
                                increasing = true;
                                updateLinkAndImage(); // Update link and image after fully visible
                            }, 2000); // Image and link will be fully visible for 2 seconds before fading out
                        } else if (opacity <= 0) {
                            clearInterval(interval);
                            fadeInOut(element); // Restart the fading animation
                        }
                    }, 100); // Adjust the timing as needed
                }
            
                // Function to update the link and image
                function updateLinkAndImage() {
                    link.href = events[currentIndex].link;
                    image.src = events[currentIndex].imageSrc;
                    currentIndex = (currentIndex + 1) % events.length; // Move to the next event, looping back to the beginning if necessary
                }
            
                updateLinkAndImage(); // Initially update link and image
                fadeInOut(image); // Start fade-in/out animation // Start cycling events



            // Beachin
            } else if (month === 10 && (date === 1 || date === 3) && year === 2024) {


            let link = document.createElement("a");
            link.href = "https://www.start.gg/tournament/beachin/details";
            link.target = "_blank";

            let image = document.createElement("img");
            image.src = "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F686090%2Fimage-684569cc3ea9311290b0ea4112e96952-optimized.png&ehk=QzjLADSfuKgzgjCzafkZLcvUzaGH%2Fu69WSLcT4QYIMo%3D&w=280&h=280&r=0";

            image.classList.add("calendarImg");


            link.appendChild(image);
            cell.appendChild(link);

            // Beachin & homecoming + Cougar Smash: HAUNTED
        } else if(month === 10 &&  date === 2 && year === 2024) {

            const events = [
                {   
                    link: "https://www.start.gg/tournament/beachin/details",
                    imageSrc: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F686090%2Fimage-684569cc3ea9311290b0ea4112e96952-optimized.png&ehk=QzjLADSfuKgzgjCzafkZLcvUzaGH%2Fu69WSLcT4QYIMo%3D&w=280&h=280&r=0"
                    
                },
                {
                    link: "https://smashboards.com/threads/homecoming-p-hdr-nov-9th-2024.523550/",
                    imageSrc: "https://github.com/pkzstar/plus-side/blob/main/images/upcoming%20events/homecominglogo.png?raw=true"
                },
                {
                    link: "https://www.start.gg/tournament/cougar-smash-haunted/details",
                    imageSrc: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F716061%2Fimage-3c7c7a6766ea7269c9284590b58b5656-optimized.png&ehk=mwUw41n4GIi6x3pDGKRLiGS2RCga8XU%2Be1HXVvyAg30%3D&w=280&h=280&r=0"
                }


            ];
            let currentIndex = 0; // Initialize current index

            let link = document.createElement("a");
            link.target = "_blank";

            let image = document.createElement("img");

            image.classList.add("calendarImg");

            link.appendChild(image);
            cell.appendChild(link);

            // Function to fade in/out the image and link
            function fadeInOut(element) {
                let opacity = 0;
                let increasing = true;
                let interval = setInterval(function() {
                    if (increasing) {
                        opacity += 0.05;
                    } else {
                        opacity -= 0.05;
                    }
                    element.style.opacity = opacity;
                    if (opacity >= 1) {
                        increasing = false;
                        setTimeout(() => {
                            increasing = true;
                            updateLinkAndImage(); // Update link and image after fully visible
                        }, 2000); // Image and link will be fully visible for 2 seconds before fading out
                    } else if (opacity <= 0) {
                        clearInterval(interval);
                        fadeInOut(element); // Restart the fading animation
                    }
                }, 100); // Adjust the timing as needed
            }
        
            // Function to update the link and image
            function updateLinkAndImage() {
                link.href = events[currentIndex].link;
                image.src = events[currentIndex].imageSrc;
                currentIndex = (currentIndex + 1) % events.length; // Move to the next event, looping back to the beginning if necessary
            }
        
            updateLinkAndImage(); // Initially update link and image
            fadeInOut(image); // Start fade-in/out animation // Start cycling events

                           //tussleopolis & eugg + CPM: The Horror + Candle HoG
                        } else if(month === 9 &&  date === 26 && year === 2024) {

                            const events = [
                                {   
                                    link: "https://www.start.gg/tournament/tussleopolis/details",
                                    imageSrc: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F694928%2Fimage-d570f648aa26ccea66517f31a2dccda5-optimized.png&ehk=wQJOmHo9Afn6nRwa%2FwDShMfftHg7tIqqjo%2BnGCznW8s%3D&w=280&h=280&r=0"
                                    
                                },
                                {
                                    link: "https://www.start.gg/tournament/eugg-s-the-monthly-grindhouse-now-slaying/details",
                                    imageSrc: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F707279%2Fimage-c671e5249610d692af2e9390a5bd39b6-optimized.png&ehk=%2FfxMt4ldJJRdMBSJ2rkkrUGI06gxa%2FUO8cw2J2cGfHU%3D&w=280&h=280&r=0"
                                },
                                {
                                    link: "https://www.start.gg/tournament/college-park-mutiny-the-horror/details",
                                    imageSrc: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F718217%2Fimage-909fd918014a0f14666628f9d2dacb2c-optimized.png&ehk=StdABTKuhDnUDTEa7oRlh7V3y9EXS0xzJLBubh84ZaU%3D&w=280&h=280&r=0"
                                },
                                {
                                    link: "https://www.start.gg/tournament/candlehog-4/details",
                                    imageSrc: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F714806%2Fimage-4b2bd45378c5b445ed7f2f3f4e86c090-optimized.png&ehk=r%2BlFLh3znnbmPo1yNdvCPZhzHggYSdFVi5t4wfk8s5Q%3D&w=280&h=280&r=0"
                                }
            
                            ];
                            let currentIndex = 0; // Initialize current index
            
                            let link = document.createElement("a");
                            link.target = "_blank";
            
                            let image = document.createElement("img");
            
                            image.classList.add("calendarImg");
            
                            link.appendChild(image);
                            cell.appendChild(link);
            
                            // Function to fade in/out the image and link
                            function fadeInOut(element) {
                                let opacity = 0;
                                let increasing = true;
                                let interval = setInterval(function() {
                                    if (increasing) {
                                        opacity += 0.05;
                                    } else {
                                        opacity -= 0.05;
                                    }
                                    element.style.opacity = opacity;
                                    if (opacity >= 1) {
                                        increasing = false;
                                        setTimeout(() => {
                                            increasing = true;
                                            updateLinkAndImage(); // Update link and image after fully visible
                                        }, 2000); // Image and link will be fully visible for 2 seconds before fading out
                                    } else if (opacity <= 0) {
                                        clearInterval(interval);
                                        fadeInOut(element); // Restart the fading animation
                                    }
                                }, 100); // Adjust the timing as needed
                            }
                        
                            // Function to update the link and image
                            function updateLinkAndImage() {
                                link.href = events[currentIndex].link;
                                image.src = events[currentIndex].imageSrc;
                                currentIndex = (currentIndex + 1) % events.length; // Move to the next event, looping back to the beginning if necessary
                            }
                        
                            updateLinkAndImage(); // Initially update link and image
                            fadeInOut(image); // Start fade-in/out animation // Start cycling events

            //show me your moves & cardd's basement
        } else if(month === 10 &&  date === 9 && year === 2024) {

            const events = [
                {   
                    link: "https://www.start.gg/tournament/show-me-your-moves-24-1/details",
                    imageSrc: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F698361%2Fimage-d2e2c3e64de1dc9428c9460ea5c42180-optimized.jpg&ehk=i1VdSzAZQGuklEvHYhFum3SBQvSjxHcoDLlRYbWuOKA%3D&w=280&h=280&r=0"
                    
                },
                {
                    link: "https://www.start.gg/tournament/cardd-s-basement/details",
                    imageSrc: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F700328%2Fimage-23f218e8ddb0bde41f1f0de22c998782-optimized.png&ehk=OVSnkj%2BgETglWhmNzEkT0oB%2FjTi%2FIxbzMQcjrXSGnR4%3D&w=280&h=280&r=0"
                }

            ];
            let currentIndex = 0; // Initialize current index

            let link = document.createElement("a");
            link.target = "_blank";

            let image = document.createElement("img");

            image.classList.add("calendarImg");

            link.appendChild(image);
            cell.appendChild(link);

            // Function to fade in/out the image and link
            function fadeInOut(element) {
                let opacity = 0;
                let increasing = true;
                let interval = setInterval(function() {
                    if (increasing) {
                        opacity += 0.05;
                    } else {
                        opacity -= 0.05;
                    }
                    element.style.opacity = opacity;
                    if (opacity >= 1) {
                        increasing = false;
                        setTimeout(() => {
                            increasing = true;
                            updateLinkAndImage(); // Update link and image after fully visible
                        }, 2000); // Image and link will be fully visible for 2 seconds before fading out
                    } else if (opacity <= 0) {
                        clearInterval(interval);
                        fadeInOut(element); // Restart the fading animation
                    }
                }, 100); // Adjust the timing as needed
            }
        
            // Function to update the link and image
            function updateLinkAndImage() {
                link.href = events[currentIndex].link;
                image.src = events[currentIndex].imageSrc;
                currentIndex = (currentIndex + 1) % events.length; // Move to the next event, looping back to the beginning if necessary
            }
        
            updateLinkAndImage(); // Initially update link and image
            fadeInOut(image); // Start fade-in/out animation // Start cycling events

                //MMDX + Birdhouse 13 + LA NEXUS XVII
            } else if(month === 10 &&  date === 16 && year === 2024) {

                const events = [
                    {   
                        link: "https://www.start.gg/tournament/mass-madness-deluxe-a-project-melee-and-hdr-regional/details",
                        imageSrc: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F722151%2Fimage-868aa56131de1627a08419780bb84420-optimized.png&ehk=axLCB38xhnZMiXM%2F4Uz1Bme%2BwrhpVNO27PDEWVKyY1I%3D&w=280&h=280&r=0"
                        
                    },
                    {
                        link: "https://www.start.gg/tournament/birdhouse-13-charity-for-the-foodbank/details",
                        imageSrc: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F723673%2Fimage-1aeb7b34779d59e9909f10cf735714c3-optimized.jpg&ehk=e2h9y%2FCTF7Aw7%2FGVtqZinnCqeudWtq%2FxFsTFRF0ZZg8%3D&w=280&h=280&r=0"
                    },
                    {
                        link: "https://www.start.gg/tournament/la-nexus-xvii/details",
                        imageSrc: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F727138%2Fimage-7ab76bac26ade3b8758f0670081a4209-optimized.png&ehk=Qg64TBf4HmR69ichFld9TAFau9v9T1v9kY%2Bo7n6Cthw%3D&w=280&h=280&r=0"
                    },
                    {
                        link: "https://www.start.gg/tournament/rage-against-the-crt/details",
                        imageSrc: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F712613%2Fimage-e04444fd05867f4207020d6da948a147-optimized.jpg&ehk=MvKIkvnSe5Wtv24w%2BIoyNjg8Ere7fgr53c8xUpy%2BZ9Y%3D&w=280&h=280&r=0"
                    }
    
                ];
                let currentIndex = 0; // Initialize current index
    
                let link = document.createElement("a");
                link.target = "_blank";
    
                let image = document.createElement("img");
    
                image.classList.add("calendarImg");
    
                link.appendChild(image);
                cell.appendChild(link);
    
                // Function to fade in/out the image and link
                function fadeInOut(element) {
                    let opacity = 0;
                    let increasing = true;
                    let interval = setInterval(function() {
                        if (increasing) {
                            opacity += 0.05;
                        } else {
                            opacity -= 0.05;
                        }
                        element.style.opacity = opacity;
                        if (opacity >= 1) {
                            increasing = false;
                            setTimeout(() => {
                                increasing = true;
                                updateLinkAndImage(); // Update link and image after fully visible
                            }, 2000); // Image and link will be fully visible for 2 seconds before fading out
                        } else if (opacity <= 0) {
                            clearInterval(interval);
                            fadeInOut(element); // Restart the fading animation
                        }
                    }, 100); // Adjust the timing as needed
                }
            
                // Function to update the link and image
                function updateLinkAndImage() {
                    link.href = events[currentIndex].link;
                    image.src = events[currentIndex].imageSrc;
                    currentIndex = (currentIndex + 1) % events.length; // Move to the next event, looping back to the beginning if necessary
                }
            
                updateLinkAndImage(); // Initially update link and image
                fadeInOut(image); // Start fade-in/out animation // Start cycling events
                
                     // CYBERSPACE
                    } else if (month === 10 && (date === 17) && year === 2024) {


                        let link = document.createElement("a");
                        link.href = "https://www.start.gg/tournament/cyberspace-3/details";
                        link.target = "_blank";
    
                        let image = document.createElement("img");
                        image.src = "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F728384%2Fimage-d4170301e00b22b265f653acb7ca56bc-optimized.png&ehk=zfmxmiR6oSlhYnUgnPXKVjv5Zn9LgOI7tUwTwES8QU8%3D&w=280&h=280&r=0";
    
                        image.classList.add("calendarImg");
    
    
                        link.appendChild(image);
                        cell.appendChild(link);
    
                    // We Tech Those 23 + G5 #6
                    } else if (month === 10 && (date === 23) && year === 2024) {

                        const events = [
                            {   
                                link: "https://www.start.gg/tournament/we-tech-those-23-3/details",
                                imageSrc: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F730468%2Fimage-5042759ed1e0c6396e950c941292325f-optimized.png&ehk=t8cxrvEXSD%2BitLwqYlhgv%2BM5cAeHzhKRUPQbBQRF7AQ%3D&w=280&h=280&r=0"
                                
                            },
                            {
                                link: "https://www.start.gg/tournament/game-5-in-the-d-6/details",
                                imageSrc: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F724520%2Fimage-4669a409e8ba16bc8416de03e4131603-optimized.jpg&ehk=Xw944yGxRrU5OozpQQLIyIMXO%2FrpdwImxM1DKXrGLak%3D&w=280&h=280&r=0"
                            }
            
                        ];
                        let currentIndex = 0; // Initialize current index
            
                        let link = document.createElement("a");
                        link.target = "_blank";
            
                        let image = document.createElement("img");
            
                        image.classList.add("calendarImg");
            
                        link.appendChild(image);
                        cell.appendChild(link);
            
                        // Function to fade in/out the image and link
                        function fadeInOut(element) {
                            let opacity = 0;
                            let increasing = true;
                            let interval = setInterval(function() {
                                if (increasing) {
                                    opacity += 0.05;
                                } else {
                                    opacity -= 0.05;
                                }
                                element.style.opacity = opacity;
                                if (opacity >= 1) {
                                    increasing = false;
                                    setTimeout(() => {
                                        increasing = true;
                                        updateLinkAndImage(); // Update link and image after fully visible
                                    }, 2000); // Image and link will be fully visible for 2 seconds before fading out
                                } else if (opacity <= 0) {
                                    clearInterval(interval);
                                    fadeInOut(element); // Restart the fading animation
                                }
                            }, 100); // Adjust the timing as needed
                        }
                    
                        // Function to update the link and image
                        function updateLinkAndImage() {
                            link.href = events[currentIndex].link;
                            image.src = events[currentIndex].imageSrc;
                            currentIndex = (currentIndex + 1) % events.length; // Move to the next event, looping back to the beginning if necessary
                        }
                    
                        updateLinkAndImage(); // Initially update link and image
                        fadeInOut(image); // Start fade-in/out animation // Start cycling events

                // Pissmas 5 Day 1, 3
                } else if ((month === 10 && date === 29 && year === 2024) || (month === 11 && date === 1 && year === 2024)) {


                    let link = document.createElement("a");
                    link.href = "https://www.start.gg/tournament/pissmas-5/details";
                    link.target = "_blank";

                    let image = document.createElement("img");
                    image.src = "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F711199%2Fimage-13f747fdf4949ee152c280b5ad6213dc-optimized.png&ehk=B4KLu7um2O7wIzURoDP%2F1L8VLvwVop4KB47typTJpaQ%3D&w=280&h=280&r=0";

                    image.classList.add("calendarImg");


                    link.appendChild(image);
                    cell.appendChild(link);

                    // Pissmas Day 2 + WOL 9
            }  else if(month === 10 &&  date === 30 && year === 2024) {

            const events = [
                {   
                    link: "https://www.start.gg/tournament/pissmas-5/details",
                    imageSrc: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F711199%2Fimage-13f747fdf4949ee152c280b5ad6213dc-optimized.png&ehk=B4KLu7um2O7wIzURoDP%2F1L8VLvwVop4KB47typTJpaQ%3D&w=280&h=280&r=0"
                    
                },
                {
                    link: "hhttps://www.start.gg/tournament/who-s-on-ledge-9/details",
                    imageSrc: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F724863%2Fimage-1e4b69c6abcfa56933f95f14b99a699d-optimized.png&ehk=1uODmbXgfa8XVKQ1Pb%2Be4ot%2Bz2sAYA0RCua9wWZcflI%3D&w=280&h=280&r=0"
                }
    
            ];
            let currentIndex = 0; // Initialize current index
    
            let link = document.createElement("a");
            link.target = "_blank";
    
            let image = document.createElement("img");
    
            image.classList.add("calendarImg");
    
            link.appendChild(image);
            cell.appendChild(link);
    
            // Function to fade in/out the image and link
            function fadeInOut(element) {
                let opacity = 0;
                let increasing = true;
                let interval = setInterval(function() {
                    if (increasing) {
                        opacity += 0.05;
                    } else {
                        opacity -= 0.05;
                    }
                    element.style.opacity = opacity;
                    if (opacity >= 1) {
                        increasing = false;
                        setTimeout(() => {
                            increasing = true;
                            updateLinkAndImage(); // Update link and image after fully visible
                        }, 2000); // Image and link will be fully visible for 2 seconds before fading out
                    } else if (opacity <= 0) {
                        clearInterval(interval);
                        fadeInOut(element); // Restart the fading animation
                    }
                }, 100); // Adjust the timing as needed
            }
        
            // Function to update the link and image
            function updateLinkAndImage() {
                link.href = events[currentIndex].link;
                image.src = events[currentIndex].imageSrc;
                currentIndex = (currentIndex + 1) % events.length; // Move to the next event, looping back to the beginning if necessary
            }
        
            updateLinkAndImage(); // Initially update link and image
            fadeInOut(image); // Start fade-in/out animation // Start cycling events
        

                // CoB 2 + LL's HS
            } else if(month === 11 &&  date === 14 && year === 2024) {

                const events = [
                    {   
                        link: "https://www.start.gg/tournament/condo-of-blood-2-2/details",
                        imageSrc: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F702378%2Fimage-8d2b7a057fea4990d7c65f0a9029ce55-optimized.png&ehk=IdU531WdJ2NzjRvsKva8PJUtCeLIIHB6Di%2BJqFU80bU%3D&w=280&h=280&r=0"
                        
                    },
                    {
                        link: "https://www.start.gg/tournament/lexyloo-s-holiday-special/details",
                        imageSrc: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F729400%2Fimage-a51ee329476a3535bce01532c7bbdde5-optimized.png&ehk=kCVMsgzq6I6yWzQWkHp%2BxLUp5%2FIdtr2Van9ixAciDm8%3D&w=280&h=280&r=0"
                    }
    
                ];
                let currentIndex = 0; // Initialize current index
    
                let link = document.createElement("a");
                link.target = "_blank";
    
                let image = document.createElement("img");
    
                image.classList.add("calendarImg");
    
                link.appendChild(image);
                cell.appendChild(link);
    
                // Function to fade in/out the image and link
                function fadeInOut(element) {
                    let opacity = 0;
                    let increasing = true;
                    let interval = setInterval(function() {
                        if (increasing) {
                            opacity += 0.05;
                        } else {
                            opacity -= 0.05;
                        }
                        element.style.opacity = opacity;
                        if (opacity >= 1) {
                            increasing = false;
                            setTimeout(() => {
                                increasing = true;
                                updateLinkAndImage(); // Update link and image after fully visible
                            }, 2000); // Image and link will be fully visible for 2 seconds before fading out
                        } else if (opacity <= 0) {
                            clearInterval(interval);
                            fadeInOut(element); // Restart the fading animation
                        }
                    }, 100); // Adjust the timing as needed
                }
            
                // Function to update the link and image
                function updateLinkAndImage() {
                    link.href = events[currentIndex].link;
                    image.src = events[currentIndex].imageSrc;
                    currentIndex = (currentIndex + 1) % events.length; // Move to the next event, looping back to the beginning if necessary
                }
            
                updateLinkAndImage(); // Initially update link and image
                fadeInOut(image); // Start fade-in/out animation // Start cycling events

                // GC8
            } else if (month === 11 && (date === 21) && year === 2024) {
                // Example link with image
                let link = document.createElement("a");
                link.href = "https://www.start.gg/tournament/gecko-cavern-8-the-holiday-special/details";
                link.target = "_blank";
        
                let image = document.createElement("img");
                image.src = "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F738073%2Fimage-420abd763db6b7810c89ef2065605ff1-optimized.png&ehk=MBjOzveFlZdIUDxVuNGUBFEAHrLZfXPCBfF%2BBWQWTeA%3D&w=280&h=280&r=0";
        
                image.classList.add("calendarImg");
        
        
                link.appendChild(image);
                cell.appendChild(link);
                    
            // BTBBC2: LA
            } else if (month === 11 && (date === 22) && year === 2024) {
            // Example link with image
            let link = document.createElement("a");
            link.href = "https://www.start.gg/tournament/bristol-s-the-basement-before-christmas-2-love-actually/details";
            link.target = "_blank";
    
            let image = document.createElement("img");
            image.src = "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F734148%2Fimage-00d0282df9b5c493f4821289575651f5-optimized.png&ehk=M88s%2F4c%2FFI%2FoB6PWsQc4Mht2x1PACX6g6dJpnaoHlc4%3D&w=280&h=280&r=0";
    
            image.classList.add("calendarImg");
    
    
            link.appendChild(image);
            cell.appendChild(link);

            //SC invitational 
        } else if (month === 11 && (date === 28) && year === 2024) {
            // Example link with image
            let link = document.createElement("a");
            link.href = "https://www.start.gg/tournament/sc-p-2024-invitational/details";
            link.target = "_blank";
    
            let image = document.createElement("img");
            image.src = "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F736576%2Fimage-599c24fd151b15cdce529dab4230ea4c-optimized.jpg&ehk=oRZ8IldqhidgsE7yWmkb4%2BHk8zw1SxjNiS4fSA4dWqI%3D&w=280&h=280&r=0";
    
            image.classList.add("calendarImg");
    
    
            link.appendChild(image);
            cell.appendChild(link);
                
        // TECH 2025
        } else if (month === 0 && (date === 11) && year === 2025) {
        // Example link with image
        let link = document.createElement("a");
        link.href = "https://www.start.gg/tournament/tech-2025/details";
        link.target = "_blank";

        let image = document.createElement("img");
        image.src = "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F703812%2Fimage-621a3df3388b485f1c17bc39ef5043b4-optimized.png&ehk=fmJ2bU7fSCoK6ta%2FoMgERgnFVVH1449V1iaXyonXZPQ%3D&w=280&h=280&r=0";

        image.classList.add("calendarImg");


        link.appendChild(image);
        cell.appendChild(link);
        
        
            //G5itD7 & WoL10
        } else if (month === 0 && (date === 18) && year === 2025) {

            const events = [
                {   
                    link: "https://www.start.gg/tournament/game-5-in-the-d-7/details",
                    imageSrc: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F741982%2Fimage-06d3c983cce808794b6e3357614d9716-optimized.jpg&ehk=Mm%2BdADFo6UiO6w63CtfQqvkLv1qT%2BVUH3vGCQimwKA4%3D&w=280&h=280&r=0"
                    
                },
                {
                    link: "https://www.start.gg/tournament/who-s-on-ledge-10/details",
                    imageSrc: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F743740%2Fimage-3211f88c3d7eb4905079314b2df30240-optimized.png&ehk=JE%2FaG0hLO3Bii2Rq%2FmzIRCCssIvGhwbNE%2FpjnqBQJ4s%3D&w=280&h=280&r=0"
                }

            ];
            let currentIndex = 0; // Initialize current index

            let link = document.createElement("a");
            link.target = "_blank";

            let image = document.createElement("img");

            image.classList.add("calendarImg");

            link.appendChild(image);
            cell.appendChild(link);

            // Function to fade in/out the image and link
            function fadeInOut(element) {
                let opacity = 0;
                let increasing = true;
                let interval = setInterval(function() {
                    if (increasing) {
                        opacity += 0.05;
                    } else {
                        opacity -= 0.05;
                    }
                    element.style.opacity = opacity;
                    if (opacity >= 1) {
                        increasing = false;
                        setTimeout(() => {
                            increasing = true;
                            updateLinkAndImage(); // Update link and image after fully visible
                        }, 2000); // Image and link will be fully visible for 2 seconds before fading out
                    } else if (opacity <= 0) {
                        clearInterval(interval);
                        fadeInOut(element); // Restart the fading animation
                    }
                }, 100); // Adjust the timing as needed
            }
        
            // Function to update the link and image
            function updateLinkAndImage() {
                link.href = events[currentIndex].link;
                image.src = events[currentIndex].imageSrc;
                currentIndex = (currentIndex + 1) % events.length; // Move to the next event, looping back to the beginning if necessary
            }
        
            updateLinkAndImage(); // Initially update link and image
            fadeInOut(image); // Start fade-in/out animation // Start cycling events
    
            //Super TPS IV
            } else if (month === 0 && (date === 24) && year === 2025) {
            // Example link with image
            let link = document.createElement("a");
            link.href = "https://www.start.gg/tournament/super-tps-iv/details";
            link.target = "_blank";
    
            let image = document.createElement("img");
            image.src = "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F729703%2Fimage-d446cc3ef2159967910369de4402faf2-optimized.png&ehk=2YmplV5dlaWOKoDKyTlPru50pwmweY6TWaxwtj7M0Fc%3D&w=280&h=280&r=0";
    
            image.classList.add("calendarImg");
    
    
            link.appendChild(image);
            cell.appendChild(link);


             //Somino 6
            } else if (month === 0 && (date === 25) && year === 2025) {
            // Example link with image
            let link = document.createElement("a");
            link.href = "https://www.start.gg/tournament/somnio-6/details";
            link.target = "_blank";
    
            let image = document.createElement("img");
            image.src = "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F704301%2Fimage-7860f2d53c5c19158a1af5bb595b62f2-optimized.png&ehk=Lvf0cBp42V7xFlwNJ8bxtOnyYKPG5AFv3lZxf8Pd1LQ%3D&w=280&h=280&r=0";
    
            image.classList.add("calendarImg");
    
    
            link.appendChild(image);
            cell.appendChild(link);

             //Moonshine Monthly 1
            } else if (month === 0 && (date === 26) && year === 2025) {
            // Example link with image
            let link = document.createElement("a");
            link.href = "https://www.start.gg/tournament/moonshine-monthly-1/details";
            link.target = "_blank";
        
            let image = document.createElement("img");
            image.src = "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F744903%2Fimage-3377d302353799ca777fc9b7f741c464-optimized.png&ehk=XwIn6Z28Q4Iro1UcNE7Yd2DsfLCZ1rChK9J0eSGEgV8%3D&w=280&h=280&r=0";
        
            image.classList.add("calendarImg");
        
        
            link.appendChild(image);
            cell.appendChild(link);
                    

        // BLT
        } else if (month === 1 && (date === 1 || date === 2) && year === 2025) {
            // Example link with image
            let link = document.createElement("a");
            link.href = "https://www.start.gg/tournament/big-louisiana-tournament/details";
            link.target = "_blank";
    
            let image = document.createElement("img");
            image.src = "../images/past-events/blt_logo_2.png";
    
            image.classList.add("calendarImg");
    
    
            link.appendChild(image);
            cell.appendChild(link);

            //Unc Frozen's Icebox 1 + MM49
        } else if (month === 1 && (date === 8) && year === 2025) {
            const events = [
                {   
                    link: "https://www.start.gg/tournament/unc-frozen-s-icebox-1/details",
                    imageSrc: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F744542%2Fimage-4ea708dcb4e53c99a762359bb323cbcb-optimized.jpg&ehk=hMjL84EyvgKtS9QTg1n7e3ldsuZWs8Az2D4RPeb4p1Q%3D&w=280&h=280&r=0"
                    
                },
                {
                    link: "https://www.start.gg/tournament/mass-madness-49-a-new-england-melee-and-project-event/details",
                    imageSrc: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F742227%2Fimage-fe9a3c15d98a4b0d6d4b6735c938e250-optimized.png&ehk=9aDHEGWPs7LQslYPnbvbHzvdyAErzYs7GmSF4hp6UT0%3D&w=280&h=280&r=0"
                }

            ];
            let currentIndex = 0; // Initialize current index

            let link = document.createElement("a");
            link.target = "_blank";

            let image = document.createElement("img");

            image.classList.add("calendarImg");

            link.appendChild(image);
            cell.appendChild(link);

            // Function to fade in/out the image and link
            function fadeInOut(element) {
                let opacity = 0;
                let increasing = true;
                let interval = setInterval(function() {
                    if (increasing) {
                        opacity += 0.05;
                    } else {
                        opacity -= 0.05;
                    }
                    element.style.opacity = opacity;
                    if (opacity >= 1) {
                        increasing = false;
                        setTimeout(() => {
                            increasing = true;
                            updateLinkAndImage(); // Update link and image after fully visible
                        }, 2000); // Image and link will be fully visible for 2 seconds before fading out
                    } else if (opacity <= 0) {
                        clearInterval(interval);
                        fadeInOut(element); // Restart the fading animation
                    }
                }, 100); // Adjust the timing as needed
            }
        
            // Function to update the link and image
            function updateLinkAndImage() {
                link.href = events[currentIndex].link;
                image.src = events[currentIndex].imageSrc;
                currentIndex = (currentIndex + 1) % events.length; // Move to the next event, looping back to the beginning if necessary
            }
        
            updateLinkAndImage(); // Initially update link and image
            fadeInOut(image); // Start fade-in/out animation // Start cycling events

                        //Exodus 2025
        } else if (month === 1 && (date === 15) && year === 2025) {
            // Example link with image
            let link = document.createElement("a");
            link.href = "https://www.start.gg/tournament/exodus-2025/details";
            link.target = "_blank";
    
            let image = document.createElement("img");
            image.src = "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F749811%2Fimage-c4c1170601043bc749596397e0ce48d4-optimized.png&ehk=3amV9R1wU9Gdp328M%2FmCzXfqfY%2FeutcFXYaHS%2BT%2BVXQ%3D&w=280&h=280&r=0";
    
            image.classList.add("calendarImg");
    
    
            link.appendChild(image);
            cell.appendChild(link);

                    // Journey to the West
        } else if (month === 1 && (date === 21) && year === 2025) {
            // Example link with image
            let link = document.createElement("a");
            link.href = "https://www.start.gg/tournament/journey-to-the-west/details";
            link.target = "_blank";
    
            let image = document.createElement("img");
            image.src = "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F731623%2Fimage-120c39ca0b9e548595ff1c4f88a45860-optimized.jpg&ehk=lsIwpkupKikujRh8VEMGEvMyMCytWXbF%2BCAGiF3N4ZQ%3D&w=280&h=280&r=0";
    
            image.classList.add("calendarImg");
    
    
            link.appendChild(image);
            cell.appendChild(link);


        //JttW + CoB 3 + KREWE
        } else if (month === 1 && (date === 22) && year === 2025) {

            const events = [
                {   
                    link: "https://www.start.gg/tournament/journey-to-the-west/details",
                    imageSrc: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F731623%2Fimage-120c39ca0b9e548595ff1c4f88a45860-optimized.jpg&ehk=lsIwpkupKikujRh8VEMGEvMyMCytWXbF%2BCAGiF3N4ZQ%3D&w=280&h=280&r=0"
                    
                },
                {
                    link: "https://www.start.gg/tournament/condo-of-blood-3/details",
                    imageSrc: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F743233%2Fimage-6bcba47e76de47e7d7fca4ef74828624-optimized.png&ehk=9Q00a1ghM%2B07wEiqLP9Oj6uhVKpvVIBiZ8a89NJ%2BMcY%3D&w=280&h=280&r=0"
                },
                {
                    link: "https://www.start.gg/tournament/krewe-melee-mardi-gras-ball/details",
                    imageSrc: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F694915%2Fimage-4e2e751a32f9d8e2c9ed852592dff5c7-optimized.png&ehk=Sf%2FUMLvFp%2ByxB9yjxlljQV7vDCCXSm7q%2FykOBfT6aU8%3D&w=280&h=280&r=0"
                }

            ];
            let currentIndex = 0; // Initialize current index

            let link = document.createElement("a");
            link.target = "_blank";

            let image = document.createElement("img");

            image.classList.add("calendarImg");

            link.appendChild(image);
            cell.appendChild(link);

            // Function to fade in/out the image and link
            function fadeInOut(element) {
                let opacity = 0;
                let increasing = true;
                let interval = setInterval(function() {
                    if (increasing) {
                        opacity += 0.05;
                    } else {
                        opacity -= 0.05;
                    }
                    element.style.opacity = opacity;
                    if (opacity >= 1) {
                        increasing = false;
                        setTimeout(() => {
                            increasing = true;
                            updateLinkAndImage(); // Update link and image after fully visible
                        }, 2000); // Image and link will be fully visible for 2 seconds before fading out
                    } else if (opacity <= 0) {
                        clearInterval(interval);
                        fadeInOut(element); // Restart the fading animation
                    }
                }, 100); // Adjust the timing as needed
            }
        
            // Function to update the link and image
            function updateLinkAndImage() {
                link.href = events[currentIndex].link;
                image.src = events[currentIndex].imageSrc;
                currentIndex = (currentIndex + 1) % events.length; // Move to the next event, looping back to the beginning if necessary
            }
        
            updateLinkAndImage(); // Initially update link and image
            fadeInOut(image); // Start fade-in/out animation // Start cycling events

              //Journey to the West + Moonshine Monthly #2
        } else if (month === 1 && (date === 23) && year === 2025) {

            const events = [
                {   
                    link: "https://www.start.gg/tournament/journey-to-the-west/details",
                    imageSrc: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F731623%2Fimage-120c39ca0b9e548595ff1c4f88a45860-optimized.jpg&ehk=lsIwpkupKikujRh8VEMGEvMyMCytWXbF%2BCAGiF3N4ZQ%3D&w=280&h=280&r=0"
                    
                },
                {
                    link: "https://www.start.gg/tournament/moonshine-monthly-2/details",
                    imageSrc: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F753025%2Fimage-d1d570002d763332029ed8cafa5d584a-optimized.png&ehk=8aMjwzJmP%2F0DXXICOPCB1u8gm8hs9O8Rv7Y7AbfGnRo%3D&w=280&h=280&r=0"
                }

            ];
            let currentIndex = 0; // Initialize current index

            let link = document.createElement("a");
            link.target = "_blank";

            let image = document.createElement("img");

            image.classList.add("calendarImg");

            link.appendChild(image);
            cell.appendChild(link);

            // Function to fade in/out the image and link
            function fadeInOut(element) {
                let opacity = 0;
                let increasing = true;
                let interval = setInterval(function() {
                    if (increasing) {
                        opacity += 0.05;
                    } else {
                        opacity -= 0.05;
                    }
                    element.style.opacity = opacity;
                    if (opacity >= 1) {
                        increasing = false;
                        setTimeout(() => {
                            increasing = true;
                            updateLinkAndImage(); // Update link and image after fully visible
                        }, 2000); // Image and link will be fully visible for 2 seconds before fading out
                    } else if (opacity <= 0) {
                        clearInterval(interval);
                        fadeInOut(element); // Restart the fading animation
                    }
                }, 100); // Adjust the timing as needed
            }
        
            // Function to update the link and image
            function updateLinkAndImage() {
                link.href = events[currentIndex].link;
                image.src = events[currentIndex].imageSrc;
                currentIndex = (currentIndex + 1) % events.length; // Move to the next event, looping back to the beginning if necessary
            }
        
            updateLinkAndImage(); // Initially update link and image
            fadeInOut(image); // Start fade-in/out animation // Start cycling events

            //Winter is Crouching + Allston Allstars + UFI2 + WOL11
            } else if (month === 2 && (date === 1) && year === 2025) {    
            const events = [
                {   
                    link: "https://www.start.gg/tournament/winter-is-crouching/details",
                    imageSrc: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F687306%2Fimage-5618485cca829ee70b7125791593c3e2-optimized.png&ehk=qQc4jLdbvBzwuFG7iw%2BIaofHMDeQPOdtUyGDqI7HPDE%3D&w=280&h=280&r=0"
                    
                },
                {
                    link: "https://www.start.gg/tournament/allston-allstars-iii/details",
                    imageSrc: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F753089%2Fimage-6a3b85b79d910f06723b6e35b06563d7-optimized.png&ehk=EtvpTPcT3cPMb7ppUd9n%2BNKnUkhFeEBOUc5v3dc9Rko%3D&w=280&h=280&r=0"
                },
                {
                    link: "https://www.start.gg/tournament/unc-frozen-s-icebox-2/details",
                    imageSrc: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F757359%2Fimage-35b90170d69f07be24728b6f2def8830-optimized.jpg&ehk=XcsD59Kqh2AotjXpsr0pI0uu%2BuQX4zPCMzmjTnUPwf0%3D&w=280&h=280&r=0"
                },
                {
                    link: "https://www.start.gg/tournament/who-s-on-ledge-11/details",
                    imageSrc: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F760327%2Fimage-745ad5720dee6036abacf9a3286f76dc-optimized.png&ehk=BbimywF8jx4MKur88JheZMXqOKkl4jXKl3YXouqfsDE%3D&w=280&h=280&r=0"
                }
    
            ];
            let currentIndex = 0; // Initialize current index
    
            let link = document.createElement("a");
            link.target = "_blank";
    
            let image = document.createElement("img");
    
            image.classList.add("calendarImg");
    
            link.appendChild(image);
            cell.appendChild(link);
    
            // Function to fade in/out the image and link
            function fadeInOut(element) {
                let opacity = 0;
                let increasing = true;
                let interval = setInterval(function() {
                    if (increasing) {
                        opacity += 0.05;
                    } else {
                        opacity -= 0.05;
                    }
                    element.style.opacity = opacity;
                    if (opacity >= 1) {
                        increasing = false;
                        setTimeout(() => {
                            increasing = true;
                            updateLinkAndImage(); // Update link and image after fully visible
                        }, 2000); // Image and link will be fully visible for 2 seconds before fading out
                    } else if (opacity <= 0) {
                        clearInterval(interval);
                        fadeInOut(element); // Restart the fading animation
                    }
                }, 100); // Adjust the timing as needed
            }
        
            // Function to update the link and image
            function updateLinkAndImage() {
                link.href = events[currentIndex].link;
                image.src = events[currentIndex].imageSrc;
                currentIndex = (currentIndex + 1) % events.length; // Move to the next event, looping back to the beginning if necessary
            }
        
            updateLinkAndImage(); // Initially update link and image
            fadeInOut(image); // Start fade-in/out animation // Start cycling events
            
        // Winter is Crouching
        } else if (month === 2 && (date === 2) && year === 2025) {
        // Example link with image
        let link = document.createElement("a");
        link.href = "https://www.start.gg/tournament/lust-50-a-louisiana-regional/details";
        link.target = "_blank";
    
        let image = document.createElement("img");
        image.src = "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F687306%2Fimage-5618485cca829ee70b7125791593c3e2-optimized.png&ehk=qQc4jLdbvBzwuFG7iw%2BIaofHMDeQPOdtUyGDqI7HPDE%3D&w=280&h=280&r=0";
    
        image.classList.add("calendarImg");
    
    
        link.appendChild(image);
        cell.appendChild(link);

        // TN P+ Summit 2025
        } else if (month === 2 && (date === 7 || date === 9) && year === 2025) {
        // Example link with image
        let link = document.createElement("a");
        link.href = "https://www.start.gg/tournament/tennessee-p-summit-2025/details";
        link.target = "_blank";
    
        let image = document.createElement("img");
        image.src = "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F714654%2Fimage-9fcdb8b8b1acc8a88280304e3b010b63-optimized.jpg&ehk=8mBzXSK23mbPNHjSmTQkpgvRRF9qYsJ5PfgQ4qo4BJw%3D&w=280&h=280&r=0";
    
        image.classList.add("calendarImg");
    
    
        link.appendChild(image);
        cell.appendChild(link);

        // TN P+ Summit + Take Flight + Northstar + GC9
        } else if (month === 2 && (date === 8) && year === 2025) {    
        const events = [
            {   
                link: "https://www.start.gg/tournament/tennessee-p-summit-2025/details",
                imageSrc: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F714654%2Fimage-9fcdb8b8b1acc8a88280304e3b010b63-optimized.jpg&ehk=8mBzXSK23mbPNHjSmTQkpgvRRF9qYsJ5PfgQ4qo4BJw%3D&w=280&h=280&r=0"
                
            },
            {
                link: "https://www.start.gg/tournament/take-flight-2025/details",
                imageSrc: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F745417%2Fimage-22e93b2763bc5ea28149c5b1943cc48c-optimized.jpg&ehk=QEWGcGNnjIx84ORNjbf%2BZdtBdueQemhfLhofbYKzTRM%3D&w=280&h=280&r=0"
            },
            {
                link: "https://www.start.gg/tournament/northstar-iii-at-st-cloud-state/details",
                imageSrc: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F726126%2Fimage-f943b48b4354f5f0aaab13ec7ebcb5e8-optimized.png&ehk=IZXQ%2Fh9W6UxS9mmlIX9aSENB1OiCrxPSyf%2FiKMIvKqo%3D&w=280&h=280&r=0"
            },
            {
                link: "https://www.start.gg/tournament/gecko-cavern-9-1/details",
                imageSrc: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F760612%2Fimage-a1871aaef05623d677238d8acd7ae91a-optimized.png&ehk=JGiHp1mQKM6Qvb052wzJQ1E2xwLpfryzRQrixQyc6vo%3D&w=280&h=280&r=0"
            }

        ];
        let currentIndex = 0; // Initialize current index

        let link = document.createElement("a");
        link.target = "_blank";

        let image = document.createElement("img");

        image.classList.add("calendarImg");

        link.appendChild(image);
        cell.appendChild(link);

        // Function to fade in/out the image and link
        function fadeInOut(element) {
            let opacity = 0;
            let increasing = true;
            let interval = setInterval(function() {
                if (increasing) {
                    opacity += 0.05;
                } else {
                    opacity -= 0.05;
                }
                element.style.opacity = opacity;
                if (opacity >= 1) {
                    increasing = false;
                    setTimeout(() => {
                        increasing = true;
                        updateLinkAndImage(); // Update link and image after fully visible
                    }, 2000); // Image and link will be fully visible for 2 seconds before fading out
                } else if (opacity <= 0) {
                    clearInterval(interval);
                    fadeInOut(element); // Restart the fading animation
                }
            }, 100); // Adjust the timing as needed
        }
    
        // Function to update the link and image
        function updateLinkAndImage() {
            link.href = events[currentIndex].link;
            image.src = events[currentIndex].imageSrc;
            currentIndex = (currentIndex + 1) % events.length; // Move to the next event, looping back to the beginning if necessary
        }
    
        updateLinkAndImage(); // Initially update link and image
        fadeInOut(image); // Start fade-in/out animation // Start cycling events

                // Kame House: The Dark Tournament + Soul Read
            } else if (month === 2 && (date === 15) && year === 2025) {
                const events = [
                    {   
                        link: "https://www.start.gg/tournament/kame-house-the-dark-tournament/details",
                        imageSrc: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F740096%2Fimage-cb200c9d81bd09bf0a66d6994fe89bc5-optimized.png&ehk=0EWnOEIzKjh6VS8gO%2B7Tr4NtfojUQwjBahF%2BasiKOic%3D&w=280&h=280&r=0"
                        
                    },
                    {
                        link: "https://www.start.gg/tournament/soul-read/details",
                        imageSrc: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F760471%2Fimage-b0e173b66e73da389313bc1b3723e3a6-optimized.png&ehk=bdGnfFXasnoj5BeHQk0qtAZGs44IKNvsPJqYR5xVMDc%3D&w=280&h=280&r=0"
                    }        
                ];
                let currentIndex = 0; // Initialize current index
        
                let link = document.createElement("a");
                link.target = "_blank";
        
                let image = document.createElement("img");
        
                image.classList.add("calendarImg");
        
                link.appendChild(image);
                cell.appendChild(link);
        
                // Function to fade in/out the image and link
                function fadeInOut(element) {
                    let opacity = 0;
                    let increasing = true;
                    let interval = setInterval(function() {
                        if (increasing) {
                            opacity += 0.05;
                        } else {
                            opacity -= 0.05;
                        }
                        element.style.opacity = opacity;
                        if (opacity >= 1) {
                            increasing = false;
                            setTimeout(() => {
                                increasing = true;
                                updateLinkAndImage(); // Update link and image after fully visible
                            }, 2000); // Image and link will be fully visible for 2 seconds before fading out
                        } else if (opacity <= 0) {
                            clearInterval(interval);
                            fadeInOut(element); // Restart the fading animation
                        }
                    }, 100); // Adjust the timing as needed
                }
            
                // Function to update the link and image
                function updateLinkAndImage() {
                    link.href = events[currentIndex].link;
                    image.src = events[currentIndex].imageSrc;
                    currentIndex = (currentIndex + 1) % events.length; // Move to the next event, looping back to the beginning if necessary
                }
            
                updateLinkAndImage(); // Initially update link and image
                fadeInOut(image); // Start fade-in/out animation // Start cycling events

        //    SoTT10 + game 5 in the D
        } else if (month === 2 && (date === 22) && year === 2025) {    
            const events = [
                {   
                    link: "https://www.start.gg/tournament/smash-of-the-titans-10-1/details",
                    imageSrc: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F733623%2Fimage-6a2f830b3ed2448c8cd4fdc5df2927dc-optimized.jpg&ehk=P6xRQjtL7NCBckUUb%2FvT03FR%2BA%2Bxwgf0XzQ8baE09kk%3D&w=280&h=280&r=0"
                    
                },
                {
                    link: "https://www.start.gg/tournament/game-5-in-the-d-8-yuko-s-bday-edition/details",
                    imageSrc: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F753458%2Fimage-682f23c7c6853c9f14a932032d05ead0-optimized.jpg&ehk=A8Q7W63tKoq8g098URhncVeF0MzGbkVlA7hknPHAYZ0%3D&w=280&h=280&r=0"
                }
    
            ];
            let currentIndex = 0; // Initialize current index
    
            let link = document.createElement("a");
            link.target = "_blank";
    
            let image = document.createElement("img");
    
            image.classList.add("calendarImg");
    
            link.appendChild(image);
            cell.appendChild(link);
    
            // Function to fade in/out the image and link
            function fadeInOut(element) {
                let opacity = 0;
                let increasing = true;
                let interval = setInterval(function() {
                    if (increasing) {
                        opacity += 0.05;
                    } else {
                        opacity -= 0.05;
                    }
                    element.style.opacity = opacity;
                    if (opacity >= 1) {
                        increasing = false;
                        setTimeout(() => {
                            increasing = true;
                            updateLinkAndImage(); // Update link and image after fully visible
                        }, 2000); // Image and link will be fully visible for 2 seconds before fading out
                    } else if (opacity <= 0) {
                        clearInterval(interval);
                        fadeInOut(element); // Restart the fading animation
                    }
                }, 100); // Adjust the timing as needed
            }
        
            // Function to update the link and image
            function updateLinkAndImage() {
                link.href = events[currentIndex].link;
                image.src = events[currentIndex].imageSrc;
                currentIndex = (currentIndex + 1) % events.length; // Move to the next event, looping back to the beginning if necessary
            }
        
            updateLinkAndImage(); // Initially update link and image
            fadeInOut(image); // Start fade-in/out animation // Start cycling events


    // ETSU-Con 2025 + Paign: Automata
    } else if (month === 2 && (date === 29) && year === 2025) {    
    const events = [
        {   
            link: "https://www.start.gg/tournament/etsu-con-2025-1/details",
            imageSrc: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F748686%2Fimage-1d923a682a2d077b81710449795913f1-optimized.png&ehk=dABwyUsN%2BoM%2BswuB0v9Nx7OuT2AMwb5ZXRqHF1Jp8oQ%3D&w=280&h=280&r=0"
            
        },
        {
            link: "https://www.start.gg/tournament/paign-automata/details",
            imageSrc: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F750935%2Fimage-79efb03362dae6723a35a52cfe445e5f-optimized.png&ehk=66DgVrHs4eO3r92urF8FAIA0MAuF9imW4e9RYmun2uc%3D&w=280&h=280&r=0"
        }

    ];
    let currentIndex = 0; // Initialize current index

    let link = document.createElement("a");
    link.target = "_blank";

    let image = document.createElement("img");

    image.classList.add("calendarImg");

    link.appendChild(image);
    cell.appendChild(link);

    // Function to fade in/out the image and link
    function fadeInOut(element) {
        let opacity = 0;
        let increasing = true;
        let interval = setInterval(function() {
            if (increasing) {
                opacity += 0.05;
            } else {
                opacity -= 0.05;
            }
            element.style.opacity = opacity;
            if (opacity >= 1) {
                increasing = false;
                setTimeout(() => {
                    increasing = true;
                    updateLinkAndImage(); // Update link and image after fully visible
                }, 2000); // Image and link will be fully visible for 2 seconds before fading out
            } else if (opacity <= 0) {
                clearInterval(interval);
                fadeInOut(element); // Restart the fading animation
            }
        }, 100); // Adjust the timing as needed
    }

    // Function to update the link and image
    function updateLinkAndImage() {
        link.href = events[currentIndex].link;
        image.src = events[currentIndex].imageSrc;
        currentIndex = (currentIndex + 1) % events.length; // Move to the next event, looping back to the beginning if necessary
    }

    updateLinkAndImage(); // Initially update link and image
    fadeInOut(image); // Start fade-in/out animation // Start cycling events

           
    // Moonshine Monthly 3
    } else if (month === 2 && (date === 30) && year === 2025) {
    // Example link with image
    let link = document.createElement("a");
    link.href = "https://www.start.gg/tournament/moonshine-monthly-3/details";
    link.target = "_blank";

    let image = document.createElement("img");
    image.src = "https://images.start.gg/images/tournament/763623/image-ea708fffd7f70c4333e088f67d12385f.png";

    image.classList.add("calendarImg");


    link.appendChild(image);
    cell.appendChild(link);

    // Smash Camp Day 1 + FW:TGA III
    } else if (month === 3 && (date === 19) && year === 2025) {    
    const events = [
        {   
            link: "https://www.start.gg/tournament/smash-camp-2025/details",
            imageSrc: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F745405%2Fimage-6327114b0866259802cb7cc27961a65e-optimized.png&ehk=ePMjyKUnayBCiQbvVO%2BLL54RPPXoPK6Xr6USxXDQcXc%3D&w=280&h=280&r=0"
            
        },
        {
            link: "https://www.start.gg/tournament/final-warning-the-golden-age-chapter-iii/details",
            imageSrc: "https://images.start.gg/images/tournament/751437/image-5784957f37c78c1820e470a902bd4a89.jpg?ehk=2wlwYFMVBPyM6EcDOyCubl0iMeXnkQm7IjDDcZMuBS4%3D&ehkOptimized=AagQXEguoKOW8fn0fs43%2FUWXuBm9wg3hBgj%2B9nCrpkE%3D"
        }

    ];
    let currentIndex = 0; // Initialize current index

    let link = document.createElement("a");
    link.target = "_blank";

    let image = document.createElement("img");

    image.classList.add("calendarImg");

    link.appendChild(image);
    cell.appendChild(link);

    // Function to fade in/out the image and link
    function fadeInOut(element) {
        let opacity = 0;
        let increasing = true;
        let interval = setInterval(function() {
            if (increasing) {
                opacity += 0.05;
            } else {
                opacity -= 0.05;
            }
            element.style.opacity = opacity;
            if (opacity >= 1) {
                increasing = false;
                setTimeout(() => {
                    increasing = true;
                    updateLinkAndImage(); // Update link and image after fully visible
                }, 2000); // Image and link will be fully visible for 2 seconds before fading out
            } else if (opacity <= 0) {
                clearInterval(interval);
                fadeInOut(element); // Restart the fading animation
            }
        }, 100); // Adjust the timing as needed
    }

    // Function to update the link and image
    function updateLinkAndImage() {
        link.href = events[currentIndex].link;
        image.src = events[currentIndex].imageSrc;
        currentIndex = (currentIndex + 1) % events.length; // Move to the next event, looping back to the beginning if necessary
    }

    updateLinkAndImage(); // Initially update link and image
    fadeInOut(image); // Start fade-in/out animation // Start cycling events

    // Smash Camp 2025
    } else if (month === 3 && (date === 20) && year === 2025) {
    // Example link with image
    let link = document.createElement("a");
    link.href = "https://www.start.gg/tournament/smash-camp-2025/details";
    link.target = "_blank";

    let image = document.createElement("img");
    image.src = "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F745405%2Fimage-6327114b0866259802cb7cc27961a65e-optimized.png&ehk=ePMjyKUnayBCiQbvVO%2BLL54RPPXoPK6Xr6USxXDQcXc%3D&w=280&h=280&r=0";

    image.classList.add("calendarImg");


    link.appendChild(image);
    cell.appendChild(link);

    // UFIB 3 + CoB 4
    } else if (month === 3 && (date === 26) && year === 2025) {    
    const events = [
        {   
            link: "https://www.start.gg/tournament/condo-of-blood-4-500-pot-bonus/details",
            imageSrc: "https://images.start.gg/images/tournament/764336/image-1d3813665a5f0e259657983a49f1d8cd.png"
            
        },
        {
            link: "https://www.start.gg/tournament/unc-frozen-s-icebox-3/details",
            imageSrc: "https://images.start.gg/images/tournament/767296/image-3ac7d583902781432c42ac79bb3afd7d.jpg"
        }

    ];
    let currentIndex = 0; // Initialize current index

    let link = document.createElement("a");
    link.target = "_blank";

    let image = document.createElement("img");

    image.classList.add("calendarImg");

    link.appendChild(image);
    cell.appendChild(link);

    // Function to fade in/out the image and link
    function fadeInOut(element) {
        let opacity = 0;
        let increasing = true;
        let interval = setInterval(function() {
            if (increasing) {
                opacity += 0.05;
            } else {
                opacity -= 0.05;
            }
            element.style.opacity = opacity;
            if (opacity >= 1) {
                increasing = false;
                setTimeout(() => {
                    increasing = true;
                    updateLinkAndImage(); // Update link and image after fully visible
                }, 2000); // Image and link will be fully visible for 2 seconds before fading out
            } else if (opacity <= 0) {
                clearInterval(interval);
                fadeInOut(element); // Restart the fading animation
            }
        }, 100); // Adjust the timing as needed
    }

    // Function to update the link and image
    function updateLinkAndImage() {
        link.href = events[currentIndex].link;
        image.src = events[currentIndex].imageSrc;
        currentIndex = (currentIndex + 1) % events.length; // Move to the next event, looping back to the beginning if necessary
    }

    updateLinkAndImage(); // Initially update link and image
    fadeInOut(image); // Start fade-in/out animation // Start cycling events

        //Moonshine 4
    } else if (month === 3 && date === 27 && year === 2025) {
        // Example link with image
        let link = document.createElement("a");
        link.href = "https://www.start.gg/tournament/moonshine-monthly-4/details";
        link.target = "_blank";
    
        let image = document.createElement("img");
        image.src = "https://images.start.gg/images/tournament/775552/image-dedd62c0b4e9387b14fce91ac01228fd.png";
    
        image.classList.add("calendarImg");
    
    
        link.appendChild(image);
        cell.appendChild(link);

    
        // Outrivaled & MM50 & PP7
    } else if (month === 4 && (date === 3) && year === 2025) {    
        const events = [
            {   
                link: "https://www.start.gg/tournament/outrivaled-max-s-birthday-bash/details",
                imageSrc: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F753093%2Fimage-9b2bf5f982e081df3b24026678ec7647-optimized.jpg&ehk=XXsx6z6UOd7LkTqWzFfC8v87P6TNOfPQzq6hE7hxd%2BU%3D&w=280&h=280&r=0"
                
            },
            {
                link: "https://www.start.gg/tournament/mass-madness-50-10th-anniversary-edition-250-pot-bonus/details",
                imageSrc: "https://images.start.gg/images/tournament/771392/image-0484d0a23129cae08d0baad5257c7d5f.png"
            },
            {
                link: "https://www.start.gg/tournament/pico-plus-7/details",
                imageSrc: "https://images.start.gg/images/tournament/781584/image-ee03eac14f648dbe120789cc990369fc.png"
            }
    
        ];
        let currentIndex = 0; // Initialize current index
    
        let link = document.createElement("a");
        link.target = "_blank";
    
        let image = document.createElement("img");
    
        image.classList.add("calendarImg");
    
        link.appendChild(image);
        cell.appendChild(link);
    
        // Function to fade in/out the image and link
        function fadeInOut(element) {
            let opacity = 0;
            let increasing = true;
            let interval = setInterval(function() {
                if (increasing) {
                    opacity += 0.05;
                } else {
                    opacity -= 0.05;
                }
                element.style.opacity = opacity;
                if (opacity >= 1) {
                    increasing = false;
                    setTimeout(() => {
                        increasing = true;
                        updateLinkAndImage(); // Update link and image after fully visible
                    }, 2000); // Image and link will be fully visible for 2 seconds before fading out
                } else if (opacity <= 0) {
                    clearInterval(interval);
                    fadeInOut(element); // Restart the fading animation
                }
            }, 100); // Adjust the timing as needed
        }
    
        // Function to update the link and image
        function updateLinkAndImage() {
            link.href = events[currentIndex].link;
            image.src = events[currentIndex].imageSrc;
            currentIndex = (currentIndex + 1) % events.length; // Move to the next event, looping back to the beginning if necessary
        }
    
        updateLinkAndImage(); // Initially update link and image
        fadeInOut(image); // Start fade-in/out animation // Start cycling events

        //GC10 + TS14
    } else if (month === 4 && date === 10 && year === 2025) {
        const events = [
            {   
                link: "https://www.start.gg/tournament/gecko-cavern-10/details",
                imageSrc: "https://images.start.gg/images/tournament/784340/image-dbadece0f8a6841bbb93fe5c2f7d569f.png"
                
            },
            {
                link: "https://www.start.gg/tournament/trading-stocks-14-summer-tour/details",
                imageSrc: "https://images.start.gg/images/tournament/786320/image-28defc849a03e7c455154e7c517441a1.png"
            }
    
        ];
        let currentIndex = 0; // Initialize current index
    
        let link = document.createElement("a");
        link.target = "_blank";
    
        let image = document.createElement("img");
    
        image.classList.add("calendarImg");
    
        link.appendChild(image);
        cell.appendChild(link);
    
        // Function to fade in/out the image and link
        function fadeInOut(element) {
            let opacity = 0;
            let increasing = true;
            let interval = setInterval(function() {
                if (increasing) {
                    opacity += 0.05;
                } else {
                    opacity -= 0.05;
                }
                element.style.opacity = opacity;
                if (opacity >= 1) {
                    increasing = false;
                    setTimeout(() => {
                        increasing = true;
                        updateLinkAndImage(); // Update link and image after fully visible
                    }, 2000); // Image and link will be fully visible for 2 seconds before fading out
                } else if (opacity <= 0) {
                    clearInterval(interval);
                    fadeInOut(element); // Restart the fading animation
                }
            }, 100); // Adjust the timing as needed
        }
    
        // Function to update the link and image
        function updateLinkAndImage() {
            link.href = events[currentIndex].link;
            image.src = events[currentIndex].imageSrc;
            currentIndex = (currentIndex + 1) % events.length; // Move to the next event, looping back to the beginning if necessary
        }
    
        updateLinkAndImage(); // Initially update link and image
        fadeInOut(image); // Start fade-in/out animation // Start cycling events

        //swaggerbeebumbler
    } else if (month === 4 && date === 11 && year === 2025) {
        // Example link with image
        let link = document.createElement("a");
        link.href = "https://www.start.gg/tournament/swaggerbeebumbler-spring-fling-bash-shoutoutmoms/details";
        link.target = "_blank";
    
        let image = document.createElement("img");
        image.src = "https://images.start.gg/images/tournament/774539/image-cdaad655ab58537f66fb9d518480b359.png";
    
        image.classList.add("calendarImg");
    
    
        link.appendChild(image);
        cell.appendChild(link);

        // UCPPT
    } else if (month === 4 && (date === 16) && year === 2025) {
        // Example link with image
        let link = document.createElement("a");
        link.href = "https://www.start.gg/tournament/untitled-colorado-project-plus-tournament/details";
        link.target = "_blank";
    
        let image = document.createElement("img");
        image.src = "https://images.start.gg/images/tournament/757771/image-8310886c0466b603a684f568a135a115.png?ehk=20Doph1xkV9g6apsC%2BYIyLvlSIDaAR1CWumo4HsGOOI%3D&ehkOptimized=9HUJfmE%2FUw%2BFO4OKnGpRkl1ElZEx5E0ocEAPk8FV3Fk%3D";
    
        image.classList.add("calendarImg");
    
    
        link.appendChild(image);
        cell.appendChild(link);

        
    // Project D + Mudug Melee 25 + Somino 7
    } else if (month === 4 && (date === 17) && year === 2025) {
        const events = [
            {   
                link: "https://www.start.gg/tournament/project-d/details",
                imageSrc: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F734216%2Fimage-ee3ee05c35dba007a95866d0be0d48da-optimized.png&ehk=yWRBbth3w%2BRzWsSxGEGuUudXJ15ui28vMkBOBEMevio%3D&w=280&h=280&r=0"
                
            },
            {   
                link: "https://www.start.gg/tournament/mudbug-melee-25/details",
                imageSrc: "https://images.start.gg/images/tournament/783023/image-f8f7c20c5de6f86d7abb494e727f11aa.png"
                
            },
            {
                link: "https://www.start.gg/tournament/somnio-7/details",
                imageSrc: "https://images.start.gg/images/tournament/751000/image-ed26f48afad2877aba57f1490bb6f714.png?ehk=6y%2FyE%2BucwtxN5FHMui%2FrMuvo4VgUICio6mgUEdCk4eE%3D&ehkOptimized=0sZkKNeR5pDkTDdlWAu53aBCDIMVsLokiPOWWWvzLJI%3D"
            }
    
        ];
        let currentIndex = 0; // Initialize current index
    
        let link = document.createElement("a");
        link.target = "_blank";
    
        let image = document.createElement("img");
    
        image.classList.add("calendarImg");
    
        link.appendChild(image);
        cell.appendChild(link);
    
        // Function to fade in/out the image and link
        function fadeInOut(element) {
            let opacity = 0;
            let increasing = true;
            let interval = setInterval(function() {
                if (increasing) {
                    opacity += 0.05;
                } else {
                    opacity -= 0.05;
                }
                element.style.opacity = opacity;
                if (opacity >= 1) {
                    increasing = false;
                    setTimeout(() => {
                        increasing = true;
                        updateLinkAndImage(); // Update link and image after fully visible
                    }, 2000); // Image and link will be fully visible for 2 seconds before fading out
                } else if (opacity <= 0) {
                    clearInterval(interval);
                    fadeInOut(element); // Restart the fading animation
                }
            }, 100); // Adjust the timing as needed
        }
    
        // Function to update the link and image
        function updateLinkAndImage() {
            link.href = events[currentIndex].link;
            image.src = events[currentIndex].imageSrc;
            currentIndex = (currentIndex + 1) % events.length; // Move to the next event, looping back to the beginning if necessary
        }
    
        updateLinkAndImage(); // Initially update link and image
        fadeInOut(image); // Start fade-in/out animation // Start cycling events

            // UCPPT
        } else if (month === 4 && (date === 18) && year === 2025) {
        // Example link with image
        let link = document.createElement("a");
        link.href = "https://www.start.gg/tournament/somnio-7/details";
        link.target = "_blank";
    
        let image = document.createElement("img");
        image.src = "https://images.start.gg/images/tournament/751000/image-ed26f48afad2877aba57f1490bb6f714.png?ehk=6y%2FyE%2BucwtxN5FHMui%2FrMuvo4VgUICio6mgUEdCk4eE%3D&ehkOptimized=0sZkKNeR5pDkTDdlWAu53aBCDIMVsLokiPOWWWvzLJI%3D";
    
        image.classList.add("calendarImg");
    
    
        link.appendChild(image);
        cell.appendChild(link);

    // Super TPS V
    } else if (month === 4 && (date === 23) && year === 2025) {
        // Example link with image
        let link = document.createElement("a");
        link.href = "https://www.start.gg/tournament/super-tps-v/details";
        link.target = "_blank";
    
        let image = document.createElement("img");
        image.src = "https://images.start.gg/images/tournament/759108/image-a789036f8d8bd8b3f9d3d4f64691be2f.png";
    
        image.classList.add("calendarImg");    
    
        link.appendChild(image);
        cell.appendChild(link);

        // WoL 12 + G5itD 9 + DR1 + GC11 + Allston Allstars IV + House of Nimbus 2
    } else if (month === 4 && (date === 24) && year === 2025) {
        const events = [
            {   
                link: "https://www.start.gg/tournament/who-s-on-ledge-12/details",
                imageSrc: "https://images.start.gg/images/tournament/786126/image-a1d57cc11cc587883ff617c3d5450671.png"
                
            },
            {
                link: "https://www.start.gg/tournament/game-5-in-the-d-9/details",
                imageSrc: "https://images.start.gg/images/tournament/786534/image-5587e14194f46331fd2a5c0919905cac.jpg"
            },
            {
                link: "https://www.start.gg/tournament/dream-rotation-1-pass-the-controller/details",
                imageSrc: "https://images.start.gg/images/tournament/788255/image-eb1760b243e2d58e33dba82b860a5e9a.png"
            },
            {
                link: "https://www.start.gg/tournament/gecko-cavern11/details",
                imageSrc: "https://images.start.gg/images/tournament/790632/image-6b06a2f054f1b49b92915dfe682b4f2a.png"
            },
            {
                link: "https://www.start.gg/tournament/allston-allstars-iv/details",
                imageSrc: "https://images.start.gg/images/tournament/778092/image-95dcee666f43c5665d9559d1be5c6dfc.png"
            },
            {
                link: "https://www.start.gg/tournament/house-of-nimbus-2/details",
                imageSrc: "https://images.start.gg/images/tournament/788261/image-846f651e218eaf6f4fcda9b23f070246.jpg"
            }
    
        ];
        let currentIndex = 0; // Initialize current index
    
        let link = document.createElement("a");
        link.target = "_blank";
    
        let image = document.createElement("img");
    
        image.classList.add("calendarImg");
    
        link.appendChild(image);
        cell.appendChild(link);
    
        // Function to fade in/out the image and link
        function fadeInOut(element) {
            let opacity = 0;
            let increasing = true;
            let interval = setInterval(function() {
                if (increasing) {
                    opacity += 0.05;
                } else {
                    opacity -= 0.05;
                }
                element.style.opacity = opacity;
                if (opacity >= 1) {
                    increasing = false;
                    setTimeout(() => {
                        increasing = true;
                        updateLinkAndImage(); // Update link and image after fully visible
                    }, 2000); // Image and link will be fully visible for 2 seconds before fading out
                } else if (opacity <= 0) {
                    clearInterval(interval);
                    fadeInOut(element); // Restart the fading animation
                }
            }, 100); // Adjust the timing as needed
        }
    
        // Function to update the link and image
        function updateLinkAndImage() {
            link.href = events[currentIndex].link;
            image.src = events[currentIndex].imageSrc;
            currentIndex = (currentIndex + 1) % events.length; // Move to the next event, looping back to the beginning if necessary
        }
    
        updateLinkAndImage(); // Initially update link and image
        fadeInOut(image); // Start fade-in/out animation // Start cycling events

     // Fight at the Museum + MSM 5
    } else if (month === 4 && (date === 31) && year === 2025) {
        const events = [
            {   
                link: "https://www.start.gg/tournament/fight-at-the-museum/details",
                imageSrc: "https://images.start.gg/images/tournament/742717/image-03e5cfa0072bf8a26da43d845c6cfd05.png"
                
            },
            {
                link: "https://www.start.gg/tournament/moonshine-monthly-5/details",
                imageSrc: "https://images.start.gg/images/tournament/788909/image-81e9bf8b23004bd63a1d9693d9881351.png"
            }
    
        ];
        let currentIndex = 0; // Initialize current index
    
        let link = document.createElement("a");
        link.target = "_blank";
    
        let image = document.createElement("img");
    
        image.classList.add("calendarImg");
    
        link.appendChild(image);
        cell.appendChild(link);
    
        // Function to fade in/out the image and link
        function fadeInOut(element) {
            let opacity = 0;
            let increasing = true;
            let interval = setInterval(function() {
                if (increasing) {
                    opacity += 0.05;
                } else {
                    opacity -= 0.05;
                }
                element.style.opacity = opacity;
                if (opacity >= 1) {
                    increasing = false;
                    setTimeout(() => {
                        increasing = true;
                        updateLinkAndImage(); // Update link and image after fully visible
                    }, 2000); // Image and link will be fully visible for 2 seconds before fading out
                } else if (opacity <= 0) {
                    clearInterval(interval);
                    fadeInOut(element); // Restart the fading animation
                }
            }, 100); // Adjust the timing as needed
        }
    
        // Function to update the link and image
        function updateLinkAndImage() {
            link.href = events[currentIndex].link;
            image.src = events[currentIndex].imageSrc;
            currentIndex = (currentIndex + 1) % events.length; // Move to the next event, looping back to the beginning if necessary
        }
    
        updateLinkAndImage(); // Initially update link and image
        fadeInOut(image); // Start fade-in/out animation // Start cycling events


     // Evergreen 2025 + King's Ransom + Schlocal Arcadian + Pico Plus + GC12
    } else if (month === 5 && (date === 14) && year === 2025) {
        const events = [
            {   
                link: "https://www.start.gg/tournament/evergreen-2025/details",
                imageSrc: "https://images.start.gg/images/tournament/750366/image-eafe71c5eb426044109a764ff4e509e6.png?ehk=9K7Fu4sI1p1c%2B46PJC1aUGNOkQMLidsxRtyFnmzPcDo%3D&ehkOptimized=RokVDvc%2FvsAXu1Ql9wytiQWCuVBQ7%2BqG018F1DGCfvQ%3D"
                
            },
            {
                link: "https://www.start.gg/tournament/king-s-ransom/details",
                imageSrc: "https://images.start.gg/images/tournament/769414/image-e69ffb0c62ba05fd003d5d5c00e88218.png"
            },
            {
                link: "https://www.start.gg/tournament/schlocal-arcadian-2025/details",
                imageSrc: "https://images.start.gg/images/tournament/781625/image-28dde452f2dbbaf547c84bd62a25e8bf.png"
            },
            {
                link: "https://www.start.gg/tournament/pico-plus-8/details",
                imageSrc: "https://images.start.gg/images/tournament/790582/image-16441ad7703911ed90f6f7a6191abf12.png"
            },
            {
                link: "https://www.start.gg/tournament/gecko-cavern-12/details",
                imageSrc: "https://images.start.gg/images/tournament/796229/image-3407b6e466875bc7b4d0979895d021c2.png"
            }
    
        ];
        let currentIndex = 0; // Initialize current index
    
        let link = document.createElement("a");
        link.target = "_blank";
    
        let image = document.createElement("img");
    
        image.classList.add("calendarImg");
    
        link.appendChild(image);
        cell.appendChild(link);
    
        // Function to fade in/out the image and link
        function fadeInOut(element) {
            let opacity = 0;
            let increasing = true;
            let interval = setInterval(function() {
                if (increasing) {
                    opacity += 0.05;
                } else {
                    opacity -= 0.05;
                }
                element.style.opacity = opacity;
                if (opacity >= 1) {
                    increasing = false;
                    setTimeout(() => {
                        increasing = true;
                        updateLinkAndImage(); // Update link and image after fully visible
                    }, 2000); // Image and link will be fully visible for 2 seconds before fading out
                } else if (opacity <= 0) {
                    clearInterval(interval);
                    fadeInOut(element); // Restart the fading animation
                }
            }, 100); // Adjust the timing as needed
        }
    
        // Function to update the link and image
        function updateLinkAndImage() {
            link.href = events[currentIndex].link;
            image.src = events[currentIndex].imageSrc;
            currentIndex = (currentIndex + 1) % events.length; // Move to the next event, looping back to the beginning if necessary
        }
    
        updateLinkAndImage(); // Initially update link and image
        fadeInOut(image); // Start fade-in/out animation // Start cycling events

            // The Truce 2 Day 1 + Trading Stocks 15 + UFI5 + HoN3 + MM51
        } else if (month === 5 && (date === 21) && year === 2025) {
        const events = [
            {   
                link: "https://www.start.gg/tournament/the-truce-2-no-pasar-n/details",
                imageSrc: "https://images.start.gg/images/tournament/769345/image-3b234072f79221c181e6d499ef1f6daa.jpg"
                
            },
            {
                link: "https://www.start.gg/tournament/trading-stocks-15-summer-tour/details",
                imageSrc: "https://images.start.gg/images/tournament/789151/image-c190cbe3ee6d9671442b6052d71c0803.png"
            },
            {
                link: "https://www.start.gg/tournament/unc-frozen-s-icebox-5-melee-edition/details",
                imageSrc: "https://images.start.gg/images/tournament/794197/image-2363f4f700d4126a4b5a105a6d4ab208.jpg"
            },
            {
                link: "https://www.start.gg/tournament/house-of-nimbus-3/details",
                imageSrc: "https://images.start.gg/images/tournament/797254/image-269f8df508ef2e1df0862bef405f16fc.jpg"
            },
            {
                link: "https://www.start.gg/tournament/mass-madness-51-the-fine-art-of-interaction/details",
                imageSrc: "https://images.start.gg/images/tournament/789104/image-4e2ac504b6084d500c64c434c9776892.png"
            }
    
        ];
        let currentIndex = 0; // Initialize current index
    
        let link = document.createElement("a");
        link.target = "_blank";
    
        let image = document.createElement("img");
    
        image.classList.add("calendarImg");
    
        link.appendChild(image);
        cell.appendChild(link);
    
        // Function to fade in/out the image and link
        function fadeInOut(element) {
            let opacity = 0;
            let increasing = true;
            let interval = setInterval(function() {
                if (increasing) {
                    opacity += 0.05;
                } else {
                    opacity -= 0.05;
                }
                element.style.opacity = opacity;
                if (opacity >= 1) {
                    increasing = false;
                    setTimeout(() => {
                        increasing = true;
                        updateLinkAndImage(); // Update link and image after fully visible
                    }, 2000); // Image and link will be fully visible for 2 seconds before fading out
                } else if (opacity <= 0) {
                    clearInterval(interval);
                    fadeInOut(element); // Restart the fading animation
                }
            }, 100); // Adjust the timing as needed
        }
    
        // Function to update the link and image
        function updateLinkAndImage() {
            link.href = events[currentIndex].link;
            image.src = events[currentIndex].imageSrc;
            currentIndex = (currentIndex + 1) % events.length; // Move to the next event, looping back to the beginning if necessary
        }
    
        updateLinkAndImage(); // Initially update link and image
        fadeInOut(image); // Start fade-in/out animation // Start cycling events

        // The Truce 2 Day 2
        } else if (month === 5 && (date === 22) && year === 2025) {
        // Example link with image
        let link = document.createElement("a");
        link.href = "https://www.start.gg/tournament/the-truce-2-no-pasar-n/details";
        link.target = "_blank";
    
        let image = document.createElement("img");
        image.src = "https://images.start.gg/images/tournament/769345/image-3b234072f79221c181e6d499ef1f6daa.jpg";
    
        image.classList.add("calendarImg");
    
    
        link.appendChild(image);
        cell.appendChild(link);

            // Rat Kings + Scrapyard 2025 + Good Ol' Days
        } else if (month === 5 && (date === 28) && year === 2025) {
        const events = [
            {   
                link: "https://www.start.gg/tournament/rat-kings/details",
                imageSrc: "https://images.start.gg/images/tournament/784324/image-935d6151259b9029a58dae06ac476c49.png"
                
            },
            {
                link: "https://www.start.gg/tournament/scrapyard-2025-p-hdr/details",
                imageSrc: "https://images.start.gg/images/tournament/790722/image-8d41b2e5b384a247217d427b2a940b39.png"
            },
            {
                link: "https://www.start.gg/tournament/the-good-ol-days/details",
                imageSrc: "https://images.start.gg/images/tournament/798041/image-84ddb6856b036519959d9a664f9ceef8.jpg"
            }
    
        ];
        let currentIndex = 0; // Initialize current index
    
        let link = document.createElement("a");
        link.target = "_blank";
    
        let image = document.createElement("img");
    
        image.classList.add("calendarImg");
    
        link.appendChild(image);
        cell.appendChild(link);
    
        // Function to fade in/out the image and link
        function fadeInOut(element) {
            let opacity = 0;
            let increasing = true;
            let interval = setInterval(function() {
                if (increasing) {
                    opacity += 0.05;
                } else {
                    opacity -= 0.05;
                }
                element.style.opacity = opacity;
                if (opacity >= 1) {
                    increasing = false;
                    setTimeout(() => {
                        increasing = true;
                        updateLinkAndImage(); // Update link and image after fully visible
                    }, 2000); // Image and link will be fully visible for 2 seconds before fading out
                } else if (opacity <= 0) {
                    clearInterval(interval);
                    fadeInOut(element); // Restart the fading animation
                }
            }, 100); // Adjust the timing as needed
        }
    
        // Function to update the link and image
        function updateLinkAndImage() {
            link.href = events[currentIndex].link;
            image.src = events[currentIndex].imageSrc;
            currentIndex = (currentIndex + 1) % events.length; // Move to the next event, looping back to the beginning if necessary
        }
    
        updateLinkAndImage(); // Initially update link and image
        fadeInOut(image); // Start fade-in/out animation // Start cycling events

        // Pope's Sunday Mass: Conclave 
        } else if (month === 5 && (date === 29) && year === 2025) {
        // Example link with image
        let link = document.createElement("a");
        link.href = "https://www.start.gg/tournament/pope-s-sunday-mass-conclave/details";
        link.target = "_blank";
    
        let image = document.createElement("img");
        image.src = "https://images.start.gg/images/tournament/784333/image-dea410335ee8f381ae4e74b977bcddf5.png";
    
        image.classList.add("calendarImg");
    
    
        link.appendChild(image);
        cell.appendChild(link);

         // GOOMV 2025
        } else if (month === 6 && (date === 4 || date === 6) && year === 2025) {
            // Example link with image
            let link = document.createElement("a");
            link.href = "https://www.start.gg/tournament/get-out-of-my-venue-certificate-of-disapproval-1/details";
            link.target = "_blank";
        
            let image = document.createElement("img");
            image.src = "https://images.start.gg/images/tournament/791339/image-b07eff3cbe0f9470ff1a8dbcd88eae32.png";
        
            image.classList.add("calendarImg");
        
        
            link.appendChild(image);
            cell.appendChild(link);

        // GOOMV 2025 Day 2 + SSSS
        } else if (month === 6 && (date === 6) && year === 2025) {
        const events = [
            {   
                link: "https://www.start.gg/tournament/get-out-of-my-venue-certificate-of-disapproval-1/details",
                imageSrc: "https://images.start.gg/images/tournament/791339/image-b07eff3cbe0f9470ff1a8dbcd88eae32.png"
                
            },
            {
                link: "https://www.start.gg/tournament/star-spangled-shine-spike/details",
                imageSrc: "https://images.start.gg/images/tournament/794977/image-60e10ad56569de5337bfe807879178fa.png"
            }
    
        ];
        let currentIndex = 0; // Initialize current index
    
        let link = document.createElement("a");
        link.target = "_blank";
    
        let image = document.createElement("img");
    
        image.classList.add("calendarImg");
    
        link.appendChild(image);
        cell.appendChild(link);
    
        // Function to fade in/out the image and link
        function fadeInOut(element) {
            let opacity = 0;
            let increasing = true;
            let interval = setInterval(function() {
                if (increasing) {
                    opacity += 0.05;
                } else {
                    opacity -= 0.05;
                }
                element.style.opacity = opacity;
                if (opacity >= 1) {
                    increasing = false;
                    setTimeout(() => {
                        increasing = true;
                        updateLinkAndImage(); // Update link and image after fully visible
                    }, 2000); // Image and link will be fully visible for 2 seconds before fading out
                } else if (opacity <= 0) {
                    clearInterval(interval);
                    fadeInOut(element); // Restart the fading animation
                }
            }, 100); // Adjust the timing as needed
        }
    
        // Function to update the link and image
        function updateLinkAndImage() {
            link.href = events[currentIndex].link;
            image.src = events[currentIndex].imageSrc;
            currentIndex = (currentIndex + 1) % events.length; // Move to the next event, looping back to the beginning if necessary
        }
    
        updateLinkAndImage(); // Initially update link and image
        fadeInOut(image); // Start fade-in/out animation // Start cycling events

         // Second Wind 2025
        } else if (month === 6 && (date === 11 || date === 13) && year === 2025) {
            // Example link with image
            let link = document.createElement("a");
            link.href = "https://www.start.gg/tournament/second-wind-2025/details";
            link.target = "_blank";
        
            let image = document.createElement("img");
            image.src = "https://images.start.gg/images/tournament/773119/image-97ff7dec6fd4919e6095a828419d0fd9.png";
        
            image.classList.add("calendarImg");
        
        
            link.appendChild(image);
            cell.appendChild(link);

        // Second Wind 2025 Day 2 + G5itD10 + Plat Par + PPlusUltra2
        } else if (month === 6 && (date === 12) && year === 2025) {
        const events = [
            {   
                link: "https://www.start.gg/tournament/second-wind-2025/details",
                imageSrc: "https://images.start.gg/images/tournament/773119/image-97ff7dec6fd4919e6095a828419d0fd9.png"
                
            },
            {
                link: "https://www.start.gg/tournament/game-5-in-the-d-10-take-me-out-to/details",
                imageSrc: "https://images.start.gg/images/tournament/797472/image-6120b0c3f5bd518470ae9f3d3a1f6957.jpg"
            },
            {
                link: "https://www.start.gg/tournament/platform-paradise/details",
                imageSrc: "https://images.start.gg/images/tournament/797484/image-4180a11dbf066a5132c9a87b992dd6a1.png"
            },
            {
                link: "https://www.start.gg/tournament/project-plus-ultra-2/details",
                imageSrc: "https://images.start.gg/images/tournament/802444/image-3298b950de63d750209fd9754c084884.jpg"
            }
    
        ];
        let currentIndex = 0; // Initialize current index
    
        let link = document.createElement("a");
        link.target = "_blank";
    
        let image = document.createElement("img");
    
        image.classList.add("calendarImg");
    
        link.appendChild(image);
        cell.appendChild(link);
    
        // Function to fade in/out the image and link
        function fadeInOut(element) {
            let opacity = 0;
            let increasing = true;
            let interval = setInterval(function() {
                if (increasing) {
                    opacity += 0.05;
                } else {
                    opacity -= 0.05;
                }
                element.style.opacity = opacity;
                if (opacity >= 1) {
                    increasing = false;
                    setTimeout(() => {
                        increasing = true;
                        updateLinkAndImage(); // Update link and image after fully visible
                    }, 2000); // Image and link will be fully visible for 2 seconds before fading out
                } else if (opacity <= 0) {
                    clearInterval(interval);
                    fadeInOut(element); // Restart the fading animation
                }
            }, 100); // Adjust the timing as needed
        }
    
        // Function to update the link and image
        function updateLinkAndImage() {
            link.href = events[currentIndex].link;
            image.src = events[currentIndex].imageSrc;
            currentIndex = (currentIndex + 1) % events.length; // Move to the next event, looping back to the beginning if necessary
        }
    
        updateLinkAndImage(); // Initially update link and image
        fadeInOut(image); // Start fade-in/out animation // Start cycling events

        // Phantom 2025
        } else if (month === 6 && (date === 18 || date === 20) && year === 2025) {
        // Example link with image
        let link = document.createElement("a");
        link.href = "https://www.start.gg/tournament/phantom-2025/details";
        link.target = "_blank";
    
        let image = document.createElement("img");
        image.src = "https://images.start.gg/images/tournament/762524/image-bd71887f81c5ae41ec8ad09ad0c4cda5.png";
    
        image.classList.add("calendarImg");
    
    
        link.appendChild(image);
        cell.appendChild(link);

         // Phantom 2025 + CoB5 + NotlD4 + UFI6
    } else if (month === 6 && (date === 19) && year === 2025) {
        const events = [
            {   
                link: "https://www.start.gg/tournament/phantom-2025/details",
                imageSrc: "https://images.start.gg/images/tournament/762524/image-bd71887f81c5ae41ec8ad09ad0c4cda5.png"
                
            },
            {
                link: "https://www.start.gg/tournament/condo-of-blood-5-the-summer-saga/details",
                imageSrc: "https://images.start.gg/images/tournament/792555/image-a2e915e0817da6f4b65571630446c010.png"
            },
            {
                link: "https://www.start.gg/tournament/night-of-the-living-ded-4-melee-p-with-potbonuses/details",
                imageSrc: "https://images.start.gg/images/tournament/800374/image-82123d4127a93546884f1e01693b3629.png"
            },
            {
                link: "https://www.start.gg/tournament/unc-frozen-s-icebox-6/details",
                imageSrc: "https://images.start.gg/images/tournament/804218/image-b2c42efd0acb16f9626cddf51101c977.jpg"
            }
    
        ];
        let currentIndex = 0; // Initialize current index
    
        let link = document.createElement("a");
        link.target = "_blank";
    
        let image = document.createElement("img");
    
        image.classList.add("calendarImg");
    
        link.appendChild(image);
        cell.appendChild(link);
    
        // Function to fade in/out the image and link
        function fadeInOut(element) {
            let opacity = 0;
            let increasing = true;
            let interval = setInterval(function() {
                if (increasing) {
                    opacity += 0.05;
                } else {
                    opacity -= 0.05;
                }
                element.style.opacity = opacity;
                if (opacity >= 1) {
                    increasing = false;
                    setTimeout(() => {
                        increasing = true;
                        updateLinkAndImage(); // Update link and image after fully visible
                    }, 2000); // Image and link will be fully visible for 2 seconds before fading out
                } else if (opacity <= 0) {
                    clearInterval(interval);
                    fadeInOut(element); // Restart the fading animation
                }
            }, 100); // Adjust the timing as needed
        }
    
        // Function to update the link and image
        function updateLinkAndImage() {
            link.href = events[currentIndex].link;
            image.src = events[currentIndex].imageSrc;
            currentIndex = (currentIndex + 1) % events.length; // Move to the next event, looping back to the beginning if necessary
        }
    
        updateLinkAndImage(); // Initially update link and image
        fadeInOut(image); // Start fade-in/out animation // Start cycling events


        // Don't Mind The Cats
        } else if (month === 6 && (date === 20) && year === 2025) {
        // Example link with image
        let link = document.createElement("a");
        link.href = "https://www.start.gg/tournament/don-t-mind-the-cats/details";
        link.target = "_blank";
    
        let image = document.createElement("img");
        image.src = "https://images.start.gg/images/tournament/804035/image-a58166aff500f5a101bde542a65b8832.jpg";
    
        image.classList.add("calendarImg");
    
    
        link.appendChild(image);
        cell.appendChild(link);


        // Filler Fest + Pico Plus
        } else if (month === 6 && (date === 26) && year === 2025) {
        const events = [
            {   
                link: "https://www.start.gg/tournament/filler-fest/details",
                imageSrc: "https://images.start.gg/images/tournament/782711/image-0b6b921cf69f427ea3807f0696b1105f.png"
                
            },
            {
                link: "https://www.start.gg/tournament/pico-plus-9/details",
                imageSrc: "https://images.start.gg/images/tournament/805139/image-89fda7ff1d4e6aeebd759d5f2a55c5e5.png"
            }
    
        ];
        let currentIndex = 0; // Initialize current index
    
        let link = document.createElement("a");
        link.target = "_blank";
    
        let image = document.createElement("img");
    
        image.classList.add("calendarImg");
    
        link.appendChild(image);
        cell.appendChild(link);
    
        // Function to fade in/out the image and link
        function fadeInOut(element) {
            let opacity = 0;
            let increasing = true;
            let interval = setInterval(function() {
                if (increasing) {
                    opacity += 0.05;
                } else {
                    opacity -= 0.05;
                }
                element.style.opacity = opacity;
                if (opacity >= 1) {
                    increasing = false;
                    setTimeout(() => {
                        increasing = true;
                        updateLinkAndImage(); // Update link and image after fully visible
                    }, 2000); // Image and link will be fully visible for 2 seconds before fading out
                } else if (opacity <= 0) {
                    clearInterval(interval);
                    fadeInOut(element); // Restart the fading animation
                }
            }, 100); // Adjust the timing as needed
        }
    
        // Function to update the link and image
        function updateLinkAndImage() {
            link.href = events[currentIndex].link;
            image.src = events[currentIndex].imageSrc;
            currentIndex = (currentIndex + 1) % events.length; // Move to the next event, looping back to the beginning if necessary
        }
    
        updateLinkAndImage(); // Initially update link and image
        fadeInOut(image); // Start fade-in/out animation // Start cycling events


        // Bristol's Basement
        } else if (month === 6 && (date === 27) && year === 2025) {
        // Example link with image
        let link = document.createElement("a");
        link.href = "https://www.start.gg/tournament/bristol-s-basement-wrath-of-the-lich-king-classic/details";
        link.target = "_blank";
    
        let image = document.createElement("img");
        image.src = "https://images.start.gg/images/tournament/804165/image-5a87cbe427ec6c49c4065b5702d6d4e0.jpg";
    
        image.classList.add("calendarImg");
    
    
        link.appendChild(image);
        cell.appendChild(link);

        // Monty's + AAV
        } else if (month === 7 && (date === 2) && year === 2025) {
        const events = [
            {   
                link: "https://www.start.gg/tournament/monty-s-olympic-games/details",
                imageSrc: "https://images.start.gg/images/tournament/803977/image-f92bb8393df4fc6c2bd459e12e6f1768.png"
                
            },
            {
                link: "https://www.start.gg/tournament/allston-allstars-v-tom-s-birthday-bash/details",
                imageSrc: "https://images.start.gg/images/tournament/804685/image-95c4ad4dc1960e3d8efe1666db6a042a.png"
            }
    
        ];
        let currentIndex = 0; // Initialize current index
    
        let link = document.createElement("a");
        link.target = "_blank";
    
        let image = document.createElement("img");
    
        image.classList.add("calendarImg");
    
        link.appendChild(image);
        cell.appendChild(link);
    
        // Function to fade in/out the image and link
        function fadeInOut(element) {
            let opacity = 0;
            let increasing = true;
            let interval = setInterval(function() {
                if (increasing) {
                    opacity += 0.05;
                } else {
                    opacity -= 0.05;
                }
                element.style.opacity = opacity;
                if (opacity >= 1) {
                    increasing = false;
                    setTimeout(() => {
                        increasing = true;
                        updateLinkAndImage(); // Update link and image after fully visible
                    }, 2000); // Image and link will be fully visible for 2 seconds before fading out
                } else if (opacity <= 0) {
                    clearInterval(interval);
                    fadeInOut(element); // Restart the fading animation
                }
            }, 100); // Adjust the timing as needed
        }
    
        // Function to update the link and image
        function updateLinkAndImage() {
            link.href = events[currentIndex].link;
            image.src = events[currentIndex].imageSrc;
            currentIndex = (currentIndex + 1) % events.length; // Move to the next event, looping back to the beginning if necessary
        }
    
        updateLinkAndImage(); // Initially update link and image
        fadeInOut(image); // Start fade-in/out animation // Start cycling events


        // Rev It Up For Charity
        } else if (month === 7 && (date === 6) && year === 2025) {
        // Example link with image
        let link = document.createElement("a");
        link.href = "https://www.start.gg/tournament/rev-it-up-for-charity/details";
        link.target = "_blank";
    
        let image = document.createElement("img");
        image.src = "https://images.start.gg/images/tournament/799668/image-02c7c381abb660e94bdfd60ff9265070.png";
    
        image.classList.add("calendarImg");
    
    
        link.appendChild(image);
        cell.appendChild(link);

        // St. No John's 11
        } else if (month === 7 && (date === 8) && year === 2025) {
        // Example link with image
        let link = document.createElement("a");
        link.href = "https://www.start.gg/tournament/st-no-john-s-11/details";
        link.target = "_blank";
    
        let image = document.createElement("img");
        image.src = "https://images.start.gg/images/tournament/762867/image-5186c03397ad9db4b9df2f145a778d81.png";
    
        image.classList.add("calendarImg");
    
    
        link.appendChild(image);
        cell.appendChild(link);

        // St. No John's 11 + Void Nebula 2
        } else if (month === 7 && (date === 9) && year === 2025) {
        const events = [
            {   
                link: "https://www.start.gg/tournament/st-no-john-s-11/details",
                imageSrc: "https://images.start.gg/images/tournament/762867/image-5186c03397ad9db4b9df2f145a778d81.png"
                
            },
            {
                link: "https://www.start.gg/tournament/2-eternity/details",
                imageSrc: "https://images.start.gg/images/tournament/808583/image-57f90de8d46034f1db69dac305f20b3a.jpg"
            }
    
        ];
        let currentIndex = 0; // Initialize current index
    
        let link = document.createElement("a");
        link.target = "_blank";
    
        let image = document.createElement("img");
    
        image.classList.add("calendarImg");
    
        link.appendChild(image);
        cell.appendChild(link);
    
        // Function to fade in/out the image and link
        function fadeInOut(element) {
            let opacity = 0;
            let increasing = true;
            let interval = setInterval(function() {
                if (increasing) {
                    opacity += 0.05;
                } else {
                    opacity -= 0.05;
                }
                element.style.opacity = opacity;
                if (opacity >= 1) {
                    increasing = false;
                    setTimeout(() => {
                        increasing = true;
                        updateLinkAndImage(); // Update link and image after fully visible
                    }, 2000); // Image and link will be fully visible for 2 seconds before fading out
                } else if (opacity <= 0) {
                    clearInterval(interval);
                    fadeInOut(element); // Restart the fading animation
                }
            }, 100); // Adjust the timing as needed
        }
    
        // Function to update the link and image
        function updateLinkAndImage() {
            link.href = events[currentIndex].link;
            image.src = events[currentIndex].imageSrc;
            currentIndex = (currentIndex + 1) % events.length; // Move to the next event, looping back to the beginning if necessary
        }
    
        updateLinkAndImage(); // Initially update link and image
        fadeInOut(image); // Start fade-in/out animation // Start cycling events

    
        // Construct X + St. No John's 11
        } else if (month === 7 && (date === 10) && year === 2025) {
        const events = [
            {   
                link: "https://www.start.gg/tournament/construct-x-2025/details",
                imageSrc: "https://images.start.gg/images/tournament/794501/image-8794fe27cd441ebf73297992d28f01b8.png"
                
            },
            {
                link: "https://www.start.gg/tournament/st-no-john-s-11/details",
                imageSrc: "https://images.start.gg/images/tournament/762867/image-5186c03397ad9db4b9df2f145a778d81.png"
            }
    
        ];
        let currentIndex = 0; // Initialize current index
    
        let link = document.createElement("a");
        link.target = "_blank";
    
        let image = document.createElement("img");
    
        image.classList.add("calendarImg");
    
        link.appendChild(image);
        cell.appendChild(link);
    
        // Function to fade in/out the image and link
        function fadeInOut(element) {
            let opacity = 0;
            let increasing = true;
            let interval = setInterval(function() {
                if (increasing) {
                    opacity += 0.05;
                } else {
                    opacity -= 0.05;
                }
                element.style.opacity = opacity;
                if (opacity >= 1) {
                    increasing = false;
                    setTimeout(() => {
                        increasing = true;
                        updateLinkAndImage(); // Update link and image after fully visible
                    }, 2000); // Image and link will be fully visible for 2 seconds before fading out
                } else if (opacity <= 0) {
                    clearInterval(interval);
                    fadeInOut(element); // Restart the fading animation
                }
            }, 100); // Adjust the timing as needed
        }
    
        // Function to update the link and image
        function updateLinkAndImage() {
            link.href = events[currentIndex].link;
            image.src = events[currentIndex].imageSrc;
            currentIndex = (currentIndex + 1) % events.length; // Move to the next event, looping back to the beginning if necessary
        }
    
        updateLinkAndImage(); // Initially update link and image
        fadeInOut(image); // Start fade-in/out animation // Start cycling events

        // Gold Rush + NotlD5
        } else if (month === 7 && (date === 16) && year === 2025) {
        const events = [
            {   
                link: "https://www.start.gg/tournament/gold-rush-10/details",
                imageSrc: "https://images.start.gg/images/tournament/800623/image-8b92e2a8e28481295ea4e27c9def6993.png"
                
            },
            {
                link: "https://www.start.gg/tournament/night-of-the-living-ded-5-melee-p/details",
                imageSrc: "https://images.start.gg/images/tournament/810567/image-57519baa7115494776be96b98e3da25a.png"
            },
            {
                link: "https://www.start.gg/tournament/mass-madness-52-endless-summer/details",
                imageSrc: "https://images.start.gg/images/tournament/809255/image-fbc5cb39766a17395349c4e8834c4d34.png"
            },
            {
                link: "https://www.start.gg/tournament/gecko-cavern-13/details",
                imageSrc: "https://images.start.gg/images/tournament/814443/image-5e8666e13c4e2f79edf2bd6768b9a689.png"
            }
    
        ];
        let currentIndex = 0; // Initialize current index
    
        let link = document.createElement("a");
        link.target = "_blank";
    
        let image = document.createElement("img");
    
        image.classList.add("calendarImg");
    
        link.appendChild(image);
        cell.appendChild(link);
    
        // Function to fade in/out the image and link
        function fadeInOut(element) {
            let opacity = 0;
            let increasing = true;
            let interval = setInterval(function() {
                if (increasing) {
                    opacity += 0.05;
                } else {
                    opacity -= 0.05;
                }
                element.style.opacity = opacity;
                if (opacity >= 1) {
                    increasing = false;
                    setTimeout(() => {
                        increasing = true;
                        updateLinkAndImage(); // Update link and image after fully visible
                    }, 2000); // Image and link will be fully visible for 2 seconds before fading out
                } else if (opacity <= 0) {
                    clearInterval(interval);
                    fadeInOut(element); // Restart the fading animation
                }
            }, 100); // Adjust the timing as needed
        }
    
        // Function to update the link and image
        function updateLinkAndImage() {
            link.href = events[currentIndex].link;
            image.src = events[currentIndex].imageSrc;
            currentIndex = (currentIndex + 1) % events.length; // Move to the next event, looping back to the beginning if necessary
        }
    
        updateLinkAndImage(); // Initially update link and image
        fadeInOut(image); // Start fade-in/out animation // Start cycling events

        // UFI7 + PicoP10 + DoNotSkate
        } else if (month === 7 && (date === 23) && year === 2025) {
        const events = [
            {   
                link: "https://www.start.gg/tournament/unc-frozen-s-icebox-7/details",
                imageSrc: "https://images.start.gg/images/tournament/812447/image-9223a0a2f72e5eaef276653f179af67f.jpg"
                
            },
            {
                link: "https://www.start.gg/tournament/pico-plus-10-super-pico-or-something/details",
                imageSrc: "https://images.start.gg/images/tournament/812842/image-42847d3266ce122c517df1e71c1dd7e0.png"
            },
            {
                link: "https://www.start.gg/tournament/do-not-skate/details",
                imageSrc: "https://images.start.gg/images/tournament/811431/image-b160a9181846ac1c8d5d7491df46670a.png"
            }
    
        ];
        let currentIndex = 0; // Initialize current index
    
        let link = document.createElement("a");
        link.target = "_blank";
    
        let image = document.createElement("img");
    
        image.classList.add("calendarImg");
    
        link.appendChild(image);
        cell.appendChild(link);
    
        // Function to fade in/out the image and link
        function fadeInOut(element) {
            let opacity = 0;
            let increasing = true;
            let interval = setInterval(function() {
                if (increasing) {
                    opacity += 0.05;
                } else {
                    opacity -= 0.05;
                }
                element.style.opacity = opacity;
                if (opacity >= 1) {
                    increasing = false;
                    setTimeout(() => {
                        increasing = true;
                        updateLinkAndImage(); // Update link and image after fully visible
                    }, 2000); // Image and link will be fully visible for 2 seconds before fading out
                } else if (opacity <= 0) {
                    clearInterval(interval);
                    fadeInOut(element); // Restart the fading animation
                }
            }, 100); // Adjust the timing as needed
        }
    
        // Function to update the link and image
        function updateLinkAndImage() {
            link.href = events[currentIndex].link;
            image.src = events[currentIndex].imageSrc;
            currentIndex = (currentIndex + 1) % events.length; // Move to the next event, looping back to the beginning if necessary
        }
    
        updateLinkAndImage(); // Initially update link and image
        fadeInOut(image); // Start fade-in/out animation // Start cycling events

        // HoN4
        } else if (month === 7 && (date === 31) && year === 2025) {
        // Example link with image
        let link = document.createElement("a");
        link.href = "https://www.start.gg/tournament/house-of-nimbus-4/details";
        link.target = "_blank";
    
        let image = document.createElement("img");
        image.src = "https://images.start.gg/images/tournament/818519/image-0729d0e2842572c0f2abfbf1782487b2.jpg";
    
        image.classList.add("calendarImg");
    
    
        link.appendChild(image);
        cell.appendChild(link);

        // BOT
        } else if (month === 8 && (date === 7) && year === 2025) {
        // Example link with image
        let link = document.createElement("a");
        link.href = "https://www.start.gg/tournament/big-ohio-tournament/details";
        link.target = "_blank";
    
        let image = document.createElement("img");
        image.src = "../images/past-events/BOT.png";
    
        image.classList.add("calendarImg");

        // droto2
        } else if (month === 8 && (date === 13) && year === 2025) {
        // Example link with image
        let link = document.createElement("a");
        link.href = "https://www.start.gg/tournament/dream-rotation-2-winner-stays/details";
        link.target = "_blank";
    
        let image = document.createElement("img");
        image.src = "https://images.start.gg/images/tournament/801105/image-99439f35d3d1c5d1bc6c7a2bd7904487.png";
    
        image.classList.add("calendarImg");
    
    
        link.appendChild(image);
        cell.appendChild(link);

        // Mahtay Melee Summer 25 + GC14 + MM53
        } else if (month === 8 && (date === 20) && year === 2025) {
       const events = [
            {   
                link: "https://www.start.gg/tournament/mahtay-melee-summer-25-edition/details",
                imageSrc: "https://images.start.gg/images/tournament/810534/image-b0813696d50fa0323c0c80c5f16b25bf.jpg"
                
            },
            {
                link: "https://www.start.gg/tournament/gecko-cavern-14/details",
                imageSrc: "https://images.start.gg/images/tournament/826307/image-a030a32e1e230b7bb79568254756001c.png"
            },
            {
                link: "https://www.start.gg/tournament/mass-madness-53-fleeting-joy/details",
                imageSrc: "https://images.start.gg/images/tournament/819943/image-46188b97d89ea521645ca2e3d54065e3.png"
            },
            {
                link: "https://www.start.gg/tournament/umd-unity-re-enrollment/details",
                imageSrc: "https://images.start.gg/images/tournament/825411/image-4bfbc5a75be6e616f8134f29be56cc09.png"
            }
    
        ];
        let currentIndex = 0; // Initialize current index
    
        let link = document.createElement("a");
        link.target = "_blank";
    
        let image = document.createElement("img");
    
        image.classList.add("calendarImg");
    
        link.appendChild(image);
        cell.appendChild(link);
    
        // Function to fade in/out the image and link
        function fadeInOut(element) {
            let opacity = 0;
            let increasing = true;
            let interval = setInterval(function() {
                if (increasing) {
                    opacity += 0.05;
                } else {
                    opacity -= 0.05;
                }
                element.style.opacity = opacity;
                if (opacity >= 1) {
                    increasing = false;
                    setTimeout(() => {
                        increasing = true;
                        updateLinkAndImage(); // Update link and image after fully visible
                    }, 2000); // Image and link will be fully visible for 2 seconds before fading out
                } else if (opacity <= 0) {
                    clearInterval(interval);
                    fadeInOut(element); // Restart the fading animation
                }
            }, 100); // Adjust the timing as needed
        }
    
        // Function to update the link and image
        function updateLinkAndImage() {
            link.href = events[currentIndex].link;
            image.src = events[currentIndex].imageSrc;
            currentIndex = (currentIndex + 1) % events.length; // Move to the next event, looping back to the beginning if necessary
        }
    
        updateLinkAndImage(); // Initially update link and image
        fadeInOut(image); // Start fade-in/out animation // Start cycling events

        // go8 + UFI8 + NotlD6 + PP11 + HoN5
        } else if (month === 8 && (date === 27) && year === 2025) {
        const events = [
            {   
                link: "https://www.start.gg/tournament/get-outplayed-8/details",
                imageSrc: "https://images.start.gg/images/tournament/793044/image-4ba9fc219c496585c775ea3edc9d0ed5.png"
                
            },
            {
                link: "https://www.start.gg/tournament/unc-frozen-s-icebox-8-1/details",
                imageSrc: "https://images.start.gg/images/tournament/812456/image-4167347f6a5141a897344ee39c4e94f6.jpg"
            },
            {
                link: "https://www.start.gg/tournament/night-of-the-living-ded-6-melee-p/details",
                imageSrc: "https://images.start.gg/images/tournament/821585/image-dfa691353747d79e2d4964fdbe2c8182.png"
            },
            {
                link: "https://www.start.gg/tournament/pico-plus-11/details",
                imageSrc: "https://images.start.gg/images/tournament/825404/image-85414f173df05dafd8c4f3aabd1f645a.png"
            },
            {
                link: "https://www.start.gg/tournament/house-of-nimbus-5-1/details",
                imageSrc: "https://images.start.gg/images/tournament/846150/image-c52bd200fd54312928e2252d59dbb7d9.jpg"
            }
    
        ];
        let currentIndex = 0; // Initialize current index
    
        let link = document.createElement("a");
        link.target = "_blank";
    
        let image = document.createElement("img");
    
        image.classList.add("calendarImg");
    
        link.appendChild(image);
        cell.appendChild(link);
    
        // Function to fade in/out the image and link
        function fadeInOut(element) {
            let opacity = 0;
            let increasing = true;
            let interval = setInterval(function() {
                if (increasing) {
                    opacity += 0.05;
                } else {
                    opacity -= 0.05;
                }
                element.style.opacity = opacity;
                if (opacity >= 1) {
                    increasing = false;
                    setTimeout(() => {
                        increasing = true;
                        updateLinkAndImage(); // Update link and image after fully visible
                    }, 2000); // Image and link will be fully visible for 2 seconds before fading out
                } else if (opacity <= 0) {
                    clearInterval(interval);
                    fadeInOut(element); // Restart the fading animation
                }
            }, 100); // Adjust the timing as needed
        }
    
        // Function to update the link and image
        function updateLinkAndImage() {
            link.href = events[currentIndex].link;
            image.src = events[currentIndex].imageSrc;
            currentIndex = (currentIndex + 1) % events.length; // Move to the next event, looping back to the beginning if necessary
        }
    
        updateLinkAndImage(); // Initially update link and image
        fadeInOut(image); // Start fade-in/out animation // Start cycling events


        // KSM Sep
        } else if (month === 8 && (date === 28) && year === 2025) {
        let link = document.createElement("a");
        link.href = "https://www.start.gg/tournament/knockout-series-september-2025-monthly/details";
        link.target = "_blank";
    
        let image = document.createElement("img");
        image.src = "https://images.start.gg/images/tournament/832586/image-5b2aa7e1a9b8cdb16903edd0bab2221c.png";
    
        image.classList.add("calendarImg");
    
    
        link.appendChild(image);
        cell.appendChild(link);


        // G5itW Day 1
        } else if (month === 9 && (date === 3) && year === 2025) {
        // Example link with image
        let link = document.createElement("a");
        link.href = "https://www.start.gg/tournament/game-5-in-the-woods-1/details";
        link.target = "_blank";
    
        let image = document.createElement("img");
        image.src = "https://images.start.gg/images/tournament/812714/image-100a76ebb3235581eb4147e4b1af4ffe.png";
    
        image.classList.add("calendarImg");
    
    
        link.appendChild(image);
        cell.appendChild(link);

        // QBC 2025 + BMM2 + Ascension 2 + G5itW
        } else if (month === 9 && (date === 4) && year === 2025) {
        const events = [
            {   
                link: "https://www.start.gg/tournament/qu-becup-2025/details",
                imageSrc: "https://images.start.gg/images/tournament/798250/image-9559b71c9580d8937051eddb2aaa0917.png"
                
            },
            {
                link: "https://www.start.gg/tournament/the-big-money-monthly-2-400-pot-bonus/details",
                imageSrc: "https://images.start.gg/images/tournament/807108/image-0595a918d6b8ca84ec4b24e944867117.png"
            },
            {
                link: "https://www.start.gg/tournament/ascension-2-5/details",
                imageSrc: "https://images.start.gg/images/tournament/812007/image-c129195c1c32f585af14b10d0ecd3dcc.png"
            },
            {
                link: "https://www.start.gg/tournament/game-5-in-the-woods-1/details",
                imageSrc: "https://images.start.gg/images/tournament/812714/image-100a76ebb3235581eb4147e4b1af4ffe.png"
            }
    
        ];
        let currentIndex = 0; // Initialize current index
    
        let link = document.createElement("a");
        link.target = "_blank";
    
        let image = document.createElement("img");
    
        image.classList.add("calendarImg");
    
        link.appendChild(image);
        cell.appendChild(link);
    
        // Function to fade in/out the image and link
        function fadeInOut(element) {
            let opacity = 0;
            let increasing = true;
            let interval = setInterval(function() {
                if (increasing) {
                    opacity += 0.05;
                } else {
                    opacity -= 0.05;
                }
                element.style.opacity = opacity;
                if (opacity >= 1) {
                    increasing = false;
                    setTimeout(() => {
                        increasing = true;
                        updateLinkAndImage(); // Update link and image after fully visible
                    }, 2000); // Image and link will be fully visible for 2 seconds before fading out
                } else if (opacity <= 0) {
                    clearInterval(interval);
                    fadeInOut(element); // Restart the fading animation
                }
            }, 100); // Adjust the timing as needed
        }
    
        // Function to update the link and image
        function updateLinkAndImage() {
            link.href = events[currentIndex].link;
            image.src = events[currentIndex].imageSrc;
            currentIndex = (currentIndex + 1) % events.length; // Move to the next event, looping back to the beginning if necessary
        }
    
        updateLinkAndImage(); // Initially update link and image
        fadeInOut(image); // Start fade-in/out animation // Start cycling events

        // G5itW Day 3
        } else if (month === 9 && (date === 5) && year === 2025) {
        // Example link with image
        let link = document.createElement("a");
        link.href = "https://www.start.gg/tournament/game-5-in-the-woods-1/details";
        link.target = "_blank";
    
        let image = document.createElement("img");
        image.src = "https://images.start.gg/images/tournament/812714/image-100a76ebb3235581eb4147e4b1af4ffe.png";
    
        image.classList.add("calendarImg");
    
    
        link.appendChild(image);
        cell.appendChild(link);

        // UFI9 + CTC + PS13 + GC15
        } else if (month === 9 && (date === 18) && year === 2025) {
        const events = [
            {   
                link: "https://www.start.gg/tournament/unc-frozen-s-icebox-9-extra-spooky-edition/details",
                imageSrc: "https://images.start.gg/images/tournament/812447/image-9223a0a2f72e5eaef276653f179af67f.jpg"
                
            },
            {
                link: "https://www.start.gg/tournament/chase-the-crown-knox-esports-5/details",
                imageSrc: "https://images.start.gg/images/tournament/811395/image-864709aea60a570f3f39302a39f7b83b.png"
            },
            {
                link: "https://www.start.gg/tournament/chase-the-crown-knox-esports-5/details",
                imageSrc: "https://images.start.gg/images/tournament/811395/image-864709aea60a570f3f39302a39f7b83b.png"
            },
            {
                link: "https://www.start.gg/tournament/gecko-cavern-15/details",
                imageSrc: "https://images.start.gg/images/tournament/838740/image-87024be78df9a0eba675e69eb08089e8.png"
            }
    
        ];
        let currentIndex = 0; // Initialize current index
    
        let link = document.createElement("a");
        link.target = "_blank";
    
        let image = document.createElement("img");
    
        image.classList.add("calendarImg");
    
        link.appendChild(image);
        cell.appendChild(link);
    
        // Function to fade in/out the image and link
        function fadeInOut(element) {
            let opacity = 0;
            let increasing = true;
            let interval = setInterval(function() {
                if (increasing) {
                    opacity += 0.05;
                } else {
                    opacity -= 0.05;
                }
                element.style.opacity = opacity;
                if (opacity >= 1) {
                    increasing = false;
                    setTimeout(() => {
                        increasing = true;
                        updateLinkAndImage(); // Update link and image after fully visible
                    }, 2000); // Image and link will be fully visible for 2 seconds before fading out
                } else if (opacity <= 0) {
                    clearInterval(interval);
                    fadeInOut(element); // Restart the fading animation
                }
            }, 100); // Adjust the timing as needed
        }
    
        // Function to update the link and image
        function updateLinkAndImage() {
            link.href = events[currentIndex].link;
            image.src = events[currentIndex].imageSrc;
            currentIndex = (currentIndex + 1) % events.length; // Move to the next event, looping back to the beginning if necessary
        }
    
        updateLinkAndImage(); // Initially update link and image
        fadeInOut(image); // Start fade-in/out animation // Start cycling events

        // Into the Depths day 1 + Stock-tober
        } else if (month === 9 && (date === 24) && year === 2025){
        const events = [
            {   
                link: "https://www.start.gg/tournament/into-the-depths-1/details",
                imageSrc: "https://images.start.gg/images/tournament/804286/image-4ec5e7679af683144500ead153e819a8.png"
                
            },
            {
                link: "https://www.start.gg/tournament/stock-tober-melee-edition/details",
                imageSrc: "https://images.start.gg/images/tournament/834350/image-dfb7188d197f8f719d1d07b3e2dea5b3.jpg"
            }
    
        ];
        let currentIndex = 0; // Initialize current index
    
        let link = document.createElement("a");
        link.target = "_blank";
    
        let image = document.createElement("img");
    
        image.classList.add("calendarImg");
    
        link.appendChild(image);
        cell.appendChild(link);
    
        // Function to fade in/out the image and link
        function fadeInOut(element) {
            let opacity = 0;
            let increasing = true;
            let interval = setInterval(function() {
                if (increasing) {
                    opacity += 0.05;
                } else {
                    opacity -= 0.05;
                }
                element.style.opacity = opacity;
                if (opacity >= 1) {
                    increasing = false;
                    setTimeout(() => {
                        increasing = true;
                        updateLinkAndImage(); // Update link and image after fully visible
                    }, 2000); // Image and link will be fully visible for 2 seconds before fading out
                } else if (opacity <= 0) {
                    clearInterval(interval);
                    fadeInOut(element); // Restart the fading animation
                }
            }, 100); // Adjust the timing as needed
        }
    
        // Function to update the link and image
        function updateLinkAndImage() {
            link.href = events[currentIndex].link;
            image.src = events[currentIndex].imageSrc;
            currentIndex = (currentIndex + 1) % events.length; // Move to the next event, looping back to the beginning if necessary
        }
    
        updateLinkAndImage(); // Initially update link and image
        fadeInOut(image); // Start fade-in/out animation // Start cycling events
        

        // DST + RK2 + Into the depths day 2 + FG: C + PP12
        } else if (month === 9 && date === 25 && year === 2025){
        const events = [
            {   
                link: "https://www.start.gg/tournament/deep-space-tussle/details",
                imageSrc: "https://images.start.gg/images/tournament/815936/image-ad01466e083a7c957ab5113a42b5d00f.png"
                
            },
            {
                link: "https://www.start.gg/tournament/rat-kings-2/details",
                imageSrc: "https://images.start.gg/images/tournament/817217/image-c97bbc06a38a79c032e6369d519f565c.png"
            },
            {
                link: "https://www.start.gg/tournament/into-the-depths-1/details",
                imageSrc: "https://images.start.gg/images/tournament/804286/image-4ec5e7679af683144500ead153e819a8.png"
            },
            {
                link: "https://www.start.gg/tournament/fighting-ghosts-carried/details",
                imageSrc: "https://images.start.gg/images/tournament/821399/image-be7efee5a380a0bef6aa896276d88d20.png"
            },
            {
                link: "https://www.start.gg/tournament/pico-plus-12-1/details",
                imageSrc: "https://images.start.gg/images/tournament/837412/image-26941b8c04d97120ef6bc1f9e5527cf9.png"
            }
    
        ];
        let currentIndex = 0; // Initialize current index
    
        let link = document.createElement("a");
        link.target = "_blank";
    
        let image = document.createElement("img");
    
        image.classList.add("calendarImg");
    
        link.appendChild(image);
        cell.appendChild(link);
    
        // Function to fade in/out the image and link
        function fadeInOut(element) {
            let opacity = 0;
            let increasing = true;
            let interval = setInterval(function() {
                if (increasing) {
                    opacity += 0.05;
                } else {
                    opacity -= 0.05;
                }
                element.style.opacity = opacity;
                if (opacity >= 1) {
                    increasing = false;
                    setTimeout(() => {
                        increasing = true;
                        updateLinkAndImage(); // Update link and image after fully visible
                    }, 2000); // Image and link will be fully visible for 2 seconds before fading out
                } else if (opacity <= 0) {
                    clearInterval(interval);
                    fadeInOut(element); // Restart the fading animation
                }
            }, 100); // Adjust the timing as needed
        }
    
        // Function to update the link and image
        function updateLinkAndImage() {
            link.href = events[currentIndex].link;
            image.src = events[currentIndex].imageSrc;
            currentIndex = (currentIndex + 1) % events.length; // Move to the next event, looping back to the beginning if necessary
        }
    
        updateLinkAndImage(); // Initially update link and image
        fadeInOut(image); // Start fade-in/out animation // Start cycling events
        
        //Into the Depths day 3 + Bristol's Basement 
        } else if (month === 9 && (date === 26) && year === 2025){
        const events = [
            {   
                link: "https://www.start.gg/tournament/into-the-depths-1/detail",
                imageSrc: "https://images.start.gg/images/tournament/804286/image-4ec5e7679af683144500ead153e819a8.png"
                
            },
            {
                link: "https://www.start.gg/tournament/bristol-s-basement-night-of-100-frights/details",
                imageSrc: "https://images.start.gg/images/tournament/833921/image-780221283eff8062caca216c7e8ca4d3.jpg"
            }
    
        ];
        let currentIndex = 0; // Initialize current index
    
        let link = document.createElement("a");
        link.target = "_blank";
    
        let image = document.createElement("img");
    
        image.classList.add("calendarImg");
    
        link.appendChild(image);
        cell.appendChild(link);
    
        // Function to fade in/out the image and link
        function fadeInOut(element) {
            let opacity = 0;
            let increasing = true;
            let interval = setInterval(function() {
                if (increasing) {
                    opacity += 0.05;
                } else {
                    opacity -= 0.05;
                }
                element.style.opacity = opacity;
                if (opacity >= 1) {
                    increasing = false;
                    setTimeout(() => {
                        increasing = true;
                        updateLinkAndImage(); // Update link and image after fully visible
                    }, 2000); // Image and link will be fully visible for 2 seconds before fading out
                } else if (opacity <= 0) {
                    clearInterval(interval);
                    fadeInOut(element); // Restart the fading animation
                }
            }, 100); // Adjust the timing as needed
        }
    
        // Function to update the link and image
        function updateLinkAndImage() {
            link.href = events[currentIndex].link;
            image.src = events[currentIndex].imageSrc;
            currentIndex = (currentIndex + 1) % events.length; // Move to the next event, looping back to the beginning if necessary
        }
    
        updateLinkAndImage(); // Initially update link and image
        fadeInOut(image); // Start fade-in/out animation // Start cycling events
    
    
        link.appendChild(image);
        cell.appendChild(link);

        // Somino Noctem Day 1
        } else if ((month === 9 && date === 31 && year === 2025)){
        // Example link with image
        let link = document.createElement("a");
        link.href = "https://www.start.gg/tournament/somnio-noctem/details";
        link.target = "_blank";
    
        let image = document.createElement("img");
        image.src = "https://images.start.gg/images/tournament/799120/image-95004b80bfa048142c0f77fde12a5868.png";
    
        image.classList.add("calendarImg");
    
    
        link.appendChild(image);
        cell.appendChild(link);

        // Somino Noctem Day 2 + Bird House 14 + CoB6 + KSS5 Day 1 + SCP:Nov
        } else if (month === 10 && (date === 1) && year === 2025) {
        const events = [
            {   
                link: "https://www.start.gg/tournament/somnio-noctem/details",
                imageSrc: "https://images.start.gg/images/tournament/799120/image-95004b80bfa048142c0f77fde12a5868.png"
                
            },
            {
                link: "https://www.start.gg/tournament/the-bird-house-14-winter-formal/details",
                imageSrc: "https://images.start.gg/images/tournament/816692/image-3d9f142e14300ece28aff766c1734c25.png"
            },
            {
                link: "https://www.start.gg/tournament/condo-of-blood-6-the-nintendo-switching-hour/details",
                imageSrc: "https://images.start.gg/images/tournament/824855/image-baac4749e20688a618512441b58ac0f4.png"
            },
            {
                link: "https://www.start.gg/tournament/kayla-s-spooky-smash-5/details",
                imageSrc: "https://images.start.gg/images/tournament/788318/image-8f4074cfd856e428f0d6fda2cdc4c828.png"
            },
            {
                link: "https://www.start.gg/tournament/big-baton-rouge-charity-tournament/details",
                imageSrc: "https://raw.githubusercontent.com/FunctionDJ/project-plus-assets/refs/heads/master/logos/v3/short.png"
            },
            {
                link: "https://www.start.gg/tournament/smash-cafe-plus-the-november-monthly-21/details",
                imageSrc: "https://images.start.gg/images/tournament/845928/image-0c97ad0250afdc7155c07de667cfe144.png"
            }
    
        ];
        let currentIndex = 0; // Initialize current index
    
        let link = document.createElement("a");
        link.target = "_blank";
    
        let image = document.createElement("img");
    
        image.classList.add("calendarImg");
    
        link.appendChild(image);
        cell.appendChild(link);
    
        // Function to fade in/out the image and link
        function fadeInOut(element) {
            let opacity = 0;
            let increasing = true;
            let interval = setInterval(function() {
                if (increasing) {
                    opacity += 0.05;
                } else {
                    opacity -= 0.05;
                }
                element.style.opacity = opacity;
                if (opacity >= 1) {
                    increasing = false;
                    setTimeout(() => {
                        increasing = true;
                        updateLinkAndImage(); // Update link and image after fully visible
                    }, 2000); // Image and link will be fully visible for 2 seconds before fading out
                } else if (opacity <= 0) {
                    clearInterval(interval);
                    fadeInOut(element); // Restart the fading animation
                }
            }, 100); // Adjust the timing as needed
        }
    
        // Function to update the link and image
        function updateLinkAndImage() {
            link.href = events[currentIndex].link;
            image.src = events[currentIndex].imageSrc;
            currentIndex = (currentIndex + 1) % events.length; // Move to the next event, looping back to the beginning if necessary
        }
    
        updateLinkAndImage(); // Initially update link and image
        fadeInOut(image); // Start fade-in/out animation // Start cycling events


        // Somino Noctem Day 3 + PortlandPlus, PSMIII + KSS 5 Day 2
        } else if (month === 10 && (date === 2) && year === 2025) {
        const events = [
            {   
                link: "https://www.start.gg/tournament/somnio-noctem/details",
                imageSrc: "https://images.start.gg/images/tournament/799120/image-95004b80bfa048142c0f77fde12a5868.png"
                
            },
            {   
                link: "https://www.start.gg/tournament/portland/details",
                imageSrc: "https://images.start.gg/images/tournament/829691/image-cf934fa895474d7025ccbf5a5048cfee.jpg"
                
            },
            {
                link: "https://www.start.gg/tournament/pope-s-sunday-mass-iii/details",
                imageSrc: "https://images.start.gg/images/tournament/811444/image-98fcf0f97369a7d36df9676a9f5f561f.png"
            },
            {
                link: "https://www.start.gg/tournament/kayla-s-spooky-smash-5/details",
                imageSrc: "https://images.start.gg/images/tournament/788318/image-8f4074cfd856e428f0d6fda2cdc4c828.png"
            }
    
        ];
        let currentIndex = 0; // Initialize current index
    
        let link = document.createElement("a");
        link.target = "_blank";
    
        let image = document.createElement("img");
    
        image.classList.add("calendarImg");
    
        link.appendChild(image);
        cell.appendChild(link);
    
        // Function to fade in/out the image and link
        function fadeInOut(element) {
            let opacity = 0;
            let increasing = true;
            let interval = setInterval(function() {
                if (increasing) {
                    opacity += 0.05;
                } else {
                    opacity -= 0.05;
                }
                element.style.opacity = opacity;
                if (opacity >= 1) {
                    increasing = false;
                    setTimeout(() => {
                        increasing = true;
                        updateLinkAndImage(); // Update link and image after fully visible
                    }, 2000); // Image and link will be fully visible for 2 seconds before fading out
                } else if (opacity <= 0) {
                    clearInterval(interval);
                    fadeInOut(element); // Restart the fading animation
                }
            }, 100); // Adjust the timing as needed
        }
    
        // Function to update the link and image
        function updateLinkAndImage() {
            link.href = events[currentIndex].link;
            image.src = events[currentIndex].imageSrc;
            currentIndex = (currentIndex + 1) % events.length; // Move to the next event, looping back to the beginning if necessary
        }
    
        updateLinkAndImage(); // Initially update link and image
        fadeInOut(image); // Start fade-in/out animation // Start cycling events

        // NotLD7 + TTT2025 + 20MD + HoN6
        } else if (month === 9 && date === 8 && year === 2025){
        const events = [
            {   
                link: "https://www.start.gg/tournament/night-of-the-living-ded-7-melee-p/details",
                imageSrc: "https://images.start.gg/images/tournament/834279/image-60b5f58c889ef1904f09961eb67e83aa.png"
                
            },
            {
                link: "https://www.start.gg/tournament/triple-tactics-talent-2025/details",
                imageSrc: "https://images.start.gg/images/tournament/839343/image-4d4e9c8aa4d0c31a02a946881882bf28.png"
            },
            {
                link: "https://www.start.gg/tournament/20md/details",
                imageSrc: "https://images.start.gg/images/tournament/847187/image-17329736fb66bc71a6471bd1f710172a.png"
            },
            {
                link: "https://www.start.gg/tournament/house-of-nimbus-6/details",
                imageSrc: "https://images.start.gg/images/tournament/846150/image-c52bd200fd54312928e2252d59dbb7d9.jpg"
            }
    
        ];
        let currentIndex = 0; // Initialize current index
    
        let link = document.createElement("a");
        link.target = "_blank";
    
        let image = document.createElement("img");
    
        image.classList.add("calendarImg");
    
        link.appendChild(image);
        cell.appendChild(link);
    
        // Function to fade in/out the image and link
        function fadeInOut(element) {
            let opacity = 0;
            let increasing = true;
            let interval = setInterval(function() {
                if (increasing) {
                    opacity += 0.05;
                } else {
                    opacity -= 0.05;
                }
                element.style.opacity = opacity;
                if (opacity >= 1) {
                    increasing = false;
                    setTimeout(() => {
                        increasing = true;
                        updateLinkAndImage(); // Update link and image after fully visible
                    }, 2000); // Image and link will be fully visible for 2 seconds before fading out
                } else if (opacity <= 0) {
                    clearInterval(interval);
                    fadeInOut(element); // Restart the fading animation
                }
            }, 100); // Adjust the timing as needed
        }
    
        // Function to update the link and image
        function updateLinkAndImage() {
            link.href = events[currentIndex].link;
            image.src = events[currentIndex].imageSrc;
            currentIndex = (currentIndex + 1) % events.length; // Move to the next event, looping back to the beginning if necessary
        }
    
        updateLinkAndImage(); // Initially update link and image
        fadeInOut(image); // Start fade-in/out animation // Start cycling events

        // SMYM 25 + SOAR 2
        } else if (month === 10 && (date === 15) && year === 2025) {
        const events = [
            {   
                link: "https://www.start.gg/tournament/show-me-your-moves-25/details",
                imageSrc: "https://images.start.gg/images/tournament/784887/image-19e0f4dffa7bc1c0d7a0579be64d4879.jpg"
                
            },
            {
                link: "https://www.start.gg/tournament/soar-2-1/details",
                imageSrc: "https://images.start.gg/images/tournament/814277/image-e3d84f3e973a9d0868bd2e56e5265815.png"
            }
    
        ];
        let currentIndex = 0; // Initialize current index
    
        let link = document.createElement("a");
        link.target = "_blank";
    
        let image = document.createElement("img");
    
        image.classList.add("calendarImg");
    
        link.appendChild(image);
        cell.appendChild(link);
    
        // Function to fade in/out the image and link
        function fadeInOut(element) {
            let opacity = 0;
            let increasing = true;
            let interval = setInterval(function() {
                if (increasing) {
                    opacity += 0.05;
                } else {
                    opacity -= 0.05;
                }
                element.style.opacity = opacity;
                if (opacity >= 1) {
                    increasing = false;
                    setTimeout(() => {
                        increasing = true;
                        updateLinkAndImage(); // Update link and image after fully visible
                    }, 2000); // Image and link will be fully visible for 2 seconds before fading out
                } else if (opacity <= 0) {
                    clearInterval(interval);
                    fadeInOut(element); // Restart the fading animation
                }
            }, 100); // Adjust the timing as needed
        }
    
        // Function to update the link and image
        function updateLinkAndImage() {
            link.href = events[currentIndex].link;
            image.src = events[currentIndex].imageSrc;
            currentIndex = (currentIndex + 1) % events.length; // Move to the next event, looping back to the beginning if necessary
        }
    
        updateLinkAndImage(); // Initially update link and image
        fadeInOut(image); // Start fade-in/out animation // Start cycling events

        // One More Game Day 1 + GC16 + PP13
        } else if (month === 10 && (date === 22) && year === 2025) {
        const events = [
            {   
                link: "https://www.start.gg/tournament/one-more-game-2/details",
                imageSrc: "https://images.start.gg/images/tournament/795071/image-177b8c8cdfe8c8e9c9cc3e6a939f3568.png"
                
            },
            {
                link: "https://www.start.gg/tournament/gecko-cavern-16/details",
                imageSrc: "https://images.start.gg/images/tournament/849765/image-58355caaa5d49290f5f3ec754e55b461.png"
            },
            {
                link: "https://www.start.gg/tournament/pico-plus-13/details",
                imageSrc: "https://images.start.gg/images/tournament/849645/image-d77fccdb1e86eb7bb98bc751e70326ba.png"
            }
    
        ];
        let currentIndex = 0; // Initialize current index
    
        let link = document.createElement("a");
        link.target = "_blank";
    
        let image = document.createElement("img");
    
        image.classList.add("calendarImg");
    
        link.appendChild(image);
        cell.appendChild(link);
    
        // Function to fade in/out the image and link
        function fadeInOut(element) {
            let opacity = 0;
            let increasing = true;
            let interval = setInterval(function() {
                if (increasing) {
                    opacity += 0.05;
                } else {
                    opacity -= 0.05;
                }
                element.style.opacity = opacity;
                if (opacity >= 1) {
                    increasing = false;
                    setTimeout(() => {
                        increasing = true;
                        updateLinkAndImage(); // Update link and image after fully visible
                    }, 2000); // Image and link will be fully visible for 2 seconds before fading out
                } else if (opacity <= 0) {
                    clearInterval(interval);
                    fadeInOut(element); // Restart the fading animation
                }
            }, 100); // Adjust the timing as needed
        }
    
        // Function to update the link and image
        function updateLinkAndImage() {
            link.href = events[currentIndex].link;
            image.src = events[currentIndex].imageSrc;
            currentIndex = (currentIndex + 1) % events.length; // Move to the next event, looping back to the beginning if necessary
        }
    
        updateLinkAndImage(); // Initially update link and image
        fadeInOut(image); // Start fade-in/out animation // Start cycling events

        // One More Game day 2
        } else if (month === 10 && (date === 23) && year === 2025) {
        // Example link with image
        let link = document.createElement("a");
        link.href = "https://www.start.gg/tournament/one-more-game-2/details";
        link.target = "_blank";
    
        let image = document.createElement("img");
        image.src = "https://images.start.gg/images/tournament/795071/image-177b8c8cdfe8c8e9c9cc3e6a939f3568.png";
    
        image.classList.add("calendarImg");
    
    
        link.appendChild(image);
        cell.appendChild(link);

        // Pissmas 6
        } else if (month === 11 && (date === 5 || date === 7) && year === 2025) {
        // Example link with image
        let link = document.createElement("a");
        link.href = "https://www.start.gg/tournament/pissmas-6/details";
        link.target = "_blank";
    
        let image = document.createElement("img");
        image.src = "https://images.start.gg/images/tournament/825531/image-1121c89e50d3f48692a4aeccafbd882d.png";
    
        image.classList.add("calendarImg");
    
    
        link.appendChild(image);
        cell.appendChild(link);

        // Pissmas 6 day 2 + PP14 + GOD2 + SCP Dec
        } else if (month === 11 && date === 6 && year === 2025) {    
        const events = [
            {   
                link: "https://www.start.gg/tournament/pissmas-6/details",
                imageSrc: "https://images.start.gg/images/tournament/825531/image-1121c89e50d3f48692a4aeccafbd882d.png"
                
            },
            {
                link: "https://www.start.gg/tournament/pico-plus-14-1/details",
                imageSrc: "https://images.start.gg/images/tournament/856070/image-44ac759c304c4e20d87b06a91e44f251.png"
            },
            {
                link: "https://www.start.gg/tournament/the-good-ol-days-2-a-dirtboy-christmas-special/details",
                imageSrc: "https://images.start.gg/images/tournament/852046/image-326481f986ae50a8bf3426e999ff1a53.png"
            },
            {
                link: "https://www.start.gg/tournament/smash-cafe-plus-the-december-monthly-22/details",
                imageSrc: "https://images.start.gg/images/tournament/857860/image-3a47ae56f0572834cadeeb56270a14df.png"
            }
    
    
        ];
        let currentIndex = 0; // Initialize current index
    
        let link = document.createElement("a");
        link.target = "_blank";
    
        let image = document.createElement("img");
    
        image.classList.add("calendarImg");
    
        link.appendChild(image);
        cell.appendChild(link);
    
        // Function to fade in/out the image and link
        function fadeInOut(element) {
            let opacity = 0;
            let increasing = true;
            let interval = setInterval(function() {
                if (increasing) {
                    opacity += 0.05;
                } else {
                    opacity -= 0.05;
                }
                element.style.opacity = opacity;
                if (opacity >= 1) {
                    increasing = false;
                    setTimeout(() => {
                        increasing = true;
                        updateLinkAndImage(); // Update link and image after fully visible
                    }, 2000); // Image and link will be fully visible for 2 seconds before fading out
                } else if (opacity <= 0) {
                    clearInterval(interval);
                    fadeInOut(element); // Restart the fading animation
                }
            }, 100); // Adjust the timing as needed
        }
    
        // Function to update the link and image
        function updateLinkAndImage() {
            link.href = events[currentIndex].link;
            image.src = events[currentIndex].imageSrc;
            currentIndex = (currentIndex + 1) % events.length; // Move to the next event, looping back to the beginning if necessary
        }
    
        updateLinkAndImage(); // Initially update link and image
        fadeInOut(image); // Start fade-in/out animation // Start cycling events

        // GSO 2025 + UFI10
        } else if (month === 11 && date === 13 && year === 2025) {    
        const events = [
            {   
                link: "https://www.start.gg/tournament/get-sliced-on-fall-2025/details",
                imageSrc: "https://images.start.gg/images/tournament/782485/image-bd6e5058d3c1c346dd915bf841431aea.png"
                
            },
            {
                link: "https://www.start.gg/tournament/unc-frozen-s-icebox-10-holiday-edition/details",
                imageSrc: "https://images.start.gg/images/tournament/846003/image-08d7caac8751cec6c714feea250e063c.jpg"
            }
    
        ];
        let currentIndex = 0; // Initialize current index
    
        let link = document.createElement("a");
        link.target = "_blank";
    
        let image = document.createElement("img");
    
        image.classList.add("calendarImg");
    
        link.appendChild(image);
        cell.appendChild(link);
    
        // Function to fade in/out the image and link
        function fadeInOut(element) {
            let opacity = 0;
            let increasing = true;
            let interval = setInterval(function() {
                if (increasing) {
                    opacity += 0.05;
                } else {
                    opacity -= 0.05;
                }
                element.style.opacity = opacity;
                if (opacity >= 1) {
                    increasing = false;
                    setTimeout(() => {
                        increasing = true;
                        updateLinkAndImage(); // Update link and image after fully visible
                    }, 2000); // Image and link will be fully visible for 2 seconds before fading out
                } else if (opacity <= 0) {
                    clearInterval(interval);
                    fadeInOut(element); // Restart the fading animation
                }
            }, 100); // Adjust the timing as needed
        }
    
        // Function to update the link and image
        function updateLinkAndImage() {
            link.href = events[currentIndex].link;
            image.src = events[currentIndex].imageSrc;
            currentIndex = (currentIndex + 1) % events.length; // Move to the next event, looping back to the beginning if necessary
        }
    
        updateLinkAndImage(); // Initially update link and image
        fadeInOut(image); // Start fade-in/out animation // Start cycling events


        // TPS Finale :(
        } else if (month === 11 && date === 19 && year === 2025) {    
        // Example link with image
        let link = document.createElement("a");
        link.href = "https://www.start.gg/tournament/tripoint-smash-the-finale/details";
        link.target = "_blank";
    
        let image = document.createElement("img");
        image.src = "https://images.start.gg/images/tournament/850279/image-11a290228f126497d1ee4b5d1ec42cd3.png";
    
        image.classList.add("calendarImg");
    
    
        link.appendChild(image);
        cell.appendChild(link);

        // GC17 + Mass Madness 55
        } else if (month === 11 && date === 20 && year === 2025) {    
        const events = [
            {   
                link: "https://www.start.gg/tournament/gecko-cavern-17-the-icebreaker/details",
                imageSrc: "https://images.start.gg/images/tournament/859955/image-722c29883df14a3034c593f28fc02521.pngg"
                
            },
            {
                link: "https://www.start.gg/tournament/mass-madness-55-and-the-truth-will-set-you-free/details",
                imageSrc: "https://images.start.gg/images/tournament/836818/image-4c4350376f95fae2c170a91413f63f14.jpg"
            }
    
        ];
        let currentIndex = 0; // Initialize current index
    
        let link = document.createElement("a");
        link.target = "_blank";
    
        let image = document.createElement("img");
    
        image.classList.add("calendarImg");
    
        link.appendChild(image);
        cell.appendChild(link);
    
        // Function to fade in/out the image and link
        function fadeInOut(element) {
            let opacity = 0;
            let increasing = true;
            let interval = setInterval(function() {
                if (increasing) {
                    opacity += 0.05;
                } else {
                    opacity -= 0.05;
                }
                element.style.opacity = opacity;
                if (opacity >= 1) {
                    increasing = false;
                    setTimeout(() => {
                        increasing = true;
                        updateLinkAndImage(); // Update link and image after fully visible
                    }, 2000); // Image and link will be fully visible for 2 seconds before fading out
                } else if (opacity <= 0) {
                    clearInterval(interval);
                    fadeInOut(element); // Restart the fading animation
                }
            }, 100); // Adjust the timing as needed
        }
    
        // Function to update the link and image
        function updateLinkAndImage() {
            link.href = events[currentIndex].link;
            image.src = events[currentIndex].imageSrc;
            currentIndex = (currentIndex + 1) % events.length; // Move to the next event, looping back to the beginning if necessary
        }
    
        updateLinkAndImage(); // Initially update link and image
        fadeInOut(image); // Start fade-in/out animation // Start cycling events

        // Blitzmas
        } else if (month === 11 && date === 27 && year === 2025) {    
        // Example link with image
        let link = document.createElement("a");
        link.href = "https://www.start.gg/tournament/the-night-before-blitzmas/details";
        link.target = "_blank";
    
        let image = document.createElement("img");
        image.src = "https://images.start.gg/images/tournament/853984/image-d40a2eb4efd830f1825e62c6391506be.jpg";
    
        image.classList.add("calendarImg");
    
    
        link.appendChild(image);
        cell.appendChild(link);

        // BL9
        } else if ((month === 0 && date === 10 && year === 2026) || (month === 0 && date === 11 && year === 2026)) {    
        // Example link with image
        let link = document.createElement("a");
        link.href = "https://www.start.gg/tournament/blacklisted-9-blacklisted-forever/details";
        link.target = "_blank";
    
        let image = document.createElement("img");
        image.src = "https://images.start.gg/images/tournament/681909/image-c043212981c638b1eaf4cef1bb2c5363.png";
    
        image.classList.add("calendarImg");
    
    
        link.appendChild(image);
        cell.appendChild(link);

        // Solarpowered Blackout
        } else if ((month === 0 && date === 17 && year === 2026)) {    
        // Example link with image
        let link = document.createElement("a");
        link.href = "https://www.start.gg/tournament/solarpowered-blackout/details";
        link.target = "_blank";
    
        let image = document.createElement("img");
        image.src = "https://images.start.gg/images/tournament/863219/image-d4257a618b9f740a0407de02fea07eb9.jpg";
    
        image.classList.add("calendarImg");
    
    
        link.appendChild(image);
        cell.appendChild(link);

        // Get Outplayed 9 + MM Winter '26
        } else if ((month === 0 && date === 31 && year === 2026)) {    
        const events = [
            {   
                link: "https://www.start.gg/tournament/get-outplayed-9/details",
                imageSrc: "https://images.start.gg/images/tournament/864902/image-68b7df2019e573705b541192fad00a3b.png"
                
            },
            {
                link: "https://www.start.gg/tournament/mahtay-melee-winter-26-edition/details",
                imageSrc: "https://images.start.gg/images/tournament/863499/image-45acb75418444796356138f20b59b114.png"
            }
    
        ];
        let currentIndex = 0; // Initialize current index
    
        let link = document.createElement("a");
        link.target = "_blank";
    
        let image = document.createElement("img");
    
        image.classList.add("calendarImg");
    
        link.appendChild(image);
        cell.appendChild(link);
    
        // Function to fade in/out the image and link
        function fadeInOut(element) {
            let opacity = 0;
            let increasing = true;
            let interval = setInterval(function() {
                if (increasing) {
                    opacity += 0.05;
                } else {
                    opacity -= 0.05;
                }
                element.style.opacity = opacity;
                if (opacity >= 1) {
                    increasing = false;
                    setTimeout(() => {
                        increasing = true;
                        updateLinkAndImage(); // Update link and image after fully visible
                    }, 2000); // Image and link will be fully visible for 2 seconds before fading out
                } else if (opacity <= 0) {
                    clearInterval(interval);
                    fadeInOut(element); // Restart the fading animation
                }
            }, 100); // Adjust the timing as needed
        }
    
        // Function to update the link and image
        function updateLinkAndImage() {
            link.href = events[currentIndex].link;
            image.src = events[currentIndex].imageSrc;
            currentIndex = (currentIndex + 1) % events.length; // Move to the next event, looping back to the beginning if necessary
        }
    
        updateLinkAndImage(); // Initially update link and image
        fadeInOut(image); // Start fade-in/out animation // Start cycling events

        //PSM IV
        } else if (month === 1 && date === 1 && year === 2026) {    
        // Example link with image
        let link = document.createElement("a");
        link.href = "https://www.start.gg/tournament/pope-s-sunday-mass-iv/details";
        link.target = "_blank";
    
        let image = document.createElement("img");
        image.src = "https://images.start.gg/images/tournament/847360/image-d9bf248b1dbeca6ecc7cca0a8ac107b3.png";
    
        image.classList.add("calendarImg");
    
    
        link.appendChild(image);
        cell.appendChild(link);

        // PP16 + King's Ransom 2
        } else if (month === 1 && date === 7 && year === 2026) {    
        const events = [
            {   
                link: "https://www.start.gg/tournament/pico-plus-16/details",
                imageSrc: "https://images.start.gg/images/tournament/874014/image-4b8b29a313fa02abe178bc7edbda0922.png"
                
            },
            {
                link: "https://www.start.gg/tournament/king-s-ransom-2/details",
                imageSrc: "https://images.start.gg/images/tournament/807112/image-629ebbd7c0afcc7f7993a88b00c12cc0.png"
            }
    
        ];
        let currentIndex = 0; // Initialize current index
    
        let link = document.createElement("a");
        link.target = "_blank";
    
        let image = document.createElement("img");
    
        image.classList.add("calendarImg");
    
        link.appendChild(image);
        cell.appendChild(link);
    
        // Function to fade in/out the image and link
        function fadeInOut(element) {
            let opacity = 0;
            let increasing = true;
            let interval = setInterval(function() {
                if (increasing) {
                    opacity += 0.05;
                } else {
                    opacity -= 0.05;
                }
                element.style.opacity = opacity;
                if (opacity >= 1) {
                    increasing = false;
                    setTimeout(() => {
                        increasing = true;
                        updateLinkAndImage(); // Update link and image after fully visible
                    }, 2000); // Image and link will be fully visible for 2 seconds before fading out
                } else if (opacity <= 0) {
                    clearInterval(interval);
                    fadeInOut(element); // Restart the fading animation
                }
            }, 100); // Adjust the timing as needed
        }
    
        // Function to update the link and image
        function updateLinkAndImage() {
            link.href = events[currentIndex].link;
            image.src = events[currentIndex].imageSrc;
            currentIndex = (currentIndex + 1) % events.length; // Move to the next event, looping back to the beginning if necessary
        }
    
        updateLinkAndImage(); // Initially update link and image
        fadeInOut(image); // Start fade-in/out animation // Start cycling events

        // UFI 11
        } else if (month === 1 && date === 14 && year === 2026) {    
        // Example link with image
        let link = document.createElement("a");
        link.href = "https://www.start.gg/tournament/unc-frozen-s-icebox-11-lovey-dubby-edition/details";
        link.target = "_blank";
    
        let image = document.createElement("img");
        image.src = "https://images.start.gg/images/tournament/872259/image-697d83b9de5bb9f9afd9c4d52d2f48cb.jpg";
    
        image.classList.add("calendarImg");
    
    
        link.appendChild(image);
        cell.appendChild(link);

        // Exodus 2026
        } else if (month === 1 && date === 14 && year === 2026) {    
        // Example link with image
        let link = document.createElement("a");
        link.href = "https://www.start.gg/tournament/exodus-2026/details";
        link.target = "_blank";
    
        let image = document.createElement("img");
        image.src = "https://images.start.gg/images/tournament/873548/image-4d1423b87f343c812d7b54bf5b9b62c6.png";
    
        image.classList.add("calendarImg");
    
    
        link.appendChild(image);
        cell.appendChild(link);


        // SOTT 11 + CoL AxB + Chamberi
        } else if (month === 1 && date === 21 && year === 2026) {    
        const events = [
            {   
                link: "https://www.start.gg/tournament/smash-of-the-titans-11-1/details",
                imageSrc: "https://images.start.gg/images/tournament/841162/image-725756f044cd841d6402cb75cff7c2c3.jpg"
                
            },
            {
                link: "https://www.start.gg/tournament/condo-of-love-ares-x-blitz/details",
                imageSrc: "https://images.start.gg/images/tournament/876164/image-973ccad4af779392912d3820ca7efb14.jpg"
            },
            {
                link: "https://www.start.gg/tournament/chamberi-champions-5-la-enfermedad-del-lomo/details",
                imageSrc: "https://images.start.gg/images/tournament/866192/image-3f3e6a563981bd53b7818ef7dd6e9a67.png"
            }
    
        ];
        let currentIndex = 0; // Initialize current index
    
        let link = document.createElement("a");
        link.target = "_blank";
    
        let image = document.createElement("img");
    
        image.classList.add("calendarImg");
    
        link.appendChild(image);
        cell.appendChild(link);
    
        // Function to fade in/out the image and link
        function fadeInOut(element) {
            let opacity = 0;
            let increasing = true;
            let interval = setInterval(function() {
                if (increasing) {
                    opacity += 0.05;
                } else {
                    opacity -= 0.05;
                }
                element.style.opacity = opacity;
                if (opacity >= 1) {
                    increasing = false;
                    setTimeout(() => {
                        increasing = true;
                        updateLinkAndImage(); // Update link and image after fully visible
                    }, 2000); // Image and link will be fully visible for 2 seconds before fading out
                } else if (opacity <= 0) {
                    clearInterval(interval);
                    fadeInOut(element); // Restart the fading animation
                }
            }, 100); // Adjust the timing as needed
        }
    
        // Function to update the link and image
        function updateLinkAndImage() {
            link.href = events[currentIndex].link;
            image.src = events[currentIndex].imageSrc;
            currentIndex = (currentIndex + 1) % events.length; // Move to the next event, looping back to the beginning if necessary
        }
    
        updateLinkAndImage(); // Initially update link and image
        fadeInOut(image); // Start fade-in/out animation // Start cycling events


        // Flash Flood + Plus House
        } else if (month === 1 && date === 28 && year === 2026) {    
        const events = [
            {   
                link: "https://www.start.gg/tournament/flash-flood/details",
                imageSrc: "https://images.start.gg/images/tournament/813787/image-12969cc9155ec8f9247a30aefe8d1120.png"
                
            },
            {
                link: "https://www.start.gg/tournament/plus-house/details",
                imageSrc: "https://images.start.gg/images/tournament/874264/image-0269f85a2b42ff0f5fb1afb0df394e6b.png"
            }
    
        ];
        let currentIndex = 0; // Initialize current index
    
        let link = document.createElement("a");
        link.target = "_blank";
    
        let image = document.createElement("img");
    
        image.classList.add("calendarImg");
    
        link.appendChild(image);
        cell.appendChild(link);
    
        // Function to fade in/out the image and link
        function fadeInOut(element) {
            let opacity = 0;
            let increasing = true;
            let interval = setInterval(function() {
                if (increasing) {
                    opacity += 0.05;
                } else {
                    opacity -= 0.05;
                }
                element.style.opacity = opacity;
                if (opacity >= 1) {
                    increasing = false;
                    setTimeout(() => {
                        increasing = true;
                        updateLinkAndImage(); // Update link and image after fully visible
                    }, 2000); // Image and link will be fully visible for 2 seconds before fading out
                } else if (opacity <= 0) {
                    clearInterval(interval);
                    fadeInOut(element); // Restart the fading animation
                }
            }, 100); // Adjust the timing as needed
        }
    
        // Function to update the link and image
        function updateLinkAndImage() {
            link.href = events[currentIndex].link;
            image.src = events[currentIndex].imageSrc;
            currentIndex = (currentIndex + 1) % events.length; // Move to the next event, looping back to the beginning if necessary
        }
    
        updateLinkAndImage(); // Initially update link and image
        fadeInOut(image); // Start fade-in/out animation // Start cycling events

        // Take Flight '26
        } else if (month === 2 && date === 14 && year === 2026) {    
        // Example link with image
        let link = document.createElement("a");
        link.href = "https://www.start.gg/tournament/take-flight-26/details";
        link.target = "_blank";
    
        let image = document.createElement("img");
        image.src = "https://images.start.gg/images/tournament/864665/image-9551083e30bca6b48e9a64d778db43a2.jpg";
    
        image.classList.add("calendarImg");
    
    
        link.appendChild(image);
        cell.appendChild(link);

        // G5itD 11
        } else if (month === 2 && date === 21 && year === 2026) {    
        // Example link with image
        let link = document.createElement("a");
        link.href = "https://www.start.gg/tournament/game-5-in-the-d-11-yuko-s-bday-edition/details";
        link.target = "_blank";
    
        let image = document.createElement("img");
        image.src = "https://images.start.gg/images/tournament/873498/image-7ce940d1c981a6095a431b24fa230713.jpg";
    
        image.classList.add("calendarImg");
    
    
        link.appendChild(image);
        cell.appendChild(link);

        // Main Event 2
        } else if (month === 2 && date === 22 && year === 2026) {    
        // Example link with image
        let link = document.createElement("a");
        link.href = "https://www.start.gg/tournament/main-event-2/details";
        link.target = "_blank";
    
        let image = document.createElement("img");
        image.src = "https://images.start.gg/images/tournament/860982/image-f7116ff2a6a425b54362412cff28cadc.png";
    
        image.classList.add("calendarImg");
    
    
        link.appendChild(image);
        cell.appendChild(link);


        // BO2
        } else if (month === 3 && (date === 4) && year === 2026) {    
        // Example link with image
        let link = document.createElement("a");
        link.href = "https://www.start.gg/tournament/bustered-out-2/details";
        link.target = "_blank";
    
        let image = document.createElement("img");
        image.src = "https://images.start.gg/images/tournament/859269/image-4c4804477550479932e7df06bcd73fbb.png";
    
        image.classList.add("calendarImg");
    
    
        link.appendChild(image);
        cell.appendChild(link);

        // Volan 26
        } else if (month === 3 && (date === 10 || date === 11 || date ===12) && year === 2026) {    
        // Example link with image
        let link = document.createElement("a");
        link.href = "https://www.start.gg/tournament/volan-2026/details";
        link.target = "_blank";
    
        let image = document.createElement("img");
        image.src = "https://images.start.gg/images/tournament/841158/image-2cc3597d9d558d105a4406a7ed422903.png";
    
        image.classList.add("calendarImg");
    
    
        link.appendChild(image);
        cell.appendChild(link);


        // Element
        } else if (month === 3 && (date === 18 || date ===19) && year === 2026) {    
        // Example link with image
        let link = document.createElement("a");
        link.href = "https://www.start.gg/tournament/element-1/details";
        link.target = "_blank";
    
        let image = document.createElement("img");
        image.src = "https://images.start.gg/images/tournament/839045/image-231e7c9fdd38b22d6e77688c8836cd22.jpg";
    
        image.classList.add("calendarImg");
    
    
        link.appendChild(image);
        cell.appendChild(link);

        // HoP 25 + CtC2
        } else if (month === 3 && (date === 25) && year === 2026) {    
        const events = [
            {   
                link: "https://www.start.gg/tournament/flash-flood/details",
                imageSrc: "https://images.start.gg/images/tournament/813787/image-12969cc9155ec8f9247a30aefe8d1120.png"
                
            },
            {
                link: "https://www.start.gg/tournament/plus-house/details",
                imageSrc: "https://images.start.gg/images/tournament/874264/image-0269f85a2b42ff0f5fb1afb0df394e6b.png"
            }
    
        ];
        let currentIndex = 0; // Initialize current index
    
        let link = document.createElement("a");
        link.target = "_blank";
    
        let image = document.createElement("img");
    
        image.classList.add("calendarImg");
    
        link.appendChild(image);
        cell.appendChild(link);
    
        // Function to fade in/out the image and link
        function fadeInOut(element) {
            let opacity = 0;
            let increasing = true;
            let interval = setInterval(function() {
                if (increasing) {
                    opacity += 0.05;
                } else {
                    opacity -= 0.05;
                }
                element.style.opacity = opacity;
                if (opacity >= 1) {
                    increasing = false;
                    setTimeout(() => {
                        increasing = true;
                        updateLinkAndImage(); // Update link and image after fully visible
                    }, 2000); // Image and link will be fully visible for 2 seconds before fading out
                } else if (opacity <= 0) {
                    clearInterval(interval);
                    fadeInOut(element); // Restart the fading animation
                }
            }, 100); // Adjust the timing as needed
        }
    
        // Function to update the link and image
        function updateLinkAndImage() {
            link.href = events[currentIndex].link;
            image.src = events[currentIndex].imageSrc;
            currentIndex = (currentIndex + 1) % events.length; // Move to the next event, looping back to the beginning if necessary
        }
    
        updateLinkAndImage(); // Initially update link and image
        fadeInOut(image); // Start fade-in/out animation // Start cycling events

        /*
        // Smash Camp Heartlands
        } else if (((month === 4 && date >= 29 && date <= 31) || (month === 5 && date === 1)) && year === 2026) {    
        // Example link with image
        let link = document.createElement("a");
        link.href = "https://www.start.gg/tournament/smash-camp-heartlands/details";
        link.target = "_blank";
    
        let image = document.createElement("img");
        image.src = "https://images.start.gg/images/tournament/848016/image-ad81fb6d62d51b7553360cac9de398bd.png";
    
        image.classList.add("calendarImg");
    
    
        link.appendChild(image);
        cell.appendChild(link);

        */
    
        } 
        else {
                    // Create and append the date text only if there is no image
                    cellText = document.createTextNode(date);
                    cell.appendChild(cellText);
                }

                if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
                    cell.classList.add("bg-info");
                } // color today's date

                row.appendChild(cell);
                date++;
            }
        }

        tbl.appendChild(row); // appending each row into calendar body.
    }
}



// check how many days in a month code from https://dzone.com/articles/determining-number-days-month
function daysInMonth(iMonth, iYear) {
    return 32 - new Date(iYear, iMonth, 32).getDate();
}

document.addEventListener('DOMContentLoaded', function() {
    const hoverImage = document.getElementsById('calendarImg');
    const hoverContent = document.getElementsById('Exodus');
  
    hoverImage.addEventListener('mouseover', function() {
      // Change the URL to the page you want to load content from
      fetch('https://plusside.net/')
        .then(response => response.text())
        .then(html => {
          hoverContent.innerHTML = html;
          hoverContent.style.display = 'flex';
        })
        .catch(error => console.error('Error fetching HTML:', error));
    });
  
    hoverImage.addEventListener('mouseout', function() {
      hoverContent.style.display = 'none';
    });
  });

//Calendar End
