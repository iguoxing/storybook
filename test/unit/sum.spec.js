const sum = require('../../src/sum');

test('加法 1 + 2 等于 3', () => {
    expect(sum(1, 2)).toBe(3);
});