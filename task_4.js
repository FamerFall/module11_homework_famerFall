let min = 5;
let max = 15;


function outputNum(a, b) {

  let timerId = setInterval(function() {
    console.log(a);
    if (a == b) {
      clearInterval(timerId);
    }
    a++;
  }, 1000);
}

outputNum(min, max);
