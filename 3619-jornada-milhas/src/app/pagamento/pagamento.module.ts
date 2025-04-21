import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PagamentoComponent } from './pagamento.component';
import { SharedModule } from '@shared/shared.module';
import { PagamentoService } from './pagamento.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [
    PagamentoComponent
  ],
  imports: [
    ReactiveFormsModule,
    SharedModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [
    PagamentoService
  ]
})
export class PagamentoModule { }
