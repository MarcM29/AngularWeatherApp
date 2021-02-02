import {AboutPage, AppPage, OurCustomersPage, OurServicesPage} from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });


  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});

describe('AboutContent', () => {
  let page: AboutPage;
  let expected: string;

  beforeEach(() => {
    page = new AboutPage();
    expected = 'about works!';
  });

  it('should display about works!', () => {
    page.navigateTo();
    expect(page.getContentText()).toEqual(expected);
  });
});

describe('OurServiceContent', () => {
  let page: OurServicesPage;
  let expected: string;

  beforeEach(() => {
    page = new OurServicesPage();
    expected = 'our-services works!';
  });

  it('should display our-services works!', () => {
    page.navigateTo();
    expect(page.getContentText()).toEqual(expected);
  });
});

describe('OurCustomersContent', () => {
  let page: OurCustomersPage;
  let expected: string;

  beforeEach(() => {
    page = new OurCustomersPage();
    expected = 'our-customers works!';
  });

  it('should display our-customers works!', () => {
    page.navigateTo();
    expect(page.getContentText()).toEqual(expected);
  });
});

