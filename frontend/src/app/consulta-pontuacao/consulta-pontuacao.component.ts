import { Component, OnInit } from '@angular/core';
import { PontuacaoService} from '../../service/pontuacao.service';

@Component({
  selector: 'app-consulta-pontuacao',
  standalone: true,
  templateUrl: './consulta-pontuacao.component.html',
  styleUrls: ['./consulta-pontuacao.component.css']
})
export class ConsultaPontuacaoComponent implements OnInit {
  motoristas: { motorista: string; pontos: number }[] = [];

  constructor(private pontuacaoService: PontuacaoService) {}

  ngOnInit(): void {
    this.buscarPontuacoes();
  }

  buscarPontuacoes(): void {
    this.pontuacaoService.getPontuacoes().subscribe((dados) => {
      this.motoristas = dados.filter(m => m.pontos >= 10);
    });
  }
}
