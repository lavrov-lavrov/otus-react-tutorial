
import { random } from 'faker';

// @ts-ignore
import { sum, sub, mul, div } from './mathFunctions.ts';

describe('Тесты для мат. функций', () => {
  const num1 = random.number();
  const num2 = random.number();

  const sumResult = num1 + num2;
  const subResult = num1 - num2;
  const mulResult = num1 * num2;
  const divResult = num1 / num2;

  it(`тест суммы ${num1} и ${num2}. Должен быть равен ${sumResult}`, () => {
    expect(sum(num1, num2)).toBe(sumResult);
  });

  it(`тест разности ${num1} и ${num2}. Должен быть равен ${subResult}`, () => {
    expect(sub(num1, num2)).toBe(subResult);
  });

  it(`тест произведения ${num1} и ${num2}. Должен быть равен ${mulResult}`, () => {
    expect(mul(num1, num2)).toBe(mulResult);
  });

  it(`тест частного ${num1} и ${num2}. Должен быть равен ${divResult}`, () => {
    expect(div(num1, num2)).toBe(divResult);
  });
});