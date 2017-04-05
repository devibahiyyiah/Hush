import { HushPage } from './app.po';

describe('hush App', function() {
  let page: HushPage;

  beforeEach(() => {
    page = new HushPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
