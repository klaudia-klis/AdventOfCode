import test from 'node:test';
import assert from 'node:assert';
import { f1, toBanks, findLargestJoltage } from './main.js';

const testInput = "987654321111111\n811111111111119\n234234234234278\n818181911112111";
const testBanks = ["987654321111111", "811111111111119", "234234234234278", "818181911112111"];

test("f1", () => {
  assert.strictEqual(f1(testInput), 357);
});

test("findLargestJoltage", () => {
  assert.strictEqual(findLargestJoltage(987654321111111), 98);
  assert.strictEqual(findLargestJoltage(811111111111119), 89);
  assert.strictEqual(findLargestJoltage(234234234234278), 78);
  assert.strictEqual(findLargestJoltage(818181911112111), 92);
});

test("toBanks", () => {
    assert.deepStrictEqual(toBanks(testInput), testBanks);
});