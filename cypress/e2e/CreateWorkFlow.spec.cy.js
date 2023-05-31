///<reference types = 'Cypress'/>
import NewWorkFlow from "../Page Objects/NewWorkFlow";
import NewDeal from "../Page Objects/NewDeal";

describe('New Workflow', () => {
    
  it('should allow user to create a Deal', () => {
    cy.APILogin();
    NewWorkFlow.TemplatePage();
    NewWorkFlow.CreateNewWorkFlow();
    NewWorkFlow.SetWorkFlowName();
    NewWorkFlow.SelectStageDeal();
    NewWorkFlow.AddWorkFlowStep();
    NewWorkFlow.AddWorkFlowTask();
    NewWorkFlow.AddNewTaskTemplate();
    NewWorkFlow.SaveNewWorkFlow();
    NewWorkFlow.PublishWorkFlow();
    NewDeal.BoardsPage();
    NewDeal.OpenDeal();
    NewDeal.ViewFullDeal();
    NewDeal.TransitioDealStage();

  })
})
