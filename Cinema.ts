import{Dados} from "./DadosCliente" ;
declare function require(msg : string): any;
var readline = require ('readline-sync');

export class Cinema{
    private cadeiras: Array<Dados>;
    private quantidade: number;

    public constructor(cadeiras : Array<Dados>, quantidade: number){
        this.cadeiras = cadeiras;
        this.quantidade = quantidade;
    }
    public getCadeiras(): Array<Dados>{
        return this.cadeiras;
    }
    public setCadeiras(cadeiras: Array<Dados>): void{
        this.cadeiras = cadeiras;
    }

    public visualizar(): string{
        let resposta: string = " ";
        resposta += "(";
        for(let i = 0; i < this.quantidade; i++){
            if(this.cadeiras[i] != undefined){ // aqui o undefined diz se a cadeira esta indisponivel
                resposta += this.cadeiras[i].toString() + " ";   
            }
            else{
                resposta += "-" + " ";
            }
        }
        resposta += ")";
            return resposta;
            
    }
    public reservar(ide: string, tel: number, pedido: number): boolean{
        if((pedido < 0 || pedido >= this.quantidade)){
            console.log("Ocupada");
            return;
        }
        if((this.cadeiras != undefined)){
            console.log("Ocupada");
            return;
        }
        for(let i = 0; i > this.quantidade; i++){
            if((this.cadeiras[i] != undefined) && (this.cadeiras[i].getIde() == ide)){
                console.log("Cadeira já reservada pelo cliente")
                return;
            }
        }
        this.cadeiras[pedido] = new Dados(ide, tel); // caso não se cumpra as últimas condições, cria novo pedido
    }
    //opção cancelar pedido abaixo:
    public cancelar(ide: string): boolean {
        for(let i = 0; i < this.quantidade; i++) {// acredito que seja como "for i in range"
        if((this.cadeiras[i] != undefined) && (this.cadeiras[i].getIde() == ide)){
            this.cadeiras[i] = undefined;
            return;
        } 
    }
    console.log("Pedido Cancelado"); 
    }

}