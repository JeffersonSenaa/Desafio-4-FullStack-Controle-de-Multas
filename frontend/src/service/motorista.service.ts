import { Injectable } from '@angular/core';

interface Motorista {
  cpf: string;
  nome: string;
  vencimentoCnh: string;
  categoriaCnh: string;
  pontos: number;
}

@Injectable({
  providedIn: 'root'
})
export class MotoristaService {
  getMotoristas(): Motorista[] {
    return [
      { cpf: '12345678901', nome: 'João Silva', vencimentoCnh: '2025-10-15', categoriaCnh: 'B', pontos: 12 },
      { cpf: '98765432100', nome: 'Maria Souza', vencimentoCnh: '2026-03-22', categoriaCnh: 'AB', pontos: 8 } // Não será listado
    ];
  }

}
