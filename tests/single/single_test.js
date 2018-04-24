module.exports = {
  'Google\'s Search Functionality Sample Test': function (browser) {
    browser
      .url('https://www.google.com/ncr')
      .waitForElementVisible('body', 1000)
      .setValue('input[type=text]', 'Ashmeet Sehgal\n')
      .pause(1000)
      .assert.title('Ashmeet Sehgal - Google Search')
      .end();
  }
};
