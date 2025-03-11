HTMLWidgets.widget({

  name: 'C3LineBarChart',

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
          			json: [],
          			keys: {
          				x: "Attributes",
          				value: keys,
          			},
          			types: {
          				Counts: 'bar'
          			},
        		},
        		
        		padding: {
        		    bottom: 0, // Remove extra whitespace below
        		    top: 5,  // Keep minimal padding for aesthetics
        		},
        		
        		bar: {
        		    width: {
        		        ratio: 0.835 // Keeps bar width proportionate
        		    }
        		},

        		legend: {
        		    show: false
        		},

          		axis: {
          		    x: {
          		        type: 'category',
          		        tick: {
          		            rotate: -45,
          		            multiline: false
          		        },
          		        height: 60 // Enough space for labels, adjust as needed
          		    },
          		    y: {
          		        tick: {
          		            format: function (d) {
          		                return (parseInt(d) == d) ? d : null;
          		            }
          		        }
          		    }
          		},
          		
          		size: {
          		    height: 250 // Ensures optimal fit without extra space
          		},

          		clipPath: false // Prevents extra clipping space
          	});

		  // store the chart on el so we can get it later
          el.chart = chart;
			
        }

		el.chart.load({json: x.dataset});
      },

      resize: function(width, height) {
          chart.resize({height: height, width: width});
      }
    };
  }
});
