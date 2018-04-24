# functional-automation
It is a complete browser (End-to-End) testing solution which aims to simplify the process of setting up Continuous Integration and writing automated tests.

## Setup
* Clone the repo
* Install dependencies `npm install`
* Set your BrowserStack credentials to the environment variables `BROWSERSTACK_USERNAME` and `BROWSERSTACK_ACCESS_KEY`. If you have an account, you can obtain these credentials form https://www.browserstack.com/accounts/settings

## Running your tests
- To run a single test, run `npm run single`
- To run local tests, run `npm run local`
- To run parallel tests, run `npm run parallel`

 Understand how many parallel sessions you need by using our [Parallel Test Calculator](https://www.browserstack.com/automate/parallel-calculator?ref=github)

## Notes
* You can view your test results on the [BrowserStack automate dashboard](https://www.browserstack.com/automate)
* To test on a different set of browsers, check out our [platform configurator](https://www.browserstack.com/automate/node#setting-os-and-browser)

## Connecting to BrowserStack via a proxy server
You can specify proxy settings in Nightwatch by adding the `proxy` key in your `*.conf.js` 

```javascript
  test_settings: {
    default: {
      desiredCapabilities: {
        // Your capabilities
      },
      proxy: {
        "host": "",     // "127.0.0.1"
        "port": "",     // "8081"
        "protocol": ""  // "http"
      }
    }
  }
```
  
## Who do I talk to?
[Ashmeet Sehgal](https://www.linkedin.com/in/ashmeetsehgal)
