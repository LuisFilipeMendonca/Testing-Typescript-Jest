import { Persist } from './persist';

const createSut = () => {
  return new Persist();
};

describe('Testing Persist', () => {
  afterEach(() => jest.clearAllMocks());

  it('Should return undefined', () => {
    // System under test
    const sut = createSut();

    expect(sut.saveOrder()).toBeUndefined();
  });

  it('Should call console.log one time', () => {
    const sut = createSut();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.saveOrder();
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });

  it('Should call console.log with value "Your order have been saved"', () => {
    const sut = createSut();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.saveOrder();
    expect(consoleSpy).toHaveBeenCalledWith('Your order have been saved');
  });
});
