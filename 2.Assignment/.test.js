import { calcSum, strictEquality, getTypeOfValue, getFirstChar, getNthChar, extractFirstHalfOfString, removeLastNChractersOfString, checkIfNumberIsEven, getPercentageOfNumber, useAllTheOperators } from './basics';
import { checkIfPropertyExistsAndTruthy, getCountry, getWeirdKeyValue, getPropertyByString, checkIfPropertyExists, createObjectWithKeyValue, createObjectWithKeyAndValue } from './objects';

import './arrays';
import './basics.js';
import './objects.js';

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
});