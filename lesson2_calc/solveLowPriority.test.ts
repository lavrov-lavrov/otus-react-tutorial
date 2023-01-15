
// @ts-ignore
import { solveLowPriority } from './solveLowPriority.ts';


describe('тест функций низкого приоритета', () => {
  const example1 = ['2', '+', '3'];
  const example2 = ['1', '+', '5', '-', '4'];

  it('результат вычисления ["2", "+", "3"] должен быть 5', () => {
    expect(solveLowPriority(example1)).toStrictEqual('5');
  });

  it('результат вычисления ["1", "+", "5", "-", "4"] должен быть 2', () => {
    expect(solveLowPriority(example2)).toStrictEqual('2');
  });
});