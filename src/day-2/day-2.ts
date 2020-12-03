import { promisify } from 'util'

const fs = require('fs')
const path = require('path')
const readFile = promisify(fs.readFile)

interface PasswordData {
  letter: string
  min: number
  max: number
  password: string
  valid?: boolean
}

export const readInput = async () => {
  const file = await readFile(path.join(__dirname, './input.txt'), 'utf-8')

  const lines = file.split('\n')

  const lineRegex = /^(\d+)-(\d+) ([a-z]{1}): ([a-z]+)/

  const result: PasswordData[] = []
  for (const line of lines) {
    const d = line.match(lineRegex)
    result.push({
      letter: d[3],
      min: Number.parseInt(d[1]),
      max: Number.parseInt(d[2]),
      password: d[4],
    })
  }
  return result
}

export const isValidPassword = (data: PasswordData): boolean => {
  const charRegex = new RegExp(data.letter, 'g')
  const charCount = data.password.match(charRegex)?.length ?? 0
  return charCount >= data.min && charCount <= data.max
}

export const howManyPasswordsAreValid = async (): Promise<number> => {
  const input = await readInput()

  let valid = 0
  for (const data of input) {
    if (isValidPassword(data)) {
      valid++
    }
  }
  return valid
}
