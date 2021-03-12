// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

//Get UFO Sighting values for each column
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


//Button
var button = d3.select("#filter-btn");
button.on("click", function() {

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
    //Add one tbale row for each UFO Sighting filtered
    var row = tbody.append("tr");
    //Use Object.entries to append a cell to the row for each value
    Object.entries(selections).forEach(function([key, value]) {
        console.log(key,value);
        var cell = row.append("td");
        cell.text(value);
    });
    });
});