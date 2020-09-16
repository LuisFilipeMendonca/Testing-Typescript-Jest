import { OrderStatus } from './interfaces/order';
import { CustomerOrderProtocol } from './interfaces/customer-protocol';
import { ShoppingCartProtocol } from './interfaces/shopping-cart-protocol';
import { MessageProtocol } from './interfaces/MessageProtocol';
import { PersistProtocol } from './interfaces/persist-protocol';

export class Order {
  private _orderStatus: OrderStatus = 'open';

  constructor(
    private readonly cart: ShoppingCartProtocol,
    private readonly message: MessageProtocol,
    private readonly persist: PersistProtocol,
    private readonly customer: CustomerOrderProtocol,
  ) {}

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.cart.isEmpty()) {
      this.message.sendMessage('Your cart is empty');
      return;
    }

    this._orderStatus = 'closed';
    this.persist.saveOrder();
    this.message.sendMessage(
      `Your order has been received. The total is ${this.cart.totalWithDiscount()}`,
    );
    this.cart.clean();
    console.log(`The customer is: ${this.customer.getName()}.`);
    console.log(`The address is: ${this.customer.getAddress()}.`);
  }
}
