HTMLWidgets.widget({

  name: 'C3LineBarChart',

  type: 'output',

  factory: function(el, width, height) {

    var chart = null;

    return {

      renderValue: function(x) {
        if (chart === null) {

            keys = _.keys(x.dataset);

            chart = c3.generate({
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
                    top: 5,
                },

                bar: {
                    width: {
                        ratio: 0.835
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
                            multiline: false,
                            flush: true // Ensures proper alignment immediately
                        },
                        height: 60
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
                    height: 250 // Forces correct chart height at start
                },

                clipPath: false // Prevents extra clipping space
            });

            el.chart = chart;
        }

        el.chart.load({ json: x.dataset });

        // **Force a flush to immediately fix whitespace**
        chart.flush();

        // **Ensure a re-render without user interaction**
        requestAnimationFrame(() => {
            el.chart.resize();
        });
      },

      resize: function(width, height) {
          chart.resize({ height: height, width: width });
      }
    };
  }
});
