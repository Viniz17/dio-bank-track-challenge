import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  getLoan = (amount: number): void => {
    if (this.validateStatus() && amount > 0) {
      this.balance += amount;
      console.log(`Empréstimo de R$ ${amount} realizado com sucesso. Novo saldo: R$ ${this.balance}`);
    } else {
      console.log('Não foi possível realizar o empréstimo. Conta inválida ou valor inválido.');
    }
  }

  
}
