import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { QrCode, Reserva } from '../core/types/type';

@Injectable()
export class PagamentoService {

  private apiUrl: string = environment.apiUrl;

  constructor(
    private httpClient: HttpClient,
  ) {}

  getQrCode(): Observable<QrCode> {
    return this.httpClient.get<QrCode>(`${this.apiUrl}/pagamento/qrcode`);
  }

  criarReserva(): Observable<any> {
    const reserva: Reserva = {
      destino: "Chile",
      dataIda: "2025-09-23",
      dataVolta: "2025-09-30",
      origem: "Rio Branco",
      estadoOrigem: "Acre",
      adultos: 3,
      valorFinal: 3769
    };

    return this.httpClient.post(`${this.apiUrl}/reserva`, reserva);
  }
}
