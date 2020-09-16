import { PersistProtocol } from '../classes/interfaces/persist-protocol';

export class Persist implements PersistProtocol {
  saveOrder(): void {
    console.log('Your order have been saved');
  }
}
