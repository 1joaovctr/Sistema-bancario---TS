import { Account } from "./Account"
export class PeopleAccount extends Account{
    doc_id: number

    constructor(name: string, accountNumber: number, doc_id: number){
        super(name, accountNumber)
        this.doc_id = doc_id
    }

}