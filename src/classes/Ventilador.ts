import { Eletrodomestico } from './Eletrodomestico';

export class Ventilador extends Eletrodomestico {
  public nome: string;

  public voltagem: string;

  public status: number;

  constructor(nome: string, voltagem: string, status = 0) {
    super();
    this.status = status;
    this.nome = nome;
    this.voltagem = voltagem;
  }

  public Testar(): void {
    console.log('Testa ventilador');
  }

  public Ligar(): void {
    this.status = 1;
  }

  public Desligar(): void {
    this.status = 0;
  }
}
