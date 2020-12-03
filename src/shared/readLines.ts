import { readFileSync } from 'fs'
import path from 'path'

export const readLines = (pwd: string, filename: string): string[] => {
  const file = readFileSync(path.join(pwd, filename), 'utf-8')
  return file.split('\n')
}
