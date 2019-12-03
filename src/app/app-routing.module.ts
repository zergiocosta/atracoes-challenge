import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { AtracoesComponent } from '../app/pages/atracoes/atracoes.component'

const routes: Routes = [
  { path: '', redirectTo: 'atracoes', pathMatch: 'full' },
  { path: 'atracoes', component: AtracoesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
