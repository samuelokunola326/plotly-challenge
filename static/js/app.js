
    var sampleData = d3.json("samples.json").then(function(sampleData){
        console.log(sampleData);
    });

    // refernce dropdown  
var selData = d3.select("#selDataset");

// creating a function to loop through the table data
function dropdownData(x){
    
    x.forEach((x) => {
        // using d3 to append a tr element for each Object in the Array of objects 
        var opt = selData.append("option");
        
        // then using the objects.entries to console log the objects 
        Object.values(x).forEach(([value]) => {
            console.log(value);
            
            //append the values to each row and input into cells
            var val = opt.append("value");
            val.text(value); 
        });
    });

}

var t = ["a","b","c"]
// console.log(Object.names)
dropdownData(t)


// turn into functions
// var sortedSampleData = sampleData.sort((a, b) => b.sample_values - a.sample_values);

// slicedData = sortedSampleData.slice(0, 10);

// reversedData = slicedData.reverse();



function init() {
        var trace1 = {
            // x: reversedData.map(Object => Object.values(sampleData.sample_values)),
            // y: reversedData.map(Object => Object.values(sampleData.otu_ids)),
            // text: reversedData.map(Object => Object.values(otu_labels)),
            x: [20, 14, 23],
            y: ['giraffes', 'orangutans', 'monkeys'],
            type: "bar",
            orientation: "h"
        };

        var data = [trace1];

        // var layout = {}

        Plotly.newPlot("bar", data);

// plot for bubble chart 
        var trace2 = {
            // x: reversedData.map(Object => Object.values(sampleData.sample_values)),
            // y: reversedData.map(Object => Object.values(sampleData.otu_ids)),
            // text: reversedData.map(Object => Object.values(otu_labels)),
            x: [1, 2, 3, 4],
            y: [10, 11, 12, 13],
            mode: "markers",
            marker: {
                size: [40, 60, 80, 100]
            }
        };

        var data2 = [trace2];

        var layout = {
            showlegend: false,
            height: 600,
            width: 600
        };

        Plotly.newPlot("bubble", data2, layout);
    }
    
    init();
    //     // Call updatePlotly() when a change takes place to the DOM
    // d3.selectAll("#bar").on("change", updatePlotly);


    // function updatePlotly() {
    //     // Use D3 to select the dropdown menu
    //     var dropdownMenu = d3.select("#bar").node();
    //     // Assign the value of the dropdown menu option to a variable
    //     var dataset = dropdownMenu.property("value");
      
    //     // Initialize x and y arrays
    //     var x = [];
    //     var y = [];
      
    //     if (dataset === 'dataset1') {
    //       x = [1, 2, 3, 4, 5];
    //       y = [1, 2, 4, 8, 16];
    //     }
      
    //     else if (dataset === 'dataset2') {
    //       x = [10, 20, 30, 40, 50];
    //       y = [1, 10, 100, 1000, 10000];
    //     }
      
    //     // Note the extra brackets around 'x' and 'y'
    //     Plotly.restyle("plot", "x", [x]);
    //     Plotly.restyle("plot", "y", [y]);
    //   }
      
    
      

    //   function getData() {

    //     var dropdownMenu = d3.select("#selectDataset");

    //     var dataset = dropdownMenu.property("value");


    //     var data = [];

    //     if () {

    //     }
    //     else if () {

    //     }
    //   }


   
    // d3.json("../samples.json").then(function(samples) {

//     console.log(samples);
  
    // log a list of names
    // var names = tvData.map(data => data.name);
    // console.log("names", names);
  
    // Cast each hours value in tvData as a number using the unary + operator
    // tvData.forEach(function(data) {
    //   data.hours = +data.hours;
    //   console.log("Name:", data.name);
    //   console.log("Hours:", data.hours);
    // });