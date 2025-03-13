import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaPontuacaoComponent } from './consulta-pontuacao.component';

describe('ConsultaPontuacaoComponent', () => {
  let component: ConsultaPontuacaoComponent;
  let fixture: ComponentFixture<ConsultaPontuacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultaPontuacaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaPontuacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
