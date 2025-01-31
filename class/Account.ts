export abstract class Account {
    private readonly name: string ;
    private readonly accountNumber: number;
    balance: number = 0;
    private status: boolean = true;

    constructor(name: string, accountNumber: number){
        this.name = name
        this.accountNumber = accountNumber
    }

    //setName = (name: string): void => {
    //    this.name = name
    //    console.log("Nome alterado com sucesso!")
    //}

    getName = (): string => {
        return this.name;
    }

    deposit = (valueForDeposit: number): boolean => {
        if(this.validateStatus()) {
            this.balance += valueForDeposit;
            return true;
        }

        return false
    }

    withDraw = (newBalance: number): string => {
        if(this.validateBalance(newBalance) && this.validateStatus()) {
            this.balance = this.balance - newBalance;
            return`R$ ${newBalance} foi sacado da sua conta com sucesso, seu saldo atual é de: ${this.balance}` 
        }
        
        throw new Error("Saldo insuficiente")
    }

    getBalance = (): number => {
        return this.balance
    }

    private validateBalance = (newBalance: number): boolean => {
        return newBalance < this.balance ? true : false;
    }

    private validateStatus = (): boolean => {
        // if (this.status) {
        //    return this.status
        //}

        //throw new Error("Conta Inválida")
        return !!this.status
    }
}