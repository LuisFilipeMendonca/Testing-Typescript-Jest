import {
  CustomerOrderProtocol,
  EnterpriseCustomerProtocol,
  IndividualCustomerProtocol,
} from './interfaces/customer-protocol';

export class IndividualCustomer
  implements IndividualCustomerProtocol, CustomerOrderProtocol {
  constructor(
    public firstName: string,
    public lastName: string,
    public address: string,
  ) {}

  getName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  getAddress(): string {
    return this.address;
  }
}

export class EnterpriseCustomer
  implements EnterpriseCustomerProtocol, CustomerOrderProtocol {
  constructor(public name: string, public companyAddress: string) {}

  getName(): string {
    return this.name;
  }

  getAddress(): string {
    return this.companyAddress;
  }
}
