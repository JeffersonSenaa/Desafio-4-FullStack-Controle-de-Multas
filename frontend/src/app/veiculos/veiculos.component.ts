import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-veiculos',
  standalone: true,
  templateUrl: './veiculos.component.html',
  imports: [
    ReactiveFormsModule
  ],
  styleUrls: ['./veiculos.component.css']
})
export class VeiculosComponent {
  veiculoForm: FormGroup;
  motoristas = [
    { id: 1, nome: 'João Silva' },
    { id: 2, nome: 'Maria Oliveira' },
    { id: 3, nome: 'Carlos Souza' }
  ];

  constructor(private fb: FormBuilder) {
    this.veiculoForm = this.fb.group({
      placa: ['', [Validators.required, Validators.pattern(/^\w{3}\d{4}$/)]],
      marca: ['', Validators.required],
      modelo: ['', Validators.required],
      ano: ['', [Validators.required, Validators.min(1900), Validators.max(new Date().getFullYear())]],
      cor: ['', Validators.required],
      motorista: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.veiculoForm.valid) {
      console.log('Veículo cadastrado:', this.veiculoForm.value);
      alert('Veículo cadastrado com sucesso!');
      this.veiculoForm.reset();
    }
  }
}
