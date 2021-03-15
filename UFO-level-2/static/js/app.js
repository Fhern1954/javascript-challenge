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

//Event Listeners
var button = d3.select("#filter-btn");
var form = d3.select("#user-form");
button.on("click", filterData);
form.on("submit", filterData);

// btnSearch.on("click", function(event) { 
    console.log("button clicked");
    

    // function filterData (tableData) {
    //     //Prevent refresh
    //     d3.event.preventDefault;

    //     let filter = 0;

        // let searchDate = userDate.property("value");
        // let searchCity = userCity.property("value").toLowerCase();
        // let searchState = userState.property("value").toLowerCase();
        // let searchCountry = userCountry.property("value").toLowerCase();
        // let searchShape = userShape.property("value").toLowerCase();

        //only filter if user entered a value
        // if (searchDate || searchCity || searchState || searchCountry || searchShape) {
        //     filtered = 1;

        // //use only the fields that have values entered and dynamically build up filter conditions
        // let userArray = [["datetime", searchDate], ["city", searchCity], ["state", searchState], ["country", searchCountry], ["shape", searchShape]];
        // let existingArray = userArray.filter(user => user[1] !== "");
        // let condition = existingArray.map(arr => "obs" + arr[0] + "===" + "'" + arr[1] + "'").join(" && ");

        //What the next line evaluates.
        //let filteredTable = tableData.filter(obs =>(obs.datetime == userDate) &&
        //                                         (obs.city == userCity) &&
        //                                         (obs.state == userState) &&
        //                                         (obs.country == userCountry) &&
        //                                         (obs.shape == userShape) );

    //         let filterData = tableData.filter(obs => eval(condition));
            
    //         tbody.html("");

    //         filterData.forEach(row => {
    //             tbody.append("tr");

    //             for (key in row){
    //                 const cell = tbody.appen("td");
    //                 cell.text(row[key]);
    //             }
    //         })
    // }
    // }

    function filterData (tableData) {
        d3.event.preventDefault;
        var filteredData = data;
        //console.log(filteredData);

        if (userDate !== null) {
            searchDate = userDate.property("value");
            console.log(searchDate);
            filteredData = filteredData.filter(sighting => sighting.datetime === searchDate);
        }
        if (userCity !== null) {
            searchCity = userCity.property("value").toLowerCase();
            filteredData = filteredData.filter(sighting => sighting.city === searchCity);
        }
        if (userState !== null) {
            searchState = userState.property("value").toLowerCase();
            filteredData = filteredData.filter(sighting => sighting.state === searchState);
        }
        if (userCountry !== null) {
            searchCountry = userCountry.property("value").toLowerCase();
            filteredData = filteredData.filter(sighting => sighting.country === searchCountry);
        }
        if (userShape !== null) {
            searchShape = userShape.property("value").toLowerCase();
            filteredData = filteredData.filter(sighting => sighting.shape === searchShape);
        }
        console.log(filteredData);
    loadTableRows(filteredData);
    }
        

        //Create New Table
    //filteredData.forEach(function(selections){
        //Add one table row for each UFO Sighting filtered
        // var row = tbody.append("tr");
        // //Use Object.entries to append a cell to the row for each value
        // Object.entries(selections).forEach(function([key, value]) {
        //     console.log(key,value);
        //     var cell = row.append("td");
        //     cell.text(value);
        // });
    //})
