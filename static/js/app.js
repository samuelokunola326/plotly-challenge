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

    d3.json("samples.json").then(function(data){
        console.log(data);
    });

   