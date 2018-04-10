$(document).ready(function() {
    // when page is loaded, remove the loading
    $('.loading').remove();

    // tooltip
    $('[data-toggle="tooltip"]').tooltip();

    // overall analysis
$('.round-chart').easyPieChart({
    'scaleColor': false,
    'lineWidth': 20,
    'lineCap': 'butt',
    'barColor': '#6d5cae',
    'trackColor': '#e5e9ec',
    'size': 190
});
    
     function initMap() {

        var location = new google.maps.LatLng(37.773972, -122.431297);

        var mapCanvas = document.getElementById('map');
        var mapOptions = {
            center: location,
            zoom: 12,
            panControl: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions);
         
         
          var image = {
            url: 'imgs/marker.png',
            // This marker is 20 pixels wide by 32 pixels high.
            size: new google.maps.Size(50, 50),
            // The origin for this image is (0, 0).
            origin: new google.maps.Point(0, 0),
            // The anchor for this image is the base of the flagpole at (0, 32).
            anchor: new google.maps.Point(0, 32)
        };
        // Shapes define the clickable region of the icon. The type defines an HTML
        // <area> element 'poly' which traces out a polygon as a series of X,Y points.
        // The final coordinate closes the poly by connecting to the first coordinate.
        var shape = {
            coords: [1, 1, 1, 20, 18, 20, 18, 1],
            type: 'poly'
        };
           var markerImage = 'imgs/marker.png';



        var beaches = [
            ['Clif house', 37.766819, -122.5069959, 4],
            ['Golden gate', 37.7892734, -122.4893223, 5],
            ['Hunter point', 37.7278637, -122.3903835, 3],
            ['SFO ', 37.6691145, -122.3315541, 2]

        ];
         
          for (var i = 0; i < beaches.length; i++) {
            var beach = beaches[i];
              var location = new google.maps.LatLng(beach[1], beach[2]);
        var marker = new google.maps.Marker({
            position: location,
            map: map,
            icon: image,
            shape: shape,
                 title: beach[0]
        });
                      var contentString = '<div class="info-window">' +
                '<h3>Sensor Information</h3>' +
                '<div class="info-content">' +
                '<p> 2 sesors Active from 15 Hr</p>' +
                '<p> 1 Sesor is down from 10 Hr</p>' +
                '</div>' +
                '</div>';

        var infowindow = new google.maps.InfoWindow({
            maxWidth: 400
        });

google.maps.event.addListener(marker,'click', (function(marker,contentString,infowindow){ 
        return function() {
           infowindow.setContent(contentString);
           infowindow.open(map,marker);
        };
    })(marker,contentString,infowindow)); 

          }
    


    }

    google.maps.event.addDomListener(window, 'load', initMap);

    // performance evaluation
$('#performance-eval .spider-chart').highcharts({

    chart: {
        polar: true,
        type: 'area'
    },

    title: {
        text: ''
    },

    xAxis: {
        categories: ['Taming', 'Acessory', 'Development', 'Grooming', 'Awareness', 'Ration'],
        tickmarkPlacement: 'on',
        lineWidth: 0
    },

    yAxis: {
        gridLineInterpolation: 'polygon',
        lineWidth: 0,
        min: 0
    },

    tooltip: {
        shared: true,
        pointFormat: '<span style="color:{series.color}">{series.name}: <b>${point.y:,.0f}</b><br/>'
    },

    legend: {
        align: 'right',
        verticalAlign: 'top',
        y: 70,
        layout: 'vertical'
    },

    series: [{
        name: 'Allocated resources',
        data: [45000, 39000, 58000, 63000, 38000, 93000],
        pointPlacement: 'on',
        color: '#676F84'
    },
    {
        name: 'Spent resources',
        data: [83000, 49000, 60000, 35000, 77000, 90000],
        pointPlacement: 'on',
        color: '#f35958'
    }]

});

    // custom checkboxes
    var elems, switcheryOpts;

    elems = Array.prototype.slice.call(document.querySelectorAll('.swithcery'))

    switcheryOpts = {
        color: '#1bc98e'
    };

    elems.forEach(function(el) {
        var switchery = new Switchery(el, switcheryOpts);
    });

    // ration stock stacked area
    $('#ration-stock .stacked-area').highcharts({
        chart: {
            type: 'area'
        },
        title: {
            text: ''
        },
        xAxis: {
            allowDecimals: false,
            labels: {
                formatter: function () {
                    return this.value; // clean, unformatted number for year
                }
            }
        },
        yAxis: {
            title: {
                text: 'Ration stock'
            },
            labels: {
                formatter: function () {
                    return this.value / 1000 + 'k';
                }
            }
        },
        tooltip: {
            pointFormat: '{series.name} produced <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
        },
        plotOptions: {
            area: {
                pointStart: 100,
                marker: {
                    enabled: false,
                    symbol: 'circle',
                    radius: 2,
                    states: {
                        hover: {
                            enabled: true
                        }
                    }
                }
            }
        },
        series: [{
            name: 'Doge ration stock',
            data: [null, null, null, null, null, 6, 11, 32, 110, 235, 369, 640,
                1005, 1436, 2063, 3057, 4618, 6444, 9822, 15468, 20434, 24126,
                27387, 29459, 31056, 31982, 32040, 31233, 29224, 27342, 26662,
                26956, 27912, 28999, 28965, 27826, 25579, 25722, 24826, 24605,
                24304, 23464, 23708, 24099, 24357, 24237, 24401, 24344, 23586,
                22380, 21004, 17287, 14747, 13076, 12555, 12144, 11009, 10950,
                10871, 10824, 10577, 10527, 10475, 10421, 10358, 10295, 10104],
            color: '#1bc98e'
        },
        {
            name: 'Evil cat stock',
            data: [null, null, null, null, null, null, null, null, null, null,
                5, 25, 50, 120, 150, 200, 426, 660, 869, 1060, 1605, 2471, 3322,
                4238, 5221, 6129, 7089, 8339, 9399, 10538, 11643, 13092, 14478,
                15915, 17385, 19055, 21205, 23044, 25393, 27935, 30062, 32049,
                33952, 35804, 37431, 39197, 45000, 43000, 41000, 39000, 37000,
                35000, 33000, 31000, 29000, 27000, 25000, 24000, 23000, 22000,
                21000, 20000, 19000, 18000, 18000, 17000, 16000],
            color: '#676F84'
        }]
    });

      $.ajax({
       url: 'http://localhost:8080/data/data.json',
       dataType: 'json',
       success: function(data) {
           //alert('done');
           $('#clienti').bootstrapTable({
              data: data
           });
       },
       error: function(e) {
           console.log(e.responseText);
       }
    });

    // daily usage
    $('#daily-usage .area-chart').highcharts({
    chart: {
        type: 'line'
    },
    title: {
        text: 'Monthly Average Co2'
    },
    subtitle: {
        text: 'Source: Sensor '
    },
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    yAxis: {
        title: {
            text: 'Co2'
        }
    },
    plotOptions: {
        line: {
            dataLabels: {
                enabled: true
            },
            enableMouseTracking: false
        }
    },
    series: [{
        name: 'San Francisco',
        data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
    }, {
        name: 'San Jose',
        data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
    }]
});
});
