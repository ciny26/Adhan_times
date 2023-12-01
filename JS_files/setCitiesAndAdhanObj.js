//get the Adhan times from the API by setting the value of latitude and longitude 
//take a parameter the coresponding cities array taking in mind the selected 
//option(which links to an array) in setPlace function  
// (this funct is called inside setPlace method) 
import  getData  from "./getData.js";
const dataUrl = 'http://api.aladhan.com/v1/calendar/2023';
export default async function getCities(citiesArray) {
    var currentDay = new Date().getDate();
    var currentMonth = new Date().getMonth()
    
    var promises = [];

    for (const city of citiesArray) {
        var specificURL = `/${currentMonth+1}?&latitude=${city.latitude}&longitude=${city.longitude}&method=2`;
        var oneSalatTime = await getData(dataUrl, specificURL, currentDay);
        promises.push(oneSalatTime);
    }

    try {
        const theSalatTimes = await Promise.all(promises);
        
        return {theSalatTimes,citiesArray}
    } catch (error) {
        console.error(error);
    }
}