// Returns a pseudo random number taking only a random boolean and the current time to add some (not much) chaos

// Function randomNumber requires: 0 < number < 1000000

function flip() {
  return Math.random() >= 0.5;
}

function constant(num) {
  for (var i = 0; i < num; i++) {
    if (flip()) {
      i++;
    }
  }

  return i;
}

function randomNumber(number) {
  if (number <= 0 || number > 1000000) {
    return "error";
  }
  number = (constant(Date.now()) % number) + 1;
  return number;
}

/* 
Usage examples:
randomNumber(10);
randomNumber(100);
randomNumber(1000);
*/