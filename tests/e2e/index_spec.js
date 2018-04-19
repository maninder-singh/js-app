module.exports = {
    before:function (browser,done) {
      console.log("Before");
      done();

    },
    after:function (browser,done) {
       console.log("After");
       done();
    },
    beforeEach:function (browser,done) {
        console.log("Before each");
        browser.url("https://google.co.in");
        done();
    },
    afterEach:function (browser,done) {
      console.log("After each");
      done();
    },
    'Demo Test':function (browser) {
        browser
            .waitForElementVisible('body', 5000)
            .assert.title('Google')
            .assert.visible('input[type=text]')
            .setValue('input[type=text]', 'rembrandt van rijn')
            .waitForElementVisible('button[name=btnG]', 1000)
            .click('button[name=btnG]')
            .pause(1000)
            .assert.containsText('ol#rso li:first-child', 'Rembrandt - Wikipedia')
            .end()
    }
}