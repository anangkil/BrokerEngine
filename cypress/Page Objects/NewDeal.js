
class NewDeal {

    TestData = {
        DealName: 'Production',
        ApplicantName: 'Albert Nangkil',
        DealStage: '1 Outstanding Supporting Documents',
        LenderName: 'Adaptive regional leverage',
        BrokerName: 'Test Broker'
    }
    
    NewDealModal = {

        NewBtn:`.ant-btn.ant-btn-success.ant-btn-next`,
        DealNameField: `input[name='name']`,
        ApplicantsField: '#rc_select_1',
        SelectDropdownValue: '.rc-virtual-list-holder-inner',
        DealStageField: '#rc_select_0',
        SelectDealStage1: `span[data-testid='stage-option-1']`,
        SelectdealStage3: `.rc-virtual-list-holder-inner > div:nth-of-type(17) > div > span`,
        LenderField: `[name='brokerLenderId'] .ant-select-selection-search-input`,
        SelectLender1:`[title='Adaptive regional leverage'] .ant-select-item-option-content`,
        AssignRoleLoanAdmin: `div[name='roles[0].user']  .ant-select-selection-search`,
        SelectBroker: `div[title='Test Broker (test+broker123@brokerengine.com.au)'] > .ant-select-item-option-content`,
        AddDealBtn: '.ant-btn-primary span'
    }   

    ViewDealPage = {
        DealNm: ".LoanApplicationHeader__applicationNameNonEditing__LB\+UH",
        ApplicantDtls: `[href='\/contacts\/58929\/']`,
        DealStg: '.ant-select-selection-item > span',
        Lender: '.LoanApplicationHeader__sectionFunding__eKbyu .LoanApplicationHeader__mutedText__3h00D',
        AssignedTeam: `[data-testid='loanApplicationHeader-brokerName']`
    }
    
           BoardsPage()
           {
            cy.visit("https://staging.brokerengine.com.au/boards/deal/");
           }
           OpenDeal(){
            cy.get('.LoanBoardCard__cardName__t14EI').click();
           }
           ViewFullDeal(){
            cy.get('.ant-drawer-extra span').click();
           }
           TransitioDealStage()
           {
            cy.get(this.ViewDealPage.DealStg).click();
            cy.get(this.NewDealModal.SelectdealStage3).click();
           }
           CreateNewDeal(){
            cy.get(this.NewDealModal.NewBtn).should('be.visible').click();
           }
           SetDealName() {
            cy.get(this.NewDealModal.DealNameField).should('be.visible').type(this.TestData.DealName);
           }
           SetApplicant () {
            cy.get(this.NewDealModal.ApplicantsField).click();
            cy.get(this.NewDealModal.SelectDropdownValue).should('contain', this.TestData.ApplicantName).click();
           }
           SetDealStage() {
            cy.get(this.NewDealModal.DealStageField).click();
            cy.get(this.NewDealModal.SelectDropdownValue).should('be.visible');
            cy.get(this.NewDealModal.SelectDealStage1).should('contain', this.TestData.DealStage).click();
           }
           SetLender() {
            cy.get(this.NewDealModal.LenderField).click();
            cy.get(this.NewDealModal.SelectDropdownValue).should('be.visible');
            cy.get(this.NewDealModal.SelectLender1).should('contain', this.TestData.LenderName).click();
           }
           SetAssignedRole(){
            cy.get(this.NewDealModal.AssignRoleLoanAdmin).click();
            cy.get(this.NewDealModal.SelectDropdownValue).should('be.visible', this.TestData.Broker);
            cy.get(this.NewDealModal.SelectBroker).should('contain', this.TestData.BrokerName).click();
           }
           SubmitDeal(){
            cy.get(this.NewDealModal.AddDealBtn).click();
           }
           AssertDealName(){
            cy.get(this.ViewDealPage.DealNm).should('contain', this.TestData.DealName);
           }
           AssertApplicantDetails(){
            cy.get(this.ViewDealPage.ApplicantDtls).should('contain', this.TestData.ApplicantDetails);
           }
           AssertDealStage(){
            cy.get(this.ViewDealPage.DealStg).should('contain', this.TestData.DealStage);
           }
           AssertLender(){
            cy.get(this.ViewDealPage.Lender).should('contain', this.TestData.LenderName);
           }
           AssertAssignedTeam(){
            cy.get(this.ViewDealPage.Broker).should('contain', this.TestData.BrokerName);
           }
}
module.exports = new NewDeal();