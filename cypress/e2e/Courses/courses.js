/// reference types= "cypress" />
/// reference types= "cypress-xpath" />

describe('Validate dropdown list via Gomycode', () => {
    it('validate courses dropdown list', () => {

      cy.visit('https://gomycode.com/ng/');
      cy.wait(10000);
      cy.get('.elementor-sticky--active > .elementor-element-8b3fb9a > .elementor-element-e8b7773 > .elementor-element-9d4a4cf > .elementor-widget-container > .elementor-menu-toggle > .elementor-menu-toggle__icon--open').click();
      
      cy.get("[class] [data-id='58ce7bd']:nth-of-type(1) [aria-hidden] [class='menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-9266'] > [aria-haspopup]").click();
    
     // cy.get("[class] [data-id='58ce7bd']:nth-of-type(1) [aria-hidden] [class='menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-9266'] > [aria-haspopup] .sub-arrow").select('courses');
     //cy.wait(7000);
    //cy.ge('#sm-17226150102701846-4').select('UX & UI Design').contains('UX & UI Design');
      //  cy.get('#17225136826938535-3').select('UX & UI Design');
    //  cy.get('#17225136826938535-5').select('Performance Marketing - Meta Certified');
    //  cy.get('#17225136826938535-7').select('Coding with Python');
    //  cy.get('#17225136826938535-9').select('Software Developer Bootcamp');

      
    })
     // more assertions on drop downlist

//     it.only('select specific courses via gomycode', () => {

//       cy.visit('https://gomycode.com/ng/');
//       cy.wait(7000);
//       cy.get('.elementor-sticky--active > .elementor-element-8b3fb9a > .elementor-element-e8b7773 > .elementor-element-9d4a4cf > .elementor-widget-container > .elementor-menu-toggle > .elementor-menu-toggle__icon--open').click(); 
//      cy.get("").select('UX & UI Design').contains('UX & UI Design');
//      //cy.get('17225136826938535-5').select('Performance Marketing - Meta Certified').should('have.value','Performance Marketing - Meta Certified');
//      //cy.get('17225136826938535-7').select('Coding with Python').contains('Coding with Python');
//      //cy.get('17225136826938535-9').select('Software Developer Bootcamp');
// })
})