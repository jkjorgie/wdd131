const hamburgerMenu = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');
const header = document.querySelector('header');

hamburgerMenu.addEventListener('click', function () {
    header.querySelector('h1').style.display = 'none';
    header.querySelector('.hamburger-menu').style.display = 'none';
    header.classList.toggle('showNav');
    navLinks.classList.toggle('show');

    createCloseButton(); // create and show close button
});

function createCloseButton() {
    const closeButton = document.createElement('button');
    closeButton.textContent = '❌';
    closeButton.classList.add('close-button');
    closeButton.addEventListener('click', function () {
        header.querySelector('h1').style.display = 'block';
        header.querySelector('.hamburger-menu').style.display = 'block';
        header.classList.toggle('showNav');
        navLinks.classList.toggle('show');
        closeButton.remove(); // remove close button
    });
    header.appendChild(closeButton);
}


function setDateStuff() {
    // Set the current year
    document.getElementById("currentyear").textContent = new Date().getFullYear();

    // Set the last modified date and time
    var lastModified = new Date(document.lastModified);
    //document.getElementById("lastModified").textContent = "Last modified: " + lastModified.toLocaleString();
    document.getElementById("lastModified").textContent = "Last modified: " + document.lastModified;
}

setDateStuff();