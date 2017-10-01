const {readFile} = require('fs')
const {promisify} = require('util')
const {compose} = require('../extractable-modules/functional')

const FILE_DESCRIPTOR_STDIN = 0
const readFileAsPromise = promisify(readFile)

export default compose(
  file => readFileAsPromise(file, {encoding: 'utf8'}),
  filename => filename === '-' ? FILE_DESCRIPTOR_STDIN : filename
)
