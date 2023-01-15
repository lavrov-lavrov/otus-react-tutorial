
// @ts-ignore
import { calculate } from './calculate.ts';


describe('тест калькулятора', () => {
  it('2 + 2 должно быть равно 4', () => {
    expect(calculate('2 + 2')).toBe('4');
  });

  it('5 - 2 должно быть равно 3', () => {
    expect(calculate('5 - 2')).toBe('3');
  });

  it('1 + 7 - 4 должно быть равно 4', () => {
    expect(calculate('1 + 7 - 4')).toBe('4');
  });

  it('2 * 5 - 1 + 3 должно быть равно 12', () => {
    expect(calculate('2 * 5 - 1 + 3')).toBe('12');
  });

  it('2 + 2 * 2 должно быть равно 6', () => {
    expect(calculate('2 + 2 * 2')).toBe('6');
  });

  it('8 / 2 + 6 * 3 * 3 - 12 должно быть равно 46', () => {
    expect(calculate('8 / 2 + 6 * 3 * 3 - 12')).toBe('46');
  });
});