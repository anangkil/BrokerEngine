///<reference types = 'Cypress'/>
import Account from "../Page Objects/CreateAccount";

describe('New Contact', () => {
  beforeEach(() =>{
    cy.clearAllCookies();
  })
  
  it('should allow user to create a contact', () => {
    cy.APILogin();
    Account.BoardsPage();
    Account.GoToContacts();
    Account.CreateNewAccount();
    Account.SetFirstName();
    Account.SetMobile();
    Account.SetLastname();
    Account.SetEmail();
    Account.SetHomeStAdd();
    Account.SetHomeCityAdd();
    Account.SetHomePostal();
    Account.SetHomeState();
    Account.SetSamePostal();
    Account.SetOfcStAdd();
    Account.SetOfcCityAdd();
    Account.SetOfcPostal();
    Account.SetOfcState();
    Account.SetBrokerBrand();
    Account.SaveNewContact();
    Account.AssertFullName();
    Account.AssertEmail();
    Account.AssertMobileNumber();
    Account.GoToDetails();
    Account.GoToContactRole();
    Account.SetContactRole();
    Account.SaveEditContact();
    Account.AssertContactRole();

  })
 
})
