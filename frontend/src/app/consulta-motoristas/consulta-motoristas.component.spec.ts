import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaMotoristasComponent } from './consulta-motoristas.component';

describe('ConsultaMotoristasComponent', () => {
  let component: ConsultaMotoristasComponent;
  let fixture: ComponentFixture<ConsultaMotoristasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultaMotoristasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaMotoristasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
