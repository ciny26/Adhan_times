import setPlace from "./JS_files/setPlace.js";
const currentTime = document.getElementById('currentTime')
//const Adhan = document.getElementById("adhan")
//Choose the convient cities array accrording to the selection and show it's 
//Adhan times in the console
const africaCities = [
    { index: 0, country: 'Algiers', latitude: 36.7539, longitude: 3.0589 },
    { index: 1, country: 'Cairo', latitude: 30.0444, longitude: 31.2358 },
    { index: 2, country: 'Johannesburg', latitude: -26.2044, longitude: 28.0456 },
    { index: 3, country: 'Rabat', latitude: 33.5333, longitude: -7.5833 },
    { index: 4, country: 'Lagos', latitude: 6.4550, longitude: 3.3841 },
];
const europeCities = [
    { index: 0, country: 'London', latitude: 51.507351, longitude: -0.127758 },
    { index: 1, country: 'Paris', latitude: 48.856613, longitude: 2.352222 },
    { index: 2, country: 'Roma', latitude: 41.902782, longitude: 12.496365 },
    { index: 3, country: 'Berlin', latitude: 52.520008, longitude: 13.404954 },
    { index: 4, country: 'Vienna', latitude: 48.208176, longitude: 16.373819 },
    { index: 5, country: 'Istanbul', latitude: 41.0136, longitude: 28.9550 },
];
const asiaCities = [
    { index: 0, country: 'Mecca', latitude: 21.4225, longitude: 39.8233 },
    { index: 1, country: 'Dubai', latitude: 25.2631, longitude: 55.2972 },
    { index: 2, country: 'Bejin', latitude: 39.9040, longitude: 116.4075 },
    { index: 3, country: 'Guangzhou', latitude: 23.1300, longitude: 113.2600 },
    { index: 4, country: 'Kuala Lumpur', latitude: 3.1478, longitude: 101.6953 },
    { index: 5, country: 'Tokyo', latitude: 35.6897, longitude: 139.6922 },
    { index: 6, country: 'Delhi', latitude: 28.6100, longitude: 77.2300 },
];
const americaCities = [
    { index: 0, country: 'New York', latitude: 40.6943, longitude: -73.9249 },
    { index: 1, country: 'Los Angeles', latitude: 34.1141, longitude: -118.4068 },
    { index: 2, country: 'Montreal', latitude: 45.5089, longitude: -73.5617 },
    { index: 3, country: 'Edmonton', latitude: 53.5344, longitude: -113.4903 },
    { index: 4, country: 'Rio de Janeiro ', latitude: -22.9111, longitude: -43.2056 },
    { index: 5, country: 'Buenos Aires', latitude: -34.5997, longitude: -58.3819 },
    { index: 6, country: 'Mexico City', latitude: 19.4333, longitude: -99.1333 },
    
];


// Choose the convient cities array according to the selection and show its Adhan times in the console
const availabaleCities = [africaCities, europeCities, asiaCities, americaCities];

// Function to get the current time as a formatted string
function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}

// Function to update the time in a specified div
function updateTimeInDiv(divId) {
    const timeDiv = document.getElementById(divId);
    if (timeDiv) {
        timeDiv.textContent = getCurrentTime();
    }
}

function checkMidnight(){
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    if(hours == 0 && minutes == 0 && seconds == 0){
        setPlace(availabaleCities);
    }
}


// Check for midnight every second and update Adhan times
setPlace(availabaleCities);
setInterval(() => {
   checkMidnight()
}, 0);// Update the time every second
setInterval(() => {
    updateTimeInDiv('currentTime');
}, 1000);

