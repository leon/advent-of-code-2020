import { howManyPasswordsAreValid, isValidPassword, isValidPasswordPart2, readInput } from './day-2'

describe('day 2', () => {
  it('should split data from input', async () => {
    const data = await readInput()
    expect(data).toMatchSnapshot()
  })

  it('should check if valid password', () => {
    const input = {
      letter: 'q',
      min: 3,
      max: 6,
      password: 'qvqqqpzqd',
    }
    const result = isValidPassword(input)
    expect(result).toBe(true)
  })

  it('should check if invalid password', () => {
    const input = {
      letter: 'q',
      min: 3,
      max: 3,
      password: 'qvqqqpzqd',
    }
    const result = isValidPassword(input)
    expect(result).toBe(false)
  })

  it('should check if invalid password: part 2', () => {
    const input = {
      letter: 'a',
      min: 1,
      max: 3,
      password: 'abcde',
    }
    const result = isValidPasswordPart2(input)
    expect(result).toBe(true)
  })

  it('should return how many password where valid', async () => {
    const count = await howManyPasswordsAreValid(isValidPassword)
    expect(count).toBe(458)
  })

  it('should return how many password where valid: part 2', async () => {
    const count = await howManyPasswordsAreValid(isValidPasswordPart2)
    expect(count).toBe(342)
  })
})
