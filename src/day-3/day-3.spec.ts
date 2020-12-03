import { checkHowManyTrees, checkIfTree, readMap } from './day-3'

describe('day 3', () => {
  it('should read map from input', () => {
    const data = readMap()
    expect(data).toMatchSnapshot()
  })

  it('should check if tree in map', () => {
    const map = [
      [false, false, true],
      [false, true, false],
    ]
    expect(checkIfTree(map, 0, 2)).toBe(true)
    expect(checkIfTree(map, 0, 3)).toBe(false)
    // check that width of map is supported by repeating
    expect(checkIfTree(map, 0, 5)).toBe(true)
    expect(checkIfTree(map, 0, 8)).toBe(true)
  })

  it('should check how many trees on way down', () => {
    const map = readMap()
    const count = checkHowManyTrees(map, 1, 3)
    expect(count).toBe(270)
  })
})
