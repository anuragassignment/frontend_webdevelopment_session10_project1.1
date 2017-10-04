import { ImdbAppPage } from './app.po';

describe('imdb-app App', () => {
  let page: ImdbAppPage;

  beforeEach(() => {
    page = new ImdbAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
