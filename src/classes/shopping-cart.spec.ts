import { DiscountProtocol } from './interfaces/discount-protocol';
import { ShoppingCart } from './shopping-cart';
import { Product } from './product';

const createSut = () => {
  const discountMock = createDiscountMock();
  const sut = new ShoppingCart(discountMock);
  return { sut, discountMock };
};

const createDiscountMock = () => {
  class DiscountMock extends DiscountProtocol {}
  return new DiscountMock();
};

const createProductMock = (name: string, price: number) => {
  class ProductMock implements Product {
    constructor(public name: string, public price: number) {}
  }

  return new ProductMock(name, price);
};

const createSutWithProducts = () => {
  const { sut, discountMock } = createSut();
  const item1 = createProductMock('Tshirt', 5.99);
  const item2 = createProductMock('Pen', 2.55);
  sut.addItem(item1);
  sut.addItem(item2);
  return { sut, discountMock };
};

describe('Testing ShoppingCart', () => {
  it('Should return empty when initialized', () => {
    const { sut } = createSut();
    expect(sut.isEmpty()).toBeTruthy();
  });

  it('Should return two item in the cart', () => {
    const { sut } = createSutWithProducts();
    expect(sut.items.length).toBe(2);
  });

  it('Should return total and total with discount', () => {
    const { sut } = createSutWithProducts();
    expect(sut.total()).toBe(8.54);
    expect(sut.totalWithDiscount()).toBe(8.54);
  });

  it('Should add products and clear the cart', () => {
    const { sut } = createSutWithProducts();
    expect(sut.items.length).toBe(2);
    sut.clean();
    expect(sut.isEmpty()).toBeTruthy();
  });

  it('Should remove products', () => {
    const { sut } = createSutWithProducts();
    expect(sut.items.length).toBe(2);
    sut.removeItem(1);
    expect(sut.items.length).toBe(1);
  });

  it('Should call discount.apllyDiscount once when totalWithDiscount is called', () => {
    const { sut, discountMock } = createSutWithProducts();
    const discountMockSpy = jest.spyOn(discountMock, 'applyDiscount');
    sut.totalWithDiscount();
    expect(discountMockSpy).toHaveBeenCalledTimes(1);
  });

  it('Should call discount.apllyDiscount with total price when totalWithDiscount is called', () => {
    const { sut, discountMock } = createSutWithProducts();
    const discountMockSpy = jest.spyOn(discountMock, 'applyDiscount');
    sut.totalWithDiscount();
    expect(discountMockSpy).toHaveBeenCalledWith(sut.total());
  });
});
