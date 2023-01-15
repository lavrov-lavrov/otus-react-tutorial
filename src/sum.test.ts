import sum from "./sum";

test("тест суммирования 5 и 12", () => {
  expect(sum(5, 12)).toBe(17);
});

test("тест на равенство суммы 2 и 7 результату 9", () => {
  expect(sum(2, 7)).toEqual(9);
});

test("тест на плавающую запятую", () => {
  expect(sum(0.1, 0.2)).toBeCloseTo(0.3);
});
