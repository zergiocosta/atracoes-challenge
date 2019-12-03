import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { AtracoesComponent } from './atracoes.component'

describe('AtracoesComponent', () => {
  let component: AtracoesComponent;
  let fixture: ComponentFixture<AtracoesComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtracoesComponent ]
    })
    .compileComponents()
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtracoesComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  });

  it('should create', () => {
    expect(component).toBeTruthy()
  });
});
