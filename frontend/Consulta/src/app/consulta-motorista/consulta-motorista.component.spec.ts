import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaMotoristaComponent } from './consulta-motorista.component';

describe('ConsultaMotoristaComponent', () => {
  let component: ConsultaMotoristaComponent;
  let fixture: ComponentFixture<ConsultaMotoristaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultaMotoristaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaMotoristaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
