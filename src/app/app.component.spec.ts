import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: AppComponent;

  beforeEach(() => {
    fixture = new AppComponent();
  });

  it("Should have title", () => {
    expect(fixture.title).toEqual("Tour of Heros")
  })
});