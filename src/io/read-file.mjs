import { readFile } from 'fs'
import { promisify } from 'util'
import ramda from 'ramda'

const { compose } = ramda
const FILE_DESCRIPTOR_STDIN = 0
const readFileAsPromise = promisify(readFile)

export default compose(
  file => readFileAsPromise(file, { encoding: 'utf8' }),
  filename => filename === '-' ? FILE_DESCRIPTOR_STDIN : filename
)
