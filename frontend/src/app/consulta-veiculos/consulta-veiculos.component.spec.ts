import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ConsultaVeiculoComponent } from './consulta-veiculo.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('ConsultaVeiculoComponent', () => {
  let component: ConsultaVeiculoComponent;
  let fixture: ComponentFixture<ConsultaVeiculoComponent>;
  let httpMock: HttpTestingController;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // Simula requisições HTTP
      declarations: [ConsultaVeiculoComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaVeiculoComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    httpMock = TestBed.inject(HttpTestingController);
    fixture.detectChanges();
  });

  afterEach(() => {
    httpMock.verify(); // Verifica se não há requisições pendentes
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('deve carregar a lista de veículos corretamente', () => {
    const mockVeiculos = [
      { id: 1, placa: 'ABC-1234', modelo: 'Gol', marca: 'Volkswagen', ano: 2020, cor: 'Preto', status: 'Ativo' },
      { id: 2, placa: 'XYZ-5678', modelo: 'Fiesta', marca: 'Ford', ano: 2018, cor: 'Branco', status: 'Em Manutenção' }
    ];

    // Simula a resposta da API
    const req = httpMock.expectOne(component.apiUrl);
    expect(req.request.method).toBe('GET');
    req.flush(mockVeiculos);

    fixture.detectChanges();

    // ✅ Agora verificamos corretamente se `veiculos` foi preenchido
    expect(component.veiculos).toBeDefined();
    expect(component.veiculos.length).toBe(2);
    expect(component.veiculos[0].placa).toBe('ABC-1234');

    // Verifica se os dados aparecem no HTML
    const tableRows = debugElement.queryAll(By.css('tbody tr'));
    expect(tableRows.length).toBe(2);
  });

  it('deve exibir mensagem se a lista de veículos estiver vazia', () => {
    const req = httpMock.expectOne(component.apiUrl);
    req.flush([]); // Simula resposta vazia da API

    fixture.detectChanges();

    // ✅ Garante que `veiculos` foi atualizado corretamente
    expect(component.veiculos).toBeDefined();
    expect(component.veiculos.length).toBe(0);

    // Verifica se a tabela está vazia
    const tableRows = debugElement.queryAll(By.css('tbody tr'));
    expect(tableRows.length).toBe(0);
  });

  it('deve tratar erro ao carregar veículos', () => {
    spyOn(console, 'error'); // Espiona o console para verificar se o erro foi logado

    const req = httpMock.expectOne(component.apiUrl);
    req.error(new ErrorEvent('Erro de rede')); // Simula um erro na requisição

    fixture.detectChanges();

    // ✅ Certifica-se de que o erro foi tratado corretamente
    expect(console.error).toHaveBeenCalledWith('Erro ao carregar veículos:', jasmine.anything());
  });
});
