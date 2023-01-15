
// @ts-ignore
import { sub, sum } from './mathFunctions.ts';


const LOW_PRIORITY_OPERATOR = ['+', '-'];


const mapElements = (array: []):any => {
  const resultArray:Array<string> = [];

  array.map((item:string, key:number) => {
    const next = array[key + 1];
    const superNext = array[key + 2];

    if ( LOW_PRIORITY_OPERATOR.indexOf(next) > -1 ) {
      if ( !isNaN(Number(item)) && !isNaN(Number(superNext)) ) {
        if (next === '+') {
          resultArray.push( String(sum(Number(item), Number(superNext))) );
          array.splice(key, 2);
        }
        else if (next === '-') {
          resultArray.push( String(sub(Number(item), Number(superNext))) );
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


export const solveLowPriority = (elements: []):[] => {
  const newElements = mapElements(elements);

  return mapElements(newElements)[0];
}