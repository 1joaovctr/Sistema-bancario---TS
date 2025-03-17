/*grande diferencial do ts é a tipagem das variáveis, caso você atribua um tipo a um let por exemplo você não irá conseguir mudar o valor se o tipo não for o mesmo como por exemplo.
let 1: string = "João"

1 = 3;

Ocorrerá um erro, pois além de atribuirmos um novo valor atribuimos um valor com um tipo diferente.

Você pode atribuir a variável mais de um valor como por exemplo 

let 1: string | number: = "João";

Nesse caso a variável aceitaria valores de string e de number, ou se pode usar também o:

let 1: any = "João"

Nesse caso a variável aceitaria todos os tipos como uma variável no JS, mas isso faria perder o sentido de usar TS, já que essa tipagem é a principal diferença entre as duas linguagens.

--> Exemplos de tipagem no TS:

let a: string = "João";
let b: number = 28;
let c: boolean = true;


const pessoa = {
    nome: "João",
    idade: 28
}


--> Objetos e interfaces:

interface Pessoa {
    nome: string,
    idade: number,
    profissao?: string //Esse "?" depois da declaração diz que o valor é opicional.
}

const pessoa: Pessoa = {
    nome: "João",
    idade: 28
}

const outraPessoa: Pessoa = {
    nome: "Melanie",
    idade: 25,
    profissao: "Enfermeira"
} 

const arrayPessoa: Array<Pessoa> = [
    pessoa,
    outraPessoa
]

const arrayNum: number[] = [
    1, 2, 3
]

const arrayString: Array<string> = [
    "1", "2", "3"
]

--> Decisões e repetições:

const num: number = 13;

if(num > 15) {
    console.log("Esse número é maior que 15")
} else if(num === 15) {
    console.log("Esse número é igual a 15")    
}else {
    console.log("Esse número é menor que 15")
}
const typeUser = {
    admin: "Seja bem vindo, admin.",
    student: "Você é um estudandte da plataforma.",
    viewer: "Seu usuário permite apenas visualização."
}

function validateUser(user: string) {
    console.log(typeUser[user as keyof typeof typeUser])
}

const usuario = "admin"

validateUser(usuario)
validateUser("student")
validateUser("viewer")

--> Estruturas de repetição:

for(let i = 0; 1 < 5; i++){
    console.log(i)
}

const n = 1
while(n < 5) {
    console.log(n)
    n++
}

--> Manipulando array:

const array: Array<number> = [1, 2, 3, 4]

array.forEach(num => console.log(num))
console.log("---")
array.forEach(num => {
    if(num > 2 && num % 2 === 0){
        console.log(num)
    }
})

const stringArray: string[] = ["a", "b", "c", "d"]

const buscaNum = array.find(num => num === 4)

console.log("Array Original", array)

array.push(5)

console.log("Array retirando o último elemento", array)

console.log(buscaNum)


--> Programação Orientada a Objeto:
class User {
    name: string = "João";
    age: number = 32


    constructor(name: string, age: number){
        this.name =  name
        this.age = age
    }

        showName = () => {
            console.log(this.name)
        }
    }


const user = new User("João", 28) 
user.showName()

const otherUser = new User("Melanie", 25)
otherUser.showName()


--> Primiera parte sobre herança:


class Account {
    name: string
    accountNumber: number

    constructor(name: string, accountNumber: number){
        this.name = name
        this.accountNumber = accountNumber
    }

    deposity = () => {
        console.log("Você depositou")
    }

    withDraw = () => {
        console.log("Você sacou")
    }
}

class Admin extends Account {
    balace: number

    constructor(name: string, accountNumber: number){
        super(name, accountNumber)
        this.balace = 20
    }

    getBalace = () => {
        console.log(this.balace)
    }
}

const adminAccount: Admin = new Admin("João", 3)
console.log(adminAccount)

const account: Account = new Account("Melanie", 1)
console.log(account)

*/

// As classes dessas instâncias estão no repositorio "class"
import { PeopleAccount } from "./class/PeopleAccount"
import { CompanyAccount } from "./class/CompanyAccount"
import { SpecialAccount } from "./class/SpecialAccount"

console.log('--------------------------------------------');
console.log('People Account');
console.log('--------------------------------------------');
const peopleAccount: PeopleAccount = new PeopleAccount("João", 3, 617762);
console.log('people deposit ==> ', peopleAccount.deposit(100));
console.log('people withdraw ==> ', peopleAccount.withDraw(50));
console.log('people getName ==> ', peopleAccount.getName());
console.log('people getBalance ==> ', peopleAccount.getBalance());

console.log('--------------------------------------------');
console.log('Comapny Account');
console.log('--------------------------------------------');

// criando instancias para contas CompanyAccount
const companyAccount: CompanyAccount = new CompanyAccount('Brisa Estetica altomotiva', 20);
console.log('company deposit ==> ', companyAccount.deposit(100));
console.log('company withdraw ==> ', companyAccount.withDraw(50));
console.log('company getName ==> ', companyAccount.getName());
console.log('company getBalance ==> ', companyAccount.getBalance());
console.log('company getLoan ==> ', companyAccount.getLoan(1000));

// criando instancias para contas SpecialAccount
console.log('--------------------------------------------');
console.log('Special Account');
console.log('--------------------------------------------');
const specialAccount: SpecialAccount = new SpecialAccount('João Vitinho', 20);
console.log('special deposit ==> ', specialAccount.deposit(100));
console.log('special withdraw ==> ', specialAccount.withDraw(50));
console.log('special getName ==> ', specialAccount.getName());
console.log('special getBalance ==> ', specialAccount.getBalance());
/*
--> Testes das funções set.name e get.name
console.log(peopleAccount)
peopleAccount.setName("João Vitinho")

console.log(peopleAccount)
console.log(peopleAccount.getName())



--> Comparação das contas Pessoa física/Pessoa juridica;

const peopleAccount: PeopleAccount = new PeopleAccount("João", 3, 617762)
peopleAccount.deposit()

const companyAccount: CompanyAccount = new CompanyAccount("Brisa estetica automotiva", 810)
companyAccount.deposit()
*/
