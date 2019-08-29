const bootstrap = require('./index')

test('test init', () => {
  expect(bootstrap.init()).toBe('Gonzagajs!')
})
