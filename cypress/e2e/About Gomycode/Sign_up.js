/// reference types= "cypress" />
/// reference types= "cypress-xpath" />

describe('Test About Gomycode page via Gomycode', () => {
    it('Test for a successful About Gomycode page navigation', () => {

      cy.visit('https://gomycode.com/ng/');
      cy.wait(7000);
      cy.get('.elementor-sticky--active > .elementor-element-8b3fb9a > .elementor-element-e8b7773 > .elementor-element-9d4a4cf > .elementor-widget-container > .elementor-menu-toggle > .elementor-menu-toggle__icon--open').click();
      cy.get('.elementor-sticky--active > .elementor-element-8b3fb9a > .elementor-element-e8b7773 > .elementor-element-9d4a4cf > .elementor-widget-container > .elementor-nav-menu--dropdown.elementor-nav-menu__container > #menu-2-9d4a4cf > .menu-item-9104 > .elementor-item').click();
      cy.get('.elementor-element').contains('Sign up now!');
      cy.get('#label-lastname-d0fe44e4-6740-475d-84a2-38504fa657a4 > :nth-child(1)').type('Janey');
      cy.get('#label-firstname-d0fe44e4-6740-475d-84a2-38504fa657a4 > :nth-child(1)').type('Agrand');
      cy.get('#label-phone-d0fe44e4-6740-475d-84a2-38504fa657a4 > :nth-child(1)').type('09087634521');
      cy.get('#label-email-d0fe44e4-6740-475d-84a2-38504fa657a4 > :nth-child(1)').type('JaneyAgrand1@gmail.com');
      cy.get('#label-hackerspaces-d0fe44e4-6740-475d-84a2-38504fa657a4 > :nth-child(1)').contains('Pick your location');
      
      cy.get('#hackerspaces-d0fe44e4-6740-475d-84a2-38504fa657a4').click().contains('Choisissez votre espace').contains('Yaba Hackerspace').contains('Nigeria Online Hackerspace').contains('Ikeja HackerSpace').contains('Abuja Hackerspace').contains('Festac Town Hackerspace').contains('Lekki Hackerspace').click('Ikeja HackerSpace');
      cy.get('#label-track-d0fe44e4-6740-475d-84a2-38504fa657a4 > :nth-child(1)').contains('Select Your Preferred Course');
      cy.get('#track-d0fe44e4-6740-475d-84a2-38504fa657a4').click().contains('Graphic Design').contains('Social Media Marketing').contains('UX & UI Design').contains('Graphic Design With Adobe Illustrator - Summer Academy').click('UX & UI Design');
      cy.get('#label-marketing_newsletter-d0fe44e4-6740-475d-84a2-38504fa657a4 > :nth-child(1)').contains('Newsletter');
      cy.get('.hs-form-checkbox').contains('Get the latest tech news, updates & insights from GOMYTECH.');
      cy.get('.hs-button').click();
    })
})