export default async function getData(url, specificURL, day){
    try {
        const response = await fetch(url + specificURL)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        //console.log(data)
        const salatTime = data.data[day - 1].timings;
        const date = data.data[day - 1].date.readable;
        return { salatTime, date };
    } catch (error) {
        console.error(error);
    }
} 