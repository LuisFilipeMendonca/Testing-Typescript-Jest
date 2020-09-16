describe('Primitive values', () => {
  it('should test jest assertions', () => {
    const number = 10;

    expect(number).toBe(10);
    expect(number).toEqual(10); //don't work with objects

    expect(number).not.toBe(null);
    expect(number).not.toBeFalsy();
    expect(number).toBeTruthy();
  });

  it('should split tests', () => {
    const number = 10;

    expect(number).toBeGreaterThan(9);
    expect(number).toBeLessThan(11);
    expect(number).toBeLessThanOrEqual(10);

    expect(number).toBeCloseTo(9.996);

    expect(number).not.toBeNull();

    expect(number).toHaveProperty('toString');
  });
});

describe('Object values', () => {
  it('should test jest assertions with objects', () => {
    const person = { name: 'Luis', age: 28 };
    const anotherPerson = { ...person };

    expect(person).toEqual(anotherPerson);
    expect(person).toHaveProperty('age');
    expect(person).toHaveProperty('age', 28);
    expect(person).not.toHaveProperty('address');

    expect(person.name).toBe('Luis');
  });
});
