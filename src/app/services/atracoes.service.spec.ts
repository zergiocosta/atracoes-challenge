import { TestBed } from '@angular/core/testing'

import { AtracoesService } from './atracoes.service'

describe('AtracoesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}))

  it('should be created', () => {
    const service: AtracoesService = TestBed.get(AtracoesService)
    expect(service).toBeTruthy()
  })
})
