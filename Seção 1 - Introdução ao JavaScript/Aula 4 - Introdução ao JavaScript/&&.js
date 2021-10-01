// Usando && para analisar se duas condições são verdadeiras ao mesmo tempo.

let a = 10;
const b = "10";

console.log(a == b && typeof b == 'string');    // irá dar true
console.log(a == b && typeof a == 'string');    // irá dar false