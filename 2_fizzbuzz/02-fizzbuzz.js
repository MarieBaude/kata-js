export function fizzbuzz() {
    let array = [];
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
          array.push('FizzBuzz');
          console.log('FizzBuzz');
        } else if (i % 3 === 0) {
          array.push('Fizz');
          console.log('Fizz');
        } else if (i % 5 === 0) {
          array.push('Buzz');
          console.log('Buzz');
        } else {
          array.push(i);
          console.log(i);
        }
    }
  return array;
}