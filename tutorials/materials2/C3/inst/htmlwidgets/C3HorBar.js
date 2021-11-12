HTMLWidgets.widget({

  name: 'C3HorBar',

  type: 'output',

  factory: function(el, width, height) {

	
	var chart = null;

    return {

      renderValue: function(x) {

	  if(chart===null){
		  
		keys = _.keys(x.dataset); //var mywidgetData =  //{"Attributes":["trunk","shoulder","elbow"],"Counts":[0.1,0.25,0.65]} 
		my_title = x.title;
		
        chart = c3.generate({

            bindto: el,
                data: {

        json: [],//x.my_df,
                
                    keys: {
                          x: "Outcomes",

                        value: keys,
                    },
                    types: {

                        Probability: 'bar'
                    },
                  },    bar: {
        width: {
            ratio: 0.835
        }
    },
    	legend: {
        show: false
    },
                axis: {rotated: true,
        x: {
            type: 'category',
            tick: {
                rotate: 65,
                multiline: false
            },
            height: 160
        },
                },
				
				title: {text:my_title},

        });

          el.chart = chart;
		
	  }
	  
	  el.chart.load({json: x.dataset});
	  //el.chart.load({ columns: [
       //     ['Attributes', 'a', 'b', 'c'],
        //    ['Counts', 0.1,0.2,0.7]
        //]});
	  
		
      },

      resize: function(width, height) {

        chart.resize({height:height, width:width})
      }

    };
  }
});
