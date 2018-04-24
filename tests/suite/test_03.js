module.exports = {
  'Google\'s Search Functionality': function (browser) {
    browser
      .url('https://www.google.com/ncr')
      .waitForElementVisible('body', 1000)
      .setValue('input[type=text]', 'Ashmeet 03\n')
      .pause(1000)
      .assert.title('Ashmeet 03 - Google Search')
      .end();
  }
};
