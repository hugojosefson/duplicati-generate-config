import { readFile } from 'fs'
import _, { wrapCallback } from 'highland'

const readFileAsStream = wrapCallback(readFile)

export default filename => filename === '-' ? _(process.stdin) : readFileAsStream(filename)
