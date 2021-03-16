// from data.js
var tableData = data;
var tblColumns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"];

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
var form = d3.select("#user-form");
var filters = d3.selectAll("#filters");
button.on("click", filterData);
form.on("submit", filterData);
filters.on("change", filterData);


//Collect input Elements
var userDate = d3.select("#datetime");
var userCity = d3.select("#city");
var userState = d3.select("#state");
var userCountry = d3.select("#country");
var userShape = d3.select("#shape");

//Create HTML table
function loadTableRows(tableData) {
        //Delete previous table, if one exists
    tbody.html("");
    //Create new table
    tableData.forEach(function(ufoSighting) {
        console.log(ufoSighting);
        //Add one table row for eacg sighting
        var row = tbody.append("tr");
        
        //Use Object.entries to collect each values for each UFO Sighting
        Object.entries(ufoSighting).forEach(function([key, value]) {
            console.log(key, value);
            // Add a cell to each row for each value
            var cell = row.append("td");
            cell.text(value);
        });
    });
}
    
        //Call the function
loadTableRows(tableData);


    function filterData (tableData) {
        d3.event.preventDefault;
        var filteredData = data;
        console.log(filteredData);


        if (userDate.property("value")) {
            searchDate = userDate.property("value");
            filteredData = filteredData.filter(sighting => sighting.datetime === searchDate);
            console.log(filteredData);
        }        
        if (userCity.property("value")) {
            searchCity = userCity.property("value").toLowerCase();
            filteredData = filteredData.filter(sighting => sighting.city === searchCity);
            console.log(filteredData);
        }        
        if (userState.property("value")) {
            searchState = userState.property("value").toLowerCase();
            filteredData = filteredData.filter(sighting => sighting.state === searchState);
            console.log(filteredData);
        }       
        if (userCountry.property("value")) {
            searchCountry = userCountry.property("value").toLowerCase();
            filteredData = filteredData.filter(sighting => sighting.country === searchCountry);
            console.log(filteredData);
        }        
        if (userShape.property("value")) {
            searchShape = userShape.property("value").toLowerCase();
            filteredData = filteredData.filter(sighting => sighting.shape === searchShape);
            console.log(filteredData);
        }

        console.log(filteredData);
        loadTableRows(filteredData);
    }
        

        
