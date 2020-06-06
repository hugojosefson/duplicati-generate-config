import { writeFile } from 'fs'
import { promisify } from 'util'

const writeFileAsPromise = promisify(writeFile)

export default (filename, contents) => writeFileAsPromise(filename, contents).then(() => filename)
