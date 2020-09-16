import { ShoppingCart } from './classes/shopping-cart';
import { Order } from './classes/order';
import { Message } from './services/message';
import { Persist } from './services/persist';
import { Product } from './classes/product';
import { FiftyPercentDiscount } from './classes/discount';
import { EnterpriseCustomer, IndividualCustomer } from './classes/customer';

const individualCustomer = new IndividualCustomer(
  'Luis',
  'Mendonca',
  'Caminho da Cancela',
);

const enterpriseCustomer = new EnterpriseCustomer(
  'Some company name',
  'Some company address',
);

const discount = new FiftyPercentDiscount();
// const discount = new NoDiscount();
const shoppingCart = new ShoppingCart(discount);
const message = new Message();
const persist = new Persist();
const orderOne = new Order(shoppingCart, message, persist, individualCustomer);
shoppingCart.addItem(new Product('Tshirt', 35.99));
shoppingCart.addItem(new Product('Pen', 1.02));
orderOne.checkout();

console.log('-------------------------------');

const orderTwo = new Order(shoppingCart, message, persist, enterpriseCustomer);
shoppingCart.addItem(new Product('Tshirt', 35.99));
shoppingCart.addItem(new Product('Pen', 1.02));
orderTwo.checkout();
