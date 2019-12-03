import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CardAtracaoComponent } from './card-atracao.component';

describe('CardAtracaoComponent', () => {
  let component: CardAtracaoComponent;
  let fixture: ComponentFixture<CardAtracaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardAtracaoComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CardAtracaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
