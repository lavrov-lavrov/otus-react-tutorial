import concat from "./concatinator";

test("тест конкатенации", () => {
  expect(concat("hello ", "world!")).toBe("hello world!");
  expect(concat("just ", "do it!")).toMatch(/just do it!/);

  const val = concat("never gonna ", "give you up");
  expect(val).toContain("never" && "gonna" && "give" && "you" && "up");
});
