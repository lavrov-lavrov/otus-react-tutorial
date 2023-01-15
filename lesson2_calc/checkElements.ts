
const POSSIBLE_OPERATORS = ['+', '-', '*', '/'];

export const checkElements = (elements: Array<string>): boolean => {

  elements.forEach(item => {
    if ( isNaN(Number(item)) ) {
      if ( POSSIBLE_OPERATORS.indexOf(item) < 0 ) {
        throw new TypeError('Найден неизвестный математический оператор');
      }
    }

    return true;
  });

  return true;
}