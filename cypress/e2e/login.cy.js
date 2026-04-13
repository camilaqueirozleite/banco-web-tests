describe('Login', () => {
  beforeEach(() => {
    //arrange
    cy.visit('http://localhost:4000')
  })
  it('Login com dados válidos deve permitir entrada no sistema', () => {
    
    //act
    cy.get('#username').click().type("julio.lima")
    cy.get('#senha').click().type("123456")
    cy.contains('button', 'Entrar').click()

    //assert
    cy.contains('h4' , 'Realizar Transferência').should('be.visible')
  })

  it('Login com dados inválidos devem apresentar mensagem de erro', () => {
       //act
    cy.get('#username').click().type("julio.lima")
    cy.get('#senha').click().type("123458")
    cy.contains('button', 'Entrar').click()

    //assert
   cy.get('.toast').should('have.text', 'Erro no login. Tente novamente.')
  })
})