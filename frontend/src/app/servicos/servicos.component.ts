import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {RouterLink} from '@angular/router';

interface Motorista {
  nome: string;
  cpf: string;
  cnh: string;
  vencimentoCNH: string;
  categoriaCNH: string;
  pontos: number;
}

@Component({
  selector: 'app-servicos',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.css']
})
export class ServicosComponent {
  servicos = [
    { nome: 'Cadastro de motoristas', rota: '/cadastro-motoristas' },
    { nome: 'Cadastro de veículo', rota: '/veiculos' },
    { nome: 'Cadastro de multas', rota: '/multas' },
    { nome: 'Consulta de motoristas cadastrados', rota: '/consulta-motoristas' },
    { nome: 'Consulta de veículos', rota: '/consulta-veiculos' },
    { nome: 'Consulta de pontuação', rota: '/consulta-pontos' },
    { nome: 'Consulta de multas', rota: '/consulta-multas' },
  ];
}
