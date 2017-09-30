import { readFile, writeFile, templateToWriteSpecs } from './api'

const templateFilename = process.argv[2]
const definitionsFilename = process.argv[3]

templateToWriteSpecs(readFile(templateFilename), readFile(definitionsFilename))
  .flatMap(writeFile)
  .errors(err => {
    console.error('Caught error:', err.message)
    process.exit(1)
  })
  .each(writtenFilename => console.log(`Written: ${writtenFilename}`))
  .done(() => console.log('Done.'))
