import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { ConclusaoReservaComponent } from './conclusao-reserva.component';



@NgModule({
  declarations: [
    ConclusaoReservaComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ConclusaoReservaComponent
  ]
})
export class ConclusaoReservaModule { }
