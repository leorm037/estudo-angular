import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetalheComponent } from './detalhe.component';
import { SharedModule } from '../shared/shared.module';
import { DepoimentosModule } from '../home/depoimentos/depoimentos.module';


@NgModule({
  declarations: [
    DetalheComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    DepoimentosModule
  ]
})
export class DetalheModule { }
