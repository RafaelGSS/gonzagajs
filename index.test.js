const bootstrap = require('./index')

test('test SayHello', () => {
  expect(bootstrap.init()).toBe('Gonzagajs!')
})
