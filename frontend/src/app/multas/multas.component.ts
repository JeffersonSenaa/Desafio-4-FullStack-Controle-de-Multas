import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-multas',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './multas.component.html',
  styleUrls: ['./multas.component.css']
})
export class MultasComponent {

  multaForm: FormGroup;
  veiculos = [
    { id: 1, placa: 'ABC1234' },
    { id: 2, placa: 'XYZ5678' },
    { id: 3, placa: 'LMN9101' }
  ];

  tiposInfracao = [
    'Velocidade acima da máxima permitida',
    'Estacionar em local proibido',
    'Dirigir utilizando o celular',
    'Dirigir sob efeito de álcool',
    'Não utilizar cinto de segurança',
    'Avançar o sinal vermelho'
  ];

  constructor(private fb: FormBuilder) {
    this.multaForm = this.fb.group({
      valor: ['', [Validators.required, Validators.min(0)]],
      data: ['', Validators.required],
      pontos: ['', [Validators.required, Validators.min(0), Validators.max(7)]],
      tipoInfracao: ['', Validators.required],
      veiculo: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.multaForm.valid) {
      console.log('Multa cadastrada:', this.multaForm.value);
      alert('Multa cadastrada com sucesso!');
      this.multaForm.reset();
    }
  }
}
