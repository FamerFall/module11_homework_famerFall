/*Поскольку предыдущая часть модуля с массивами, и прочим была, на мой взгляд, очень плохо объяснена, то пример решения был спёрт из просторов интернета. Однако, функцию и условия я дописал сам, поскольку видео по функция сделаны хорошо и было всё понятно -_-*/

function definePrime() {
  let inputNum = prompt("Вводите только целые числа: \n", "0");
  let TV = parseInt(inputNum, 10);
  let HITS = 0;
  let DD = TV;
  
    while (DD > 0) {
        if (TV % DD === 0) {
            HITS++;
        }
        DD--;
    }

    if (inputNum == 0) {
      console.log(inputNum + " НЕ простое число - очень сложное!");
    } else if (inputNum > 1000) {
        console.log(inputNum + " данные не верны... >_>");
    } else if (inputNum == 1) {
        console.log(inputNum + " НЕ простое число");
    } else if (HITS > 2) {
        console.log(inputNum + " НЕ простое число");
    } else {
        console.log(inputNum + " простое число");
    }
};

definePrime();
