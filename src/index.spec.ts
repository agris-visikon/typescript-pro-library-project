import { isBoolean } from './index'

test('isBoolean should return true if the given value is boolean', () => {
  expect(isBoolean(new Boolean())).toEqual(true)
})

test('isBoolean should return true if the given a literal `true`', () => {
  expect(isBoolean(true)).toEqual(true)
})

test('isBoolean should return true if the given a literal `false`', () => {
  expect(isBoolean(false)).toEqual(true)
})

test('isBoolean should return false if the given a non-boolean value', () => {
  expect(isBoolean('')).toEqual(false)
  expect(isBoolean(undefined)).toEqual(false)
  expect(isBoolean(null)).toEqual(false)
  expect(isBoolean(123)).toEqual(false)
})
