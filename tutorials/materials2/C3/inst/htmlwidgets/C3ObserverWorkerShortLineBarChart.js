HTMLWidgets.widget({

  name: 'C3ObserverWorkerShortLineBarChart',

  type: 'output',

  factory: function(el, width, height) {

    // create an empty chart
    var chart = null;

    return {

      renderValue: function(x) {

        // if the chart does not exist, create it via c3.generate
        if(chart===null){

            keys = _.keys(x.dataset);

          	chart = c3.generate({

          	  // specify the container element we want the chart to render in
          		bindto: el,
          		data: {

          		  // intialize with an empty array
          			json: [],
          			keys: {
          			      // use Time for x-axis
          			      x: "Attributes",

          			  // use the remaining data for y-values
          				value: keys,
          			},
          			// set chart types
          			types: {

          		  	// default is line, we want totals to be displayed as bars
          				Observer: 'bar',
						      Worker: 'bar'
          			},
						        colors: {
            Observer: '#1f77b4',
            Worker: '#ff7f0e'
        },
          			//axes: {
          			  // extra y-axis
          			//	Total: 'y2'
          			//},
        		  },
				  padding: {
      bottom: 5
   },
				  
				  bar: {
        width: {
            ratio: 0.65 // this makes bar width 50% of length between ticks
        }
        // or
        //width: 100 // this makes bar width 100px
    },
         axis: {
        x: {
            type: 'category',
            tick: {
                rotate: 65,
                multiline: false
            },
            height: 50
        },
		// taken from: https://stackoverflow.com/questions/31703525/c3-charts-dont-want-decimal-numbers-in-y-axis
		y: {
            tick: {
                format: function (d) {
                    return (parseInt(d) == d) ? d : null;
                }
            }
        }
          			//y2: {
          			  // we want a second y-axis
          			//	show: true
          			//}
          		},

          		// display a subchart - this will be used for brushing in a later stage
          		//subchart: {
          		//	show: true
          		//}
          	});
			
		  // store the chart on el so we can get it latter
          el.chart = chart;
			
        }

		
		el.chart.load({json: x.dataset});
		
        // at this stage the chart always exists
        // get difference in keys
        //var old_keys = _.keys(chart.x());
        //var new_keys = _.keys(x.dataset);
        //var diff     = _.difference(old_keys,new_keys);

        // update the data and colors
        //chart.load({
         // json  : x.dataset,
          //colors: x.colors,

          // unload data that we don't need anymore
         // unload: diff
        //});
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
