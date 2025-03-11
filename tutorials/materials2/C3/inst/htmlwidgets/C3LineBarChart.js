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
                            flush: true // Forces correct alignment immediately
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
                    height: 250 // Ensures optimal fit
                },

                clipPath: false // Prevents extra clipping space
            });

            el.chart = chart;
        }

        el.chart.load({ json: x.dataset });

        // **Forces re-render to remove whitespace immediately**
        setTimeout(function () {
            el.chart.resize();
        }, 10);
      },

      resize: function(width, height) {
          chart.resize({ height: height, width: width });
      }
    };
  }
});
