let fun = (a, b) => {
  if (Number.isInteger(a) && Number.isInteger(b)) {
    console.log (a ** b);
  } else {
    console.log ('Одно из чисел не натуральное')
  }
 };
 
 fun(2, 3);
 