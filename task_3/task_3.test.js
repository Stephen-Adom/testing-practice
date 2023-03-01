const Calculator = require('./task_3.js');

describe('Task 3', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  it('should be an instance of a class', () => {
    expect(calculator).toBeInstanceOf(Calculator);
  });

  it('should have a return type of number', () => {
    const num1 = 2;
    const num2 = 3;
    const result = calculator.add(num1, num2);

    expect(typeof result).toBe('number');
  });

  it('should give 6 when 2 is multiplied by 3', () => {
    const num1 = 2;
    const num2 = 3;
    const result = calculator.multiply(num1, num2);
    expect(result).toBe(6);
  });

  it('should give -5 when 10 is substracted from 5', () => {
    const num1 = 10;
    const num2 = 5;
    const result = calculator.substract(num1, num2);
    expect(result).toBe(-5);
  });
});
