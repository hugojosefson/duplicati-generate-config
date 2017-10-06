const TEMPLATE = 'template-duplicati-config.json'
const DEFINITIONS = 'backup-definitions.txt'

export default ({ readFile, writeFile, generateWriteSpecs }) => ({

  command: [`generate <${TEMPLATE}> <${DEFINITIONS}>`, '*'],

  desc: 'Generates duplicati config files',

  handler: argv => {
    const templateFilename = argv[TEMPLATE]
    const definitionsFilename = argv[DEFINITIONS]

    generateWriteSpecs(readFile(templateFilename), readFile(definitionsFilename))
      .then(writeSpecs => writeSpecs
        .map(({filename, contents}) => writeFile(filename, contents))
        .map(writePromise => writePromise
          .then(writtenFilename => console.log(`Written: ${writtenFilename}`))
        )
      )
      .then(() => console.log('Done.'))
      .catch(err => {
        console.error('Caught error:', err.stack)
        process.exit(1)
      })
  }

})
