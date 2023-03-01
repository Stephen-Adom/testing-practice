const capitalize = require('./task_4.js');

describe('Task 4', () => {
  it('should capitalize a string', () => {
    const string = 'animal';
    const stringCapitalize = 'Animal';
    const result = capitalize(string);
    expect(result).toBe(stringCapitalize);
  });

  it('should return a value of type string', () => {
    const string = 'animal';
    expect(typeof capitalize(string)).toBe('string');
  });

  it('should throw an error when input is a number', () => {
    const string = 2;

    expect(() => capitalize(string)).toThrow('Invalid Input');
  });

  it('should throw an error when input is empty', () => {
    const string = '';

    expect(() => capitalize(string)).toThrow(
      'String must have a length greater than 1'
    );
  });
});
