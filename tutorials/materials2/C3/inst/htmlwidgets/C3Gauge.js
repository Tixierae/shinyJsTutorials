HTMLWidgets.widget({

  name: 'C3Gauge',

  type: 'output',

  factory: function(el, width, height) {

    // create an empty chart
    var chart = null;

    return {

      renderValue: function(x) {

        // check if the chart exists
        if(chart === null){

            // the chart did not exist and we want to create a new chart via c3.generate
          chart = c3.generate({
                bindto: el,
                data: {
                    json: x,
                    type: 'gauge',
                    onclick:  function (d, element) { Shiny.onInputChange(el.id,d)}
                },
                gauge: {
                    label:{
                        format: function(value, ratio){ return value;}
                    },
                    min: 0,
                    max: 100,
                    width: 15,
                    units: 'value'
                }
            });

            // store the chart on el so we can get it latter
          el.chart = chart;
        }

        // at this stage the chart always exists
        // get the chart stored in el and update it
        el.chart.load({json: x});

      }
    };
  }
});

// HTMLWidgets.widget({

  // name: 'C3Gauge',

  // type: 'output',

  // factory: function(el, width, height) {

    // // create an empty chart
    // var chart = null;

    // return {

      // renderValue: function(x) {

        // // check if the chart exists
        // if(chart === null){

            // // the chart did not exist and we want to create a new chart via c3.generate
          // chart = c3.generate({
                // bindto: el,
                // data: {
                    // json: x,
                    // type: 'gauge',
                    // onclick:  function (d, element) { Shiny.onInputChange(el.id,d)}
                // },
                // gauge: {
                    // label:{
                        // format: function(value, ratio){ return value;}
                    // },
                    // min: 0,
                    // max: 100,
                    // width: 15,
                    // units: 'value'
                // }
				// //,
				 // //   color: {
        // // pattern: ['#60B044','#F6C600','#F97600','#FF0000'], // the three color levels for the percentage values.
        // // threshold: {
// //            unit: 'value', // percentage is default
// //            max: 200, // 100 is default
           // // values: [30, 60, 90, 100]
        // //}
    // //}
            // });

            // // store the chart on el so we can get it latter
          // el.chart = chart;
        // }

        // // at this stage the chart always exists
        // // get the chart stored in el and update it
        // el.chart.load({json: x});
		

      // },
	  	   // resize: function(width, height) {
      // // this will vary based on the JavaScript library
      // // in the case of C3 we are fortunate that there is a resize method
      // //  http://c3js.org/samples/api_resize.html
      // chart.resize({height:height, width:width})
    // }
    // };
  // }
// });

