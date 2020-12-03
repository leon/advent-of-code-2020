import { findSumOf2020 } from './day-1'

describe('day1', () => {
  it('should find the two entries that together are 2020', () => {
    const [i1, i2] = findSumOf2020()
    console.log(`the numbers that together are 2020: ${i1} + ${i2}`)
    expect(i1 * i2).toBe(712075)
  })
})
