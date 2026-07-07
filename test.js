const LRUCache = require('./index');
const assert = require('assert');

function testLRUCache() {
  console.log('Running tests...');

  // Test set and get
  const cache = new LRUCache(2);
  cache.set('a', 1);
  cache.set('b', 2);
  assert.strictEqual(cache.get('a'), 1);
  assert.strictEqual(cache.get('b'), 2);

  // Test update
  cache.set('a', 3);
  assert.strictEqual(cache.get('a'), 3);

  // Test eviction
  cache.set('c', 4); // Evicts 'b' because 'a' was recently accessed
  assert.strictEqual(cache.get('b'), undefined);
  assert.strictEqual(cache.get('a'), 3);
  assert.strictEqual(cache.get('c'), 4);

  // Test eviction of least recently used
  cache.get('a'); // 'a' is now most recent
  cache.set('d', 5); // Evicts 'c'
  assert.strictEqual(cache.get('c'), undefined);
  assert.strictEqual(cache.get('a'), 3);
  assert.strictEqual(cache.get('d'), 5);

  console.log('All tests passed!');
}

try {
  testLRUCache();
} catch (error) {
  console.error('Tests failed:');
  console.error(error);
  process.exit(1);
}
