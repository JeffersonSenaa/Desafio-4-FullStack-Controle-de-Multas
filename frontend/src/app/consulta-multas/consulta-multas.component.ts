import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Multa {
  id: number;
  placa: string;
  data: string;
  descricao: string;
  valor: number;
  status: string;
}

@Component({
  selector: 'app-consulta-multas',
  templateUrl: './consulta-multas.component.html',
  standalone: true,
  styleUrls: ['./consulta-multas.component.css']
})
export class ConsultaMultasComponent implements OnInit {
  multas: Multa[] = [];
  apiUrl = 'https://api.exemplo.com/multas'; // substitua pela API real

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.carregarMultas();
  }

  carregarMultas(): void {
    this.http.get<Multa[]>(this.apiUrl).subscribe({
      next: (dados) => this.multas = dados,
      error: (erro) => console.error('Erro ao carregar multas:', erro)
    });
  }
}
