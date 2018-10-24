import listRegister from './listRegister.js';

const myListRegister = listRegister;

describe('my default list', () => {
  test('My name is 1', () => {
    const testList = { name: "My name 1" };
    expect(myListRegister).toContainEqual(testList);
  });
});