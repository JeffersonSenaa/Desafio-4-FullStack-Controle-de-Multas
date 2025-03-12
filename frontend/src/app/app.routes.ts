import { Routes } from '@angular/router';
import { ServicosComponent } from './servicos/servicos.component';
import { VeiculosComponent } from './veiculos/veiculos.component';
import { MultasComponent } from './multas/multas.component';
import {CadastroMotoristasComponent} from './cadastro-motoristas/cadastro-motoristas.component';


export const routes: Routes = [
  { path: 'servicos', component: ServicosComponent },
  { path: 'veiculos', component: VeiculosComponent },
  { path: 'multas', component: MultasComponent },
  { path: 'cadastro-motoristas', component: CadastroMotoristasComponent },

  { path: '', redirectTo: '/servicos', pathMatch: 'full' }
];
