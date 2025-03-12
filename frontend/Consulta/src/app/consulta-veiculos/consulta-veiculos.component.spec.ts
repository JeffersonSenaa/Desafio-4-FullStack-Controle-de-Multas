import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaVeiculosComponent } from './consulta-veiculos.component';

describe('ConsultaVeiculosComponent', () => {
  let component: ConsultaVeiculosComponent;
  let fixture: ComponentFixture<ConsultaVeiculosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultaVeiculosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaVeiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
