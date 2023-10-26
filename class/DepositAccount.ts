import { DioAccount } from "./DioAccount";

export class ModifiedDioAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  deposit = (amount: number): void => {
    if (this.validateStatus() && amount > 0) {
      const adjustedAmount = amount + 10; // Adiciona 10 ao valor do depósito
      this.balance += adjustedAmount;
      console.log(`Depósito de R$ ${amount} realizado com sucesso. Novo saldo: R$ ${this.balance}`);
    } else {
      console.log('Não foi possível realizar o depósito. Conta inválida ou valor inválido.');
    }
  }
}
