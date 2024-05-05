function calculateWindChill(_temp, _windspeed) {
    console.log("Temp:" + _temp);
    console.log("_windspeed:" + _windspeed);
    return (13.12 + .6215*_temp - 11.37*Math.pow(_windspeed,.16) + .3965*_temp*Math.pow(_windspeed,.16)).toFixed(2);
}

let temp = 15;
let windspeed = 5;
let windchill = "N/A";

if (temp <= 10 && windspeed > 4.8) {
    windchill = calculateWindChill(temp, windspeed).toString();
}

document.getElementById("windchill").textContent = windchill;