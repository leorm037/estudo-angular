import { PedidosService } from './pedidos.service';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalCancelarPedidoComponent } from './modal-cancelar-pedido/modal-cancelar-pedido.component';
import { Reserva } from '../core/types/type';
import { Observable } from 'rxjs';
import { MensagemService } from '@services/mensagem.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss']
})
export class PedidosComponent {

  pedidos$?: Observable<Reserva[]> = this.pedidosService.getPedidos();

  constructor(
    private dialog: MatDialog,
    private pedidosService: PedidosService,
    private messagemService: MensagemService
  ) {}

  onCancelarPedido(id: number | undefined): void {
    const dialogRef = this.dialog.open(ModalCancelarPedidoComponent, {
      width: '400px',
      data: {id}
    });

    dialogRef.afterClosed().subscribe(id => {
      if (id) {
        this.pedidosService.removerPedido(id)
          .subscribe(() => {
            this.messagemService.openMessage('Pedido removido com sucesso!');
          });
      }
    });
  }

}
