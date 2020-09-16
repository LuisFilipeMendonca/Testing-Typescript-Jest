import { MessageProtocol } from '../classes/interfaces/MessageProtocol';

export class Message implements MessageProtocol {
  sendMessage(msg: string): void {
    console.log(msg);
  }
}
