import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservaComponent } from './reserva.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';



@NgModule({
  declarations: [
    ReservaComponent
  ],
  imports: [
    ReactiveFormsModule,
    SharedModule,
    CommonModule
  ]
})
export class ReservaModule { }
