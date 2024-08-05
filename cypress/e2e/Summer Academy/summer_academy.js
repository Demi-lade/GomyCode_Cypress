/// reference types= "cypress" />
/// reference types= "cypress-xpath" />

describe('Test About Gomycode page via Gomycode', () => {
    it('Test for a successful About Gomycode page navigation', () => {

      cy.visit('https://gomycode.com/ng/');
      cy.wait(7000);
      cy.get('.elementor-sticky--active > .elementor-element-8b3fb9a > .elementor-element-e8b7773 > .elementor-element-9d4a4cf > .elementor-widget-container > .elementor-menu-toggle > .elementor-menu-toggle__icon--open').click();
      cy.get('.elementor-sticky--active > .elementor-element-8b3fb9a > .elementor-element-e8b7773 > .elementor-element-9d4a4cf > .elementor-widget-container > .elementor-nav-menu--dropdown.elementor-nav-menu__container > #menu-2-9d4a4cf > .menu-item-33468 > .elementor-item').contains('Summer Academy').click();
      cy.get("[class] [data-id='58ce7bd']:nth-of-type(1) [role='button']").click();
      //cy.get('#gomycode-availability-country-selector').select('Global');
      cy.wait(6000);
      cy.get("[data-id='69c1a52'] .elementor-heading-title").should('have.text', 'Join the 2024');
      cy.get("[data-id='69c1a52'] span").should('have.text', 'Summer Academy');
      cy.get("[data-id='7912bfc'] p").contains('A 3-week Summer Program for young Tech enthusiasts : Coding with Python, web development, game development, social media management, or graphic design.');
      cy.get(".elementor-size-xs .elementor-button-text").contains('Discover our courses');
      cy.get("[data-id='5ff3045']").contains('129.000 NGN');
      cy.get('.elementor-heading-title').contains('3 weeks in Abuja, Yaba, Lekki, and Festac spaces');    //[data-id='0f81e67'] 
      cy.get("[data-id='0140a2b'] .elementor-heading-title").contains('Monday - Thursday: 9 AM to 1 PM or 2 PM to 6 PM')
      cy.get("[data-id='345a706'] .elementor-heading-title").contains('Next session: July 29th');
      cy.get("//a[@href='tel:+02018884669']").contains('+02018884669').click();
    


    });
    
    });

