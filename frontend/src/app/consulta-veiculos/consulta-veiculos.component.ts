import { Component } from '@angular/core';
import { VeiculoService} from '../../service/veiculo.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-consulta-veiculos',
  standalone: true,
  templateUrl: './consulta-veiculos.component.html',
  imports: [
    FormsModule
  ],
  styleUrls: ['./consulta-veiculos.component.css']
})
export class ConsultaVeiculosComponent {
  motorista: string = '';
  veiculos: any[] = [];
  mensagemErro: string = '';

  constructor(private veiculoService: VeiculoService) {}

  buscarVeiculos() {
    if (!this.motorista.trim()) {
      this.mensagemErro = 'Por favor, informe um motorista válido.';
      this.veiculos = [];
      return;
    }

    this.veiculoService.getVeiculosPorMotorista(this.motorista).subscribe(
      (data) => {
        this.veiculos = data;
        this.mensagemErro = '';
      },
      (error) => {
        this.veiculos = [];
        this.mensagemErro = 'Erro ao buscar veículos. Tente novamente.';
      }
    );
  }
}
