class SignIn{
    constructor(){
        this.email='#email',
        this.password='[name="login[password]"]'
        this.signin='button[class="action login primary"][name="send"][id="send2"]',
        this.dispmsg='ul li[class="greet welcome"] span.logged-in'
    }
    clickOnSignin(){
        cy.contains('Sign In').click();
    }
    enterEmail(email){
        cy.get(this.email).type(email);
    }
    enterPassword(pass){
        cy.get(this.password).type(pass);
    }
    clickSigninBtn(){
        cy.get(this.signin).click()
    }
    verifyUserNameDisplayOnHomePage(){
        cy.get(this.dispmsg).eq(0).should('include','poun')
    }
}
export default SignIn;