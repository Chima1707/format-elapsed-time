const formatElapsedTime = require('./index')

test('should return 00:00:00 for non number input', () => {
  expect(formatElapsedTime('a string')).toBe('00:00:00')
})

test('should return with expected format of output as 00:00.00 if elapsed time is less than 1 hour', () => {
  expect(formatElapsedTime(129100)).toBe('02:09.10')
})

test('should return with expected format of output as 00:00:00.00 if elapsed time is greater than 1 hour', () => {
  expect(formatElapsedTime(100000000)).toBe('27:46:40.00')
  expect(formatElapsedTime(14400000)).toBe('04:00:00.00')
})
