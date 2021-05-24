function main() {
    var panelsElements = document.querySelector('.wrapper');
    var redCount = document.querySelector('.red-counter');
    var greenCount = document.querySelector('.green-counter');
    var blueCount = document.querySelector('.blue-counter');
    var red = document.querySelector('.red');
    var green = document.querySelector('.green');
    var blue = document.querySelector('.blue');
    var greenTitle = document.querySelector('.green-title');
    var redTitle = document.querySelector('.red-title');
    var blueTitle = document.querySelector('.blue-title');

    red.innerHTML = redTitle.innerHTML;
    green.innerHTML = greenTitle.innerHTML;
    blue.innerHTML = blueTitle.innerHTML;

    panelsElements.onclick = function (event) {
        if (event.target != this) {
            if (event.target.className == "green") {
                greenCount.innerHTML++;
                event.target.innerHTML = greenTitle.innerHTML;
            }
            else if (event.target.className == "red") {
                redCount.innerHTML++;
                event.target.innerHTML = redTitle.innerHTML;
            }
            else if (event.target.className == "blue") {
                blueCount.innerHTML++;
                event.target.innerHTML = blueTitle.innerHTML;
            }
        }
    };
}
window.onload = main;