import { AngularpdPage } from './app.po';

describe('angularpd App', () => {
  let page: AngularpdPage;

  beforeEach(() => {
    page = new AngularpdPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
