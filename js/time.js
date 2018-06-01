/*
let current = new Date();
//simply creating a new date instance of the current date and time.

let risk = current.getTime();
//getTime() returns a number that is equivalent to the number of milliseconds since "Epoch Time":
//January 1st, 1970 @ 00:00 (midnight).
//In this case, it's '1527778811'. Helpful, no?

let riskTwo = function () {
    return risk + 10800000;
};
//I'm adding the current time in milliseconds to 10800000 (3 hours);

let risky = new Date(risk);
//I am taking the date and setting it to the current date in ms
//It appears to be adding 11 hours to our current time, for reasons I cannot yet understand.

let timer = current.setHours(3);
//this appears to set the hour to 3 am, local time. The hours and minutes remain unchanged.

let future = new Date(timer);
//this appears to be an unnecessarily complicated way to do the same thing as above.
//essentially, I'm creating a new Date object with the current time and setting it to the value of
//'timer' which is now 3. So it returns the same thing as 'timer'.

let b = new Date(Date.UTC(10800000));

console.log(`current = ${current}`);
console.log(`risk  = ${risk}`);
console.log(`risk is ${typeof(risk)}`);
console.log(`risk2 = ${riskTwo()}`);
console.log(`risk2 is ${typeof(riskTwo)}`);
console.log(risk === riskTwo);
console.log(`risky = ${risky}`);
console.log(`timer = ${timer}`);
console.log(`future is ${future}`);
console.log(`b = ${b}`);
*/

//I guess the question is, can I get the current time in ms, add the appropriate amount of ms
//(10800000, I believe) and convert it back into 'Epoch Time'?

// let now = new Date().getTime();
// console.log(now);

// let oneEighty = () => now + 10800000;
// console.log(oneEighty());

// let counter = () => oneEighty() - now;
// console.log(counter());
// I don't think I need this

//After running the above calculations, I realize that I am a class-a dolt.
//I don't need to figure out the difference between two times. It's always 10800000 ms.
//I probably don't even need to work with time, assuming I use 'setInterval'
//Wait, yes I do. Because I need a function that checks the current time against a future time every second.
//Mind !== Not Blown!



// Time calculations for days, hours, minutes and seconds
// let days = Math.floor(10800000 / (1000 * 60 * 60 * 24));
// console.log(days);
// let hours = Math.floor((10800000 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
// console.log(hours);
// let minutes = Math.floor((10800000 % (1000 * 60 * 60)) / (1000 * 60));
// console.log(minutes);
// let seconds = Math.floor((10800000 % (1000 * 60)) / 1000);
// console.log(seconds);

/*
What information do we need?
* We need to know what time it is now.
* We need to know what time it will be 3 hours from now.
* We need the difference between those two numbers.
** Initially it will be 10800000, but as the current time updates, that number should decrease.
*/

let ticker = document.querySelector('.ticker p');
console.log(ticker);

let now = new Date().getTime();
let countDown = now + 10800000;
let counter = 0;

let timer = setInterval(function () {
    
    now = new Date().getTime();

    counter = countDown - now;

    let days = Math.floor(counter / (1000 * 60 * 60 * 24));
    let hours = Math.floor((counter % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((counter % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((counter % (1000 * 60)) / 1000);
    console.log(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    ticker.textContent =`${hours}h ${minutes}m ${seconds}s`;
    if (counter <= 1) {
        clearInterval(timer);
        console.log('stop!');
    }
}, 1000);

/*
// Set the date we're counting down to
let countDownDate = new Date("Sep 5, 2018 15:37:25").getTime();
// Should return the entered date in ms

// Update the count down every 1 second
let x = setInterval(function () {

    // Get todays date and time
    let now = new Date().getTime();
    // Returns the current time in ms

    // Find the distance between now an the count down date
    let distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("demo").innerHTML = days + "d " + hours + "h " +
        minutes + "m " + seconds + "s ";

    // If the count down is finished, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);
*/