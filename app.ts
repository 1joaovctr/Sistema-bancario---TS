/*Código base para o entendimento de tipos no Typescript
const soma = (a: number, b: number) => {
console.log(a + b)
}

soma(2,2)

Declaração de variáveis. 
var = "a"; variável pouco utilizada, possui escopo global e com isso pode ser alterada em qualquer lcoal de execução do script.
let b = "b"; - Variável muito usada e pode ser alterar o valor ao longo do script.
const = "c"; - A palavra reservada "const" vem de "constante", por que não pode ser alterado o valor ao longo do script.


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
