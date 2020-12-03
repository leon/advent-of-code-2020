import { readLines } from '../shared/readLines'

export type TreeRow = boolean[]
export type TreeMap = TreeRow[]

export const readMap = () => {
  const lines = readLines(__dirname, 'input.txt')

  const map: TreeMap = []
  for (const line of lines) {
    const row = []
    for (const d of line) {
      row.push(d === '#')
    }
    if (line) {
      map.push(row)
    }
  }
  return map
}

export const checkIfTree = (map: TreeMap, row: number, column: number): boolean => {
  const rowLength = map[0].length
  const realColumn = column % rowLength
  console.log('read', map[row])
  return map[row]?.[realColumn] ?? false
}

export const checkHowManyTrees = (map: TreeMap, moveX: number = 1, moveY: number = 3): number => {
  const rows = map.length
  let row = 0
  let column = 0
  let count = 0
  while (row <= rows - 1) {
    const hasTree = checkIfTree(map, row, column)
    if (hasTree) {
      count++
    }
    row += moveX
    column += moveY
  }

  return count
}
