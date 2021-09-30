let calculadora = (x1, x2, operator) => {

    return eval(`${x1} ${operator} ${x2}`);

}

let resultado = calculadora(1, 2, "*");

console.log(resultado);

// callback FUNÇÃO DE RETORNO como parâmetro após uma ação.