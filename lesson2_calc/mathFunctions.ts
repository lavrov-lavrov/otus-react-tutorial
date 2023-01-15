
type IArgs = (a: number, b: number) => number


export const sum:IArgs = (a, b) => {
  return a + b;
}

export const sub:IArgs = (a, b) => {
  return a - b;
}

export const mul:IArgs = (a, b) => {
  return a * b;
}

export const div:IArgs = (a, b) => {
  return a / b;
}