import { Item } from './interfaces/item';
import { DiscountProtocol } from './interfaces/discount-protocol';
import { ShoppingCartProtocol } from './interfaces/shopping-cart-protocol';

export class ShoppingCart implements ShoppingCartProtocol {
  private _items: Item[] = [];

  constructor(private readonly discount: DiscountProtocol) {}

  get items(): Readonly<Item[]> {
    return this._items;
  }

  addItem(item: Item): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items = this._items.filter((el, i) => i !== index);
  }

  total(): number {
    return +this._items
      .reduce((total, current) => (total += current.price), 0)
      .toFixed(2);
  }

  totalWithDiscount(): number {
    return this.discount.applyDiscount(this.total());
  }

  clean(): void {
    this._items.length = 0;
  }

  isEmpty(): boolean {
    return this._items.length <= 0;
  }
}
