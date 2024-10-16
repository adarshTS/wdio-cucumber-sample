const { Given, When, Then } = require("@wdio/cucumber-framework");

Given(/^I am on the bstackdemo homepage$/, async () => {
  await browser.url("https://bstackdemo.com/");
});

When(/^I click on the "Sign In" link$/, async () => {
  await browser.waitUntil(
    async () => {
      const signInLink = await $('//*[@id="signin"]');
      return signInLink.isClickable();
    },
    {
      timeout: 5000,
      timeoutMsg: "Sign In link was not clickable within 5 seconds",
    }
  );

  const signInLink = await $('//*[@id="signin"]');
  await signInLink.click();
});

Then(/^I should be on the "Sign In" page$/, async () => {
  await browser.waitUntil(
    async () => (await browser.getUrl()).includes("/signin"),
    {
      timeout: 5000,
      timeoutMsg: 'Expected URL to contain "/signin" after 5 seconds',
    }
  );

  const currentUrl = await browser.getUrl();
  expect(currentUrl).toContain("/signin");
});
