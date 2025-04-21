import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConclusaoReservaComponent } from './conclusao-reserva.component';
import { By } from '@angular/platform-browser';

describe('ConclusaoReservaComponent', () => {
  let component: ConclusaoReservaComponent;
  let fixture: ComponentFixture<ConclusaoReservaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConclusaoReservaComponent]
    });
    fixture = TestBed.createComponent(ConclusaoReservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve exibir o banner de conclusão', () => {
    const banner = fixture.debugElement.query(By.css('app-banner'));
    expect(banner.attributes['src']).toEqual('assets/imagens/banner-conclusão.png');
    expect(banner.attributes['alt']).toEqual('Banner conclusão');
  });

  it('deve exibir o título e a mensagem de confirmação', () => {
    const title = fixture.debugElement.query(By.css('.confirmation-title')).nativeElement.textContent;
    const message = fixture.debugElement.query(By.css('.confirmation-message')).nativeElement.textContent;
    expect(title).toContain('Reserva concluída com sucesso.');
    expect(message).toContain('Uhuuuul, prepare suas malas pois a compra foi confirmada e o seu próximo destino já está programado!');
  });

  it('deve ter um link de voltar', () => {
    const backButton = fixture.debugElement.query(By.css('.back-link')).nativeElement.textContent;
    expect(backButton).toContain('Voltar');
  });
});
