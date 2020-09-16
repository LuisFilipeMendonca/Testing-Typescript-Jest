import { Message } from './message';

const createSut = () => {
  return new Message();
};

describe('Testing Message', () => {
  it('Should return undefine', () => {
    const sut = createSut();
    expect(sut.sendMessage('Some message')).toBeUndefined();
  });

  it('Should call console.log one time', () => {
    const sut = createSut();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.sendMessage('Some message');
    expect(consoleSpy).toBeCalledTimes(1);
  });

  it('Should console.log the msg sended', () => {
    const sut = createSut();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.sendMessage('Some message');
    expect(consoleSpy).toBeCalledWith('Some message');
  });
});
