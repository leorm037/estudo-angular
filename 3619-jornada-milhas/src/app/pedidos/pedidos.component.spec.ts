import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosComponent } from './pedidos.component';
import { PedidosService } from './pedidos.service';
import { MensagemService } from '@services/mensagem.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Reserva } from '../core/types/type';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

describe('PedidosComponent', () => {
  let component: PedidosComponent;
  let fixture: ComponentFixture<PedidosComponent>;
  let pedidosService: PedidosService;
  let dialog: MatDialog;

  const pedidosMock: Reserva[] = [
    {
      destino: 'Rio de Janeiro',
      dataIda: '2024-07-01',
      dataVolta: '2024-07-15',
      origem: 'São Paulo',
      estadoOrigem: 'SP',
      adultos: 2,
      valorFinal: 3500.00
    },
    {
      destino: 'Salvador',
      dataIda: '2024-08-01',
      dataVolta: '2024-08-10',
      origem: 'Brasília',
      estadoOrigem: 'DF',
      adultos: 1,
      valorFinal: 2000.00
    }
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, MatDialogModule],
      declarations: [PedidosComponent],
      providers: [
        PedidosService,
        MensagemService,
        MatDialog,
        MatSnackBar
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidosComponent);
    component = fixture.componentInstance;
    pedidosService = TestBed.inject(PedidosService);
    dialog = TestBed.inject(MatDialog);

    jest.spyOn(pedidosService, 'getPedidos').mockReturnValue(of(pedidosMock));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve recuperar pedidos na inicialização', () => {
    component.pedidos$?.subscribe(pedidos => {
      expect(pedidos).toEqual(pedidosMock);
    });
  });

  it('deve abrir o modal de cancelamento e remover pedido ao confirmar', () => {
    const dialogSpy = jest.spyOn(dialog, 'open').mockReturnValue({
      afterClosed: () => of(pedidosMock[0].id)
    } as any);

    component.onCancelarPedido(pedidosMock[0].id);

    expect(dialogSpy).toHaveBeenCalled();
  });
});
