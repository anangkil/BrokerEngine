// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('APILogin', (option = {}) => {
    
    cy.request({
        url: 'https://staging.brokerengine.com.au/auth/2fa/login/',
        method: 'POST',
        body: {
              'username': 'test+broker123@brokerengine.com.au',
              'password': 'KQMzPWY469pf22y'
            },
        }) 
    })
    
    Cypress.on(
        'uncaught:exception',
        (err) => !err.message.includes('ResizeObserver loop limit exceeded')
      );
    
