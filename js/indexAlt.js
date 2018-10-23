function init() {

  let bell = new Audio('sounds/definite.mp3');

  // 10,800,000 ms === 3 hours
  // 10,800 s (10,800,000 / 1000 s) === 3 hours
  // 180 m (10,800 s / 60) === 3 hours

  //create a timer method
  Date.prototype.getTimer = function () {
    this.setHours(this.getHours() + 3);
    return this
  }

  let ms = 10800000;
  let sec = 10800;
  let min = sec/60;
  console.log(`minutes: ${min}`);
  let hrs = min/60;
  console.log(`hrs: ${hrs}`);

  // function mins () {
  //   let mins = 
  //   console.log(mins);
  // }

  let timer = function() {
    sec--;
    console.log(sec);
    // mins();
  }

  const timeBtn = document.querySelector('.btn-timer');

  timeBtn.addEventListener('click', function() {
    setInterval(timer, 1000);
    }
  );

  // function now() {
  //   let now = new Date();
  //   let countdown = setTimer - now;
  //   console.log("seconds:  " + Math.floor((countdown % (1000 * 60)) / 1000));
  //   let secs = now.getSeconds();
  //   let mins = now.getMinutes();
  //   let hours = now.getHours();
  //   // console.log(setTimer.getHours() - hours);
  //   // console.log(setTimer.getSeconds() - secs);
  //   return [hours, mins, secs];
  // }
  
  //setInterval(now, 1000); //By creating a 'setInterval' for every second, we are re-generating 'now' repeatedly, thus giving us the updated time to count against our future time for the timer.

  //create a timer
  // let setTimer = new Date().getTimer();

  // const timeBtn = document.querySelector('.btn-timer');

  // timeBtn.addEventListener('click', function() {
  //     setTimer = new Date().getTimer();
  //     setInterval(now, 1000);
  //   }
  // )


  // Copy First Login

};

window.addEventListener('load', init)