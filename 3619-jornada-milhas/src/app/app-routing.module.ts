import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BuscaComponent } from './busca/busca.component';
import { DetalheComponent } from './detalhe/detalhe.component';
import { ReservaComponent } from './reserva/reserva.component';
import { PagamentoComponent } from './pagamento/pagamento.component';
import { ConclusaoReservaComponent } from './conclusao-reserva/conclusao-reserva.component';
import { PedidosComponent } from './pedidos/pedidos.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./autenticacao/autenticacao.module').then(m => m.AutenticacaoModule)
  },
  {
    path: 'busca',
    loadChildren: () => import('./busca/busca.module').then(m => m.BuscaModule)
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'busca',
    component: BuscaComponent
  },
  {
    path: 'detalhe',
    component: DetalheComponent
  },
  {
    path: 'reserva',
    component: ReservaComponent
  },
  {
    path: 'pagamento',
    component: PagamentoComponent
  },
  {
    path: 'conclusao-reserva',
    component: ConclusaoReservaComponent
  },
  {
    path: 'pedidos',
    component: PedidosComponent
  },
  {
    path: '**',
    redirectTo: '/pagina-nao-encontrada',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
