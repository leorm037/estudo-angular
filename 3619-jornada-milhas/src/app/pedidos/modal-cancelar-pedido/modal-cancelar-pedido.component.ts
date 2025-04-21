import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-cancelar-pedido',
  templateUrl: './modal-cancelar-pedido.component.html',
  styleUrls: ['./modal-cancelar-pedido.component.scss']
})
export class ModalCancelarPedidoComponent {

  constructor(
    private dialogRef: MatDialogRef<ModalCancelarPedidoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onCancelarClick(): void {
    this.dialogRef.close(this.data.id);
  }

  onCloseClick(): void {
    this.dialogRef.close();
  }
}
