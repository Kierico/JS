function calculadora(x1, x2, operator) {

    // eval - função para que o JavaScript interprete uma string como um script.
    return eval(`${x1} ${operator} ${x2}`); // Evaluates - Avalia o código JavaScript e o executa.

}

let resultado = calculadora(1, 2, "+");

console.log(resultado)