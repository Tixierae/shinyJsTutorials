HTMLWidgets.widget({

  name: 'C3Hist',

  type: 'output',

  factory: function(el, width, height) {

    // create an empty chart
    var chart = null;
var my_th = 2;
var my_bins = [0.3, 0.2, 0.1, 0.05, 0.04, 0.01];

    return {

      renderValue: function(x) {

		// var my_th = x;
		  
        // check if the chart exists
        if(chart === null){

            // the chart did not exist and we want to create a new chart via c3.generate


var chart = c3.generate({  
	bindto: el,
    data: {
                xs: {
            'risk': 'x1', 
        },
        columns: [
             ['x1', 0, 50, 100, 150, 200, 250],
            ['risk',0.3, 0.2, 0.1, 0.05, 0.04, 0.01] // hardcoded

        ],
        type: 'bar',
        colors: {
            risk: function(d) {
                return (my_bins.indexOf(d.value) >= my_th) ? '#aec7e8':'#1f77b4'; //(d.value >= 45) ? '#1f77b4': '#aec7e8';
            }
        }
            
    },
bar: {
        width: {
            ratio: 1 // this makes bar width 50% of length between ticks
        }
        // or
        //width: 100 // this makes bar width 100px
    },
    legend: {
       show: false
    },
    // take care of color in tooltip
    tooltip: {
        contents: function (d, defaultTitleFormat, defaultValueFormat, color) {
           color = function() {
               return (my_bins.indexOf(d[0].value) >= my_th) ? '#aec7e8':'#1f77b4'; //return (d[0].value >= 45) ? '#00ff00' : '#ff0000';
          };
          return chart.internal.getTooltipContent.call(this, d, defaultTitleFormat, defaultValueFormat, color)
       }
    }
});
            // store the chart on el so we can get it latter
          el.chart = chart;
        }

        // at this stage the chart always exists
        // get the chart stored in el and update it
        el.chart.load();
		
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
