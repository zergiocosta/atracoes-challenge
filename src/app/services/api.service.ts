import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import { Observable } from 'rxjs'

import { AppConfig } from '../config/app.config'

@Injectable()
export class ApiService {

  private root = `${AppConfig.api.host}`

  constructor(
    protected http: HttpClient
  ) { }

  public list(url: string): Observable<any> {
    return this.http.get(`${this.root}${url}`)
  }
}
