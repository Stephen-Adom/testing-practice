const stringLength = require('./task_1.js');

describe('Task 1', () => {
  it('should return value of type number', () => {
    const fakeString = 'firstTest';
    const result = typeof stringLength(fakeString);
    expect(result).toEqual('number');
  });

  it('should return a value of 9 for the string todo_list', () => {
    const fakeString = 'todo_list';
    const result = stringLength(fakeString);
    expect(result).toBe(9);
  });

  it('should throw error of invalid input', () => {
    // const result = stringLength('');
    expect(() => stringLength('')).toThrow(
      'String must be at least 1 character long'
    );
  });
});
