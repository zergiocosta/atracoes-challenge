import { Component, OnInit } from '@angular/core'

import { Atracao } from '../../models/atracao'
import { AtracoesService } from '../../services/atracoes.service'

@Component({
  selector: 'app-atracoes',
  templateUrl: './atracoes.component.html',
  styleUrls: ['./atracoes.component.scss'],
  providers: [
    AtracoesService
  ]
})
export class AtracoesComponent implements OnInit {

  protected allArtists: Atracao[]
  protected activeArtists: Atracao[]

  constructor(
    protected atracoesService: AtracoesService
  ) {}

  public ngOnInit(): void {}

  public ngAfterViewInit(): void {
    this.fetchArtists()
  }

  protected fetchArtists(): void {
    console.log('it should fetch data from API')
  }

  public dayFilter(day: string = '20200201'): void {
    console.log('it should filter artists by day')
  }

}
