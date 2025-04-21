import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutenticacaoInterceptor } from './autenticacao/autenticacao.interceptor';
import { SharedModule } from './shared/shared.module';
import { MaterialModule } from './core/material/material.module';
import { HomeModule } from './home/home.module';
import { ErroModule } from './core/erro/erro.module';
import { ErrosInterceptor } from './core/erro/erros.interceptor';
import { AutenticacaoModule } from './autenticacao/autenticacao.module';
import { BuscaModule } from './busca/busca.module';
import { DetalheModule } from './detalhe/detalhe.module';
import { ReservaModule } from './reserva/reserva.module';
import { PagamentoModule } from './pagamento/pagamento.module';
import { PedidosModule } from './pedidos/pedidos.module';
import { ConclusaoReservaModule } from './conclusao-reserva/conclusao-reserva.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    MaterialModule,
    HomeModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ErroModule,
    AutenticacaoModule,
    BuscaModule,
    DetalheModule,
    ReservaModule,
    PagamentoModule,
    PedidosModule,
    ConclusaoReservaModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AutenticacaoInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrosInterceptor,
      multi: true
    },

],
  bootstrap: [AppComponent]
})
export class AppModule { }
