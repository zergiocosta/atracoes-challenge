import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { ComponentsModule } from '../components/components.module'

import { ApiService } from '../services/api.service'
import { AtracoesService } from '../services/atracoes.service'
import { AtracoesComponent } from './atracoes/atracoes.component'

@NgModule({
  declarations: [
    AtracoesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ComponentsModule
  ],
  exports: [],
  providers: [
    ApiService,
    AtracoesService
  ]
})
export class PagesModule {}
