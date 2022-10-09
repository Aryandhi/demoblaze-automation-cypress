import { Given, When, Then, And} from  "@badeball/cypress-cucumber-preprocessor";

const Homepage = require("../../../support/pages/Homepage");
let homepage = new Homepage();

//  @Home-visitUrl-D1
Given(/^I open the url website$/, () => {
  homepage.visit("/");
})
When(/^Navigate to homepage$/, () => {
  homepage.verifyLogo();
})
Then(/^Successfully open website$/, () => {
  homepage.verifyContent();
})

// @Home-filter-D2
When(/^I click one of the categories list$/, () => {
  homepage.clickListCategory();
})
Then(/^List product should showing products base on categories selected$/, () => {
  homepage.verifyFilterResult();
})