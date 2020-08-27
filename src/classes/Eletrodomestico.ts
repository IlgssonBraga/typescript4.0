export interface IEletrodomestico {
  nome: string;
  voltagem: string;
}

export abstract class Eletrodomestico implements IEletrodomestico {
  public nome: string;

  public voltagem: string;

  abstract Ligar(): void;

  abstract Desligar(): void;
}
