function init() {

  let bell = new Audio('sounds/definite.mp3');

  // 10800000 === 3 hours

  //create a timer method
  Date.prototype.getTimer = function () {
    this.setHours(this.getHours() + 3);
    return this
  }

  function now() {
    let now = new Date();
    let countdown = setTimer - now;
    console.log("seconds:  " + Math.floor((countdown % (1000 * 60)) / 1000));
    let secs = now.getSeconds();
    let mins = now.getMinutes();
    let hours = now.getHours();
    // console.log(setTimer.getHours() - hours);
    // console.log(setTimer.getSeconds() - secs);
    return [hours, mins, secs];
  }
  
  //setInterval(now, 1000); //By creating a 'setInterval' for every second, we are re-generating 'now' repeatedly, thus giving us the updated time to count against our future time for the timer.

  //create a timer
  let setTimer = new Date().getTimer();

  const timeBtn = document.querySelector('.btn-timer');

  timeBtn.addEventListener('click', function() {
      setTimer = new Date().getTimer();
      setInterval(now, 1000);
    }
  )


  // Copy First Login

};

window.addEventListener('load', init)