export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }

  getName = (): string => {
    return this.name
  }

  deposit = (amount: number): void => {
    if (this.validateStatus() && amount > 0) {
      this.balance += amount;
      console.log(`Você depositou R$ ${amount}. Novo saldo: R$ ${this.balance}`);
    } else {
      console.log('Não foi possível realizar o depósito. Conta inválida ou valor inválido.');
    }
  }

  withdraw = (amount: number): void => {
    if (this.validateStatus() && this.balance >= amount && amount > 0) {
      this.balance -= amount;
      console.log(`Você sacou R$ ${amount}. Novo saldo: R$ ${this.balance}`);
    } else {
      console.log('Não foi possível realizar o saque. Conta inválida, saldo insuficiente ou valor inválido.');
    }
  }

  getBalance = (): void => {
    console.log(this.balance)
  }

  protected validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
