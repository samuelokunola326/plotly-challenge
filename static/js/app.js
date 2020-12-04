
//  accessing json data    
var jsonData = "data/samples.json";
   
// funtion to load page 
    function init() {
        d3.json(jsonData).then(function(sampledata) {
            console.log(sampledata);
            
            // getting drop down values and passing into an array 
            var names = sampledata.names;
            console.log(names)
            
            // call back to funtion that creates drop down 
            dropdownData(names)
            
            // call back to create default plot that shows
            initPLT(names[0])
            
            // call back default values for demographic info 
            getData(names[0])

            

        });
            
    }
// call back to initial load of page 
    init();


    // function that gets the data based on ID/name to filter for dem info
function getData(id) {
    d3.json(jsonData).then(function(sampledata) {
        var metaResult = sampledata.metadata;
        
        // filter func to filter by id use d3 to select div to place data received
        var result = metaResult.filter(meta => meta.id.toString() === id)[0];
        var demoInfo = d3.select("#sample-metadata");
        demoInfo.html("");
        Object.entries(result).forEach((key) => {   
            demoInfo.append("h5").text(key[0] + ": " + key[1] + "\n");
        });
    });
}


  
    // refernce dropdown  
var selData = d3.select("#selDataset");

// creating a function to call back later to create drop down data
function dropdownData(x){
    
    x.forEach((x) => {
        // using d3 to append a option element for each Object in the Array
        var opt = selData.append("option");
        
        // then using the objects.values to extract the values
        Object.values(x).forEach(([value]) => {
            // console.log(value);
            
            //append the values to each option and input into option value slot
            var val = opt.append("value");
            val.text(value); 
        });
    });

}

// creating funtion to replot charts after new selection is made from drop down 
function initPLT(id) {
    d3.json(jsonData).then(function(sampledata) {
        console.log(sampledata.samples);

        // using findIndex to return index position of selected id + displaying index
        var index = sampledata.samples.findIndex(sample => sample.id === id);
        console.log(`The index in data.samples array is: ${index}.`);
        
        // creating variable to pass to bar chart 
        var sampleValues = sampledata.samples[index]["sample_values"].slice(0,10).reverse()
        var sampleLabels = sampledata.samples[index]["otu_labels"].slice(0,10).reverse();
        var top_10_ids = (sampledata.samples[index]["otu_ids"].slice(0, 10)).reverse();
        var otu_id = top_10_ids.map(d => "OTU " + d);
        


// bar chart data + ploting bar chart
        var trace1 = {
           
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

        Plotly.newPlot("bar", data, layout);

        

// bubble chart data + plotting bubble chart 
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

        var layout2 = {
            xaxis:{title: "OTU ID"},
            showlegend: false,
            height: 600,
            width: 1000
        };

        Plotly.newPlot("bubble", data2, layout2);

    });
        
}
    
    
// function listening for when a new id number is selected from the drop down 
    function optionChanged(id) {
        initPLT(id);
        getData(id);
    };
   