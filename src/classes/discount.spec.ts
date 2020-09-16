import {
  FiftyPercentDiscount,
  NoDiscount,
  TenPercentDiscount,
} from './discount';
import { DiscountProtocol } from './interfaces/discount-protocol';

const createSut = (discount: DiscountProtocol): DiscountProtocol => {
  return discount;
};

describe('Testing Discount', () => {
  it('Should return value without descont', () => {
    const sut = createSut(new NoDiscount());
    expect(sut.applyDiscount(10.0)).toBe(10.0);
  });

  it('Should return value with fifty percent discount', () => {
    const sut = createSut(new FiftyPercentDiscount());
    expect(sut.applyDiscount(10.88)).toBe(5.44);
  });

  it('Should return value with ten percent discount', () => {
    const sut = createSut(new TenPercentDiscount());
    expect(sut.applyDiscount(10.0)).toBe(9.0);
  });
});
