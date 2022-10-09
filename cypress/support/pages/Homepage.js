const locator = require("../locator/homepage-locator")
const dataset = require("../dataset/homepage-data");
class Homepage {
  
  async visit() {
    cy.visit("");
    cy.viewport(855, 1000);
    return cy.url("eq", dataset.data.baseUrl);
  }

  async verifyLogo() {
    return cy.get(locator.selector.logo).should("be.visible");
  }

  async verifyContent() {
    cy.get(locator.selector.productContainer).should("be.visible");
    return cy.get(locator.selector.navbarContainer).should("be.visible");
  }

  async verifyFilterCategory() {
    return cy.get(locator.selector.listFilter).should("be.visible");
  }

  async clickListCategory() {
    return cy.get(locator.selector.listFilter).click;
  }
  
  async verifyFilterResult() {
    return cy.get(locator.selector.cardProduct).should('have.attr', 'href').and('include', 'prod.html?idp_=1');
  }
}

module.exports = Homepage;