import SignUp from "../POM/createaccountpage";
import SignIn from "../POM/perfromsignin";
describe('Create and Signin account',()=>{
  //Signup Page Object created below for easy maintenance
  let signUpPage=new SignUp()
  let signinPage=new SignIn()
  let testdata;
  before(()=>{
    cy.fixture('create&signin').then((tdata)=>{
      testdata=tdata;
    })
  })
  beforeEach(()=>{
    cy.visit('https://magento.softwaretestingboard.com/')
  })
    it('Create Account',()=>{
      signUpPage.clickOnCreateAccount();
      signUpPage.enterFirstName(testdata.firstname);
      signUpPage.enterLastname(testdata.lastname);
      signUpPage.enterEmail(testdata.email);
      signUpPage.enterPassword(testdata.password);
      signUpPage.enterPasswordConfirmation(testdata.password)
      signUpPage.clickCreateAccountBtn()
     })
     it('Validate Sign in functionality',()=>{
      signinPage.clickOnSignin()
      signinPage.enterEmail(testdata.email)
      signinPage.enterPassword(testdata.password)
      signinPage.clickSigninBtn()
      cy.AssertLoginViaAPI()
      signinPage.verifyUserNameDisplayOnHomePage()
     })
  })
  
  