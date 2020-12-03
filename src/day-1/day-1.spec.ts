import { findSumOf2020, findSumOf2020v2 } from './day-1'

describe('day1', () => {
  it('should find the two entries that together are 2020', () => {
    const [i1, i2] = findSumOf2020()
    console.log(`the numbers that together are 2020: ${i1} + ${i2}`)
    expect(i1 * i2).toBe(712075)
  })

  it('should find the three entries that together are 2020', () => {
    const [i1, i2, i3] = findSumOf2020v2()
    console.log(`the numbers that together are 2020: ${i1} + ${i2} + ${i3}`)
    expect(i1 * i2 * i3).toBe(145245270)
  })
})
