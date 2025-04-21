import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.scss']
})
export class DetalheComponent {

  constructor(
    private router: Router,
  ) {}

  onReserveClick(): void {
    this.router.navigate(['reserva']);
  }
}
