export default ({readFile, writeFile, generateWriteSpecs}) => ({

  command: [`generate <template-file> <definitions-file> [output-dir]`, '*'],

  description: 'Generates duplicati config files.',

  builder: argv => argv
    .option('o', {
      alias: 'output-dir',
      default: '.',
      description: 'Where to write the generated config files.',
      type: 'string'
    })
    .option('n', {
      alias: 'dry-run',
      description: 'Don\'t actually write any files.',
      type: 'boolean'
    }),

  handler: ({
              templateFile,
              definitionsFile,
              outputDir,
              dryRun
            }) =>
    generateWriteSpecs({
      template: readFile(templateFile),
      definitions: readFile(definitionsFile),
      outputDir
    })
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
})
