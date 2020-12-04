
    
var jsonData = "data/samples.json";
   
    function initDD() {
        d3.json(jsonData).then(function(sampledata) {
            console.log(sampledata);
            
            var names = sampledata.names;
            console.log(names)
            dropdownData(names)

            init(names[0])

            getData(names[0])

            

        });
            
    }

    initDD();

    // function that gets the data based on ID/name
function getData(id) {
    d3.json(jsonData).then(function(sampledata) {
        var metaResult = sampledata.metadata;
        //console.log(metaResult);
        var result = metaResult.filter(meta => meta.id.toString() === id)[0];
        var demoInfo = d3.select("#sample-metadata");
        demoInfo.html("");
        Object.entries(result).forEach((key) => {   
            demoInfo.append("h5").text(key[0] + ": " + key[1] + "\n");
        });
    });
}


     // var sampleData = d3.json("samples.json").then(function(Data){
    //     console.log(Data);
    // });



    // refernce dropdown  
var selData = d3.select("#selDataset");

// creating a function to loop through the table data
function dropdownData(x){
    
    x.forEach((x) => {
        // using d3 to append a tr element for each Object in the Array of objects 
        var opt = selData.append("option");
        
        // then using the objects.entries to console log the objects 
        Object.values(x).forEach(([value]) => {
            // console.log(value);
            
            //append the values to each row and input into cells
            var val = opt.append("value");
            val.text(value); 
        });
    });

}

// var t = ["a","b","c"]
// dropdownData(t)

// console.log(Object.getOwnPropertyNames)


// turn into functions
// var sortedSampleData = sampleData.sort((a, b) => b.sample_values - a.sample_values);

// slicedData = sortedSampleData.slice(0, 10);

// reversedData = slicedData.reverse();



function init(id) {
    d3.json(jsonData).then(function(sampledata) {
        console.log(sampledata.samples);

        var index = sampledata.samples.findIndex(sample => sample.id === id);
        console.log(`The index in data.samples array is: ${index}.`);

        var sampleValues = sampledata.samples[index]["sample_values"].slice(0,10).reverse()
        var sampleLabels = sampledata.samples[index]["otu_labels"].slice(0,10).reverse();
        var top_10_ids = (sampledata.samples[index]["otu_ids"].slice(0, 10)).reverse();
        var otu_id = top_10_ids.map(d => "OTU " + d);
        // console.log(sampledata.samples[index].otu_ids)



        var trace1 = {
            // x: sampledata.samples[index]["sample_values"].slice(0,10).reverse(),
            // y: sampledata.samples[index]["otu_ids"].slice(0,10).reverse(),
            text: sampleLabels,
            x: sampleValues,
            y: otu_id,
            type: "bar",
            orientation: "h"
        };

        var data = [trace1];

        var layout = {
            title: "Top 10 OTU",
            yaxis: {
                tickmode:"linear"
            },
            margin: {
                l: 100,
                r: 100,
                t: 100,
                b: 30
            }
        }

        Plotly.newPlot("bar", data);

        

// plot for bubble chart 
        var trace2 = {
            x: sampledata.samples[index]["otu_ids"],
            y: sampledata.samples[index]["sample_values"],
            text:  sampledata.samples[index]["otu_labels"],
            mode: "markers",
            marker: {
                size: sampledata.samples[index]["sample_values"],
                color: sampledata.samples[index]["otu_ids"]
            }
        };

        var data2 = [trace2];

        var layout = {
            xaxis:{title: "OTU ID"},
            showlegend: false,
            height: 600,
            width: 1000
        };

        Plotly.newPlot("bubble", data2, layout);

    });
        
}
    
    // init();

    function optionChanged(id) {
        init(id);
        getData(id);
    };
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