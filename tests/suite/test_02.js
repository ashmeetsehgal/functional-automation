module.exports = {
  'Google\'s Search Functionality': function (browser) {
    browser
      .url('https://www.google.com/ncr')
      .waitForElementVisible('body', 1000)
      .setValue('input[type=text]', 'Ashmeet 02\n')
      .pause(1000)
      .assert.title('Ashmeet 02 - Google Search')
      .end();
  }
};
