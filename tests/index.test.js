const { validateInputLength, validateTextColor } = require('../lib/validate');

describe('User Input Validation', () => {
  test('Input length should be limited to 3 characters', () => {

    //test input with valid length
    const validInput = 'ABC';
      expect(validateInputLength(validInput)).toBe(true);
  
      //test input with invalid length
      const invalidInput = 'ABCD';
      expect(validateInputLength(invalidInput)).toBe('Please enter up to 3 characters.');
    });
  
    test('Text color should be a valid color keyword or hexadecimal number', () => {
        
      //test valid color input
      const validColor = 'red';
      expect(validateTextColor(validColor)).toBe(true);
  
      //test invalid color input
      const invalidColor = 'not a color';
      expect(validateTextColor(invalidColor)).toBe('Please enter a valid color keyword or hexadecimal number.');
    });
  });
  