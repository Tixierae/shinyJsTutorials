HTMLWidgets.widget({

  name: 'C3GaugeRisk',

  type: 'output',

  factory: function(el, width, height) {

    // create an empty chart
    var chart = null;

    return {

      renderValue: function(x) {

        // check if the chart exists
        if(chart === null){
			
			keys = _.keys(x.dataset);
			
            // the chart did not exist and we want to create a new chart via c3.generate
          chart = c3.generate({
                bindto: el,
                data: {
					json: [],
          			keys: {
          			  // use the remaining data for y-values
          				value: keys,
          			},
                    //json: x.risk,
                    type: 'gauge',
                    onclick:  function (d, element) { Shiny.onInputChange(el.id,d)}
                },
                gauge: {
                    label:{
                        format: function(value, ratio){ return value;}
                    },
                    min: 0,
                    max: 100,
                    width: 20,
                    units: '% of max simulated risk'
                },
				   color: {
        pattern: x.my_colors, // the three color levels for the percentage values.
        threshold: {
           unit: 'value', // percentage is default
           max: x.my_max, // 100 is default
           values: x.my_thresholds//[8, 14, 28, 60, 100]
        }
    }
            });

            // store the chart on el so we can get it latter
          el.chart = chart;
        }

        // at this stage the chart always exists
        // get the chart stored in el and update it
        el.chart.load({json: x.risk});
		

      },
	  	   resize: function(width, height) {
      // this will vary based on the JavaScript library
      // in the case of C3 we are fortunate that there is a resize method
      //  http://c3js.org/samples/api_resize.html
      chart.resize({height:height, width:width})
    }
    };
  }
});

