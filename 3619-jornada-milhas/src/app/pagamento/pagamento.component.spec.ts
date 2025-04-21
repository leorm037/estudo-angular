import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { PagamentoComponent } from './pagamento.component';
import { PagamentoService } from './pagamento.service';
import { By } from '@angular/platform-browser';

describe('PagamentoComponent', () => {
  let component: PagamentoComponent;
  let fixture: ComponentFixture<PagamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, ReactiveFormsModule, FormsModule],
      declarations: [PagamentoComponent],
      providers: [PagamentoService],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagamentoComponent);
    component = fixture.componentInstance;
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('deve atualizar a forma de pagamento ao mudar a seleção', () => {
    const mockOption = { id: '2', value: 'PAYMENT', label: 'Cartão', img: { src: '../../assets/icones/mastercard-icon.svg', alt: 'Card logo' }};
    component.onSelectionChange(mockOption);
    expect(component.formaPagamento).toEqual(mockOption);
  });

  it('deve habilitar o botão de pagamento quando o formulário for válido', async () => {
    fixture.detectChanges();

    component.formaPagamento = component.pagamentoRadioOptions[1];

    component.form.patchValue({
      numeroCartao: '1234567812345678',
      nomeCartao: 'JOHN DOE',
      mesValidade: '12',
      anoValidade: '2030',
      codigoSeguranca: '123'
    });

    fixture.detectChanges();

    await fixture.whenStable();

    fixture.detectChanges();

    const button = fixture.debugElement.query(By.css('.submit-button'));
    expect(button.nativeElement.disabled).toBeFalsy();
  });
});
