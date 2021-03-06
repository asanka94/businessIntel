<script src="https://code.highcharts.com/highcharts.js"></script>
<script src="https://code.highcharts.com/modules/exporting.js"></script>
<script
src="https://code.jquery.com/jquery-3.2.1.min.js"
integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
crossorigin="anonymous"></script>



var labledata=[];
var labledata2=[];
var featuresdata=[];


var endpoint='api/chart/data'
$.ajax({
    method:"GET",
    url : endpoint,
    success:function(data){
        console.log(data)

        featuresdata=data.customers;
        labledata=data.sales;
        labledata2=data.sales;
        console.log(labledata2);
        console.log(featuresdata);

                Highcharts.chart('container', {
                chart: {
                    type: 'line'
                },
                title: {
                    text: 'Monthly Average Temperature'
                },
                subtitle: {
                    text: 'Subtitile'
                },
                xAxis: {
                    categories: featuresdata
                },
                yAxis: {
                    title: {
                        text: 'Temperature (°C)'
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
                    name: 'Tokyo',
                    data:labledata
                }, {
                    name: 'London',
                    data: labledata2
                }]
            });
        
    },
    error:function(error_data){
        console.error("error")
        console.log(error_data)
    }
})
