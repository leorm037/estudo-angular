import { SharedModule } from '@shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PedidosComponent } from './pedidos.component';
import { HttpClientModule } from '@angular/common/http';
import { ModalCancelarPedidoComponent } from './modal-cancelar-pedido/modal-cancelar-pedido.component';
import { PedidosService } from './pedidos.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PedidosComponent,
    ModalCancelarPedidoComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [
    PedidosService
  ]
})
export class PedidosModule { }
