$(document).ready(function() {

    var _canvas = document.getElementById('the-canvas');
    var _context = _canvas.getContext('2d');


    // _context.beginPath();

    // _context.moveTo(50,50);
    // _context.lineTo(100,100);
    // _context.stroke();

    // _context.beginPath();
    // _context.arc(200,75,50,0,2*Math.PI);
    // _context.strokeStyle = "red";
    // _context.fillStyle = "lightgray";
    // _context.fill();
    // _context.stroke();

    // _context.beginPath();
    // _context.rect(20,200,100,200);
    // _context.stroke();

    var x = 10;
    var y = 10;
    var radius = 10;
    var endArc = 0;
    var r = 0;
    var g = 0;
    var b = 0;

    function draw() {
        _context.fillStyle = "#" + r + g + b;
        _context.clearRect(0, 0, 500, 500);
        _context.beginPath();
        _context.arc(x, y, radius, 0, Math.PI* endArc);
        _context.fill();
        x += 4;
        y += 2;
        radius += 1;
        endArc += .1;
        r++;
        g++;
        b++;
        
    }

    setInterval(draw, 15);








    $(function() {
        $('.tlt').textillate({ in : {
                effect: 'rollIn'
            }
        });
    })

});