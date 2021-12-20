 export function looping () {
  let triangle = '';
  let array = [];
  for (let i = 1; i <= 7; i++) {
    triangle = triangle + '#';
    console.log(triangle);
    array.push(triangle);
  }
  return array;
}
