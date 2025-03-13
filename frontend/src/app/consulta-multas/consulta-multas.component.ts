import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Multa {
  id: number;
  placa: string;
  data: string;  // Deve ser string para correta formatação no template
  descricao: string;
  valor: number;
  status: string;
}

@Component({
  selector: 'app-consulta-multas',
  templateUrl: './consulta-multas.component.html',
  standalone: true,
  styleUrls: ['./consulta-multas.component.css'],
  imports: [CommonModule]  // Importando CommonModule para usar os pipes nativos
})
export class ConsultaMultasComponent {
  multas: Multa[] = [
    { id: 1, placa: 'ABC1234', data: '2024-03-12', descricao: 'Excesso de velocidade', valor: 150.75, status: 'Pendente' },
    { id: 2, placa: 'XYZ5678', data: '2024-03-10', descricao: 'Estacionamento irregular', valor: 80.50, status: 'Pago' },
    { id: 3, placa: 'DEF9101', data: '2024-03-08', descricao: 'Avanço de sinal vermelho', valor: 200.00, status: 'Pendente' }
  ];
}
