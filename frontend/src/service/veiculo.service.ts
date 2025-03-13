import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VeiculoService {
  private veiculos = [
    { id: 1, motorista: 'Carlos', modelo: 'Toyota Corolla', placa: 'ABC-1234', ano: 2020 },
    { id: 2, motorista: 'Carlos', modelo: 'Honda Civic', placa: 'XYZ-5678', ano: 2019 },
    { id: 3, motorista: 'Ana', modelo: 'Fiat Uno', placa: 'QWE-9876', ano: 2015 }
  ];

  getVeiculosPorMotorista(motorista: string): Observable<any[]> {
    const resultado = this.veiculos.filter(v => v.motorista.toLowerCase() === motorista.toLowerCase());
    return of(resultado);
  }
}
