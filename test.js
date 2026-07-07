const LRUCache = require('./index');
const assert = require('assert');

console.log('Running LRU Cache tests...');

// Test 1: Basic set and get
const cache = new LRUCache(2);
cache.set('a', 1);
assert.strictEqual(cache.get('a'), 1, 'Key "a" should return 1');
console.log('Test 1 passed');

// Test 2: Capacity limit
cache.set('b', 2);
cache.set('c', 3); // "a" should be evicted
assert.strictEqual(cache.get('a'), undefined, 'Key "a" should have been evicted');
assert.strictEqual(cache.get('b'), 2, 'Key "b" should still be in cache');
assert.strictEqual(cache.get('c'), 3, 'Key "c" should still be in cache');
console.log('Test 2 passed');

// Test 3: LRU behavior
cache.get('b'); // "b" is now most recent, "c" is least recent
cache.set('d', 4); // "c" should be evicted
assert.strictEqual(cache.get('c'), undefined, 'Key "c" should have been evicted');
assert.strictEqual(cache.get('b'), 2, 'Key "b" should still be in cache');
assert.strictEqual(cache.get('d'), 4, 'Key "d" should still be in cache');
console.log('Test 3 passed');

// Test 4: Overwriting a key
cache.set('b', 20);
assert.strictEqual(cache.get('b'), 20, 'Key "b" should return updated value 20');
console.log('Test 4 passed');

console.log('All tests passed!');
