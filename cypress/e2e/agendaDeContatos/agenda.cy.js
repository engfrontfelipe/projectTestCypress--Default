describe('Teste para a lista de contatos', () =>{
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')        

    })

    it('Deve incluir um contato', () => {
        cy.get('input[placeholder="Nome"]').type('Felipe');
        cy.get('input[placeholder="E-mail"]').type('Felipe@groveagency.com.br');
        cy.get('input[placeholder="Telefone"]').type('22992122757');
        cy.get('.adicionar').click();

    });

    it('Deve excluir um contato', () => {
        cy.get(':nth-child(2) > .sc-gueYoa > .delete').click()
    });

    it('Deve editar os dados do contato', () => {
        cy.get(':nth-child(2) > .sc-gueYoa > .edit').click();
        
        cy.get('[type="text"]').clear(); 
        cy.get('[type="text"]').type('Robesvaldo');
        
        cy.get('[type="email"]').clear();        
        cy.get('[type="email"]').type('teste@email.com');

        cy.get('[type="tel"]').clear();
        cy.get('[type="tel"]').type('22991211223');

        cy.get('.alterar').click();
        
    });
});