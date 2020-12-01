
    d3.json("samples.json").then(function(sampleData){
        console.log(sampleData);
    });


function
    var trace1 = {
        // x: [sampleData.wfreq],
        // y: [sampleData.id],
        x: [20, 14, 23],
        y: ['giraffes', 'orangutans', 'monkeys'],
        type: "bar",
        orientation: "h"
    };

    var data = [trace1];

    // var layout = {}

    Plotly.newPlot("bar", data);

    // Call updatePlotly() when a change takes place to the DOM
d3.selectAll("#selDataset").on("change", updatePlotly);


   
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