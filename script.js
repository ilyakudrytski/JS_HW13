function createClock() {
    var newClock = document.createElement('div');
    newClock.style.width = 400 + 'px';
    newClock.style.height = 400 + 'px';
    newClock.className = "clock";
    document.body.appendChild(newClock);

    createClockNum();
    createClockCenter();
    createHandHour();
    createHandMin();
    createHandSec();
    positioningElements();
}
createClock();



function createClockNum() {
    var clockFace = document.querySelector('.clock');

    for (var i = 1; i <= 12; i++) {
        var clockNum = document.createElement('div');
        clockNum.style.width = 50 + 'px';
        clockNum.style.height = 50 + 'px';

        var clockNumDigit = document.createTextNode(i);
        clockNum.appendChild(clockNumDigit);
        clockNum.className = 'clock-num';

        clockFace.appendChild(clockNum);

        clockNum.style.fontSize = 25 + 'px';
    }
}

function createClockCenter() {
    var clockFace = document.querySelector('.clock');

    var clockCenter = document.createElement('div');
    clockCenter.style.width = 1 + 'px';
    clockCenter.style.height = 1 + 'px';
    clockCenter.className = 'clock-center';

    clockFace.appendChild(clockCenter);
}

function createHandHour() {
    var clockFace = document.querySelector('.clock');

    var handHour = document.createElement('div');
    handHour.style.width = 10 + 'px';
    handHour.style.height = clockFace.offsetWidth / 3.5 + 'px';
    handHour.className = 'hand-hour';

    clockFace.appendChild(handHour);
}

function createHandMin() {
    var clockFace = document.querySelector('.clock');

    var handMin = document.createElement('div');
    handMin.style.width = 7 + 'px';
    handMin.style.height = clockFace.offsetWidth / 2.5 + 'px';
    handMin.className = 'hand-min';
    clockFace.appendChild(handMin);
}

function createHandSec() {
    var clockFace = document.querySelector('.clock');

    var handSec = document.createElement('div');
    handSec.style.width = 3 + 'px';
    handSec.style.height = clockFace.offsetHeight / 2 + 'px';
    handSec.className = 'hand-sec';
    clockFace.appendChild(handSec);
}

function positioningElements() {
    var clockFace = document.querySelector('.clock');
    var clockNum = document.querySelectorAll('.clock-num');
    var clockCenter = document.querySelector('.clock-center');
    var handHour = document.querySelector('.hand-hour');
    var handMin = document.querySelector('.hand-min');
    var handSec = document.querySelector('.hand-sec');

    var clockFaceCenterX = clockFace.offsetWidth / 2;
    var clockFaceCenterY = clockFace.offsetHeight / 2;

    // Clock face center positioning
    clockCenter.style.left = clockFaceCenterX - clockCenter.offsetWidth / 2 + 'px';
    clockCenter.style.top = clockFaceCenterY - clockCenter.offsetHeight / 2 + 'px';

    // Hour hand positioning
    handHour.style.left = clockFaceCenterX - handHour.offsetWidth / 2 + 'px';
    handHour.style.top = clockFaceCenterY - (handHour.offsetHeight * 0.9) + 'px';

    handHour.style.transformOrigin = 'center 90%';

    // Minute hand positioning 
    handMin.style.left = clockFaceCenterX - handMin.offsetWidth / 2 + 'px';
    handMin.style.top = clockFaceCenterY - (handMin.offsetHeight * 0.9) + 'px';

    handMin.style.transformOrigin = 'center 90%';

    // Second hand positioning
    handSec.style.left = clockFaceCenterX - handSec.offsetWidth / 2 + 'px';
    handSec.style.top = clockFaceCenterY - (handSec.offsetHeight * 0.9) + 'px';

    handSec.style.transformOrigin = 'center 90%';

    // Clock digits positioning
    for (var i = 0; i < clockNum.length; i++) {

        var angle = parseFloat(i * 30 + 30) / 180 * Math.PI;
        var radius = parseFloat(clockFace.offsetWidth / 2.5);

        var clockNumCenterX = clockFaceCenterX + radius * Math.sin(angle);
        var clockNumCenterY = clockFaceCenterY - radius * Math.cos(angle);

        clockNum[i].style.left = Math.round(clockNumCenterX - clockNum[i].offsetWidth / 2) + 'px';
        clockNum[i].style.top = Math.round(clockNumCenterY - clockNum[i].offsetHeight / 2) + 'px';
    }

    setClockHands();
}

function setClockHands() {
    var dateTime = new Date();

    var hour = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();

    var angleHour = (hour % 12) / 12 * 360 + min / 60 * 30;

    document.querySelector('.hand-hour').style.transform = 'rotate(' + angleHour + 'deg)';
    document.querySelector('.hand-min').style.transform = 'rotate(' + min * 6 + 'deg)';
    document.querySelector('.hand-sec').style.transform = 'rotate(' + sec * 6 + 'deg)';
}

setInterval(function() {
    setClockHands();
}, 1000);