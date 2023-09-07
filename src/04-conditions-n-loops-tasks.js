/* *************************************************************************************************
 *                                                                                                *
 * Please read the following tutorial before implementing tasks:                                   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling  *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration              *
 *                                                                                                *
 ************************************************************************************************ */

/**
 * Returns the 'Fizz','Buzz' or an original number using the following rules:
 * 1) return original number
 * 2) but if number multiples of three return 'Fizz'
 * 3) for the multiples of five return 'Buzz'
 * 4) for numbers which are multiples of both three and five return 'FizzBuzz'
 *
 * @param {number} num
 * @return {any}
 *
 * @example
 *   2 =>  2
 *   3 => 'Fizz'
 *   5 => 'Buzz'
 *   4 => 4
 *  15 => 'FizzBuzz'
 *  20 => 'Buzz'
 *  21 => 'Fizz'
 *
 */
function getFizzBuzz(num) {
  let result = num;
  if (num % 3 === 0 && num % 5 === 0) result = 'FizzBuzz';
  else if (num % 3 === 0) result = 'Fizz';
  else if (num % 5 === 0) result = 'Buzz';
  return result;
}

/**
 * Returns the factorial of the specified integer n.
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   1  => 1
 *   5  => 120
 *   10 => 3628800
 */
function getFactorial(n) {
  if (n === 1) return 1;
  return n * getFactorial(n - 1);
}

/**
 * Returns the sum of integer numbers between n1 and n2 (inclusive).
 *
 * @param {number} n1
 * @param {number} n2
 * @return {number}
 *
 * @example:
 *   1,2   =>  3  ( = 1+2 )
 *   5,10  =>  45 ( = 5+6+7+8+9+10 )
 *   -1,1  =>  0  ( = -1 + 0 + 1 )
 */
function getSumBetweenNumbers(n1, n2) {
  let sum = 0;
  for (let i = n1; i <= n2; i += 1) {
    sum += i;
  }
  return sum;
}

/**
 * Returns true, if a triangle can be built with the specified sides a, b, c
 * and false in any other ways.
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {bool}
 *
 * @example:
 *   1,2,3    =>  false
 *   3,4,5    =>  true
 *   10,1,1   =>  false
 *   10,10,10 =>  true
 */

function isTriangle(a, b, c) {
  const arr = [a, b, c].sort((d, e) => d - e);
  return arr[2] < arr[0] + arr[1] && arr[2] > arr[1] - arr[0];
}

/**
 * Returns true, if two specified axis-aligned rectangles overlap, otherwise false.
 * Each rectangle representing by object
 *  {
 *     top: 5,
 *     left: 5,
 *     width: 20,
 *     height: 10
 *  }
 *
 *  (5;5)
 *     -------------
 *     |           |
 *     |           |  height = 10
 *     -------------
 *        width=20
 *
 * NOTE: Please use canvas coordinate space (https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#The_grid),
 * it differs from Cartesian coordinate system.
 *
 * @param {object} rect1
 * @param {object} rect2
 * @return {bool}
 *
 * @example:
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top: 5, left: 5, width: 20, height: 20 }    =>  true
 *
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top:20, left:20, width: 20, height: 20 }    =>  false
 *
 */
function doRectanglesOverlap(rect1, rect2) {
  return (
    rect1.left + rect1.width > rect2.left
    && rect1.top + rect1.height > rect2.top
  );
}

/**
 * Returns true, if point lies inside the circle, otherwise false.
 * Circle is an object of
 *  {
 *     center: {
 *       x: 5,
 *       y: 5
 *     },
 *     radius: 20
 *  }
 *
 * Point is object of
 *  {
 *     x: 5,
 *     y: 5
 *  }
 *
 * @param {object} circle
 * @param {object} point
 * @return {bool}
 *
 * @example:
 *   { center: { x:0, y:0 }, radius:10 },  { x:0, y:0 }     => true
 *   { center: { x:0, y:0 }, radius:10 },  { x:10, y:10 }   => false
 *
 */
function isInsideCircle(circle, point) {
  const [x, y, r] = [circle.center.x, circle.center.y, circle.radius];
  const [i, j] = [point.x, point.y];

  return (x - i) * (x - i) + (y - j) * (y - j) < r * r;
}
/**
 * Returns the first non repeated char in the specified strings otherwise returns null.
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 *   'The quick brown fox jumps over the lazy dog' => 'T'
 *   'abracadabra'  => 'c'
 *   'entente' => null
 */
function findFirstSingleChar(str) {
  let k = 0;
  for (let i = 0; i < str.length - 1; i += 1) {
    for (let j = 0; j < str.length; j += 1) {
      if (str[i] === str[j]) k += 1;
    }
    if (k === 1) return str[i];
    k = 0;
  }
  return null;
}

/**
 * Returns the string representation of math interval,
 * specified by two points and include / exclude flags.
 * See the details: https://en.wikipedia.org/wiki/Interval_(mathematics)
 *
 * Please take attention, that the smaller number should be the first in the notation
 *
 * @param {number} a
 * @param {number} b
 * @param {bool} isStartIncluded
 * @param {bool} isEndIncluded
 * @return {string}
 *
 * @example
 *   0, 1, true, true   => '[0, 1]'
 *   0, 1, true, false  => '[0, 1)'
 *   0, 1, false, true  => '(0, 1]'
 *   0, 1, false, false => '(0, 1)'
 * Smaller number has to be first :
 *   5, 3, true, true   => '[3, 5]'
 *
 */
function getIntervalString(a, b, isStartIncluded, isEndIncluded) {
  const [c, d] = [a, b].sort((i, j) => i - j);
  const startFlag = isStartIncluded ? '[' : '(';
  const endFlag = isEndIncluded ? ']' : ')';

  return `${startFlag}${c}, ${d}${endFlag}`;
}

/**
 * Reverse the specified string (put all chars in reverse order)
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 * 'The quick brown fox jumps over the lazy dog' => 'god yzal eht revo spmuj xof nworb kciuq ehT'
 * 'abracadabra' => 'arbadacarba'
 * 'rotator' => 'rotator'
 * 'noon' => 'noon'
 */
function reverseString(str) {
  return str.split('').reverse().join('');
}

/**
 * Reverse the specified integer number (put all digits in reverse order)
 *
 * @param {number} num
 * @return {number}
 *
 * @example:
 *   12345 => 54321
 *   1111  => 1111
 *   87354 => 45378
 *   34143 => 34143
 */
function reverseInteger(num) {
  return +`${num}`.split('').reverse().join('');
}

/**
 * Validates the CCN (credit card number) and return true if CCN is valid
 * and false otherwise.
 *
 * See algorithm here : https://en.wikipedia.org/wiki/Luhn_algorithm
 *
 * @param {number} cnn
 * @return {boolean}
 *
 * @example:
 *   79927398713      => true
 *   4012888888881881 => true
 *   5123456789012346 => true
 *   378282246310005  => true
 *   371449635398431  => true
 *
 *   4571234567890111 => false
 *   5436468789016589 => false
 *   4916123456789012 => false
 */

function isCreditCardNumber(ccn) {
  return (
    +`${ccn}`
      .split('')
      .reverse()
      .map((item, i) => {
        if (i % 2 === 0) {
          return item;
        }
        if (item * 2 > 9) {
          return item * 2 - 9;
        }
        return item * 2;
      })
      .reduce((acc, item) => +item + acc, 0)
      % 10
    === 0
  );
}

/**
 * Returns the digital root of integer:
 *   step1 : find sum of all digits
 *   step2 : if sum > 9 then goto step1 otherwise return the sum
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   12345 ( 1+2+3+4+5 = 15, 1+5 = 6) => 6
 *   23456 ( 2+3+4+5+6 = 20, 2+0 = 2) => 2
 *   10000 ( 1+0+0+0+0 = 1 ) => 1
 *   165536 (1+6+5+5+3+6 = 26,  2+6 = 8) => 8
 */
function getDigitalRoot(num) {
  if (num < 10) return num;
  const res = `${num}`.split('').reduce((acc, item) => +item + acc, 0);
  return getDigitalRoot(res);
}

/**
 * Returns true if the specified string has the balanced brackets and false otherwise.
 * Balanced means that is, whether it consists entirely of pairs of opening/closing brackets
 * (in that order), none of which mis-nest.
 * Brackets include [],(),{},<>
 *
 * @param {string} str
 * @return {boolean}
 *
 * @example:
 *   '' => true
 *   '[]'  => true
 *   '{}'  => true
 *   '()   => true
 *   '[[]' => false
 *   ']['  => false
 *   '[[][][[]]]' => true
 *   '[[][]][' => false
 *   '{)' = false
 *   '{[(<{[]}>)]}' = true
 */
function isBracketsBalanced(str) {
  const brackets = {
    '}': '{',
    ']': '[',
    '>': '<',
    ')': '(',
  };

  const newArr = str.split('');
  const newOpenArr = [];

  for (let i = 0; i < newArr.length; i += 1) {
    if (Object.values(brackets).includes(newArr[i])) {
      newOpenArr.push(newArr[i]);
    } else if (
      Object.keys(brackets).includes(newArr[i])
      && newOpenArr.length === 0
    ) return false;
    else if (
      Object.keys(brackets).includes(newArr[i])
      && newOpenArr[newOpenArr.length - 1] !== brackets[newArr[i]]
    ) return false;
    else if (
      Object.keys(brackets).includes(newArr[i])
      && newOpenArr[newOpenArr.length - 1] === brackets[newArr[i]]
    ) newOpenArr.pop(newOpenArr.length - 1);
  }
  if (newOpenArr.length !== 0) return false;
  return true;
}

/**
 * Returns the string with n-ary (binary, ternary, etc, where n <= 10)
 * representation of specified number.
 * See more about
 * https://en.wikipedia.org/wiki/Binary_number
 * https://en.wikipedia.org/wiki/Ternary_numeral_system
 * https://en.wikipedia.org/wiki/Radix
 *
 * @param {number} num
 * @param {number} n, radix of the result
 * @return {string}
 *
 * @example:
 *   1024, 2  => '10000000000'
 *   6561, 3  => '100000000'
 *    365, 2  => '101101101'
 *    365, 3  => '111112'
 *    365, 4  => '11231'
 *    365, 10 => '365'
 */
function toNaryString(num, n) {
  let divider = num;
  let result = Math.floor(divider / n);
  const remainder = [divider % n];

  while (result > 0) {
    divider = result;
    result = Math.floor(divider / n);
    remainder.push(divider % n);
  }
  return remainder.reverse().join('');
}

/**
 * Returns the common directory path for specified array of full filenames.
 *
 * @param {array} pathes
 * @return {string}
 *
 * @example:
 *   ['/web/images/image1.png', '/web/images/image2.png']  => '/web/images/'
 *   ['/web/assets/style.css', '/web/scripts/app.js',  'home/setting.conf'] => ''
 *   ['/web/assets/style.css', '/.bin/mocha',  '/read.me'] => '/'
 *   ['/web/favicon.ico', '/web-scripts/dump', '/verbalizer/logs'] => '/'
 */
function getCommonDirectoryPath(pathes) {
  const arr = pathes.map((item) => item.replaceAll(/\//g, '/ ').split(' '));
  let flag = true;

  const resultArr = [];
  for (let i = 0; i < arr[0].length; i += 1) {
    for (let j = 1; j < arr.length; j += 1) {
      if (arr[0][i] !== arr[j][i]) {
        flag = false;
        break;
      }
    }
    if (!flag) break;
    else resultArr.push(arr[0][i]);
  }

  return resultArr.join('');
}

/**
 * Returns the product of two specified matrixes.
 * See details: https://en.wikipedia.org/wiki/Matrix_multiplication
 *
 * @param {array} m1
 * @param {array} m2
 * @return {array}
 *
 * @example:
 *   [[ 1, 0, 0 ],       [[ 1, 2, 3 ],           [[ 1, 2, 3 ],
 *    [ 0, 1, 0 ],   X    [ 4, 5, 6 ],     =>     [ 4, 5, 6 ],
 *    [ 0, 0, 1 ]]        [ 7, 8, 9 ]]            [ 7, 8, 9 ]]
 *
 *                        [[ 4 ],
 *   [[ 1, 2, 3]]    X     [ 5 ],          =>     [[ 32 ]]
 *                         [ 6 ]]
 *
 */
function getMatrixProduct(m1, m2) {
  const res = [];
  const arr = [];
  const newArr = [];

  const l = m1.length;
  const m = m2.length;
  const n = m2[0].length;

  for (let i = 0; i < l; i += 1) {
    for (let j = 0; j < n; j += 1) {
      for (let r = 0; r < m; r += 1) {
        res.push(m1[i][r] * m2[r][j]);
      }

      arr.push(res.reduce((acc, item) => acc + item, 0));
      res.length = 0;
    }
    newArr.push([...arr]);

    arr.length = 0;
  }
  return newArr;
}

/**
 * Returns the evaluation of the specified tic-tac-toe position.
 * See the details: https://en.wikipedia.org/wiki/Tic-tac-toe
 *
 * Position is provides as 3x3 array with the following values: 'X','0', undefined
 * Function should return who is winner in the current position according to the game rules.
 * The result can be: 'X','0',undefined
 *
 * @param {array} position
 * @return {string}
 *
 * @example
 *
 *   [[ 'X',   ,'0' ],
 *    [    ,'X','0' ],       =>  'X'
 *    [    ,   ,'X' ]]
 *
 *   [[ '0','0','0' ],
 *    [    ,'X',    ],       =>  '0'
 *    [ 'X',   ,'X' ]]
 *
 *   [[ '0','X','0' ],
 *    [    ,'X',    ],       =>  undefined
 *    [ 'X','0','X' ]]
 *
 *   [[    ,   ,    ],
 *    [    ,   ,    ],       =>  undefined
 *    [    ,   ,    ]]
 *
 */
function evaluateTicTacToePosition(position) {
  const arr = [];
  position.forEach((item) => {
    if (item.length === 3) arr.push(...item);
    else if (item.length === 2) arr.push(...item, undefined);
    else if (item.length === 1) arr.push(...item, undefined, undefined);
  });
  if (arr.length !== 9) return undefined;
  const WIN_RULES = [
    [7, 8, 9], //  # - top horizontal line
    [4, 5, 6], //  # - middle  horizontal line
    [1, 2, 3], //  # - bottom horizontal line
    [1, 4, 7], //  # - left vertical line
    [2, 5, 8], //  # - middle vertical line
    [3, 6, 9], //  # - right vertical line
    [3, 5, 7], //  # - \ line
    [1, 5, 9], //   # - / line
  ];
  let result;
  for (let i = 0; i < WIN_RULES.length; i += 1) {
    if (
      arr[WIN_RULES[i][0] - 1] === arr[WIN_RULES[i][1] - 1]
      && arr[WIN_RULES[i][1] - 1] === arr[WIN_RULES[i][2] - 1]
      && arr[WIN_RULES[i][2] - 1] === 'X'
    ) {
      result = 'X';
    }
    if (
      arr[WIN_RULES[i][0] - 1] === arr[WIN_RULES[i][1] - 1]
      && arr[WIN_RULES[i][1] - 1] === arr[WIN_RULES[i][2] - 1]
      && arr[WIN_RULES[i][2] - 1] === '0'
    ) {
      result = '0';
    }
  }
  return result;
}

module.exports = {
  getFizzBuzz,
  getFactorial,
  getSumBetweenNumbers,
  isTriangle,
  doRectanglesOverlap,
  isInsideCircle,
  findFirstSingleChar,
  getIntervalString,
  reverseString,
  reverseInteger,
  isCreditCardNumber,
  getDigitalRoot,
  isBracketsBalanced,
  toNaryString,
  getCommonDirectoryPath,
  getMatrixProduct,
  evaluateTicTacToePosition,
};
