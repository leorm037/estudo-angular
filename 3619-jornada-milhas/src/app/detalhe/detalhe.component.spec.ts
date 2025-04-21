import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheComponent } from './detalhe.component';
import { SharedModule } from '@shared/shared.module';
import { DepoimentosModule } from '../home/depoimentos/depoimentos.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('DetalheComponent', () => {
  let component: DetalheComponent;
  let fixture: ComponentFixture<DetalheComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        DetalheComponent
      ],
      imports: [
        SharedModule,
        DepoimentosModule,
        RouterTestingModule,
        HttpClientTestingModule
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    });
    fixture = TestBed.createComponent(DetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve exibir o título principal correto', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1.main-title').textContent).toContain('Atravesse o deserto no Chile');
  });

  it('deve exibir a data correta da viagem', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.travel-info-content p').textContent).toContain('23/09/2025');
  });

  it('deve ter botões de reservar e comprar', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('button.reserve-button').textContent).toContain('Quero reservar agora!');
    expect(compiled.querySelector('button.buy-button').textContent).toContain('Quero comprar agora!');
  });
});
