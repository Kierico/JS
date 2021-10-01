// Usando || mesmo se uma das condições estiver errada ele dará true, só dará false se as duas condições estiverem erradas.

let a = 10;
const b = "10";

console.log(a == b && typeof a == 'string');