/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    let ret: number[] = [...numbers];
    numbers.length > 0 ? (ret = [[...numbers][0], [...numbers][numbers.length - 1]]) : ret = [];
    return ret;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    let tripled: number[] = [...numbers];
    return tripled.map((number: number):number => number*3);
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    let integers: number[] = numbers.map((string: string): number => isNaN(+string) ? 0 : +string)
    return integers;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    let no_dollars: string[] = amounts.map((str: string): string => str[0] === "$" ? str.slice(1) : str)
    let integers: number[] = no_dollars.map((string: string): number => isNaN(+string) ? 0 : +string)
    return integers;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    let copy = [...messages];
    let statements: string[] = copy.filter((message: string): boolean => !(message.endsWith("?")));
    let shouts: string[] = statements.map((message: string): string => message.endsWith("!") ? message.toUpperCase() : message);
    return shouts;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    let letter_counts = words.map((word: string): number => word.length);
    let short_counts_only = letter_counts.filter((num: number): boolean => num < 4);
    return short_counts_only.length;
}
/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const init_length: number = colors.length
    let rgb_only: string[] = colors.filter((color: string): boolean => color === "red" || color === "blue" || color === "green");
    return init_length === rgb_only.length;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    const sum = addends.reduce((total: number, num: number): number => total += num, 0);
    let math_string = `${sum}=`;
    addends.length === 0 ? math_string += "0" : math_string += addends.join("+")
    return math_string;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const neg_index: number  | undefined = values.findIndex((value: number): boolean => value < 0);
    const total: number = values.reduce((total: number, num: number): number => total+=num, 0);
    let ret = [...values];
    neg_index !== -1 ? ret.splice(neg_index + 1,0,total) : ret = [...ret,total]
    return ret;
}
