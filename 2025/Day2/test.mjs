import test from 'node:test';
import assert from 'node:assert';
import { f1,isEven, toRanges, isInvalidId, countInvalidId } from './main.js';

const testInput = "11-22,95-115,998-1012,1188511880-1188511890,222220-222224,1698522-1698528,446443-446449,38593856-38593862,565653-565659,824824821-824824827,2121212118-2121212124";

const testRanges = ["11-22","95-115","998-1012","1188511880-1188511890","222220-222224","1698522-1698528","446443-446449","38593856-38593862","565653-565659","824824821-824824827","2121212118-2121212124"];

test("isEven", () => {
    assert.strictEqual(isEven(1), false);
    assert.strictEqual(isEven(22), true);
    assert.strictEqual(isEven(333), false);
});

test("isInvalidId", () => {
    assert.strictEqual(isInvalidId(2222), 2222);
    assert.strictEqual(isInvalidId(2223), false);
    assert.strictEqual(isInvalidId(222), false);
})

test("countInvalidId", () => {
    assert.strictEqual(countInvalidId("11-22"), 2);
    assert.strictEqual(countInvalidId("95-115"), 1);
    assert.strictEqual(countInvalidId("998-1012"), 1);
    assert.strictEqual(countInvalidId("1188511880-1188511890"), 1);
    assert.strictEqual(countInvalidId("222220-222224"), 1);
    assert.strictEqual(countInvalidId("1698522-1698528"), 0);
    assert.strictEqual(countInvalidId("446443-446449"), 1);
    assert.strictEqual(countInvalidId("38593856-38593862"), 1);
})

test("f1", () => {
  assert.strictEqual(f1(testInput), 1227775554);
});

test("toRanges", () => {
    assert.deepStrictEqual(toRanges(testInput), testRanges);
});