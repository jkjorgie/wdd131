const players = [
    {
        name: "Brooks Koepka",
        tour: "LIV",
        totalWins: 20,
        majorWins: 5,
        startingYear: 2012,
        height: "6 ft 0 in",
        weight: "205 lb",
        imageUrl:
            "./images/golf-brooks-koepka.webp",
        imageCredit: "https://www.gettyimages.ie/photos/portrait-of-brooks-koepka"
    },
    {
        name: "Jordan Spieth",
        tour: "PGA",
        totalWins: 16,
        majorWins: 3,
        startingYear: 2012,
        height: "6 ft 1 in",
        weight: "175 lb",
        imageUrl:
            "./images/golf-jordan-spieth.webp",
        imageCredit: "https://www.gettyimages.com/photos/jordan-spieth-portrait"
    },
    {
        name: "Justin Thomas",
        tour: "PGA",
        totalWins: 17,
        majorWins: 2,
        startingYear: 2013,
        height: "5 ft 10 in",
        weight: "160 lb",
        imageUrl:
            "./images/golf-justin-thomas.webp",
        imageCredit: "https://www.foxsports.com/golf/justin-thomas-player"
    },
    {
        name: "Rory McIlroy",
        tour: "PGA",
        totalWins: 40,
        majorWins: 4,
        startingYear: 2007,
        height: "5 ft 9 in",
        weight: "161 lb",
        imageUrl:
            "./images/golf-rory-mcilroy.webp",
        imageCredit: "https://www.gettyimages.com/photos/rory-mcilroy-portrait"
    },
    {
        name: "Scottie Scheffler",
        tour: "PGA",
        totalWins: 10,
        majorWins: 2,
        startingYear: 2019,
        height: "6 ft 3 in",
        weight: "200 lb",
        imageUrl:
            "./images/golf-scottie-scheffler.webp",
        imageCredit: "https://www.golfbettingclub.com/player-profiles/scotty-scheffler"
    },
    {
        name: "Tiger Woods",
        tour: "PGA",
        totalWins: 148,
        majorWins: 15,
        startingYear: 1996,
        height: "6 ft 1 in",
        weight: "185 lb",
        imageUrl:
            "./images/golf-tiger-woods.webp",
        imageCredit: "https://www.gettyimages.com/photos/tiger-woods-portrait"
    }
];

function createAndAppendPlayer(player) {
    //player div
    const playerDiv = document.createElement('div');
    playerDiv.className = "player";

    //player heading
    const heading = document.createElement('h2');
    heading.textContent = player.name;

    playerDiv.appendChild(heading);

    //img
    const img = document.createElement('img');
    img.src = player.imageUrl;
    img.alt = player.name;
    img.width = "200";
    img.height = "300";
    img.loading = "lazy";

    playerDiv.appendChild(img);

    //tour div
    let div1 = document.createElement('div');
    div1.className = "player-details";
    let pLabel1 = document.createElement('p');
    pLabel1.textContent = "Tour:"
    pLabel1.className = "label";
    let pValue1 = document.createElement('p');
    pValue1.textContent = player.tour;
    div1.appendChild(pLabel1);
    div1.appendChild(pValue1);

    playerDiv.appendChild(div1);

    //starting year div
    let div4 = document.createElement('div');
    div4.className = "player-details";
    let pLabel4 = document.createElement('p');
    pLabel4.textContent = "Pro Debut:"
    pLabel4.className = "label";
    let pValue4 = document.createElement('p');
    pValue4.textContent = player.startingYear;
    div4.appendChild(pLabel4);
    div4.appendChild(pValue4);

    playerDiv.appendChild(div4);

    //height div
    let div5 = document.createElement('div');
    div5.className = "player-details";
    let pLabel5 = document.createElement('p');
    pLabel5.textContent = "Height:"
    pLabel5.className = "label";
    let pValue5 = document.createElement('p');
    pValue5.textContent = player.height;
    div5.appendChild(pLabel5);
    div5.appendChild(pValue5);

    playerDiv.appendChild(div5);

    //weight div
    let div6 = document.createElement('div');
    div6.className = "player-details";
    let pLabel6 = document.createElement('p');
    pLabel6.textContent = "Weight:"
    pLabel6.className = "label";
    let pValue6 = document.createElement('p');
    pValue6.textContent = player.weight;
    div6.appendChild(pLabel6);
    div6.appendChild(pValue6);

    playerDiv.appendChild(div6);

    //total wins div
    let div2 = document.createElement('div');
    div2.className = "player-details";
    let pLabel2 = document.createElement('p');
    pLabel2.textContent = "Total Wins:"
    pLabel2.className = "label";
    let pValue2 = document.createElement('p');
    pValue2.textContent = player.totalWins;
    div2.appendChild(pLabel2);
    div2.appendChild(pValue2);

    playerDiv.appendChild(div2);

    //major wins div
    let div3 = document.createElement('div');
    div3.className = "player-details";
    let pLabel3 = document.createElement('p');
    pLabel3.textContent = "Major Wins:"
    pLabel3.className = "label";
    let pValue3 = document.createElement('p');
    pValue3.textContent = player.majorWins;
    div3.appendChild(pLabel3);
    div3.appendChild(pValue3);

    playerDiv.appendChild(div3);

    //image credit div
    let div7 = document.createElement('div');
    div7.className = "player-details";
    let pLabel7 = document.createElement('p');
    pLabel7.textContent = "Image Credit:"
    pLabel7.className = "label";
    let pValue7 = document.createElement('p');
    pValue7.innerHTML = `<a href="${player.imageCredit}" target="_blank">Link</a>`;
    div7.appendChild(pLabel7);
    div7.appendChild(pValue7);

    playerDiv.appendChild(div7);

    document.querySelector('.players-display').appendChild(playerDiv);
}

function displayPlayers(searchParam) {

    document.querySelector('.players-display').innerHTML = "";

    console.log(`search param:${searchParam}`);

    for (let i = 0; i < players.length; i++) {
        if (searchParam === undefined || searchParam === "") {
            createAndAppendPlayer(players[i]);
        }
        else {
            var upperParam = searchParam.toUpperCase();

            var name = players[i].name.toUpperCase();

            var tour = players[i].tour.toUpperCase();

            var include = false;

            if (name.includes(upperParam)) {
                include = true;
            }

            if (tour.includes(upperParam)) {
                include = true;
            }

            if (include) {
                createAndAppendPlayer(players[i]);
            }
        }
    }
}

function searchParamInput(event) {
    //alert(`The search param field has been changed to: ${event.target.value}`);
    displayPlayers(event.target.value);
}

displayPlayers();