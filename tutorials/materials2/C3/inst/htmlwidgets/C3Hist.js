HTMLWidgets.widget({

    name: 'C3Hist',

    type: 'output',

    factory: function(el, width, height) {

        // create an empty chart
        var chart = null;

        return {

            renderValue: function(x) {

                // check if the chart exists
                if(chart === null){

                    // the chart did not exist and we want to create a new chart via c3.generate
                    var chart = c3.generate({  
                        bindto : el,
                        data: {
                            columns: [
                                ['x1'].concat(x.x1),
                                ['prob'].concat(x.prob)
                            ],
                            type: 'bar',
                            xs: {
                                'prob': 'x1', 
                            },
                            colors: {
                                prob: function(d) {
                                    return (x.prob.indexOf(d.value) >= x.my_th) ? '#aec7e8':'#1f77b4';
                                }
                            },
                            onclick:  function (d, element) {Shiny.onInputChange(el.id,d)}
                        },
                        bar: {
                            width: {
                                ratio: 1 // this makes bar width 100% of length between ticks
                            }
                        },
                        legend: {
                            show: false
                        },
                        // take care of color in tooltip
                        tooltip: {
                            contents: function (d, defaultTitleFormat, defaultValueFormat, color) {
                                color = function() {
                                    return (x.prob.indexOf(d[0].value) >= x.my_th) ? '#aec7e8':'#1f77b4';
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
                var old_keys = _.keys(chart.x());
                var new_keys = _.keys(x.values);
                var diff     = _.difference(old_keys,new_keys);
                // load the new data (stored in x.values)
                chart.load({
                    columns: [
                        ['x1'].concat(x.x1),
                        ['prob'].concat(x.prob)
                    ]
                });
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
