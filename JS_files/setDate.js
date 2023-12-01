export default async function setDate(adhanTimes){
    var date = document.getElementById('Date')
    date.innerHTML =  `The Adhan Times for : ${adhanTimes[0].date}`
} 