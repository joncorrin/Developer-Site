import { JoncorrinPage } from './app.po';

describe('joncorrin App', () => {
  let page: JoncorrinPage;

  beforeEach(() => {
    page = new JoncorrinPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
