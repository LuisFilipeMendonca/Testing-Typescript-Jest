describe('Testing something', () => {
  it('Should return number one', () => {
    const number = 1;

    expect(number).toBe(1);
  });
});

describe('Testing something else', () => {
  test('Should return string Hello world.', () => {
    const string = 'Hello world.';

    expect(string).toBe('Hello world.');
  });
});
