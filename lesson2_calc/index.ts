
import { createInterface } from 'readline';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const question = (): Promise<null> =>
  new Promise((resolve) => {
    rl.question("type > ", (answer: string) => {
      // const result = runner(answer);
      const result = '';

      if (result) {
        console.log(`Result: ${result}`);
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
