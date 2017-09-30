import { basename } from 'path'
import { readFile, writeFile, generateWriteSpecs } from './api'

if (process.argv.length !== 4) {
  console.error(`Usage: ${basename(process.argv[1])} <template-duplicati-config.json> <definitions.txt>`)
  process.exit(1)
}

const templateFilename = process.argv[2]
const definitionsFilename = process.argv[3]

generateWriteSpecs(readFile(templateFilename), readFile(definitionsFilename))
  .flatMap(({filename, contents}) => writeFile(filename, contents))
  .errors(err => {
    console.error('Caught error:', err.stack)
    process.exit(1)
  })
  .each(writtenFilename => console.log(`Written: ${writtenFilename}`))
  .done(() => console.log('Done.'))
