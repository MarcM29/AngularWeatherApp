import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.css('app-root .content span')).getText() as Promise<string>;
  }
}

export class AboutPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl + 'about') as Promise<unknown>;
  }

  getContentText(): Promise<string> {
    return element(by.css('h2')).getText() as Promise<string>;
  }
}

export class OurServicesPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl + 'ourServices') as Promise<unknown>;
  }

  getContentText(): Promise<string> {
    return element(by.css('h2')).getText() as Promise<string>;
  }
}

export class OurCustomersPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl + 'ourCustomers') as Promise<unknown>;
  }

  getContentText(): Promise<string> {
    return element(by.css('h2')).getText() as Promise<string>;
  }
}
