import { A2DynamicFormPage } from './app.po';

describe('a2-dynamic-form App', function() {
  let page: A2DynamicFormPage;

  beforeEach(() => {
    page = new A2DynamicFormPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
