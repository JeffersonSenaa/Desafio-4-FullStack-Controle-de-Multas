// consulta-motoristas.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MotoristaService} from '../../service/motorista.service';

interface Motorista {
  cpf: string;
  nome: string;
  vencimentoCnh: string;
  categoriaCnh: string;
}

@Component({
  selector: 'app-consulta-motoristas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './consulta-motoristas.component.html',
  styleUrls: ['./consulta-motoristas.component.css']
})
export class ConsultaMotoristasComponent implements OnInit {
  motoristas: Motorista[] = [];

  constructor(private motoristaService: MotoristaService) {}

  ngOnInit(): void {
    this.getMotoristas();
  }

  getMotoristas(): void {
    this.motoristas = this.motoristaService.getMotoristas();
  }
}
