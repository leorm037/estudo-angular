import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reserva } from '../core/types/type';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class PedidosService {

  private apiUrl: string = environment.apiUrl;

  constructor(
    private httpClient: HttpClient
  ) { }

  getPedidos(): Observable<Reserva[]> {
    return this.httpClient.get<Reserva[]>(`${this.apiUrl}/reserva/pedidos`);
  }

  removerPedido(id: number): Observable<Reserva[]> {
    return this.httpClient.delete<Reserva[]>(`${this.apiUrl}/reserva/pedidos/${id}`);
  }
}
