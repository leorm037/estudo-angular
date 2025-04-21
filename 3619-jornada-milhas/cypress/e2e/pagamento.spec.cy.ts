describe('Tela de Pagamento', () => {
  beforeEach(() => {
    cy.visit('/pagamento');
  });

  it('deve selecionar o método de pagamento Pix', () => {
    cy.contains('label', 'Pix').click();
    cy.contains('label', 'Pix').find('input[type="radio"]').should('be.checked');
  });

  it('deve selecionar o método de pagamento Cartão', () => {
    cy.contains('label', 'Cartão').click();
    cy.contains('label', 'Cartão').find('input[type="radio"]').should('be.checked');
  });

  it('deve copiar o código Pix quando clicado', () => {
    cy.contains('label', 'Pix').click();
    cy.get('.copy-button').click();
  });


  it('deve preencher e enviar o formulário do cartão de crédito', () => {
    cy.contains('label', 'Cartão').click();

    cy.get('input[formControlName="numeroCartao"]').type('4111111111111111', { force: true });
    cy.get('input[formControlName="nomeCartao"]').type('FULANO DE TAL', { force: true });
    cy.get('input[formControlName="mesValidade"]').type('12', { force: true });
    cy.get('input[formControlName="anoValidade"]').type('2025', { force: true });
    cy.get('input[formControlName="codigoSeguranca"]').type('123', { force: true });

    cy.get('button[type="submit"]').should('not.be.disabled').click();
  });
});
