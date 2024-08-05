/// reference types= "cypress" />
/// reference types= "cypress-xpath" />

describe('Test Courses page via Gomycode', () => {
    it('Test for a successful Courses page navigation', () => {
      cy.visit('https://gomycode.com/ng/');
      cy.wait(7000);
      cy.get('a[href*="courses"]').contains('Courses').click();
      // To do 2;
      cy.get('.page-main-content').contains('Data Scientist Bootcamp');
      cy.get('.page-main-content').contains('Software Developer Bootcamp');
       cy.get('.page-main-content').contains('Data Analytics - Microsoft Power BI');
       cy.get('.page-main-content').contains('Performance Marketing - Meta Certified');
       cy.get('.page-main-content').contains('UX & UI Design');
       cy.get('.page-main-content').contains('Graphic Design - Adobe Certified');
       cy.get('.page-main-content').contains('Cybersecurity - CompTIA Security+ Certified');
       cy.get('.page-main-content').contains('Software Testing - ISTQB Certified');



    
    });
  });