

class Account {

    TestData = {
        FirstName: 'Albert',
        LastName: 'Nangkil',
        MobileNm: '34234 3450',
        Email: 'test@gmail.com',
        StreetAdd: '98 Shirley Street',
        CityAdd: 'PIMPAMA',
        State: 'QLD',
        Postal: '4209'
    }
    
    AddNewAccount = {

        ContactBtn: `li:nth-of-type(6)  a`,
        NewBtn: `.ContactHeader__createContact__H4lHb`,
        Firstname: `input[name='contact.firstName']`,
        Lastname: `input[name='contact.lastName']`,
        Mobile: `input[name='contact.mobilePhoneNumber']`,
        EmailAdd: `input[name='contact.email']`,
        HomeStreet: `input[name='contact.homeAddress.line1']`,
        HomeCity: `input[name='contact.homeAddress.suburb']`,
        HomePostal: `input[name='contact.homeAddress.postalCode']`,
        HomeState: `input[name='contact.homeAddress.state']`,
        HomeRadioBtn: `input[name='contact.postalAddressIsSame']`,
        BrokerBrand:`input[id='clientDetailsViewForm.brokerBrand']`,
        SelectBrokerBrand: `[title='Test BrokerGroup \(Test Broker\)'] .ant-select-item-option-content`,
        OfcStreet: `input[name='contact.officeAddress.line1']`,
        OfcCity: `input[name='contact.officeAddress.suburb']`,
        OfcPostal: `input[name='contact.officeAddress.postalCode']`,
        OfcState: `input[name='contact.officeAddress.state']`,
        SaveBtn: `.ant-btn.ant-btn-primary`
    }

    ViewContact = {
        FullName: 'h1.ContactDetailsHeader__title__FEaWn',
        EmailAddress:`[data-testid] [data-testid='contactDetailsHeader-detailRow']:nth-of-type(2) .ContactDetailsHeader__detail__Mo9mq`,
        MobilePhoneNm: `[data-testid] [data-testid='contactDetailsHeader-detailRow']:nth-of-type(3) .ContactDetailsHeader__detail__Mo9mq`,
        DetailsMenu: 'a:nth-of-type(2) > .ContactDetailRootView__sidebarTitle__A3nbf',
        ContactRoleField: 'input#contactRole',
        ContactRole1: `div[title='Accountant'] > .ant-select-item-option-content`,
        ContactRoles: `div[name='roles'] > .ant-select-selector`,
        SaveContact: '.ant-btn-primary span'
    }

      
           BoardsPage(){
            cy.visit("https://staging.brokerengine.com.au/boards/deal/");
           }
           GoToContacts(){
            cy.get(`a[title='Go to Home']`).should('be.visible');
            cy.get(this.AddNewAccount.ContactBtn).click();
           }
           CreateNewAccount(){
            cy.get(this.AddNewAccount.NewBtn).click();
           }
           SetFirstName() {
            cy.get(this.AddNewAccount.Firstname).should('be.visible').type(this.TestData.FirstName);
           }
           SetLastname() {
            cy.get(this.AddNewAccount.Lastname).should('be.visible').type(this.TestData.LastName);
           }
           SetMobile () {
            cy.get(this.AddNewAccount.Mobile).should('be.visible').type(this.TestData.MobileNm);
           }
           SetEmail() {
            cy.get(this.AddNewAccount.EmailAdd).should('be.visible').type(this.TestData.Email);
           }
           SetHomeStAdd () {
            cy.get(this.AddNewAccount.HomeStreet).should('be.visible').type(this.TestData.StreetAdd);
           }
           SetHomeCityAdd () {
            cy.get(this.AddNewAccount.HomeCity).should('be.visible').type(this.TestData.CityAdd);
           }
           SetHomePostal () {
            cy.get(this.AddNewAccount.HomePostal).should('be.visible').type(this.TestData.Postal);
           }
           SetHomeState () {
            cy.get(this.AddNewAccount.HomeState).should('be.visible').type(this.TestData.State);
           }
           SetSamePostal () {
            cy.get(this.AddNewAccount.HomeRadioBtn).click();
           }
           SetOfcStAdd () {
            cy.get(this.AddNewAccount.OfcStreet).should('be.visible').type(this.TestData.StreetAdd);
           }
           SetOfcCityAdd () {
            cy.get(this.AddNewAccount.OfcCity).should('be.visible').type(this.TestData.CityAdd);
           }
           SetOfcPostal () {
            cy.get(this.AddNewAccount.OfcPostal).should('be.visible').type(this.TestData.Postal);
           }
           SetOfcState () {
            cy.get(this.AddNewAccount.OfcState).should('be.visible').type(this.TestData.State);
           }
           SetBrokerBrand(){
            cy.get(this.AddNewAccount.BrokerBrand).click();
            cy.get(this.AddNewAccount.SelectBrokerBrand).should('contain', 'Test BrokerGroup (Test Broker)').click();
            
           }
           SaveNewContact(){
            cy.get(this.AddNewAccount.SaveBtn).click();
           }
           SaveEditContact(){
            cy.get(this.ViewContact.SaveContact).click();
           }
           GoToDetails(){
            cy.get(this.ViewContact.DetailsMenu).click();
           }
           GoToContactRole(){
            cy.get(this.ViewContact.ContactRoleField).click();
           }
           SetContactRole(){
            cy.get(this.ViewContact.ContactRole1).should('be.visible').click();
           }

           ///ASSERTIONS    

           AssertFullName (){
            cy.get(this.ViewContact.FullName).should('contain', `${this.TestData.FirstName} ${this.TestData.LastName}`);
           }
           AssertEmail(){
            cy.get(this.ViewContact.EmailAddress).should('contain', this.TestData.Email);
           }
           AssertMobileNumber(){
            cy.get(this.ViewContact.MobilePhoneNm).should('contain', `(03) 4234 3450 (mobile)`);
           }
           AssertContactRole(){
            cy.get(this.ViewContact.ContactRoles).should('contain', 'Accountant');
           }

}
module.exports = new Account();