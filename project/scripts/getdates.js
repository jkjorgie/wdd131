function setDateStuff() {
    // Set the current year
    document.getElementById("currentyear").textContent = new Date().getFullYear();

    // Set the last modified date and time
    var lastModified = new Date(document.lastModified);
    //document.getElementById("lastModified").textContent = "Last modified: " + lastModified.toLocaleString();
    document.getElementById("lastModified").textContent = "Last modified: " + document.lastModified;
}

setDateStuff();