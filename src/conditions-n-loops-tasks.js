/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  let max = a;
  if (b > max) max = b;
  if (c > max) max = c;
  return max;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 *
 * @param {Position} queen - The position of the queen.
 * @param {Position} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  if (!queen || !king) return false;
  const dx = Math.abs(queen.x - king.x);
  const dy = Math.abs(queen.y - king.y);
  return queen.x === king.x || queen.y === king.y || dx === dy;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (a <= 0 || b <= 0 || c <= 0) return false;
  if (!(a + b > c && a + c > b && b + c > a)) return false;
  return a === b || b === c || a === c;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  if (num <= 0) return '';
  let result = '';
  const tens = Math.trunc(num / 10);
  for (let i = 0; i < tens; i += 1) {
    result += 'X';
  }
  const ones = num - tens * 10;
  switch (ones) {
    case 1:
      result += 'I';
      break;
    case 2:
      result += 'II';
      break;
    case 3:
      result += 'III';
      break;
    case 4:
      result += 'IV';
      break;
    case 5:
      result += 'V';
      break;
    case 6:
      result += 'VI';
      break;
    case 7:
      result += 'VII';
      break;
    case 8:
      result += 'VIII';
      break;
    case 9:
      result += 'IX';
      break;
    default:
      break;
  }
  return result;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  const mapping = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    '-': 'minus',
    '.': 'point',
    ',': 'point',
  };
  let res = '';
  let first = true;
  for (let i = 0; i < numberStr.length; i += 1) {
    const ch = numberStr[i];
    const word = mapping[ch];
    if (word !== undefined) {
      // выполняем только если word есть
      if (!first) res += ' ';
      res += word;
      first = false;
    }
  }
  return res;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  const n = str.length;
  for (let i = 0; i < n / 2; i += 1) {
    if (str[i] !== str[n - 1 - i]) return false;
  }
  return true;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 't'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) return i;
  }
  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  let value = num;
  let target = digit;
  if (value < 0) value = -value;
  if (target < 0) target = -target;
  if (value === 0) return target === 0;
  while (value > 0) {
    const d = value % 10;
    if (d === target) return true;
    value = Math.trunc(value / 10);
  }
  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  const n = arr.length;
  let total = 0;
  for (let i = 0; i < n; i += 1) {
    total += arr[i];
  }
  let left = 0;
  for (let i = 0; i < n; i += 1) {
    const right = total - left - arr[i];
    if (left === right) return i;
    left += arr[i];
  }
  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const n = size;
  const matrix = new Array(n);
  for (let i = 0; i < n; i += 1) {
    matrix[i] = new Array(n);
  }
  let top = 0;
  let left = 0;
  let right = n - 1;
  let bottom = n - 1;
  let current = 1;

  while (left <= right && top <= bottom) {
    // left to right
    for (let j = left; j <= right; j += 1) {
      matrix[top][j] = current;
      current += 1;
    }
    top += 1;

    // top to bottom
    for (let i = top; i <= bottom; i += 1) {
      matrix[i][right] = current;
      current += 1;
    }
    right -= 1;

    // right to left
    for (let j = right; j >= left; j -= 1) {
      matrix[bottom][j] = current;
      current += 1;
    }
    bottom -= 1;

    // bottom to top
    for (let i = bottom; i >= top; i -= 1) {
      matrix[i][left] = current;
      current += 1;
    }
    left += 1;
  }

  return matrix;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const n = matrix.length;
  // Создаём новую матрицу
  const result = Array.from({ length: n }, () => Array(n).fill(0));

  // Транспонирование + отражение за один проход
  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < n; j += 1) {
      result[j][n - 1 - i] = matrix[i][j];
    }
  }

  return result;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  if (!arr || arr.length <= 1) return [...arr];

  const sorted = [...arr]; // копия входного массива

  function swap(i, j) {
    const temp = sorted[i];
    sorted[i] = sorted[j];
    sorted[j] = temp;
  }

  function partition(low, high) {
    const pivot = sorted[high];
    let i = low - 1;
    for (let j = low; j < high; j += 1) {
      if (sorted[j] <= pivot) {
        i += 1;
        swap(i, j);
      }
    }
    swap(i + 1, high);
    return i + 1;
  }

  function quicksort(low, high) {
    if (low < high) {
      const pi = partition(low, high);
      quicksort(low, pi - 1);
      quicksort(pi + 1, high);
    }
  }

  quicksort(0, sorted.length - 1);
  return sorted;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  const n = str.length;
  if (n <= 1 || iterations === 0) return str;

  // Функция: новый индекс символа после одной итерации
  function getNewIndex(idx) {
    if (idx % 2 === 0) {
      return Math.floor(idx / 2); // чётные → первая половина
    }
    // Нечётные → вторая половина: середина + сдвиг
    const mid = Math.floor((n + 1) / 2);
    const shift = Math.floor((idx - 1) / 2);
    return mid + shift;
  }

  // Вычисляем итоговый индекс каждого символа после `iterations` итераций
  const result = new Array(n);
  for (let i = 0; i < n; i += 1) {
    let pos = i;
    for (let k = 0; k < iterations; k += 1) {
      pos = getNewIndex(pos);
    }
    result[pos] = str[i];
  }

  // Собираем строку без join
  let output = '';
  for (let i = 0; i < n; i += 1) {
    output += result[i];
  }
  return output;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 */
function getNearestBigger(number) {
  if (number < 10) return number;

  // Преобразуем число в массив цифр (без String-методов)
  const digits = [];
  let num = number;
  while (num > 0) {
    digits.push(num % 10);
    num = Math.floor(num / 10); // ← замена | 0 на Math.floor
  }
  // digits — в обратном порядке (от младших к старшим)

  const len = digits.length;

  // Шаг 1: ищем первую цифру справа, которую можно увеличить
  let i = len - 2;
  while (i >= 0 && digits[i] >= digits[i + 1]) {
    i -= 1;
  }

  // Если нет такой цифры — число максимальное (например, 54321)
  if (i === -1) return number;

  // Шаг 2: находим наименьшую цифру справа, которая больше digits[i]
  let j = len - 1;
  while (digits[j] <= digits[i]) {
    j -= 1;
  }

  // Шаг 3: меняем местами
  const temp = digits[i];
  digits[i] = digits[j];
  digits[j] = temp;

  // Шаг 4: переворачиваем часть после i (эквивалентно сортировке по возрастанию)
  let left = i + 1;
  let right = len - 1;
  while (left < right) {
    const t = digits[left];
    digits[left] = digits[right];
    digits[right] = t;
    left += 1;
    right -= 1;
  }

  // Преобразуем массив цифр обратно в число
  let result = 0;
  for (let k = len - 1; k >= 0; k -= 1) {
    result = result * 10 + digits[k];
  }

  return result;
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
