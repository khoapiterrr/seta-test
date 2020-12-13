import pkg from 'chai';
import { sumOfTop2, lengthAppearMost } from '../Algorithm.js';
const { expect } = pkg;

describe('Find sum of integers on top 2 in array', () => {
  it('initialize [1, 4, 2, 3, 5] => 9', () => {
    const result = sumOfTop2([1, 4, 2, 3, 5]);
    expect(result).to.equal(9);
  })

  it('initialize [5, 4, 7, 2, 4, 7] => 14', () => {
    const result = sumOfTop2([5, 4, 7, 2, 4, 7]);
    expect(result).to.equal(14);
  })

  it('initialize [1,4] => 9', () => {
    const result = sumOfTop2([1, 4]);
    expect(result).to.equal(5);
  })

  it('initialize [9] => 9', () => {
    const result = sumOfTop2([9]);
    expect(result).to.equal(9);
  })
})


describe('Find the string length that appear most in array', () => {
  it(`initialize ['a', 'ab', 'abc', 'cd', 'def', 'gh'] => ['ab', 'cd', 'gh']`, () => {
    const result = lengthAppearMost(['a', 'ab', 'abc', 'cd', 'def', 'gh']);
    expect(result).to.deep.equal(['ab', 'cd', 'gh']);
  })

  it(`initialize ['a', 'ab', 'c', 'cd', 'def', 'gh', 'k','q'] => ['ab', 'cd', 'gh']`, () => {
    const result = lengthAppearMost(['a', 'ab', 'c', 'cd', 'def', 'gh', 'k', 'q']);
    expect(result).to.deep.equal(['a', 'c', 'k', 'q']);
  })
  it(`initialize ['a', 'b', 'cd', 'ef','h'] => ['abc', 'cdf', 'def']`, () => {
    const result = lengthAppearMost(['abc', 'b', 'cdf', 'def', 'h']);
    expect(result).to.deep.equal(['abc', 'cdf', 'def']);
  })
})