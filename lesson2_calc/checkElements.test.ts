
// @ts-ignore
import { checkElements } from './checkElements';


describe('тест на проверку допустимых символов в массиве', () => {
  const correctArray1 = ['2', '+', '3'];
  const correctArray2 = ['5', '-', '3', '+', '6', '*', '1'];

  it('ошибка не выброшена', () => {
    expect(checkElements(correctArray1)).toBe(true);
  });

  it('ошибка не выброшена', () => {
    expect(checkElements(correctArray2)).toBe(true);
  });
});