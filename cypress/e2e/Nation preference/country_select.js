/// reference types= "cypress" />
/// reference types= "cypress-xpath" />

describe('Validate dropdown list via Gomycode', () => {
    it('validate courses dropdown list', () => {

      cy.visit('https://gomycode.com/ng/');
      cy.wait(10000);
      cy.get('#gomycode-availability-country-selector').select('Global');
      cy.get('#gomycode-availability-country-selector').select('MA');
      cy.get('gomycode-availability-country-selector').select('EG');
      cy.get('gomycode-availability-country-selector').select('EG');


    })
})