class SignUp{
    constructor(){
        this.firstname='#firstname',
        this.lastname='#lastname',
        this.email='[name="email"]',
        this.password='[id="password"]',
        this.confirmpass='[name="password_confirmation"]',
        this.submit='[title="Create an Account"]'
    }
    clickOnCreateAccount(){
        cy.contains('Create an Account').click();
    }
    enterFirstName(fname){
      cy.get(this.firstname).type(fname)
    }
    enterLastname(lname){
      cy.get(this.lastname).type(lname)
    }
    enterEmail(useremail){
        cy.get(this.email).type(useremail)
      }
      enterPassword(password){
        cy.get(this.password).type(password)
      }
      enterPasswordConfirmation(passconf){
        cy.get(this.confirmpass).type(passconf)
      }
    clickCreateAccountBtn(){
      cy.get(this.submit).click()
    }
  }
  export default SignUp;