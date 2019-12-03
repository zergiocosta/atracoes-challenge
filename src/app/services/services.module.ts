// Core
import { NgModule } from '@angular/core'

// Services
import { services } from './index'

@NgModule({
  imports: [],
  providers: [
    ...services
  ]
})

export class ServicesModule {
  constructor() {}
}
