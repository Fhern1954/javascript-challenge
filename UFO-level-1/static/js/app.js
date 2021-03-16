// from data.js
const tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

//Get UFO Sighting values for each column
// 
tableData.forEach(row => {
    tbody.append("tr");
    for (key in row){
        const cell = tbody.append("td");
        cell.text(row[key]);
    }
});
    

//Event Listeners
var button = d3.select("#filter-btn");
var form = d3.select("#date-form");
button.on("click", filterData);
form.on("submit", filterData); 

function filterData() {
    d3.event.preventDefault();

    tbody.html("");

    //Use input date to get data
    var inputElement = d3.select("#datetime");
    //Get the date  put in
    var inputValue = inputElement.property("value");
    console.log(inputValue);

    //Filter data on inputValue
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
    console.log(filteredData);

    filteredData.forEach(function(selections){
    //Add one table row for each UFO Sighting filtered
    var row = tbody.append("tr");
    //Use Object.entries to append a cell to the row for each value
    Object.entries(selections).forEach(function([key, value]) {
        console.log(key,value);
        var cell = row.append("td");
        cell.text(value);
    });
    });
};