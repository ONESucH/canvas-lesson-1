window.onload = function() {
   console.log('Загрузились');
   var canvas = document.createElement('canvas'),
       blade = canvas.getContext('2d');

    canvas.width = window.innerWidth - 5;
    canvas.height = window.innerHeight - 5;

    blade.width = window.innerWidth;
    blade.height = window.innerHeight;

    blade.fillStyle  = '#000000';
    blade.opacity = 0.5;
    blade.fillRect(0, 0, canvas.width, canvas.height);

    document.body.appendChild(canvas);
    colorChange(blade);
};

function colorChange(data) {
    var count = 0,
        arrColors = ['red', 'blue', 'orange', 'green', 'yellow'];

    data.width = window.innerWidth - 5;
    data.height = window.innerHeight - 5;
    console.log('Вошли во 2-ую функцию', data);
    setInterval(function () {
        var randomColors = Math.floor(Math.random() * (arrColors.length));

        data.fillStyle = arrColors[randomColors];
        console.log('Изменили цвет', data);
        data.fill();
        data.fillRect(count, count, 100, 100);
        count += 10;
    }, 500);
}



