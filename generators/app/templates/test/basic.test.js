import * as assert from 'assert';
import { expect } from 'chai';

suite('Basic tests', () => {
  test('Green test', () => {
    expect(true).to.be.eq(true);
    assert.equal('1', true);
    assert.notDeepStrictEqual(1, true);
    assert.deepStrictEqual(true, true);
  });
});
