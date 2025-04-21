import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCancelarPedidoComponent } from './modal-cancelar-pedido.component';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

describe('ModalCancelarPedidoComponent', () => {
  let component: ModalCancelarPedidoComponent;
  let fixture: ComponentFixture<ModalCancelarPedidoComponent>;
  let dialogRefSpy: jest.Mocked<MatDialogRef<ModalCancelarPedidoComponent>>;

  beforeEach(async () => {
    dialogRefSpy = {
      close: jest.fn()
    } as unknown as jest.Mocked<MatDialogRef<ModalCancelarPedidoComponent>>;

    await TestBed.configureTestingModule({
      imports: [MatDialogModule],
      declarations: [ModalCancelarPedidoComponent],
      providers: [
        { provide: MatDialogRef, useValue: dialogRefSpy },
        { provide: MAT_DIALOG_DATA, useValue: { id: 1 } }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCancelarPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve fechar o modal com o id ao clicar em "Cancelar reserva"', () => {
    component.onCancelarClick();
    expect(dialogRefSpy.close).toHaveBeenCalledWith(1);
  });

  it('deve fechar o modal sem dados ao clicar em "Fechar"', () => {
    component.onCloseClick();
    expect(dialogRefSpy.close).toHaveBeenCalled();
  });
});
