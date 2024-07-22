// import {* as functions} from './functions.js'

const {
    capitalize,
    reverse,
    isPalindrome,
    wordCount,
    double,
    filterEven,
    sum,
    average,
    fullName,
    isAdult,
    filterByAge,
    compose
} = require('./functions.js');

describe('String Transformation Functions', () => {
    test('capitalize should capitalize the first letter of a string', () => {
        expect(capitalize('hello')).toBe('Hello');
        expect(capitalize('')).toBe('');
        expect(capitalize(123)).toBe('Input not a string');
    });

    test('reverse should reverse a given string', () => {
        expect(reverse('hello')).toBe('olleh');
        expect(reverse('')).toBe('Empty string');
        expect(reverse(123)).toBe('Input not a string!');
    });

    test('isPalindrome should check if a given string is a palindrome', () => {
        expect(isPalindrome('racecar')).toBe(true);
        expect(isPalindrome('hello')).toBe(false);
        expect(isPalindrome('')).toBe('Empty string');
        expect(isPalindrome(123)).toBe('Input not a string!');
    });

    test('wordCount should count the words in a given string', () => {
        expect(wordCount('Hello world')).toBe(2);
        expect(wordCount('')).toBe(0);
        expect(wordCount(123)).toBe('Input not a string!');
    });
});

// Array Transformation Tests
describe('Array Transformation Functions', () => {
    test('double should double array elements', () => {
        expect(double([1, 2, 3])).toEqual([2, 4, 6]);
        expect(double([])).toBe('Empty Array');
        expect(double('not an array')).toBe('Input not an array!');
    });

    test('filterEven should filter even numbers in a given array', () => {
        expect(filterEven([1, 2, 3, 4])).toEqual([2, 4]);
        expect(filterEven([])).toBe('Empty Array');
        expect(filterEven('not an array')).toBe('Input not an array!');
    });

    test('sum should sum all the array elements', () => {
        expect(sum([1, 2, 3, 4])).toBe(10);
        expect(sum([1, 2, 'three'])).toBe('All elements must be numbers');
        expect(sum('not an array')).toBe('Input not an array!');
    });

    test('average should find the average of numbers in a given array', () => {
        expect(average([1, 2, 3, 4])).toBe(2.5);
        expect(average([1, 2, 'three'])).toBe('All elements must be numbers');
        expect(average('not an array')).toBe('Input not an array!');
    });
});

// Object Transformation Tests
describe('Object Transformation Functions', () => {
    test('fullName should return the full name of a given object', () => {
        expect(fullName({ firstName: 'John', lastName: 'Doe' })).toBe('John Doe');
        expect(fullName('not an object')).toBe('Input an object into function');
    });

    test('isAdult should check if an object passes as an adult', () => {
        expect(isAdult({ age: 18 })).toBe(true);
        expect(isAdult({ age: 17 })).toBe(false);
        expect(isAdult('not an object')).toBe('Input an object into function');
    });

    test('filterByAge should filter out objects by minimum age in array', () => {
        const people = [{ name: 'John', age: 18 }, { name: 'Jane', age: 17 }];
        expect(filterByAge(people, 18)).toEqual([{ name: 'John', age: 18 }]);
    });
});

// Function Composition Tests
describe('Function Composition', () => {
    test('compose should combine one or more functions', () => {
        const reverse = str => str.split('').reverse().join('');
        const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
        const composedFunctions = compose(reverse, capitalize, 'hello');
        expect(composedFunctions).toBe('olleH');
    });
});