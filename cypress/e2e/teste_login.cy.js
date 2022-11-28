///<references types="cypress" />


describe('teste login', () => {

    it('Realizar login com credenciais corretas e impedir login ao inserir credenciais invalidas', () => {
        cy.visit('http://localhost:3333/login.html')
        cy.get('input[id="inputEmail"]').wait(2000).type('gabrielnog@gmail.com')
        cy.get('input[id="inputPassword"]').wait(2000).type('Gabriel@2002')
        cy.get('button[class="effectButton"]').contains('Entrar').wait(2000).click()
        cy.get('h1[id="bem_vindo"]').wait(2000).should('be.visible')
        cy.get('img[src="../assets/img/sair_icon.png"]').wait(2000).click()
        cy.get('input[id="inputEmail"]').wait(2000).type('testelogininvalido')
        cy.get('input[id="inputPassword"]').wait(2000).type('abobora')
        cy.get('button[class="effectButton"]').contains('Entrar').wait(2000).click()
        cy.get('span[id="modalText"]').contains('Email e/ou senha incorretos!').wait(1000).should('be.visible')
    })
})