let celular = function () {

    this.cor = "azul";

    this.ligar = function () {

        console.log("uma ligação");
        return "ligando";

    }

}

let objeto = new celular();

console.log(objeto.ligar());