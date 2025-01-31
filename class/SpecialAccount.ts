import { Account } from "./Account";

export class SpecialAccount extends Account {
    abono: number = 10;
    constructor(name: string, accountNumber: number){
        super(name, accountNumber);
    }

    deposit = (valueForDeposit: number): any => {
        this.balance += valueForDeposit + this.abono;
        return `Deposito => Novo saldo == ${this.balance}`
    }
}