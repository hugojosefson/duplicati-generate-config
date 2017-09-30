import { readFile, writeFile, generateWriteSpecs } from './api'

const templateFilename = process.argv[2]
const definitionsFilename = process.argv[3]

generateWriteSpecs(readFile(templateFilename), readFile(definitionsFilename))
  .flatMap(({filename, contents}) => writeFile(filename, contents))
  .errors(err => {
    console.error('Caught error:', err.message)
    process.exit(1)
  })
  .each(writtenFilename => console.log(`Written: ${writtenFilename}`))
  .done(() => console.log('Done.'))
