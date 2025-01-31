import { Account } from "./Account"
export class CompanyAccount extends Account {

    constructor(name: string, acoountNumber: number){
        super(name, acoountNumber)
    }

    getLoan = (newLoan: number): string => {
        if(this.deposit(newLoan)) {
            return `Novo saldo ${this.getBalance()}`;
        };

        throw new Error("Conta não ativa, entre em contato para resolução dos impedimentos")
    };

    
}
