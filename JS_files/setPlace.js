import getCities from "./setCitiesAndAdhanObj.js";
import sendDataToHTML from "./showData.js"
import setDate from "./setDate.js";
export default async function setPlace(availabaleCities) {
    const continentSelect = document.getElementById('Continents');
    const Continents = continentSelect.querySelectorAll('.Continent');
    var activatedCities = availabaleCities[0]; //  default to Europe
    var eventTriggered = false
    
    continentSelect.addEventListener('change', async function () {
        const selectedContinentIndex = continentSelect.selectedIndex;
        Continents.forEach((continent, index) => {
            continent.selected = index === selectedContinentIndex;
            eventTriggered = true
            
            
        });

        
        activatedCities = availabaleCities[selectedContinentIndex];
        c = await getCities(activatedCities)
        await callSendData(c)
    });
    if (eventTriggered === false) {
        var c = await getCities(activatedCities)
        await callSendData(c)
    }
    
}

async function callSendData(ci){
    
    try {    
        sendDataToHTML(ci.citiesArray , ci.theSalatTimes)
        setDate(ci.theSalatTimes)
        
    } catch (error) {
        console.log('Error:', error);
    }
}