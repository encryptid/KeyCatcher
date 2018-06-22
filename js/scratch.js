let time = 0;
let timer = 0;

//set time now:
function setTime() {
    time = new Date().getTime();
}

//set time 3 hours from now
function setTimer() {
    timer = time + 10800000;
}

//check time now
let timeCheck = setInterval(function() {
    new Date().getTime();
}, 900);

//check time now against timer

