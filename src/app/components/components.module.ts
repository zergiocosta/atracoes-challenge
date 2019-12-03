import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { CardAtracaoComponent } from './card-atracao/card-atracao.component'
import { TagComponent } from './tag/tag.component'

@NgModule({
  declarations: [
    CardAtracaoComponent,
    TagComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardAtracaoComponent,
    TagComponent
  ],
})
export class ComponentsModule {}
