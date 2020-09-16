import { IndividualCustomer, EnterpriseCustomer } from './customer';

const createIndividualCustomerSut = (
  firstName: string,
  lastName: string,
  address: string,
): IndividualCustomer => {
  return new IndividualCustomer(firstName, lastName, address);
};

const createEnterpriseCustomerSut = (
  name: string,
  companyAddress: string,
): EnterpriseCustomer => {
  return new EnterpriseCustomer(name, companyAddress);
};

afterEach(() => jest.resetAllMocks());

describe('Testing Individual Customer', () => {
  it('Should have individual customer properties firstName, lastName, address', () => {
    const sut = createIndividualCustomerSut(
      'Luis',
      'Mendonca',
      'Street something',
    );

    expect(sut).toHaveProperty('firstName', 'Luis');
    expect(sut).toHaveProperty('lastName', 'Mendonca');
    expect(sut).toHaveProperty('address', 'Street something');
  });

  it('Should have methods to return fullName and address', () => {
    const sut = createIndividualCustomerSut(
      'Luis',
      'Mendonca',
      'Street something',
    );
    expect(sut.getName()).toBe('Luis Mendonca');
    expect(sut.getAddress()).toBe('Street something');
  });
});

describe('Testing Enterprise Customer', () => {
  it('Should have enterprise customer properties name, companyAddress', () => {
    const sut = createEnterpriseCustomerSut('Udemy', 'Udemy address');

    expect(sut).toHaveProperty('name', 'Udemy');
    expect(sut).toHaveProperty('companyAddress', 'Udemy address');
  });

  it('Should have methods to return name and company address', () => {
    const sut = createEnterpriseCustomerSut('Udemy', 'Udemy address');

    expect(sut.getName()).toBe('Udemy');
    expect(sut.getAddress()).toBe('Udemy address');
  });
});
