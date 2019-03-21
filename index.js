//Set initial values
let seconds = 60;
let minutes = 60;
let hours = 24;
let days = 3;

var now = 0;

// Set time in the future
var countDownDate = days*hours*minutes*seconds*1000;
// Update the count down every 1 second
function ctdwnTimer(){
  var timer = setInterval(function() {

    // Increase one second every iteration
    now = now + 1000; 
  
    //Find delta between now and the count down date
    var delta = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(delta / (1000 * 60 * 60 * 24));
    var hours = Math.floor((delta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((delta % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((delta % (1000 * 60)) / 1000);
  
    // Assign correspondent values
    document.getElementById("seconds").textContent = seconds
    document.getElementById("minutes").textContent = minutes
    document.getElementById("hours").textContent = hours
    document.getElementById("days").textContent = days
  
    // Stop timer when finished
    if (delta <= 0) {
      clearInterval(timer);
    }
  }, 1000);
}

// Start untill window is loaded
window.onload = function(){
  ctdwnTimer();
}