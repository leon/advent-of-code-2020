import { howManyPasswordsAreValid, isValidPassword, readInput } from './day-2'

describe('day 2', () => {
  it('should split data from input', async () => {
    const data = await readInput()
    expect(data).toMatchSnapshot()
  })

  it('should check if valid password', () => {
    const input = {
      letter: 'q',
      max: 6,
      min: 3,
      password: 'qvqqqpzqd',
      valid: false,
    }
    const result = isValidPassword(input)
    expect(result).toBe(true)
  })

  it('should check if invalid password', () => {
    const input = {
      letter: 'q',
      max: 3,
      min: 3,
      password: 'qvqqqpzqd',
      valid: false,
    }
    const result = isValidPassword(input)
    expect(result).toBe(false)
  })

  it('should return how many password where valid', async () => {
    const count = await howManyPasswordsAreValid()
    expect(count).toBe(458)
  })
})
