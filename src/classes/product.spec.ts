import { Product } from './product';

const createSut = (name: string, price: number): Product => {
  return new Product(name, price);
};

describe('Testing Product', () => {
  afterEach(() => jest.clearAllMocks());

  it('Should return a product', () => {
    const product = { name: 'Tshirt', price: 35.52 };
    const sut = createSut(product.name, product.price);

    expect(sut).toEqual(product);
    expect(sut).toHaveProperty('name', 'Tshirt');
    expect(sut).toHaveProperty('price', 35.52);
    expect(sut.price).toBeCloseTo(35.5, 1);
  });
});
