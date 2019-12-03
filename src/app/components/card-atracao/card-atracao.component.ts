import { Component, OnInit, Input } from '@angular/core'

import { Atracao } from '../../models/atracao'

@Component({
  selector: 'app-card-atracao',
  templateUrl: './card-atracao.component.html',
  styleUrls: ['./card-atracao.component.scss'],
})
export class CardAtracaoComponent implements OnInit {

  @Input() artist: Atracao
  @Input() hasTag: boolean = true

  constructor() { }

  ngOnInit() {}

}
