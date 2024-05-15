// Data retrieved https://en.wikipedia.org/wiki/List_of_cities_by_average_temperature
Highcharts.chart('container', {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'Activity'
    },
    // subtitle: {
    //     text: 'Source: ' +
    //         '<a href="https://en.wikipedia.org/wiki/List_of_cities_by_average_temperature" ' +
    //         'target="_blank">Wikipedia.com</a>'
    // },
    xAxis: {
        categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri',
            'Sat'],
        accessibility: {
            description: 'Months of the year'
        }
    },
    yAxis: {
        title: {
            text: 'Number'
        },
        labels: {
            format: '{value}%'
        }
    },
    tooltip: {
        crosshairs: true,
        shared: true
    },
    plotOptions: {
        spline: {
            marker: {
                radius: 0,
                lineColor: '#666666',
                lineWidth: 0
            }
        },
        series: {
            color: '#2563EB',
            lineWidth: 3
        }
    },
    series: [{
       
        
        data: [{
            y: 50,
            
            accessibility: {
                description: 'Snowy symbol, this is the coldest point in the chart.'
            }
        }, 60, 35, 68, 49, 75, 50]
    }]
});





