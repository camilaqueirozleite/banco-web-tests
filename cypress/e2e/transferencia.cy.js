describe('Transferencias', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.fixture('credenciais').then(credenciais => {
      cy.get('#username').type(credenciais.valida.usuario)
      cy.get('#senha').type(credenciais.valida.senha)
    })
    cy.contains('button', 'Entrar').click()
  })

  it('Deve transferir quando informo dados e valor válidos', () => {

    // Conta origem
    cy.get('label[for="conta-origem"]').parent().click()
    cy.contains('João da Silva').click()

    // Conta destino
    cy.get('label[for="conta-destino"]').parent().click()
    cy.contains('Maria Oliveira').click()

    // Valor
    cy.get('#valor').type('11')

    // Transferir
    cy.contains('button','Transferir').click()

    // Validação
    cy.get('.toast').should('contain','Transferência realizada')
  })
})

   