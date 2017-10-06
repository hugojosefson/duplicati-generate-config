const TEMPLATE = 'template.json'
const DEFINITIONS = 'definitions.txt'
const OUTPUT_DIR = 'output-dir'

export default ({readFile, writeFile, generateWriteSpecs}) => ({

  command: [`generate <${TEMPLATE}> <${DEFINITIONS}> [${OUTPUT_DIR}]`, '*'],

  desc: 'Generates duplicati config files',

  builder: argv => argv
    .option('o', {
      alias: 'output-dir',
      default: '.',
      description: 'Where to write the generated config files.',
      type: 'string'
    }),

  handler: argv => {
    const templateFilename = argv[TEMPLATE]
    const definitionsFilename = argv[DEFINITIONS]
    const outputDir = argv[OUTPUT_DIR]

    generateWriteSpecs(readFile(templateFilename), readFile(definitionsFilename), outputDir)
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
