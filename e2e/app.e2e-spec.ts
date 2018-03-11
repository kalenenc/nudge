import { NudgePage } from './app.po';

describe('nudge App', function() {
  let page: NudgePage;

  beforeEach(() => {
    page = new NudgePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
