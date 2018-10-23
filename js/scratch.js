window.addEventListener('load', function () {

    const bell = new Audio('/sounds/definite.mp3');

    const boxes = document.querySelectorAll('.box');
    // console.log(boxes);
    [].forEach.call(boxes, function (box) {
        // console.log(box) 
        // });

        let user = box.querySelector('.user');
        user.querySelector('button').addEventListener('click', () => {
            user.querySelector('input').select();
            document.execCommand('copy');
            console.log('copied!');
        });
        let key = box.querySelector('.key');
        key.querySelector('button').addEventListener('click', () => {
            key.querySelector('input').select();
            document.execCommand('copy');
            console.log(key);
        });

        /* This proved to be bad form, so I removed it and changed it to line 3:
        // boxes.forEach(function (v,i,a) { */
        console.log(`${box.className} loaded`);
        let ticker = box.querySelector('.ticker p');
        let start = box.querySelector('.btn-timer');
        let time = 0;
        let timer = 0;
        let cd = 0;
        let timeInit;

        //convert time
        let convertTime = function (ms) {
            // let days = Math.floor(ms / (1000 * 60 * 60 * 24));
            let hours = Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((ms % (1000 * 60)) / 1000);
            // console.log(`${hours}h ${minutes}m ${seconds}s`);
            ticker.textContent = `${hours}h ${minutes}m ${seconds}s`;
        }

        //set time now:
        function setTime() {
            time = new Date().getTime();
            // console.log(`initial time set as: ${time}`);
        }

        //set time 3 hours from now
        function setTimer() {
            timer = time + 10800000;
            // console.log(`timer: ${timer}`);
        }

        //check time now
        //same functionality as setTime but is intended to be called continuously
        //should it be set to update the value of a variable?
        let timeCheck = function () {
            time = new Date().getTime();
            // console.log(`time: ${time}`);
        };

        //check time now against timer

        let countdown = function () {
            timeCheck();
            cd = timer - time;
            if (cd == 0) {
                bell.play();
                console.log("bell played!");
            }
            // console.log(`countdown: ${cd}`);
            convertTime(cd);
        };

        let runTimer = function () {
            // console.log('Timer running');
            timeCheck();
            countdown();
        };

        start.addEventListener('click', function () {
            time = 0;
            timer = 0;
            setTime();
            setTimer();
            timeInit = setInterval(runTimer, 1000);
        });
    });

});