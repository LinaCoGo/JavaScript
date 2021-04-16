var fizzBuzzChallenge = [];
var counter = 1;

function fizzBuzz() {
    if (counter % 3 === 0 && counter % 5 === 0) {
        fizzBuzzChallenge.push("FizzBuzz");
    }
    else if (counter % 3 === 0) {
        fizzBuzzChallenge.push("Fizz");
    }
    else if (counter % 5 === 0) {
        fizzBuzzChallenge.push("Buzz");
    }
    else {
        fizzBuzzChallenge.push(counter);
    }
    counter++;
}

fizzBuzz();
