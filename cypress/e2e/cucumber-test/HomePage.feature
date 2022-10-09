Feature: Homepage
  As user I want access url website
  @Home-visitUrl-D1
  Scenario: I want access url website
    Given I open the url website
    When Navigate to homepage
    Then Successfully open website
  
  @Home-filter-D2
  Scenario: I want filter category
    When I click one of the categories list
    Then List product should showing products base on categories selected