import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PontuacaoService {
  private dados = [
    { motorista: 'João Silva', pontos: 12 },
    { motorista: 'Maria Oliveira', pontos: 8 },
    { motorista: 'Carlos Souza', pontos: 15 },
    { motorista: 'Ana Martins', pontos: 10 }
  ];

  getPontuacoes(): Observable<{ motorista: string; pontos: number }[]> {
    return of(this.dados);
  }
}
