// @fibonacciGenerator: Generates an array of numbers based on Fibonacci Code.
// lista: is the array that contains all the numbers.
// n: input number of array's items to be displayed.
// counter: counts each round of the for loop.
// returns: the array with n numbers.


function fibonacciGenerator(n) {
 var lista = [];

 for (var counter = 1; counter <= n; counter++) {

   if(counter === 1) {
     lista.push(0);
   }
   else if (counter === 2){
     lista.push(1);
   }
   else {
    lista.push(lista[lista.length -2] + lista [lista.length -1]);
   }
 }
 return (lista);
}

output = fibonacciGenerator(10);
console.log (output);
