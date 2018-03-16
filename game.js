window.onload = function() {
   var canvas = document.createElement('canvas'),
       blade = canvas.getContext('2d');

    canvas.width = window.innerWidth - 5;
    canvas.height = window.innerHeight - 5;

    blade.width = window.innerWidth;
    blade.height = window.innerHeight;

    blade.fillStyle  = '#000';
    blade.fillRect(0, 0, canvas.width, canvas.height);

    document.body.appendChild(canvas);
    colorChange(blade);
};

function colorChange(data) {
    var count = 0,
        arrColors = ['red', 'blue', 'orange', 'green', 'yellow'];

    data.width = window.innerWidth / 2;
    data.height = window.innerHeight / 2;
    setInterval(function () {
        var randomColors = Math.floor(Math.random() * (arrColors.length)),
            randomJumpWidth = Math.floor(Math.random() * window.innerWidth),
            randomJumpHeight = Math.floor(Math.random() * window.innerWidth);

        data.beginPath();
        data.fillStyle = arrColors[randomColors];
        data.arc(randomJumpWidth, randomJumpHeight, randomColors, 0, 2*Math.PI, false);
        data.opacity = 0. + randomColors;
        console.log(data);
        data.fill();
        data.stroke();
        count += 10;
    }, 5);
}



