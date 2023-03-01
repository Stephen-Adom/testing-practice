const reverseString = require('./task_2.js');

describe('Task 2', () => {
  it('should return reversed string', () => {
    const str = 'hello';
    const strReverse = 'olleh';
    const result = reverseString(str);

    expect(result).toBe(strReverse);
  });
});
