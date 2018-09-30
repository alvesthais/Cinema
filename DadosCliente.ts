export class Dados{
    private ide: string;
    private tel: number;

    public constructor(ide: string, tel: number){
        this.ide = ide;
        this.tel = tel;
    }
    public toString(): string{
        let res: string = " ";
        res += this.ide + ":";
        res += this.tel;
        return res;
    }
    public getIde(): string{
        return this.ide;
    }
    public setIde(ide: string): void{
        this.ide = ide;
    }
    public getTel(): number{
        return this.tel;
    }
    public setTel(tel : number): void{
        this.tel = tel;
    }
} // essa classe recebe os dados dos clientes, por isso o nome