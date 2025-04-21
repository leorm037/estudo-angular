import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaComponent } from './reserva.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

describe('ReservaComponent', () => {
  let component: ReservaComponent;
  let fixture: ComponentFixture<ReservaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservaComponent ],
      imports: [
        FormsModule,
        SharedModule,
        ReactiveFormsModule
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    });
    fixture = TestBed.createComponent(ReservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('o formulário deve ser inválido quando vazio', () => {
    expect(component.form.valid).toBeFalsy();
  });

  it('o formulário deve ser válido quando todas as opções estão selecionadas', () => {
    component.form.controls['vooRadioSelection'].setValue('VOO');
    component.form.controls['acomodacaoRadioSelection'].setValue('ACOMODACAO');
    component.form.controls['carroRadioSelection'].setValue('CARRO');

    expect(component.form.valid).toBeTruthy();
  });

  it('deve desabilitar o botão de pagamento quando o formulário é inválido', () => {
    const button = fixture.debugElement.query(By.css('.payment-button')).nativeElement;
    expect(button.disabled).toBeTruthy();
  });

  it('deve habilitar o botão de pagamento quando o formulário é válido', () => {
    component.form.controls['vooRadioSelection'].setValue('VOO');
    component.form.controls['acomodacaoRadioSelection'].setValue('ACOMODACAO');
    component.form.controls['carroRadioSelection'].setValue('CARRO');
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css('.payment-button')).nativeElement;
    expect(button.disabled).toBeFalsy();
  });
});
