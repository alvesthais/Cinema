import{Cinema} from "./Cinema";

declare function require(msg: string): any;
var readline = require('readline-sync') ;

let cinem: Cinema = new Cinema([],0);
let menu: string;

while(true){
    menu = readline.question("          Escolha uma opção: \n 1 - Iniciar cinema \n 2 - Fazer uma reserva \n 3 - Cancelar reserva \n 4 - Ver a localização das cadeiras disponíveis");

    if(menu == "1"){
        let quantidade : number = parseInt(readline.question("Digite quantos assentos você quer: " + "\n"));
        cinem : new Cinema([], quantidade);
    }
    if(menu == "2"){
        let ide : string = readline.question("Digite sua identidade: " + "\n");
        let tel : number = parseInt(readline.question("Digite seu telefone: " + "\n"));
        let cad : number = parseInt(readline.question("Digite a cadeira desejada: " + "\n"))
        cinem.reservar(ide, tel, cad);
    }
    if(menu == "3"){
        let ideCliente : string = readline.question("Digite sua identidade" + "\n");
        cinem.cancelar(ideCliente);
    }
    else{
        console.log(cinem.visualizar());
    }
}
