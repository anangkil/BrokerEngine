
class NewWorkFlow {

    TestData = {
        WorkFlowName: `Albert's New Workflow`,
        ApplicantName: 'Albert Nangkil',
        DealStage: '1 Outstanding Supporting Documents',
        LenderName: 'Adaptive regional leverage',
        BrokerName: 'Test Broker',
        TaskName: `Albert's Task`
    }
    
    NewWorkFlowModal = {

        NewBtn:`.ant-btn.ant-btn-primary`,
        NameField: `input[name='name']`,
        SelectStageField: `div[name='startOnStage'] > .ant-select-selector`,
        SelectStageDealValue: `div:nth-of-type(16) > div > span`,
        AddStepBtn: `button[data-testid='workflow-addStep']`,
        AddStepTask: `li:nth-of-type(1) > .ant-dropdown-menu-title-content`,
        TaskTemplateField: `div[name='nodesConfig[0].config.taskTemplateId'] input[role='combobox']`,
        AddTaskTemplate: `.ant-select-item.ant-select-item-option.djrad--model-lookup__select-widget-option-add > .ant-select-item-option-content`,
        TaskNameField: `[class='ant-col ant-form-item-control ant-col-xs-24'] span`,
        CreateTemplateBtn: `.ant-btn-group .ant-btn-next:nth-of-type(1) span`,
        SaveBtn: `.ant-col > .ant-btn.ant-btn-success`,
        PublishBtn: `div:nth-of-type(1) > button[role='switch']`,
    }   
   
           TemplatePage(){
            cy.visit("https://staging.brokerengine.com.au/my-profile/workflow-templates/");
           }
           CreateNewWorkFlow(){
            cy.get(this.NewWorkFlowModal.NewBtn).should('be.visible').click();
           }
           SetWorkFlowName() {
            cy.get(this.NewWorkFlowModal.NameField).should('be.visible').type(this.TestData.WorkFlowName);
           }
           SelectStageDeal() {
            cy.get(this.NewWorkFlowModal.SelectStageField).click();
            cy.get(this.NewWorkFlowModal.SelectStageDealValue).click();
           }
           AddWorkFlowStep () {
            cy.get(this.NewWorkFlowModal.AddStepBtn).click();
           }
           AddWorkFlowTask() {
            cy.get(this.NewWorkFlowModal.AddStepTask).click();
           }
           AddNewTaskTemplate() {
            cy.get(this.NewWorkFlowModal.TaskTemplateField).click();
            cy.get(this.NewWorkFlowModal.AddTaskTemplate).click();
            cy.get(this.NewWorkFlowModal.TaskNameField).type(this.TestData.TaskName);
            cy.get(this.NewWorkFlowModal.CreateTemplateBtn).click();
           }
           SaveNewWorkFlow(){
            cy.get(this.NewWorkFlowModal.SaveBtn).click();
           }
           PublishWorkFlow(){
            cy.get(this.NewWorkFlowModal.PublishBtn).click();
           }
           
}
module.exports = new NewWorkFlow();