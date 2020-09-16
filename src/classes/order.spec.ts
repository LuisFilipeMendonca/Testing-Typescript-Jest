import { Order } from './order';
import { ShoppingCartProtocol } from './interfaces/shopping-cart-protocol';
import { MessageProtocol } from './interfaces/MessageProtocol';
import { CustomerOrderProtocol } from './interfaces/customer-protocol';
import { Item } from './interfaces/item';
import { PersistProtocol } from './interfaces/persist-protocol';

class ShoppinCartMock implements ShoppingCartProtocol {
  get items(): readonly Item[] {
    return [];
  }
  addItem(): void {
    //
  }
  removeItem(): void {
    //
  }
  total(): number {
    return 1;
  }
  totalWithDiscount(): number {
    return 2;
  }
  clean(): void {
    //
  }
  isEmpty(): boolean {
    return false;
  }
}

class MessageMock implements MessageProtocol {
  sendMessage(): void {
    //
  }
}

class PersistMock implements PersistProtocol {
  saveOrder(): void {
    //
  }
}

class CustomerOrderMock implements CustomerOrderProtocol {
  getName(): string {
    return '';
  }
  getAddress(): string {
    return '';
  }
}

const createSut = () => {
  const shoppingCartMock = new ShoppinCartMock();
  const messageMock = new MessageMock();
  const persistMock = new PersistMock();
  const customerOrderMock = new CustomerOrderMock();
  const sut = new Order(
    shoppingCartMock,
    messageMock,
    persistMock,
    customerOrderMock,
  );

  return {
    sut,
    shoppingCartMock,
    messageMock,
    persistMock,
    customerOrderMock,
  };
};

describe('Testing Order', () => {
  it("Should't checkout if the cart is empty", () => {
    const { sut, shoppingCartMock } = createSut();
    const shoppingCartMockSpy = jest
      .spyOn(shoppingCartMock, 'isEmpty')
      .mockReturnValue(true);
    sut.checkout();
    expect(shoppingCartMockSpy).toHaveBeenCalledTimes(1);
    expect(sut.orderStatus).toBe('open');
  });

  it('Should checkout if the checkout is successfully', () => {
    const { sut, shoppingCartMock } = createSut();
    const shoppingCartMockSpy = jest.spyOn(shoppingCartMock, 'isEmpty');
    sut.checkout();
    expect(shoppingCartMockSpy).toHaveBeenCalledTimes(1);
    expect(sut.orderStatus).toBe('closed');
  });

  it('Should saveOrder if the checkout is successfully', () => {
    const { sut, persistMock } = createSut();
    const persistMockSpy = jest.spyOn(persistMock, 'saveOrder');
    sut.checkout();
    expect(persistMockSpy).toHaveBeenCalledTimes(1);
  });

  it('Should sendMessage if the checkout is successfully', () => {
    const { sut, messageMock } = createSut();
    const messageMockSpy = jest.spyOn(messageMock, 'sendMessage');
    sut.checkout();
    expect(messageMockSpy).toHaveBeenCalledTimes(1);
  });

  it('Should clear the cart if the checkout is successfully', () => {
    const { sut, shoppingCartMock } = createSut();
    const shoppingCartMockSpy = jest.spyOn(shoppingCartMock, 'clean');
    sut.checkout();
    expect(shoppingCartMockSpy).toHaveBeenCalledTimes(1);
  });

  it('Should print customer name if the checkout is successfully', () => {
    const { sut, customerOrderMock } = createSut();
    const customerOrderMockSpy = jest.spyOn(customerOrderMock, 'getName');
    sut.checkout();
    expect(customerOrderMockSpy).toHaveBeenCalledTimes(1);
  });

  it('Should print customer address if the checkout is successfully', () => {
    const { sut, customerOrderMock } = createSut();
    const customerOrderMockSpy = jest.spyOn(customerOrderMock, 'getAddress');
    sut.checkout();
    expect(customerOrderMockSpy).toHaveBeenCalledTimes(1);
  });
});
