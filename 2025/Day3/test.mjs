import test from 'node:test';
import assert from 'node:assert';
import { f1, f2, toBanks, findLargestJoltage, findLargestJoltagePart2 } from './main.js';

const testInput = "987654321111111\n811111111111119\n234234234234278\n818181911112111";
const testBanks = ["987654321111111", "811111111111119", "234234234234278", "818181911112111"];

test("f1", () => {
  assert.strictEqual(f1(testInput), 357);
});

test("f2", () => {
  assert.strictEqual(f2(testInput), 3121910778619);
});

test("findLargestJoltage", () => {
  assert.strictEqual(findLargestJoltage('987654321111111'), 98);
  assert.strictEqual(findLargestJoltage('811111111111119'), 89);
  assert.strictEqual(findLargestJoltage('234234234234278'), 78);
  assert.strictEqual(findLargestJoltage('818181911112111'), 92);
});

test("findLargestJoltagePart2", () => {
  assert.strictEqual(findLargestJoltagePart2('987654321111111'), 987654321111);
  assert.strictEqual(findLargestJoltagePart2('811111111111119'), 811111111119);
  assert.strictEqual(findLargestJoltagePart2('234234234234278'), 434234234278);
  assert.strictEqual(findLargestJoltagePart2('818181911112111'), 888911112111);
});

test("toBanks", () => {
    assert.deepStrictEqual(toBanks(testInput), testBanks);
});