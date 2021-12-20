let array = [];
export function range(start, end) {   
    for (let i = start; i <= end; i++) {
      array.push(i)
    }
    return array
}

export function sum () {
    let somme = (a, b) => a + b;
    return (array.reduce(somme));
}