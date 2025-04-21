import { PagamentoService } from './pagamento.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RadioOption } from '../core/types/type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.scss']
})
export class PagamentoComponent implements OnInit {

  qrCode$ = this.pagamentoService.getQrCode();

  constructor(
    private router: Router,
    private pagamentoService: PagamentoService
  ) {}

  pagamentoRadioOptions: RadioOption[] = [
    {
      id: '1',
      value: 'PAYMENT',
      label: 'Pix',
      img: {
        src: '../../assets/icones/pix-icon.svg',
        alt: 'Pix logo'
      }
    },
    {
      id: '2',
      value: 'PAYMENT',
      label: 'Cartão',
      img: {
        src: '../../assets/icones/mastercard-icon.svg',
        alt: 'Card logo'
      }
    }
  ];

  formaPagamento!: RadioOption;

  form = new FormGroup({
    numeroCartao: new FormControl('', Validators.required),
    nomeCartao: new FormControl('', Validators.required),
    mesValidade: new FormControl('', Validators.required),
    anoValidade: new FormControl('', Validators.required),
    codigoSeguranca: new FormControl('', Validators.required)
  });

  ngOnInit(): void {
    this.formaPagamento = this.pagamentoRadioOptions[0];
  }

  onSelectionChange(option: RadioOption): void {
    this.formaPagamento = option;
  }

  onSubmitForm(): void {
    this.pagamentoService.criarReserva()
      .subscribe(() => {
        this.router.navigate(['conclusao-reserva']);
      });
  }
}
