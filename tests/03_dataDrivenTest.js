module.exports = {
  tags: ['data_driven'],
  'Search JSFoo Pune 2019': function(browser) {
    browser
      .url(browser.globals.url) // Go to a url
      .waitForElementVisible('body', 2000) // wait till page loads
      .assert.title(browser.globals.pageTitle)  // Make sure Site title matches
      .saveScreenshot('screenshots/DuckDuckGo_home_page,png')
      .assert.visible('input[type=text]')
      .setValue('input#search_form_input_homepage', browser.globals.searchKeyword) // send values
      .waitForElementVisible('input#search_button_homepage', 1000)
      .click('input#search_button_homepage') // click on search button
      .pause(5000)
      .click('#r1-0 > div:nth-child(1) > h2:nth-child(1) > a:nth-child(1)')
      .waitForElementVisible('body', 2000)
      .assert.title(browser.globals.jsfooPageTitle)
      .saveScreenshot('screenshots/JSFoo_Pune_2019_home_page.png')
      .end();
  }
};
