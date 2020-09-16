/*
Breaking Interface Segregation Principle
having a normal customer and an enterpriser customer will implement desnecessary things
need to break into small interfaces
*/
// export interface CustomerProtocol {
//   firstName: string;
//   lastName: string;
//   address: string;
//   companyAddress: string;
// }

export interface CustomerOrderProtocol {
  getName(): string;
  getAddress(): string;
}

export interface IndividualCustomerProtocol {
  firstName: string;
  lastName: string;
  address: string;
}

export interface EnterpriseCustomerProtocol {
  name: string;
  companyAddress: string;
}
