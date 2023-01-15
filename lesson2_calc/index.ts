
import { createInterface } from 'readline';

// @ts-ignore
import { calculate } from './calculate.ts';


const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const question = (): Promise<null> =>
  new Promise((resolve) => {
    rl.question("введите выражение (через пробелы) >>> ", (answer: string) => {
      const result = calculate(answer);

      if (result) {
        console.log(`Результат: ${result}`);
      }

      resolve(null);
    });
  });

async function app(): Promise<null> {
  while (true) {
    await question();
  }
}

app();
