const {randomString, reverseString2} = require('../index');


describe('Probar funcionalidad de randomStrings', () => {
  test('Probar la funcionalidad', () => {
    expect(typeof (randomString())).toBe('string');
  });
  test('Comprobar que no existe una ciudad', () => {
    expect(randomString()).not.toMatch(/Cordoba/);
  });
  test('Probar async/await', async () => {
    const str = '';
    const string = await reverseString2(str);
    if(!str) {
      expect(string).toBe('Error');
    } else {
      expect(string).toBe('aloH');
    }
  })
})