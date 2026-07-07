# Changelog

All notable changes to this project will be documented in this file.

## [1.0.0] - 2024-05-15

### Added
- Initial release of the `jules-probe-1a` LRU cache library.
- Basic LRU cache implementation using a `Map` for O(1) access.
- `LRUCache` class with `capacity` support.
- `get(key)` method to retrieve values and update their "recently used" status.
- `set(key, value)` method to add or update values with automatic eviction of least recently used items when capacity is reached.
