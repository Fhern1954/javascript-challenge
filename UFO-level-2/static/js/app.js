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

var btnSearch = d3.select("#btnSearch");
var btnReset = d3.select("#btnReset");

var searchDate = d3.select("#searchDate");
var searchCity = d3.select("#searchCity");
var searchState = d3.select("#searchState");
var searchCountry = d3.select("#searchCountry");
var searchShape = d3.select("#searchShape");

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

//Event Listeners

btnSearch.on("click", loadTableRows) {
    //Prevent refresh
        d3.event.preventDefault();

    //Get what the user searched for
    var searchedDate = searchDate.property("value");
    var searchedCity = searchCity.property("value");
    var searchedState = searchState.property("value");
    var searchedCountry = searchCountry.property("value");
    var searchedShape = searchShape.property("value");

    var filteredData = tableData.filter(sighting => 
        sighting.datetime === searchedDate &&
        sighting.city === searchedCity &&
        sighting.state === searchedState &&
        sighting.country === searchedCountry &&
        sighting.shape === searchedShape);

    
        console.log(filteredData);

        //Create New Table
    filteredData.forEach(function(selections){
        //Add one table row for each UFO Sighting filtered
        var row = tbody.append("tr");
        //Use Object.entries to append a cell to the row for each value
        Object.entries(selections).forEach(function([key, value]) {
            console.log(key,value);
            var cell = row.append("td");
            cell.text(value);
        });
    })
}