$(document).ready(function() {

    var _apiKey = "36d09f114b27afb5631407817df0b460";
    var _weatherURL = "http://api.openweathermap.org/data/2.5/weather?q=Atlanta&units=imperial&APPID=" + _apiKey;

    $.getJSON(_weatherURL, function(weatherData) {
        var _currTemp = weatherData.main.temp;
        var _tempLow = weatherData.main.temp_min;
        var _tempHigh = weatherData.main.temp_max;
        var _stateIcon = weatherData.weather.icon;
        var _location = weatherData.name;
        var _condition = weatherData.weather.main;
        
        
        var _canvas = $('#thecanvas');
        var _context = _canvas[0].getContext('2d');
        var _currentPerc = 0;

        var _shadeOfColor;
        if (_currTemp < 32) {
            _shadeOfColor = '#D4F0FF';
        } else if ((_currTemp >= 32) && (_currTemp < 59)) {
            _shadeOfColor = "#129793";
        } else if ((_currTemp >= 59) && (_currTemp < 75)) {
            _shadeOfColor = "#7cfc00";
        } else if ((_currTemp >= 75) && (_currTemp < 90)) {
            _shadeOfColor = "#FF6600";
        } else {
            _shadeOfColor = '#E3170D';
        }

        function animate(_current) {

            _context.fillStyle = "#ccc";
            _context.beginPath();
            _context.arc(155, 75, 65, 0, 2 * Math.PI);
            //_context.globalAlpha=0.1;
            _context.closePath();
            _context.fill();

            _context.lineWidth = 10;
            _context.strokeStyle = _shadeOfColor;
            
            _context.beginPath();
            //_context.arc(155,75,70, -Math.PI/2, (_currTemp/100)*Math.PI*2);
            _context.arc(155, 75, 70, (Math.PI * 1.5), (Math.PI * 2 * _current) + Math.PI * 1.5);
            _context.stroke();


            _context.font = "48px Myriad Pro";
            _context.fillStyle = "#0000ff";
            _context.textBaseLine = "bottom";
            
            _context.font = "24px Verdana";
            _context.fillText(_currTemp, 175-73, (85 - 70) * 6);
            
            _context.font = "12px Arial";
            _context.fillText(_tempLow, 10, (85-70) * 4);
            
            _currentPerc++;
            if (_currentPerc < _currTemp) {
                requestAnimationFrame(function() {
                    animate(_currentPerc / 100);
                });
            }
        }

        animate();
    });




    $(function() {
        // $('.tlt').textillate({ in : {
        //         effect: 'rollIn'
        //     }
        // });
    })

});