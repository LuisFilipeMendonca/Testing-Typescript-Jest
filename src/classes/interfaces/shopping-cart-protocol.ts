import { Item } from './item';

export interface ShoppingCartProtocol {
  items: Readonly<Item[]>;

  addItem(item: Item): void;

  removeItem(index: number): void;

  total(): number;

  totalWithDiscount(): number;

  clean(): void;

  isEmpty(): boolean;
}
