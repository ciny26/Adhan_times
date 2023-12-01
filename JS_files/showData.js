export default async function sendDataToHTML(ci , adhanTimes) {
    
    var adhanTable = document.getElementById('adhan_table');
    while (adhanTable.rows.length > 1) {
        adhanTable.deleteRow(1);
    }
    for (let index = 0; index < ci.length; index++) {
        var tableRow = document.createElement('tr');
        for (let i = 0; i < 3; i++) {
            var tableCell = document.createElement('td');
            tableCell.className = `cellule ${index}_${i}`;
            if (i === 0) {
                tableCell.innerHTML = `${ci[index].country}`;
            }
            if (i === 1) {
                
                for (const key in adhanTimes[index].salatTime) {
                    if (key != 'Firstthird' && key != 'Lastthird' && key!='Midnight') {
                        var adhanCont = document.createElement('div')
                        adhanCont.className = 'adhanName'
                        adhanCont.style.width = '100%'
                        adhanCont.innerHTML += `${key}`
                        tableCell.appendChild(adhanCont)
                    }
                    
                        
                }
                
            }
            if (i === 2) {
                for (const key in adhanTimes[index].salatTime) {
                    if (key != 'Firstthird' && key != 'Lastthird' && key!='Midnight') {
                        var timeCont = document.createElement('div')
                        timeCont.className = 'adhanTiming'
                        timeCont.style.width = '100%'
                        timeCont.innerHTML += `${adhanTimes[index].salatTime[key].slice(0,6)}`
                        tableCell.appendChild(timeCont)
                    }
                    
                        
                }
            }
            
            tableRow.appendChild(tableCell);
        }

        adhanTable.appendChild(tableRow);
    }
    
}
 
