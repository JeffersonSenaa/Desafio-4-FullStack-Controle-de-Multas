import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cadastro-servicos',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './cadastro-motoristas.component.html',
  styleUrls: ['./cadastro-motoristas.component.css']
})
export class CadastroMotoristasComponent {
  motoristaForm: FormGroup;
  categorias: string[] = ['A', 'B', 'AB'];

  constructor(private fb: FormBuilder) {
    this.motoristaForm = this.fb.group({
      // cpf: ['', [Validators.required, Validators.pattern(/^\\d{11}$/)]],
      nome: ['', Validators.required],
      vencimentoCnh: ['', Validators.required],
      categoriaCnh: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.motoristaForm.valid) {
      console.log('Motorista cadastrado:', this.motoristaForm.value);
      alert('Motorista cadastrado com sucesso!');
      this.motoristaForm.reset();
    }
  }
}
