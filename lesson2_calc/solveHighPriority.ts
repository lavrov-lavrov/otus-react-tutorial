
// @ts-ignore
import { mul, div } from './mathFunctions.ts';


const HIGH_PRIORITY_OPERATOR = ['*', '/'];


const mapElements = (array: []):any => {
  const resultArray:Array<string> = [];

  array.map((item:string, key:number) => {
    const next = array[key + 1];
    const superNext = array[key + 2];

    if ( HIGH_PRIORITY_OPERATOR.indexOf(next) > -1 ) {
      if ( !isNaN(Number(item)) && !isNaN(Number(superNext)) ) {
        if (next === '*') {
          resultArray.push( String(mul(Number(item), Number(superNext))) );
          array.splice(key, 2);
        }
        else if (next === '/') {
          resultArray.push( String(div(Number(item), Number(superNext))) );
          array.splice(key, 2);
        }
      }
    }
    else {
      resultArray.push(item);
    }
  });

  return resultArray;
}


export const solveHighPriority = (elements: []):[] => {
  const newElements = mapElements(elements);

  return mapElements(newElements);
}