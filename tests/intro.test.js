import { describe, test, it, expect } from 'vitest';
import { calculateAverage, factorial, fizzBuzz, max } from '../src/intro';

describe('max', () => {
  it('should return the first argument if it is greater', () => {
    expect(max(2, 1)).toBe(2);
  });

  it('should return the second argument if it is greater', () => {
    expect(max(1, 2)).toBe(2);
  });

  it('should return the first argument if arguments are equal', () => {
    expect(max(1, 1)).toBe(1);
  });
});

describe('fizzBuzz', () => {
  it('should return FizzBuzz if divisible by 3 and 5', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
  });

  it('should return Fizz if divisible only by 3', () => {
    expect(fizzBuzz(9)).toBe('Fizz');
  });

  it('should return Buzz if divisible only by 5', () => {
    expect(fizzBuzz(10)).toBe('Buzz');
  });

  it("should return input as a string if it isn't a number or isn't divisible neither by 5 nor by 3", () => {
    expect(fizzBuzz(7)).toBe('7');
  });
});

describe('calculateAverage', () => {
  it('should return NaN if given an empty array', () => {
    expect(calculateAverage([])).toBe(NaN);
  });

  it('should calculate the average of an array with a single element', () => {
    expect(calculateAverage([1])).toBe(1);
  });

  it('should calculate the average of an array with three elements', () => {
    expect(calculateAverage([1, 2, 3])).toBe(2);
  });
});

describe('factorial', () => {
  it('should return 1 if the input is 0', () => {
    expect(factorial(0)).toBe(1);
  });

  it('should return 1 if the input is 1', () => {
    expect(factorial(1)).toBe(1);
  });

  it('should return n! if the input is n', () => {
    expect(factorial(10)).toBe(1 * 2 * 3 * 4 * 5 * 6 * 7 * 8 * 9 * 10);
  });

  it('should return undefined if given a negative number', () => {
    expect(factorial(-5)).toBeUndefined();
  });
});
