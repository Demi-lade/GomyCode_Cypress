/// reference types= "cypress" />
/// reference types= "cypress-xpath" />

describe('Test About Gomycode page via Gomycode', () => {
    it('Test for a successful About Gomycode page navigation', () => {

      cy.visit('https://gomycode.com/ng/');
      cy.wait(7000);
      cy.get('.elementor-sticky--active > .elementor-element-8b3fb9a > .elementor-element-e8b7773 > .elementor-element-9d4a4cf > .elementor-widget-container > .elementor-menu-toggle > .elementor-menu-toggle__icon--open').click();
      cy.get('.elementor-sticky--active > .elementor-element-8b3fb9a > .elementor-element-e8b7773 > .elementor-element-9d4a4cf > .elementor-widget-container > .elementor-nav-menu--dropdown.elementor-nav-menu__container > #menu-2-9d4a4cf > .menu-item-9104 > .elementor-item').click();
      cy.get('.elementor-element-01b7492 > .elementor-widget-container > .elementor-heading-title').should('have.text', 'Building the leading Tech learning company in Africa & The Middle East');
      cy.get('.elementor-element-fc3625a > .elementor-element > .elementor-widget-container > .elementor-heading-title').should('have.text', 'It all starts with learning!');
      cy.get('.elementor-element-820277f > .elementor-widget-container > .elementor-heading-title').should('have.text', 'Developing Tech talent in Africa and the Middle East');

     // cy.get('.elementor-element').contains('By changing the way of learning', 'We change the world!');
      
      cy.get('.elementor-element-c29d927 > .elementor-widget-container > .elementor-heading-title').should('have.text', 'Unlock the benefits of the experience');
      cy.get('.elementor-element-070c7fa > .elementor-widget-container > .elementor-heading-title').should('have.text', 'Career training');
      cy.get('.elementor-element-b7808f8 > .elementor-widget-container > .elementor-heading-title').should('have.text', 'Learn from Anywhere!');
      cy.get('.elementor-element-49ffdf3 > .elementor-widget-container > .elementor-heading-title').should('have.text', 'The team behind it all');
      cy.get('.elementor-element-5c2bd98 > .elementor-widget-container > .elementor-heading-title').should('have.text', 'A few numbers about our journey');
      cy.get('.elementor-element-f6dc099 > .elementor-element > .elementor-widget-container > .elementor-heading-title').should('have.text', 'Partners that trust us');
      cy.get('.elementor-element-a4167f2 > .elementor-element > .elementor-widget-container > .elementor-heading-title').should('have.text', 'Meet our Investors');
      cy.get('.elementor-element-1232e76 > .elementor-widget-container > .elementor-heading-title').should('have.text', 'Press release');
      cy.get('.elementor-element-11270b9 > .elementor-element > .elementor-widget-container > .elementor-heading-title').should('have.text', 'Sign up now!');
    cy.wait(3000);
    cy.get('.elementor-element').contains('230 Herbert Macaulay Way, Alagomeji-Yaba 101245, Lagos, Nigeria');
    cy.get('.elementor-element').contains('Sign up');
      cy.get('.elementor-element').contains('Discover our Hackerspace');

    });
  });