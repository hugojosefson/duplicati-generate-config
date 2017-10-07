const TEMPLATE = 'template-file'
const DEFINITIONS = 'definitions-file'
const OUTPUT_DIR = 'output-dir'
const DRY_RUN = 'dry-run'

export default ({readFile, writeFile, generateWriteSpecs}) => ({

  command: [`generate <${TEMPLATE}> <${DEFINITIONS}> [${OUTPUT_DIR}]`, '*'],

  description: 'Generates duplicati config files.',

  builder: argv => argv
    .option('o', {
      alias: OUTPUT_DIR,
      default: '.',
      description: 'Where to write the generated config files.',
      type: 'string'
    })
    .option('n', {
      alias: DRY_RUN,
      description: 'Doesn\'t actually write any files.',
      type: 'boolean'
    }),

  handler: argv => {
    const templateFilename = argv[TEMPLATE]
    const definitionsFilename = argv[DEFINITIONS]
    const outputDir = argv[OUTPUT_DIR]
    const dryRun = argv[DRY_RUN]

    generateWriteSpecs(
      {
        template: readFile(templateFilename),
        definitions: readFile(definitionsFilename),
        outputDir
      }
    )
      .then(writeSpecs => writeSpecs
        .map(({filename, contents}) => dryRun ? Promise.resolve(filename) : writeFile(filename, contents))
        .map(writePromise => writePromise
          .then(writtenFilename => console.log(`${dryRun ? 'NOT ' : ''}Written: ${writtenFilename}`))
        )
      )
      .then(() => console.log('Done.'))
      .catch(err => {
        console.error('Caught error:', err.stack)
        process.exit(1)
      })
  }

})
