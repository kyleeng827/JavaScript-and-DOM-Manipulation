// from data.js
var tableData = data;

// Reference table body
let tbody = d3.select("tbody");

// Change date label
d3.select("label").text('Enter a filter category')



// Change place holder, would have to modify form field width to fit all label categories or change font-size,
// but not sure how to do this; this is good enough
// d3.select(".col-md-2", ".col-md-4")
// d3.select(".col-md-10", ".col-md-8")
// d3.select("input").attr("font-size", "20px")
d3.select("input").attr('placeholder', 'Date, City, State, Country, Shape')

// Loop thorugh data array to append objects
data.forEach(ufo => {
    // Append one table row `tr` for each ufo object
    let row = tbody.append("tr");
    Object.entries(ufo).forEach(([key,value]) => {
        // Append 1 cell per ufo value (Date,City,State,Country,Shape,Duration,Comments)
        let cell = row.append("td");
        // Update each cell's text with ufo values (Date,City,State,Country,Shape,Duration,Comments)
        cell.text(value);
    })
})

// Select filter button from form
let filterTable = d3.select("#filter-btn");

// Create event on click of button
filterTable.on("click", () => {
    // Prevent the page from refreshing
    d3.event.preventDefault();
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    // Will repeat the same function as above from data.forEach, but in order to append values,
    // we must first clear the table before starting the function, so that the values are not 
    // appended to the old table
    let tbody = d3.select("tbody").text('');

    // Reset input field
    inputElement.node().value = '';
    // Change placeholder to previous input value so use remembers what he input
    d3.select("input").attr('placeholder', inputValue)

    //  Create new 'data', ie dateFilter, which takes previous data and filters by user input
    let dateFilter = tableData.filter(tableData => tableData.datetime === inputValue);

    // Same function as above, except done on filteredData instead of data
    dateFilter.forEach(ufo => {
        let row = tbody.append("tr");
        Object.values(ufo).forEach(value => {
            let cell = row.append("td");
            cell.text(value);
        })
    })

    // Same as above, except for different parameters
    let cityFilter =  tableData.filter(tableData => tableData.city === inputValue);

    cityFilter.forEach(ufo => {
        let row = tbody.append("tr");
        Object.values(ufo).forEach(value => {
            let cell = row.append("td");
            cell.text(value);
        })
    })

    let stateFilter =  tableData.filter(tableData => tableData.state === inputValue);

    stateFilter.forEach(ufo => {
        let row = tbody.append("tr");
        Object.values(ufo).forEach(value => {
            let cell = row.append("td");
            cell.text(value);
        })
    })

    let countryFilter =  tableData.filter(tableData => tableData.country === inputValue);

    countryFilter.forEach(ufo => {
        let row = tbody.append("tr");
        Object.values(ufo).forEach(value => {
            let cell = row.append("td");
            cell.text(value);
        })
    })

    let shapeFilter =  tableData.filter(tableData => tableData.shape === inputValue);

    shapeFilter.forEach(ufo => {
        let row = tbody.append("tr");
        Object.values(ufo).forEach(value => {
            let cell = row.append("td");
            cell.text(value);
        })
    })
})

