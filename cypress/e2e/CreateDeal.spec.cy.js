///<reference types = 'Cypress'/>
import NewDeal from "../Page Objects/NewDeal";

describe('New Deals', () => {
    
  it('should allow user to create a Deal', () => {
    cy.APILogin();
    NewDeal.BoardsPage();
    NewDeal.CreateNewDeal();
    NewDeal.SetDealName();
    NewDeal.SetApplicant();
    NewDeal.SetDealStage();
    NewDeal.SetLender();
    NewDeal.SetAssignedRole();
    NewDeal.SubmitDeal();
    NewDeal.AssertDealName();
    NewDeal.AssertApplicantDetails();
    NewDeal.AssertDealStage();
    NewDeal.AssertLender();
    NewDeal.AssertAssignedTeam();
  })
})
