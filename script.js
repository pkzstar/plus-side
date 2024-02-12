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

                // The Cure
                if (month === 1 && date === 9 && year === 2024) {
                    // Example link with image
                    let link = document.createElement("a");
                    link.href = "https://www.start.gg/tournament/the-cure-100-pot-bonus-p-invitational/details";
                    link.target = "_blank";

                    let image = document.createElement("img");
                    image.src = "https://github.com/pkzstar/plus-side/blob/main/images/upcoming%20events/the%20cure.png?raw=true";

                    image.classList.add("calendarImg");


                    link.appendChild(image);
                    cell.appendChild(link);
                    
                    // Smashing Grounds
                } else if (month === 1 && date === 10 && year === 2024) {

                    let link = document.createElement("a");
                    link.href = "https://www.start.gg/tournament/smashing-grounds-10th-anniversary-celebration-a-melee-and-project-regional/details";
                    link.target = "_blank";
                
                    let image = document.createElement("img");
                    image.src = "https://github.com/pkzstar/plus-side/blob/main/images/upcoming%20events/10th%20aniv.png?raw=true";
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


                    link.appendChild(image);
                    cell.appendChild(link);

                    //Full Bloom, Perfect pivot, The Truce
                } else if (month === 1 && (date === 24 || date === 25) && year === 2024) {

                    const events = [
                        {   
                            link: "https://www.start.gg/tournament/full-bloom-2024/details",
                            imageSrc: "https://github.com/pkzstar/plus-side/blob/main/images/upcoming%20events/fullbloom.png?raw=true"
                            
                        },
                        {
                            link: "https://www.start.gg/tournament/perfect-pivot/details",
                            imageSrc: "https://github.com/pkzstar/plus-side/blob/main/images/upcoming%20events/pp.png?raw=true"
                        }, 
                        {
                            link: "https://www.start.gg/tournament/the-truce/details",
                            imageSrc: "https://github.com/pkzstar/plus-side/blob/main/images/upcoming%20events/truce.png?raw=true"
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

                    //Storm
                } else if (month === 2 && date === 16 && year === 2024) {

                    let link = document.createElement("a");
                    link.href = "https://www.start.gg/tournament/storm-viii-1/details";
                    link.target = "_blank";

                    let image = document.createElement("img");
                    image.src = "https://github.com/pkzstar/plus-side/blob/main/images/upcoming%20events/storm.png?raw=true";

                    image.classList.add("calendarImg");


                    link.appendChild(image);
                    cell.appendChild(link);


                    //ETSU-Con, Titans, Game5in
                } else if (month === 2 && date === 23 && year === 2024) {

                    const events = [
                        {   
                            link: "https://www.start.gg/tournament/smash-of-the-titans-8-1/details",
                            imageSrc: "https://github.com/pkzstar/plus-side/blob/main/images/upcoming%20events/titans.png?raw=true"
                            
                        },
                        {
                            link: "https://www.start.gg/tournament/game-5-in-the-d-2-yuko-s-bday-edition/details",
                            imageSrc: "https://github.com/pkzstar/plus-side/blob/main/images/game5In.png?raw=true"
                        }, 
                        {
                            link: "https://www.start.gg/tournament/etsu-con-2024/details",
                            imageSrc: "https://github.com/pkzstar/plus-side/blob/main/images/upcoming%20events/etsu.png?raw=true"
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


                    //Metal Tavern
                } else if (month === 2 && date === 30 && year === 2024) {

                    let link = document.createElement("a");
                    link.href = "https://www.start.gg/tournament/metal-tavern/details";
                    link.target = "_blank";

                    let image = document.createElement("img");
                    image.src = "https://github.com/pkzstar/plus-side/blob/main/images/upcoming%20events/metal-tavern.png?raw=true";

                    image.classList.add("calendarImg");


                    link.appendChild(image);
                    cell.appendChild(link);


                    //The Action 2
                } else if (month === 3 && (date === 5 || date === 6 || date === 7) && year === 2024) {

                    let link = document.createElement("a");
                    link.href = "https://www.start.gg/tournament/the-action-2-action-replay/details";
                    link.target = "_blank";

                    let image = document.createElement("img");
                    image.src = "https://github.com/pkzstar/plus-side/blob/main/images/replay.png?raw=true";

                    image.classList.add("calendarImg");


                    link.appendChild(image);
                    cell.appendChild(link);

                    //THE BIGGER MILE HIGH CLUB
                } else if (month === 3 && (date === 20 || date === 21) && year === 2024) {

                    let link = document.createElement("a");
                    link.href = "https://www.start.gg/tournament/the-bigger-mile-high-club/details";
                    link.target = "_blank";

                    let image = document.createElement("img");
                    image.src = "https://github.com/pkzstar/plus-side/blob/main/images/upcoming%20events/milehigh.jpg?raw=true";

                    image.classList.add("calendarImg");


                    link.appendChild(image);
                    cell.appendChild(link);

                    //Ghost Town
                } else if (month === 4 && (date === 11) && year === 2024) {

                    let link = document.createElement("a");
                    link.href = "https://www.start.gg/tournament/ghost-town-2-call-of-the-lloyd-ft-zamu-spark/details";
                    link.target = "_blank";

                    let image = document.createElement("img");
                    image.src = "https://github.com/pkzstar/plus-side/blob/main/images/past-events/ghost-town.png?raw=true";

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

                    //




                } else {
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
//Calendar End