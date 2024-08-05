/// reference types= "cypress" />
/// reference types= "cypress-xpath" />

describe('Test About Gomycode page via Gomycode', () => {
    it('Test for a successful About Gomycode page navigation', () => {

      cy.visit('https://gomycode.com/ng/');
      cy.wait(7000);
      cy.get('.elementor-sticky--active > .elementor-element-8b3fb9a > .elementor-element-e8b7773 > .elementor-element-9d4a4cf > .elementor-widget-container > .elementor-menu-toggle > .elementor-menu-toggle__icon--open').click();
     //cy.get("a[href*='courses/']").contains('Design').click({force:true});   //for x-path selector or to force click use; click({force:true});
     cy.get('.elementor-item').contains('Courses');                            // by class;
     cy.get('.elementor-item').contains('Hackerspaces');
     cy.get('.elementor-item').contains('About GOMYCODE');
     cy.get('.elementor-item').contains('GOMYCODE School of Technology');
     cy.get('.elementor-item').contains('Summer Academy');
     cy.get('#gomycode-availability-country-selector').select('Global');
     cy.get("[data-id='7d25d798'] .elementor-heading-title").contains('Learn digital skills');   //using id;
     cy.get("[data-id='60ac6788'] .elementor-heading-title").contains('Boost your career.');
     cy.get("[data-id='146c94f'] .elementor-heading-title").contains('Beginner-friendly courses that will teach you the jobs of today and tomorrow, provided by experienced and trusted instructors.');
     cy.get("[data-id='6128a384'] .elementor-button-text").contains('Learn more').click();
     cy.get("//h2[@class='elementor-heading-title elementor-size-default']").contains('Join the course adapted to your needs');                // using h2 as a class... Which h2 is an html element.
     cy.get("//h2[@class='elementor-heading-title elementor-size-default']").contains('Whether you want to learn fundamental skills, boost your career with an international certification, or change your career, we have the right program for you.');
     cy.get("//h2[@class='elementor-heading-title elementor-size-default']").contains('50 to 350 hours').contains('Live classes').contains('On site or online');
     cy.get("//a[@href='javascript:void(0);']").contains('Web').contains('Data') ;
     // using class and the nth element to pick items..  
     cy.get(".edumall-nav-tabs [role='tab']:nth-of-type(2)").contains('Marketing');
     cy.get(".edumall-nav-tabs [role='tab']:nth-of-type(3)").contains('Design') ;
     cy.get(".edumall-tab-content [data-id='4928d39b']").should('have text', 'Career change');
     cy.get(".edumall-tab-content [data-id='4928d39b']").should('have.text', 'Introduction');
     cy.get(".edumall-tab-content [data-id='4928d39b']").should('have.text', 'Advanced');

     cy.get(".edumall-tab-content [data-id='4928d39b']").contains('A tailored 24-week bootcamp, perfect for tech newcomers or those with minimal programming experience who want to transform their career').contains('Software Developer Bootcamp').click();
     cy.get(".edumall-tab-content [data-id='4928d39b']").contains('Learn More').click();
     cy.get(".edumall-tab-content [data-id='4928d39b']").contains('Dive into React JS mastery in our advanced course for developers with basic front-end skills.').contains('Front End Developer - React JS').click();
     cy.get(".edumall-tab-content [data-id='4928d39b']").contains('A beginner-friendly training, tailored to help you build your first website with hands-on learning and expert guidance.').contains('Introduction To Web Programming').click();
     cy.get(".edumall-tab-content [data-id='4928d39b']").contains('Enroll in our cybersecurity training to gain in-depth knowledge and prepare for the CompTIA Security+ certification').contains('Cybersecurity - CompTIA Security+ Certified').click();
     cy.get(".edumall-tab-content [data-id='4928d39b']").contains('Get ISTQB-certified with our hands-on Software Testing training. Achieve formal recognition and comprehensive expertise.').contains('Software Testing - ISTQB Certified').click();
     cy.get("[data-id='4f70fdbb'] .elementor-heading-title").should('have text', 'Hired by international Tech companies');
     cy.get("[data-id='12199197'] .elementor-button-text").contains('Download Brochure').click();
     cy.get("[data-id='75b209b7']").contains('Join the leading Digital School in Africa').contains('We have been providing digital knowledge in 8 countries and 40 campuses, allowing thousands of people to boost or change their careers.').contains('Digital School in Africa').contains('Graduates in African countries');
     cy.get("[data-id='5a057876'] .elementor-button-text").contains('Book a call').click();
     cy.get("[data-id='30a5f095'] .elementor-heading-title").should('have.text', 'They boosted their career, so can you');
     cy.get("[data-id='11ac8113']").contains('Learn with highly-qualified instructors').contains("Learn with highly-qualified instructors In addition to being experts in their fields, they are mentors at heart and focus on each student's needs.");
     cy.get("[data-id='605a0241'] .elementor-button-text").contains('Book a call').click();
     cy.get("[data-id='1e1020dd'] .elementor-heading-title").contains('Join a community of leaders and learners');
     cy.get("[data-id='66e9390b'] .elementor-heading-title").contains("Fill out the form below to receive the program that you're interested in.");
     cy.get("[data-id='788b25c']").contains('230 Herbert Macaulay Way, Alagomeji-Yaba 101245, Lagos, Nigeria').contains('tel:02018884669').contains('hello@gomycode.com').click();
     cy.get("[data-id='788b25c']").contains('Courses').click();
     cy.get("[data-id='788b25c']").contains('Hackerspace').click();
     cy.get("[data-id='788b25c']").contains('GOMYTECH').click();
     cy.get("[data-id='788b25c']").contains('About GOMYCODE').click();
     cy.get("[data-id='788b25c']").contains('Careers').click();
     cy.get("[data-id='788b25c']").contains('GOMYCODE policy').click();
    });
}); 