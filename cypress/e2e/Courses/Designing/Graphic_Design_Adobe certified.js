/// reference types= "cypress" />
/// reference types= "cypress-xpath" />

describe('Validate dropdown list via Gomycode', () => {
    it('validate courses dropdown list', () => {

      cy.visit('https://gomycode.com/ng/');
      cy.wait(7000);
      cy.get('.elementor-sticky--active > .elementor-element-8b3fb9a > .elementor-element-e8b7773 > .elementor-element-9d4a4cf > .elementor-widget-container > .elementor-menu-toggle > .elementor-menu-toggle__icon--open').click();
       
    })
})