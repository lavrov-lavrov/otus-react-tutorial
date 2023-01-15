
// @ts-ignore
import { solveHighPriority } from './solveHighPriority.ts';


describe('тест функций высокого приоритета', () => {
  const example1 = ['5', '*', '4'];
  const example2 = ['4', '*', '3', '/', '2'];

  it('результат вычисления ["5", "*", "4"] должен быть 20', () => {
    expect(solveHighPriority(example1)).toStrictEqual(['20']);
  });

  it('результат вычисления ["4", "*", "3", "/", "2"] должен быть 6', () => {
    expect(solveHighPriority(example2)).toStrictEqual(['6']);
  });
});