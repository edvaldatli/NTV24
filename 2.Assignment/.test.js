const {
    calcSum,
    strictEquality,
    getTypeOfValue,
    getFirstChar,
    getNthChar,
    extractFirstHalfOfString,
    removeLastNChractersOfString,
    checkIfNumberIsEven,
    getPercentageOfNumber,
    useAllTheOperators
} = require('./basics.js');

const {
    checkIfPropertyExistsAndTruthy,
    getCountry,
    getWeirdKeyValue,
    getPropertyByString,
    checkIfPropertyExists,
    createObjectWithKeyValue,
    createObjectWithKeyAndValue,
    createObjectFromArrays,
    extractKeysFromObject,
    getNestedProperty,
    calcSumOfAllObjectValues,
    removePropertyB,
    mergeAndFixObjects,
    multipyAllValuesByB
} = require('./objects.js');

const {
    getNthCharacterInArray,
    removeFirstThreeElements,
    removeLastNElements,
    countNumberOfElements,
    countNumberOfNegativeValues,
    calcSumOfArrayOfNumbers,
    calcAvgOfArrayOfNumbers,
    getLongestStringFromArray,
    areAllEqual,
    mergeAllArrays
} = require('./arrays.js');

describe('-- BASICS --', () => {
    describe('calcSum', () => {
        it('should calculate the sum of a and b and return the sum', () => {
            expect(calcSum(1, 2)).toEqual(3);
            expect(calcSum(1, 10)).toEqual(11);
            expect(calcSum(99, 1)).toEqual(100);
        });
    });
    describe('strictEquality', () => {
        it('should check if two values are truthy or falsy', () => {
            expect(strictEquality(2, 3)).toEqual(false);
            expect(strictEquality(3, 3)).toEqual(true);
            expect(strictEquality(1, '1')).toEqual(false);
            expect(strictEquality('10', '10')).toEqual(true);
        });
    });
    describe('getTypeOfValue', () => {
        it('should return the type of provided value', () => {
            expect(getTypeOfValue(1)).toEqual('number');
            expect(getTypeOfValue(false)).toEqual('boolean');
            expect(getTypeOfValue({})).toEqual('object');
            expect(getTypeOfValue(null)).toEqual('object');
            expect(getTypeOfValue('string')).toEqual('string');
            expect(getTypeOfValue(['array'])).toEqual('object');
        });
    });
    describe('getFirstChar', () => {
        it('should get the first character of provided string', () => {
            expect(getFirstChar('abcd')).toEqual('a');
            expect(getFirstChar('zyxbwpl')).toEqual('z');
            expect(getFirstChar('gfedcba')).toEqual('g');
        });
    });
    describe('getNthChar', () => {
        it('should return the Nth character of provided string', () => {
            expect(getNthChar('abcd', 1)).toEqual('a');
            expect(getNthChar('zyxbwpl', 5)).toEqual('w');
            expect(getNthChar('gfedcba', 3)).toEqual('e');
        });
    });
    describe('extractFirstHalfOfString', () => {
        it('should return the first half of the string provided', () => {
            expect(extractFirstHalfOfString('abcdefgh')).toEqual('abcd');
            expect(extractFirstHalfOfString('1234')).toEqual('12');
            expect(extractFirstHalfOfString('gedcba')).toEqual('ged');
        });
    });
    describe('removeLastNCharactersOfString', () => {
        it('should remove the last N numbers of characters of the provided string', () => {
            expect(removeLastNChractersOfString('abcdefg')).toEqual('abcd');
            expect(removeLastNChractersOfString('1234')).toEqual('1');
            expect(removeLastNChractersOfString('fgedcba')).toEqual('fged');
        });
    });
    describe('checkIfNumberIsEven', () => {
        it('should check if the provided number is even and return', () => {
            expect(checkIfNumberIsEven('10')).toEqual(true);
            expect(checkIfNumberIsEven('-4')).toEqual(true);
            expect(checkIfNumberIsEven(5)).toEqual(false);
            expect(checkIfNumberIsEven(-111)).toEqual(false);
        });
    });
    describe('getPercentageOfNumber', () => {
        it('should return the percentage of number b of a', () => {
            expect(getPercentageOfNumber(100, 50)).toEqual(50);
            expect(getPercentageOfNumber(10, 1)).toEqual(0.1);
            expect(getPercentageOfNumber(500, 25)).toEqual(125);
        });
    });
    describe('useAllTheOperators', () => {
        it('should use all arguments and calculate in a specific way and output the outcome', () => {
            expect(useAllTheOperators(6, 5, 4, 3, 2, 1)).toEqual(10.5);
            expect(useAllTheOperators(6, 2, 1, 4, 2, 3)).toEqual(2744);
            expect(useAllTheOperators(2, 3, 6, 4, 2, 3)).toEqual(-8);
        });
    });
});

describe('-- OBJECTS --', () => {
    describe('checkIfPropertyExistsAndTruthy', () => {
        it('should check if property exists and is truthy', () => {
            expect(checkIfPropertyExistsAndTruthy({ a: 1, b: 2, c: 3 }, 'b')).toEqual(true);
            expect(checkIfPropertyExistsAndTruthy({ x: 'a', y: null, z: 'c' }, 'y')).toEqual(false);
            expect(checkIfPropertyExistsAndTruthy({ x: 'a', b: 'b', z: undefined }, 'z')).toEqual(false);
        });
    });
    describe('getCountry', () => {
        it('should get the property value of country and return it', () => {
            expect(getCountry({ continent: 'Asia', country: 'Japan' })).toEqual('Japan');
            expect(getCountry({ country: 'Sweden', continent: 'Europe' })).toEqual('Sweden')
        });
    });
    describe('getWeirdKeyValues', () => {
        it('should get a specific property value of [prop-2] and return it', () => {
            expect(getWeirdKeyValue({ one: 1, 'prop-2': 2 })).toEqual(2);
            expect(getWeirdKeyValue({ 'prop-2': 'two', prop: 'test' })).toEqual('two');
        });
    });
    describe('getPropertyByString', () => {
        it('should return the property value in the object with the string provided and return it', () => {
            expect(getPropertyByString({ continent: 'Asia', country: 'Japan' }, 'continent')).toEqual('Asia');
            expect(getPropertyByString({ country: 'Sweden', continent: 'Europe' }, 'country')).toEqual('Sweden');
        });
    });
    describe('checkIfPropertyExists', () => {
        it('should check if provided property exists in the provided object', () => {
            expect(checkIfPropertyExists({ a: 1, b: 2, c: 3 }, 'b')).toEqual(true);
            expect(checkIfPropertyExists({ x: 'a', y: 'b', z: 'c' }, 'a')).toEqual(false);
            expect(checkIfPropertyExists({ x: 'a', y: 'b', z: undefined }, 'z')).toEqual(true);
        });
    });
    describe('createObjectWithKeyValue', () => {
        it('should create an object with the provided string', () => {
            expect(createObjectWithKeyValue('a')).toEqual({ key: 'a' });
            expect(createObjectWithKeyValue('z')).toEqual({ key: 'z' });
            expect(createObjectWithKeyValue('b')).toEqual({ key: 'b' });
        });
    });
    describe('createObjectWithKeyAndValue', () => {
        it('should create an object with both key and a value', () => {
            expect(createObjectWithKeyAndValue('a', 'b')).toEqual({ a: 'b' });
            expect(createObjectWithKeyAndValue('z', 'x')).toEqual({ z: 'x' });
            expect(createObjectWithKeyAndValue('b', 'w')).toEqual({ b: 'w' });
        });
    });
    describe('createObjectFromArrays', () => {
        it('should take two arrays and create a single object with keys and values from the array', () => {
            expect(createObjectFromArrays(['a', 'b', 'c'], [1, 2, 3])).toEqual({ a: 1, b: 2, c: 3 });
            expect(createObjectFromArrays(['w', 'x', 'y', 'z'], [10, 9, 5, 2])).toEqual({ w: 10, x: 9, y: 5, z: 2 });
            expect(createObjectFromArrays([1, 'b'], ['a', 2])).toEqual({ 1: 'a', b: 2 });
        });
    });
    describe('extractKeysFromObject', () => {
        it('should take an object and return return all keys of said object', () => {
            expect(extractKeysFromObject({ a: 1, b: 2, c: 3 })).toEqual(['a', 'b', 'c']);
            expect(extractKeysFromObject({ j: 9, i: 2, x: 3, z: 4 })).toEqual(['j', 'i', 'x', 'z']);
            expect(extractKeysFromObject({ w: 15, x: 22, y: 13 })).toEqual(['w', 'x', 'y']);
        });
    });
    describe('getNestedProperty', () => {
        it('should return value of property b which is inside property a', () => {
            expect(getNestedProperty({ a: 1 })).toEqual(undefined);
            expect(getNestedProperty({ a: { b: { c: 3 } } })).toEqual({ c: 3 });
            expect(getNestedProperty({ b: { a: 1 } })).toEqual(undefined);
            expect(getNestedProperty({ a: { b: 2 } })).toEqual(2);
        });
    });
    describe('calcSumOfAllObjectValues', () => {
        it('should return sum of all object values', () => {
            expect(calcSumOfAllObjectValues({ a: 1, b: 2, c: 3 })).toEqual(6);
            expect(calcSumOfAllObjectValues({ j: 9, i: 2, x: 3, z: 4 })).toEqual(18);
            expect(calcSumOfAllObjectValues({ w: 15, x: 22, y: 13 })).toEqual(50);
        });
    });
    describe('removePropertyB', () => {
        it('should remove ', () => {
            expect(removePropertyB({a: 1, b:7, c:3})).toEqual({a: 1, c: 3});
            expect(removePropertyB({b:0, a:7, d:8})).toEqual({a: 7, d: 8});
            expect(removePropertyB({e: 6, f:4, b:5, a:3})).toEqual({e: 6, f: 4, a: 3});
        });
    });
    describe('mergeAndFixObjects', () => {
        it('should merge two objects and replace the key b with the key name d', () => {
            expect(mergeAndFixObjects({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 })).toEqual({ a: 1, b: 2, c: 3, e: 5, d: 4});
            expect(mergeAndFixObjects({ a: 5, b: 4 }, { c: 3, b: 1, e: 2 })).toEqual({ a: 5, b: 4, c: 3, e: 2, d: 1});
        });
    });
    describe('multiplyAllValuesByB', () => {
        it('should multiply all values in the object by the integer that is passed', () => {
            expect(multipyAllValuesByB({a:1, b:2, c:3}, 3)).toEqual({a:3, b:6, c:9});
            expect(multipyAllValuesByB({j:9, i:2, x:3, z:4}, 10)).toEqual({j:90, i:20, x:30, z:40});
            expect(multipyAllValuesByB({w:15, x:22, y:13}, 6)).toEqual({w:90, x:132, y:78});
        });
    });
});

describe('-- ARRAYS --', () => {
    describe('getNthCharacterInArray', () => {
        it('should get the value of the index provided', () => {
            expect(getNthCharacterInArray([1,2,3,4,5], 3)).toEqual(3);
            expect(getNthCharacterInArray([10,9,8,7,6], 5)).toEqual(6);
            expect(getNthCharacterInArray([7,2,1,6,3], 1)).toEqual(7);
        });
    });
    describe('removeFirstThreeElements', () => {
        it('should first 3 elements from array provided', () => {
            expect(removeFirstThreeElements([1, 2, 3, 4])).toEqual([4]);
            expect(removeFirstThreeElements([5,4,3,2,1,0])).toEqual([2,1,0]);
            expect(removeFirstThreeElements([99, 1, 1])).toEqual([]);
        });
    });
    describe('removeLastNElements', () => {
        it('should remove last N elements from the array provided', () => {
            expect(removeLastNElements([1, 2, 3, 4, 5], 2)).toEqual([4, 5]);
            expect(removeLastNElements([1, 2, 3], 6)).toEqual([1, 2, 3]);
            expect(removeLastNElements([1, 2, 3, 4, 5, 6, 7, 8], 3)).toEqual([6, 7, 8]);
        });
    });
    describe('countNumberOfElements', () => {
        it('should return the number of elements in the array provided', () => {
            expect(countNumberOfElements([1, 2, 2, 4])).toEqual(4);
            expect(countNumberOfElements([9,9,9])).toEqual(3);
            expect(countNumberOfElements([4,3,2,1,0])).toEqual(5);
        });
    });
    describe('countNumberOfNegativeValues', () => {
        it('should count all negative values in an array', () => {
            expect(countNumberOfNegativeValues([1, -2, 2, -4])).toEqual(2);
            expect(countNumberOfNegativeValues([0, 9, 1])).toEqual(0);
            expect(countNumberOfNegativeValues([4, -3, 2, 1, 0])).toEqual(1);
        });
    });
    describe('calcSumOfArrayNumbers', () => {
        it('should return a sum of all numbers in the array', () => {
            expect(calcSumOfArrayOfNumbers([10,100,40])).toEqual(150);
            expect(calcSumOfArrayOfNumbers([10,100,1000,1])).toEqual(1111);
            expect(calcSumOfArrayOfNumbers([-50,0,50,200])).toEqual(200);
        });
    });
    describe('calcAvgOfArrayNumbers', () => {
        it('should return the average of all array numbers', () => {
            expect(calcAvgOfArrayOfNumbers([10,100,40])).toEqual(50);
            expect(calcAvgOfArrayOfNumbers([10,100,1000])).toEqual(370);
            expect(calcAvgOfArrayOfNumbers([-50,0,50,200])).toEqual(50);
        });
    });
    describe('GetLongestStringFromArray', () => {
        it('should return the longest string of the array', () => {
            expect(getLongestStringFromArray(['help', 'me'])).toEqual('help');
            expect(getLongestStringFromArray(['I', 'need', 'candy'])).toEqual('candy');
        });
    });
    describe('areAllEqual', () => {
        it('should return true if all elements of the array is equal', () => {
            expect(areAllEqual([true, true,true, true])).toEqual(true);
            expect(areAllEqual(['test', 'test', 'test'])).toEqual(true);
            expect(areAllEqual([1, 1, 1, 2])).toEqual(false);
            expect(areAllEqual(['10', 10, 10, 10])).toEqual(false);
        });
    });
    describe('mergeAllArrays', () => {
        it('should merge all arrays into a single array and return it', () => {
            expect(mergeAllArrays([1, 2, 3], [4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
            expect(mergeAllArrays(['a', 'b', 'c'], [4, 5, 6])).toEqual(['a', 'b', 'c', 4, 5, 6]);
            expect(mergeAllArrays([true, true], [1, 2], ['a', 'b'])).toEqual([true, true, 1, 2, 'a', 'b']);
        });
    });
});