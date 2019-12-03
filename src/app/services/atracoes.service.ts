import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

import { Atracao } from '../models/atracao'
import { ApiService } from './api.service'

@Injectable()
export class AtracoesService {

  constructor(
    protected api: ApiService
  ) { }

  public getArtists(): Observable<Atracao[]> {
    return this.api.list('/atracoes')
  }

  public getArtistsByDay(artists: Atracao[], day: string = '20200201'): Atracao[] {
    let items = null
    return items
  }
}
