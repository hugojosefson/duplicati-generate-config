import { writeFile } from 'fs'
const { promisify } = require('util')

const writeFileAsPromise = promisify(writeFile)

export default (filename, contents) => writeFileAsPromise(filename, contents).then(() => filename)
