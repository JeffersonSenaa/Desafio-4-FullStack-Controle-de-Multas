import { Routes } from '@angular/router';
import { ServicosComponent } from './servicos/servicos.component';
import { VeiculosComponent } from './veiculos/veiculos.component';
import { MultasComponent } from './multas/multas.component';
import {CadastroMotoristasComponent} from './cadastro-motoristas/cadastro-motoristas.component';
import {ConsultaMotoristasComponent} from './consulta-motoristas/consulta-motoristas.component';
import {ConsultaPontuacaoComponent} from './consulta-pontuacao/consulta-pontuacao.component';
import {ConsultaVeiculosComponent} from './consulta-veiculos/consulta-veiculos.component';
import {ConsultaMultasComponent} from './consulta-multas/consulta-multas.component';


export const routes: Routes = [
  { path: 'servicos', component: ServicosComponent },
  { path: 'veiculos', component: VeiculosComponent },
  { path: 'multas', component: MultasComponent },
  { path: 'cadastro-motoristas', component: CadastroMotoristasComponent },
  { path: 'consulta-motoristas' , component: ConsultaMotoristasComponent },
  { path: 'consulta-pontos', component: ConsultaPontuacaoComponent },
  { path: 'consulta-veiculos', component: ConsultaVeiculosComponent },
  { path: 'consulta-multas', component: ConsultaMultasComponent },

  { path: '', redirectTo: '/servicos', pathMatch: 'full' }
];
