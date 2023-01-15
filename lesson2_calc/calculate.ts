
// @ts-ignore
import { checkElements } from './checkElements.ts';
// @ts-ignore
import { solveHighPriority } from './solveHighPriority.ts';
// @ts-ignore
import { solveLowPriority } from './solveLowPriority.ts';

export const calculate = (line: string): number => {
  const elements = line.split(' ');

  checkElements(elements); // проверка элементов на допустимые значения

  const firstStepSolved = solveHighPriority(elements); // вычисляю умножение и деление
  return solveLowPriority(firstStepSolved); // вычисляю сложение и вычитание
}