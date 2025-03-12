import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaMultasComponent } from './consulta-multas.component';

describe('ConsultaMultasComponent', () => {
  let component: ConsultaMultasComponent;
  let fixture: ComponentFixture<ConsultaMultasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultaMultasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaMultasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
