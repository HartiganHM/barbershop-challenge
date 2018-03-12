import generateUniqueKey from './generateUniqueKey';

describe('generateUniqueKey tests', () => {
  it('Should return a number', () => {
    const number = generateUniqueKey();

    expect(typeof number).toEqual('number');
  });

  it('Should generate a different number each time it is called', () => {
    const numberA = generateUniqueKey();
    const numberB = generateUniqueKey();
    const numberC = generateUniqueKey();

    expect(numberA).not.toEqual(numberB);
    expect(numberB).not.toEqual(numberC);
    expect(numberC).not.toEqual(numberA);
  });
});
