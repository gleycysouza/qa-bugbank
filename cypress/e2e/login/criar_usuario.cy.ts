describe('Testes de criação de usuário no BugBank', () =>{
    it('ID XXXX - Realizar registro com sucesso', () =>{
        cy.visit('http://localhost:3000/')
        cy.get('button[type="button"]').contains('Registrar').click()
        cy.get('div.card__register input[name="email"]').type('teste@email.com', {force: true})
        cy.get('div.card__register input[placeholder="Informe seu Nome"]').type('Teste BugBank', {force: true})
        cy.get('div.card__register input[name="password"]').type('teste', {force: true})
        cy.get('div.card__register input[name="passwordConfirmation"]').type('teste', {force: true})
        cy.get('div.card__register button[type="submit"]').click({force: true})
        cy.get('p#modalText').should('contain', 'foi criada com sucesso')
    })
    
    it('ID XXXY - Realizar registro sem e-mail', () =>{
        cy.visit('http://localhost:3000/')
        cy.get('button[type="button"]').contains('Registrar').click()
        //cy.get('div.card__register input[name="email"]').type('teste', {force: true})
        cy.get('div.card__register input[placeholder="Informe seu Nome"]').type('Teste BugBank', {force: true})
        cy.get('div.card__register input[name="password"]').type('teste', {force: true})
        cy.get('div.card__register input[name="passwordConfirmation"]').type('teste', {force: true})
        cy.get('div.card__register button[type="submit"]').click({force: true})
        cy.get('div.card__register input[name="email"]').parent().find('p.input__warging')
        .should('have.text', 'É campo obrigatório')
    })
})