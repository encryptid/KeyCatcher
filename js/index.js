let bell = new Audio('sounds/definite.mp3');

// 10800000 === 3 hours

// Copy First Login

let fname = document.getElementById('user1');
let fnButton = document.getElementById('user1btn');

fnButton.addEventListener('click', function() {
  fname.select();
  document.execCommand('copy');
  console.log('first name copied!');
});

// Copy First Key

let one = document.getElementById('one');
let first = document.getElementById('first');
let uno = document.querySelector(".popup.one");

first.addEventListener('click', function() {
  let remove = function () {
    uno.classList.remove('off');
    console.log('reveal!');
  }
  let text = one.value;
  one.select();
  document.execCommand('copy');
  console.log(`copied ${text}`);
  remove();
  setTimeout (function() {
    uno.classList.add('off');
  }, 2000);
  setTimeout(function() {
    console.log('first timer started');
    bell.play()
    }, 10800000);
});

// Copy Second Login

let sname = document.getElementById('user2');
let snButton = document.getElementById('user2btn');

snButton.addEventListener('click', function() {
  sname.select();
  document.execCommand('copy');
  console.log('second name copied!');
});

// Copy Second Key

let two = document.getElementById('two');
let second = document.getElementById('second');
let dos = document.querySelector('.popup.two')
second.addEventListener('click', function() {
  let remove = function () {
    dos.classList.remove('off');
    console.log('reveal!');
  }
  let text = two.value;
  two.select();
  document.execCommand('copy');
  console.log(`copied ${text}`);
  remove();
  setTimeout (function() {
    dos.classList.add('off');
  }, 2000);
  setTimeout(function() {
    console.log('second timer started');
    bell.play()
    }, 10800000);
});

// Copy Third Login

let tname = document.getElementById('user3');
let tnButton = document.getElementById('user3btn');

tnButton.addEventListener('click', function() {
  tname.select();
  document.execCommand('copy');
  console.log('third name copied!');
});

// Copy Third Key

let three = document.getElementById('three');
let third = document.getElementById('third');
let tres = document.querySelector('.popup.three');
third.addEventListener('click', function() {
  let remove = function () {
    tres.classList.remove('off');
    console.log('reveal!');
  }
  let text = three.value;
  three.select();
  document.execCommand('copy');
  console.log(`copied ${text}`);
  remove();
  setTimeout (function() {
    tres.classList.add('off');
  }, 2000);
  setTimeout(function() {
    console.log('third timer started');
    bell.play()
    }, 10800000);
});

// let four = document.getElementById('four');
// let fourth = document.getElementById('fourth');
// let cuatro = document.querySelector('.popup.four');
// fourth.addEventListener('click', function() {
//   let remove = function () {
//     cuatro.classList.remove('off');
//     console.log('reveal!');
//   }
//   let text = four.value;
//   four.select();
//   document.execCommand('copy');
//   console.log(`copied ${text}`);
//   remove();
//   setTimeout(function() {
//     cuatro.classList.add('off');
//   }, 2000);
//   setTimeout(function() {
//     console.log('fourth timer started');
//     bell.play()
//     }, 10800000);
// });