import { writeFile } from 'fs'
import { wrapCallback } from 'highland'

const writeFileAsStream = wrapCallback(writeFile)

export default (filename, contents) => writeFileAsStream(filename, contents).map(() => filename)
